import { useRef, useState, useEffect } from 'react';
import { education } from '../data/personalData';
import { audioSynth } from '../utils/audioSynth';

function BugDodgerGame() {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('start'); // start, playing, gameover
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try {
      return parseInt(localStorage.getItem('aadi-dodger-highscore') || '0', 10);
    } catch {
      return 0;
    }
  });

  // Game variables references to avoid re-running useEffect on state changes
  const stateRef = useRef({
    gameState: 'start',
    score: 0,
    playerY: 150,
    velocity: 0,
    pipes: [],
    frameCount: 0,
    highScore: 0,
  });

  // Sync refs with state
  useEffect(() => {
    stateRef.current.gameState = gameState;
    stateRef.current.score = score;
    stateRef.current.highScore = highScore;
  }, [gameState, score, highScore]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const gravity = 0.22; // Gentler gravity for floatier, easier control
    const jumpForce = -4.8; // Calibrated jump force
    const playerX = 60;
    const playerSize = 24;
    const pipeWidth = 50;
    const pipeGap = 150; // Increased pipe gap for better clearance

    const getGameConfig = (score) => {
      let speed = 2.0; // Starts slow (easy mode)
      if (score >= 40) speed = 4.5;
      else if (score >= 30) speed = 3.8;
      else if (score >= 25) speed = 3.4;
      else if (score >= 20) speed = 3.0;
      else if (score >= 15) speed = 2.6;
      else if (score >= 10) speed = 2.2;
      
      const spawnInterval = Math.round(200 / speed);
      return { speed, spawnInterval };
    };

    const resetGame = () => {
      const state = stateRef.current;
      state.playerY = canvas.height / 2;
      state.velocity = 0;
      
      // Randomize starting pipe position and height on every restart
      state.pipes = [
        {
          x: canvas.width + Math.random() * 100 + 80,
          topHeight: Math.random() * (canvas.height - pipeGap - 60) + 30,
          passed: false,
        }
      ];
      state.frameCount = 0;
      setScore(0);
    };

    const jump = () => {
      const state = stateRef.current;
      if (state.gameState === 'playing') {
        state.velocity = jumpForce;
        audioSynth.playTone(600, 'triangle', 0.08, 0.06);
      }
    };

    const handleInput = (e) => {
      const state = stateRef.current;
      if (e.type === 'keydown' && e.key !== ' ' && e.key !== 'ArrowUp') return;
      
      // Stop space bar scrolling the page
      if (e.type === 'keydown') {
        e.preventDefault();
      }

      if (state.gameState === 'start') {
        resetGame();
        setGameState('playing');
        audioSynth.playTone(400, 'sine', 0.1, 0.1);
      } else if (state.gameState === 'playing') {
        jump();
      } else if (state.gameState === 'gameover') {
        resetGame();
        setGameState('playing');
        audioSynth.playTone(400, 'sine', 0.1, 0.1);
      }
    };

    window.addEventListener('keydown', handleInput);
    canvas.addEventListener('mousedown', handleInput);
    canvas.addEventListener('touchstart', handleInput, { passive: false });

    // Loop
    const update = () => {
      const state = stateRef.current;

      // Clear Canvas
      ctx.fillStyle = '#1e1e1e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Retro Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j < canvas.height; j += 20) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      if (state.gameState === 'start') {
        // Draw Start Screen
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('👾 BUG_DODGER.EXE', canvas.width / 2, canvas.height / 2 - 40);
        
        ctx.fillStyle = '#fcd34d';
        ctx.font = '12px monospace';
        ctx.fillText('TAP SCREEN OR PRESS SPACE TO START', canvas.width / 2, canvas.height / 2 + 10);
        
        ctx.fillStyle = '#4ade80';
        ctx.fillText('HELP AADI DODGE CODE BUGS!', canvas.width / 2, canvas.height / 2 + 40);

        // Draw static player preview
        ctx.fillStyle = '#fcd34d';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.fillRect(canvas.width / 2 - playerSize / 2, canvas.height / 2 - 100, playerSize, playerSize);
        ctx.strokeRect(canvas.width / 2 - playerSize / 2, canvas.height / 2 - 100, playerSize, playerSize);
        
        // draw face
        ctx.fillStyle = '#000000';
        ctx.fillRect(canvas.width / 2 - 6, canvas.height / 2 - 94, 3, 3);
        ctx.fillRect(canvas.width / 2 + 3, canvas.height / 2 - 94, 3, 3);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2 - 88, 4, 0, Math.PI);
        ctx.stroke();

      } else if (state.gameState === 'playing' || state.gameState === 'gameover') {
        if (state.gameState === 'playing') {
          // Update physics
          state.velocity += gravity;
          state.playerY += state.velocity;

          // Constraints
          if (state.playerY + playerSize / 2 > canvas.height) {
            state.playerY = canvas.height - playerSize / 2;
            triggerGameOver();
          }
          if (state.playerY - playerSize / 2 < 0) {
            state.playerY = playerSize / 2;
            state.velocity = 0.5; // push down
          }

          // Get dynamic game difficulty settings
          const { speed, spawnInterval } = getGameConfig(state.score);

          // Spawn pipes
          state.frameCount++;
          if (state.frameCount >= spawnInterval) {
            state.pipes.push({
              x: canvas.width,
              topHeight: Math.random() * (canvas.height - pipeGap - 60) + 30,
              passed: false,
            });
            state.frameCount = 0;
          }

          // Update pipes
          for (let i = state.pipes.length - 1; i >= 0; i--) {
            const pipe = state.pipes[i];
            pipe.x -= speed;

            // Delete offscreen pipes
            if (pipe.x < -pipeWidth) {
              state.pipes.splice(i, 1);
              continue;
            }

            // Score point
            if (!pipe.passed && pipe.x + pipeWidth < playerX) {
              pipe.passed = true;
              state.score++;
              setScore(state.score);
              audioSynth.playTone(880, 'sine', 0.1, 0.08);

              if (state.score > state.highScore) {
                state.highScore = state.score;
                setHighScore(state.score);
                try {
                  localStorage.setItem('aadi-dodger-highscore', state.score.toString());
                } catch {}
              }
            }

            // Collision Check
            const playerLeft = playerX - playerSize / 2;
            const playerRight = playerX + playerSize / 2;
            const playerTop = state.playerY - playerSize / 2;
            const playerBottom = state.playerY + playerSize / 2;

            const pipeLeft = pipe.x;
            const pipeRight = pipe.x + pipeWidth;
            const pipeTopBottom = pipe.topHeight;
            const pipeBottomTop = pipe.topHeight + pipeGap;

            if (
              playerRight > pipeLeft &&
              playerLeft < pipeRight &&
              (playerTop < pipeTopBottom || playerBottom > pipeBottomTop)
            ) {
              triggerGameOver();
            }
          }
        }

        // Draw Pipes
        state.pipes.forEach((pipe) => {
          // Top Pipe
          ctx.fillStyle = '#f87171'; // bug red
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 3;
          ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
          ctx.strokeRect(pipe.x, -5, pipeWidth, pipe.topHeight + 5);

          // Pipe Cap top
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(pipe.x - 3, pipe.topHeight - 15, pipeWidth + 6, 15);
          ctx.strokeRect(pipe.x - 3, pipe.topHeight - 15, pipeWidth + 6, 15);

          // Bottom Pipe
          ctx.fillStyle = '#f87171';
          ctx.fillRect(pipe.x, pipe.topHeight + pipeGap, pipeWidth, canvas.height - (pipe.topHeight + pipeGap));
          ctx.strokeRect(pipe.x, pipe.topHeight + pipeGap, pipeWidth, canvas.height - (pipe.topHeight + pipeGap) + 5);

          // Pipe Cap bottom
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(pipe.x - 3, pipe.topHeight + pipeGap, pipeWidth + 6, 15);
          ctx.strokeRect(pipe.x - 3, pipe.topHeight + pipeGap, pipeWidth + 6, 15);
        });

        // Draw Player (Aadi Floppy/Square Avatar)
        ctx.fillStyle = '#fcd34d'; // yellow
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.save();
        ctx.translate(playerX, state.playerY);
        // Tilt slightly based on velocity
        ctx.rotate(Math.min(Math.max(state.velocity * 0.04, -0.5), 0.8));
        ctx.fillRect(-playerSize / 2, -playerSize / 2, playerSize, playerSize);
        ctx.strokeRect(-playerSize / 2, -playerSize / 2, playerSize, playerSize);

        // draw face
        ctx.fillStyle = '#000000';
        ctx.fillRect(-6, -6, 3, 3);
        ctx.fillRect(3, -6, 3, 3);
        ctx.beginPath();
        // sad face on game over
        if (state.gameState === 'gameover') {
          ctx.arc(0, 4, 3, Math.PI, 0);
        } else {
          ctx.arc(0, 0, 3, 0, Math.PI);
        }
        ctx.stroke();
        ctx.restore();

        // Get speed for drawing
        const { speed } = getGameConfig(state.score);

        // Draw Score Counter (Retro green digital display style)
        ctx.fillStyle = '#4ade80';
        ctx.font = 'bold 18px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`SCORE: ${state.score}`, 15, 30);
        ctx.fillText(`HI: ${state.highScore}`, 15, 52);

        // Draw Level & Speed on top right
        const levelName = 
          state.score >= 40 ? 'LVL: 7 (GODLIKE ⚡)' :
          state.score >= 30 ? 'LVL: 6 (NIGHTMARE)' :
          state.score >= 25 ? 'LVL: 5 (INSANE)' :
          state.score >= 20 ? 'LVL: 4 (EXPERT)' :
          state.score >= 15 ? 'LVL: 3 (HARD)' :
          state.score >= 10 ? 'LVL: 2 (MEDIUM)' :
          'LVL: 1 (EASY)';
        
        ctx.textAlign = 'right';
        ctx.fillText(levelName, canvas.width - 15, 30);
        ctx.fillText(`SPEED: ${speed.toFixed(1)}x`, canvas.width - 15, 52);

        if (state.gameState === 'gameover') {
          // Game Over Screen Overlay
          ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          ctx.fillStyle = '#ef4444';
          ctx.font = 'bold 28px monospace';
          ctx.textAlign = 'center';
          ctx.fillText('👾 COLLISION DETECTED!', canvas.width / 2, canvas.height / 2 - 30);

          ctx.fillStyle = '#ffffff';
          ctx.font = '14px monospace';
          ctx.fillText(`BUGS CLEANED: ${state.score}`, canvas.width / 2, canvas.height / 2 + 10);
          ctx.fillText(`RECORD HIGH SCORE: ${state.highScore}`, canvas.width / 2, canvas.height / 2 + 35);
          
          ctx.fillStyle = '#4ade80';
          ctx.font = 'bold 12px monospace';
          ctx.fillText('CLICK TO RETRY / RECOMPILE', canvas.width / 2, canvas.height / 2 + 75);
        }
      }

      animationFrameId = requestAnimationFrame(update);
    };

    const triggerGameOver = () => {
      const state = stateRef.current;
      if (state.gameState === 'playing') {
        setGameState('gameover');
        audioSynth.playTone(150, 'sawtooth', 0.4, 0.2);
        setTimeout(() => {
          audioSynth.playTone(90, 'sine', 0.5, 0.2);
        }, 150);
      }
    };

    // Auto-fit height to parent or set standard
    canvas.width = canvas.parentElement.clientWidth || 600;
    canvas.height = 360;

    resetGame();
    update();

    return () => {
      window.removeEventListener('keydown', handleInput);
      canvas.removeEventListener('mousedown', handleInput);
      canvas.removeEventListener('touchstart', handleInput);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameState]);

  return (
    <div className="bg-[#1a1a1a] border-8 border-black rounded-3xl p-4 md:p-6 shadow-neo flex flex-col gap-4 relative select-none w-full">
      {/* Header */}
      <div className="bg-custom-red text-white px-4 py-2 rounded-xl border-2 border-black font-mono font-bold flex justify-between items-center text-xs md:text-sm shadow-[2px_2px_0_rgba(0,0,0,1)]">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] inline-block animate-pulse"></span>
          BUG_DODGER_SYS.EXE
        </span>
        <span className="font-mono text-xs">HI-SCORE: {highScore}</span>
      </div>

      {/* Canvas */}
      <div className="border-4 border-black rounded-2xl overflow-hidden bg-black h-[360px] w-full relative cursor-pointer">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Controller Guide */}
      <p className="text-center font-mono text-[10px] md:text-xs text-gray-400 uppercase leading-relaxed">
        🎮 Mobile: Tap screen to jump. Desktop: Tap spacebar or click. Dodge red bugs!
      </p>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="w-full py-10 px-4 max-w-7xl mx-auto bg-custom-green border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo selection:bg-custom-yellow selection:text-black">
      {/* Header */}
      <div className="flex justify-center mb-10">
        <div className="bg-white px-8 py-3 rounded-full border-4 border-black w-fit shadow-neo">
          <h3 className="text-3xl font-shrikhand">EDUCATION</h3>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Timeline Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 relative">
          <div className="absolute left-8 top-10 bottom-10 w-1 bg-black border-l-4 border-black border-dashed -z-10 opacity-30" />
          
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative bg-white border-4 border-black p-6 rounded-3xl shadow-neo hover:-translate-y-1 transition-transform ${edu.color || 'bg-purple-100'}`}
            >
              {/* Year badge */}
              <div className="absolute -top-4 -left-4 bg-black text-white font-mono font-bold py-1 px-3 rounded-lg border-2 border-white shadow-sm rotate-[-5deg]">
                {edu.duration}
              </div>

              {/* Degrees details */}
              <div className="mt-2">
                <h3 className="text-xl font-shrikhand leading-tight mb-1">{edu.degree}</h3>
                <p className="font-bold text-sm text-gray-700 mb-2">{edu.institution}</p>
                <div className="text-sm font-medium bg-white/60 p-2 rounded-lg border-2 border-black/10">
                  {edu.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Game Column */}
        <div className="w-full lg:w-2/3 sticky top-24">
          <BugDodgerGame />
          <p className="text-center font-mono font-bold mt-4 bg-white inline-block px-4 py-1 border-2 border-black rounded-full shadow-sm mx-auto block w-fit">
            👾 Beat the high score! Dodge the red code bugs.
          </p>
        </div>
      </div>
    </section>
  );
}
