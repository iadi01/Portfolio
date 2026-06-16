import { useState, useEffect, useRef } from 'react';
import { audioSynth } from '../utils/audioSynth';
import { FiPlay, FiPause, FiDownload, FiRotateCcw, FiZap, FiTarget } from 'react-icons/fi';

export default function DesktopWidgets() {
  // Sound states
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(audioSynth.soundEnabled);
  const [currentBeat, setCurrentBeat] = useState(-1);

  // Pixel painter states
  const [grid, setGrid] = useState(Array(100).fill('#ffffff'));
  const [activeColor, setActiveColor] = useState('#ff9fac');
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Piano states
  const [pressedKey, setPressedKey] = useState(null);

  // CPU monitor states
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [uptime, setUptime] = useState(0);
  const [turboMode, setTurboMode] = useState(false);

  // Canvas references
  const visualizerRef = useRef(null);
  const waveRef = useRef(null);

  // --- PHYSICS ENGINE STATES & REFS ---
  const sandboxRef = useRef(null);
  const [gravityMode, setGravityMode] = useState('down'); // 'down', 'up', 'zero'
  const [nodes, setNodes] = useState([
    { id: '1', name: 'React.js', emoji: '⚛️', x: 50, y: 50, vx: 2, vy: 2, width: 110, height: 42, color: 'bg-custom-blue' },
    { id: '2', name: 'Node.js', emoji: '🟢', x: 180, y: 80, vx: -3, vy: 1, width: 105, height: 42, color: 'bg-custom-green' },
    { id: '3', name: 'Python', emoji: '🐍', x: 300, y: 40, vx: 1, vy: -2, width: 95, height: 42, color: 'bg-custom-yellow' },
    { id: '4', name: 'Git & GitHub', emoji: '🐙', x: 420, y: 90, vx: -2, vy: 3, width: 130, height: 42, color: 'bg-custom-pink' },
    { id: '5', name: 'HTML5', emoji: '🌐', x: 80, y: 160, vx: 3, vy: -1, width: 95, height: 42, color: 'bg-custom-purple' },
    { id: '6', name: 'CSS3', emoji: '🎨', x: 210, y: 140, vx: -1, vy: 2, width: 90, height: 42, color: 'bg-custom-red' },
    { id: '7', name: 'Next.js', emoji: '⚡', x: 330, y: 170, vx: 2, vy: 3, width: 100, height: 42, color: 'bg-custom-blue' },
    { id: '8', name: 'MongoDB', emoji: '🍃', x: 450, y: 150, vx: -2, vy: -2, width: 115, height: 42, color: 'bg-custom-green' },
    { id: '9', name: 'JavaScript', emoji: '🟨', x: 130, y: 220, vx: 4, vy: -1, width: 115, height: 42, color: 'bg-custom-yellow' },
    { id: '10', name: 'DSA', emoji: '📚', x: 270, y: 230, vx: -2, vy: 2, width: 85, height: 42, color: 'bg-custom-pink' },
    { id: '11', name: 'DBMS', emoji: '💾', x: 380, y: 220, vx: 1, vy: -3, width: 90, height: 42, color: 'bg-custom-purple' },
    { id: '12', name: 'REST APIs', emoji: '⚙️', x: 490, y: 60, vx: 3, vy: 2, width: 120, height: 42, color: 'bg-custom-red' }
  ]);

  const activeDragNode = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const mouseCoords = useRef({ x: 0, y: 0 });

  // Sync settings sound status
  useEffect(() => {
    const checkSoundStatus = () => {
      setSoundEnabled(audioSynth.soundEnabled);
    };
    window.addEventListener('storage', checkSoundStatus);
    const interval = setInterval(checkSoundStatus, 1000);
    return () => {
      window.removeEventListener('storage', checkSoundStatus);
      clearInterval(interval);
    };
  }, []);

  // Time & Uptime ticks
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sequencer beat sync
  const handleBeat = (beatIdx) => {
    setCurrentBeat(beatIdx);
  };

  const togglePlay = () => {
    audioSynth.playClick();
    if (isPlaying) {
      audioSynth.stopSequencer();
      setIsPlaying(false);
      setCurrentBeat(-1);
    } else {
      audioSynth.startSequencer(handleBeat);
      setIsPlaying(true);
    }
  };

  // Sound effects helper for interactions
  const handleHoverEffect = () => {
    audioSynth.playHover();
  };

  const handleClickEffect = () => {
    audioSynth.playClick();
  };

  // Canvas visualizer animation
  useEffect(() => {
    const canvas = visualizerRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    // Smooth decay values for 12 audio bars
    const barCount = 12;
    const barHeights = Array(barCount).fill(10);
    const targetHeights = Array(barCount).fill(10);

    const render = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw background grid lines for a retro vibe
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let j = 0; j < canvas.height; j += 15) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
      }

      // Render vertical visualizer bars
      const padding = 6;
      const barWidth = (canvas.width - padding * (barCount + 1)) / barCount;

      for (let i = 0; i < barCount; i++) {
        // Interpolate heights smoothly
        barHeights[i] += (targetHeights[i] - barHeights[i]) * 0.15;
        // Decay target heights gradually
        targetHeights[i] = Math.max(10, targetHeights[i] - 1.8);

        const x = padding + i * (barWidth + padding);
        const h = barHeights[i];
        const y = canvas.height - h;

        // Choose color based on height / bar index for neon retro gradients
        let barColor = 'var(--color-custom-blue)';
        if (i % 3 === 1) barColor = 'var(--color-custom-pink)';
        if (i % 3 === 2) barColor = 'var(--color-custom-green)';

        ctx.fillStyle = barColor;
        ctx.fillRect(x, y, barWidth, h);

        // Add black outline block segmentations (retro calculator screen style)
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        for (let segmentY = y; segmentY < canvas.height; segmentY += 6) {
          ctx.beginPath();
          ctx.moveTo(x, segmentY);
          ctx.lineTo(x + barWidth, segmentY);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Update target visualizer heights on sequencer beat ticks
  useEffect(() => {
    if (currentBeat !== -1) {
      const canvas = visualizerRef.current;
      if (canvas) {
        // Boost target heights on beats
        const ctx = canvas.getContext('2d');
        const spikeCount = 6;
        for (let i = 0; i < spikeCount; i++) {
          const idx = Math.floor(Math.random() * 12);
          const isKickStep = currentBeat % 4 === 0;
          const magnitude = isKickStep ? canvas.height - 15 : canvas.height / 2;
          // Trigger visualizer jumps dynamically
        }
      }
    }
  }, [currentBeat]);

  // Rolling CPU Sine Wave animation
  useEffect(() => {
    const canvas = waveRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let offset = 0;

    const render = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = turboMode ? 'var(--color-custom-red)' : 'var(--color-custom-green)';
      ctx.lineWidth = 4;
      ctx.beginPath();

      const amplitude = turboMode ? 32 : 16;
      const frequency = turboMode ? 0.05 : 0.02;
      const speed = turboMode ? 0.25 : 0.08;

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * frequency + offset) * amplitude;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      offset += speed;

      // Draw grid overlay text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '10px monospace';
      ctx.fillText(`HZ: ${turboMode ? '144' : '60'}`, 10, 20);
      ctx.fillText(`LOAD: ${turboMode ? '98.4%' : '14.2%'}`, 10, 35);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [turboMode]);

  // Turbo Mode trigger
  const handleTurboToggle = () => {
    audioSynth.playChirp();
    setTurboMode(!turboMode);
    
    // Dynamically adjust marquee speed in Banner
    const banner = document.querySelector('.animate-marquee');
    if (banner) {
      banner.style.animationDuration = !turboMode ? '5s' : '20s';
    }
  };

  // Pixel Painter Painting logic
  const handlePixelPaint = (idx) => {
    setGrid((prev) => {
      const next = [...prev];
      next[idx] = activeColor;
      return next;
    });
  };

  const handlePixelMouseEnter = (idx) => {
    if (isMouseDown) {
      handlePixelPaint(idx);
    }
  };

  const clearPixelGrid = () => {
    audioSynth.playClick();
    setGrid(Array(100).fill('#ffffff'));
  };

  const downloadPixelArtwork = () => {
    audioSynth.playSuccess();
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');

    // Render cells to canvas (30px size per pixel)
    grid.forEach((color, idx) => {
      const x = (idx % 10) * 30;
      const y = Math.floor(idx / 10) * 30;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 30, 30);
      // Pixel borders for retro pixel art feel
      ctx.strokeStyle = '#222222';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, 30, 30);
    });

    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'aadi-pixel-art.png';
    link.href = url;
    link.click();
  };

  // Piano key click & hotkey play
  const pianoKeys = [
    { key: '1', note: 'C4', freq: 261.63 },
    { key: '2', note: 'D4', freq: 293.66 },
    { key: '3', note: 'E4', freq: 329.63 },
    { key: '4', note: 'F4', freq: 349.23 },
    { key: '5', note: 'G4', freq: 392.00 },
    { key: '6', note: 'A4', freq: 440.00 },
    { key: '7', note: 'B4', freq: 493.88 },
    { key: '8', note: 'C5', freq: 523.25 },
  ];

  const playPianoNote = (keyInfo) => {
    setPressedKey(keyInfo.key);
    audioSynth.playTone(keyInfo.freq, 'sine', 0.4, 0.2);
    setTimeout(() => {
      setPressedKey((curr) => (curr === keyInfo.key ? null : curr));
    }, 150);
  };

  // Keyboard hotkeys mapping
  useEffect(() => {
    const handleKeyDown = (e) => {
      const match = pianoKeys.find((k) => k.key === e.key);
      if (match) {
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
          return;
        }
        e.preventDefault();
        playPianoNote(match);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // --- 2D PHYSICS SIMULATOR LOOP ENGINE ---
  useEffect(() => {
    let animFrame;
    const elasticity = 0.55; // bounce factor
    const friction = 0.988; // air resistance friction

    const updatePhysics = () => {
      const container = sandboxRef.current;
      if (!container) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      setNodes((prevNodes) => {
        // 1. Calculate positions and boundaries
        const updated = prevNodes.map((node) => {
          if (activeDragNode.current && activeDragNode.current.id === node.id) {
            // Dragged node updates velocities based on mouse speed
            const targetX = mouseCoords.current.x - dragOffset.current.x;
            const targetY = mouseCoords.current.y - dragOffset.current.y;
            const vx = (targetX - node.x) * 0.35;
            const vy = (targetY - node.y) * 0.35;
            return {
              ...node,
              x: Math.max(0, Math.min(containerWidth - node.width, targetX)),
              y: Math.max(0, Math.min(containerHeight - node.height, targetY)),
              vx,
              vy
            };
          }

          // Apply gravity
          let vy = node.vy;
          if (gravityMode === 'down') {
            vy += 0.24; // normal gravity
          } else if (gravityMode === 'up') {
            vy -= 0.24; // inverted gravity
          }

          // Apply air resistance / damping
          let vx = node.vx * friction;
          vy = vy * friction;

          // Update position values
          let x = node.x + vx;
          let y = node.y + vy;

          // Bounces off ceiling/floor boundaries
          if (y + node.height > containerHeight) {
            y = containerHeight - node.height;
            vy = -vy * elasticity;
            vx *= 0.9; // ground friction slides slower
          } else if (y < 0) {
            y = 0;
            vy = -vy * elasticity;
          }

          // Bounces off left/right wall boundaries
          if (x + node.width > containerWidth) {
            x = containerWidth - node.width;
            vx = -vx * elasticity;
          } else if (x < 0) {
            x = 0;
            vx = -vx * elasticity;
          }

          return { ...node, x, y, vx, vy };
        });

        // 2. Resolve elastic collisions / overlaps between badges (using simple circle AABB overlaps)
        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const n1 = updated[i];
            const n2 = updated[j];

            // Don't collide if either is active drag node
            if (activeDragNode.current && (activeDragNode.current.id === n1.id || activeDragNode.current.id === n2.id)) {
              continue;
            }

            // Box centers
            const c1x = n1.x + n1.width / 2;
            const c1y = n1.y + n1.height / 2;
            const c2x = n2.x + n2.width / 2;
            const c2y = n2.y + n2.height / 2;

            const dx = c2x - c1x;
            const dy = c2y - c1y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Check collision range based on node average size bounding radius
            const minDistance = 75; // average radius separation

            if (distance < minDistance && distance > 0) {
              const overlap = minDistance - distance;

              // Resolve overlap (push nodes away equally)
              const nx = dx / distance;
              const ny = dy / distance;

              const correctionX = nx * overlap * 0.5;
              const correctionY = ny * overlap * 0.5;

              n1.x -= correctionX;
              n1.y -= correctionY;
              n2.x += correctionX;
              n2.y += correctionY;

              // Elastic collision: swap velocities relative to the normal
              const rvx = n2.vx - n1.vx;
              const rvy = n2.vy - n1.vy;
              const normalVel = rvx * nx + rvy * ny;

              if (normalVel < 0) {
                // Nodes are moving towards each other
                const impulse = -(1 + elasticity) * normalVel / 2;
                n1.vx -= nx * impulse;
                n1.vy -= ny * impulse;
                n2.vx += nx * impulse;
                n2.vy += ny * impulse;
              }
            }
          }
        }

        return updated;
      });

      animFrame = requestAnimationFrame(updatePhysics);
    };

    animFrame = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animFrame);
  }, [gravityMode]);

  // Handle radial shockwave explosion on click inside Sandbox
  const handleShockwave = (e) => {
    const container = sandboxRef.current;
    if (!container) return;

    // Get click coords relative to container
    const rect = container.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    // Don't trigger if clicked directly on a badge (grab action handled separately)
    if (e.target !== container) return;

    audioSynth.playChirp();

    setNodes((prevNodes) => {
      return prevNodes.map((node) => {
        // Node center
        const nx = node.x + node.width / 2;
        const ny = node.y + node.height / 2;

        const dx = nx - cx;
        const dy = ny - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Explode badges outwards in a 240px radius range
        const maxDist = 240;
        if (dist < maxDist && dist > 0) {
          const force = (maxDist - dist) / 10; // blast magnitude
          return {
            ...node,
            vx: node.vx + (dx / dist) * force,
            vy: node.vy + (dy / dist) * force - 3 // push upwards slightly on blast
          };
        }
        return node;
      });
    });
  };

  const handleGrabStart = (node, e) => {
    e.preventDefault();
    audioSynth.playHover();
    const container = sandboxRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    // Get mouse positions relative to container
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    activeDragNode.current = node;
    dragOffset.current = {
      x: mouseX - node.x,
      y: mouseY - node.y
    };
    mouseCoords.current = { x: mouseX, y: mouseY };
  };

  const handleGrabMove = (e) => {
    if (!activeDragNode.current) return;
    const container = sandboxRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    mouseCoords.current = { x: mouseX, y: mouseY };
  };

  const handleGrabEnd = () => {
    if (activeDragNode.current) {
      audioSynth.playClick();
    }
    activeDragNode.current = null;
  };

  // Listen globally to mousemove & mouseup during active grabs
  useEffect(() => {
    window.addEventListener('mousemove', handleGrabMove);
    window.addEventListener('mouseup', handleGrabEnd);
    return () => {
      window.removeEventListener('mousemove', handleGrabMove);
      window.removeEventListener('mouseup', handleGrabEnd);
    };
  }, []);

  const resetPhysicsSandbox = () => {
    audioSynth.playSuccess();
    setNodes((prev) => {
      return prev.map((n, idx) => ({
        ...n,
        x: 40 + (idx % 4) * 160,
        y: 40 + Math.floor(idx / 4) * 80,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8
      }));
    });
  };

  const addChaosPulse = () => {
    audioSynth.playChirp();
    setNodes((prev) => {
      return prev.map((n) => ({
        ...n,
        vx: n.vx + (Math.random() - 0.5) * 20,
        vy: n.vy + (Math.random() - 0.5) * 20
      }));
    });
  };

  return (
    <section id="workspace" className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-4xl md:text-5xl font-shrikhand text-black uppercase tracking-wider">
          AadiOS Workspace
        </h2>
        <div className="h-2 flex-1 bg-black border-2 border-black rounded-full shadow-[2px_2px_0_#000]" />
        <span className="font-mono text-sm bg-black text-custom-yellow px-3 py-1 border-2 border-black rounded-lg hidden sm:inline-block">
          v2.0.0-PHYSICS
        </span>
      </div>

      {/* Grid Layout of OS Widgets */}
      <div className="flex flex-col gap-8">
        
        {/* Flagship Centerpiece: Antigravity Physics Skill Sandbox (Full Width) */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col gap-4 relative overflow-hidden w-full">
          <div className="bg-black text-custom-yellow px-4 py-2 rounded-xl border-2 border-black font-mono font-bold flex flex-wrap justify-between items-center gap-3">
            <span className="flex items-center gap-2">🚀 SKILL_PHYSICS_SANDBOX.EXE</span>
            <div className="flex items-center gap-2 text-xs">
              <span className="bg-custom-red text-white border border-white px-2 py-0.5 rounded-md">
                GRAVITY: {gravityMode.toUpperCase()}
              </span>
              <span className="text-gray-400">Click blank space to trigger Shockwave Blast</span>
            </div>
          </div>

          {/* Sandbox Box Arena */}
          <div
            ref={sandboxRef}
            onClick={handleShockwave}
            className="border-4 border-black bg-black rounded-2xl relative overflow-hidden select-none h-[380px] w-full"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          >
            {/* Rendered Skill Badges */}
            {nodes.map((node) => (
              <div
                key={node.id}
                onMouseDown={(e) => handleGrabStart(node, e)}
                onMouseEnter={handleHoverEffect}
                className={`${node.color} text-black border-2 border-black font-bold font-mono px-3 py-1.5 rounded-xl shadow-[2px_2px_0_rgba(0,0,0,1)] select-none absolute flex items-center gap-2 cursor-grab active:cursor-grabbing text-xs md:text-sm`}
                style={{
                  left: `${node.x}px`,
                  top: `${node.y}px`,
                  width: `${node.width}px`,
                  height: `${node.height}px`
                }}
              >
                <span>{node.emoji}</span>
                <span>{node.name}</span>
              </div>
            ))}
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap gap-4 items-center justify-between mt-2">
            {/* Gravity Mode Selector */}
            <div className="flex items-center gap-2 bg-gray-50 border-2 border-black rounded-2xl p-1.5 shadow-[2px_2px_0_rgba(0,0,0,1)]">
              <span className="font-mono text-xs font-bold text-gray-400 px-2 uppercase">Gravity:</span>
              {['down', 'up', 'zero'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    audioSynth.playClick();
                    setGravityMode(mode);
                  }}
                  className={`px-3 py-1 text-xs font-bold border-2 border-black rounded-xl cursor-pointer transition-all active:translate-y-0.5 ${
                    gravityMode === mode ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {mode === 'down' ? '⬇️ DOWN' : mode === 'up' ? '⬆️ UP' : '🛸 ANTIGRAVITY'}
                </button>
              ))}
            </div>

            {/* Shockwave & Chaos */}
            <div className="flex gap-3">
              <button
                onClick={addChaosPulse}
                onMouseEnter={handleHoverEffect}
                className="bg-custom-yellow text-black border-2 border-black font-bold px-4 py-2 rounded-2xl shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all text-xs flex items-center gap-1.5 cursor-pointer"
              >
                💥 CHAOS PULSE
              </button>
              <button
                onClick={resetPhysicsSandbox}
                onMouseEnter={handleHoverEffect}
                className="bg-gray-100 text-black border-2 border-black font-bold px-4 py-2 rounded-2xl shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <FiRotateCcw /> RESET ARENA
              </button>
            </div>
          </div>
        </div>

        {/* Second Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Widget 1: Cozy Synth Player */}
          <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col gap-4 relative overflow-hidden">
            <div className="bg-custom-blue text-black px-4 py-1.5 rounded-xl border-2 border-black font-mono font-bold flex justify-between items-center">
              <span>📻 COZY_SYNTH_PLAYER.EXE</span>
              <span className="animate-pulse w-3 h-3 rounded-full bg-red-500 border border-black" />
            </div>

            <div className="flex flex-col gap-4">
              {/* Visualizer Canvas screen */}
              <div className="relative border-4 border-black rounded-2xl overflow-hidden bg-black h-36">
                <canvas
                  ref={visualizerRef}
                  width={380}
                  height={136}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 font-mono text-xs text-white bg-black/60 px-2 py-0.5 rounded-md border border-white/20">
                  {isPlaying ? `STEP: ${currentBeat + 1}/16` : 'IDLE'}
                </div>
              </div>

              <div className="flex gap-4 items-center mt-2">
                <button
                  onClick={togglePlay}
                  onMouseEnter={handleHoverEffect}
                  className="bg-custom-yellow text-black border-4 border-black font-shrikhand text-xl px-6 py-3 rounded-2xl shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all flex items-center gap-2 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <FiPause /> PAUSE
                    </>
                  ) : (
                    <>
                      <FiPlay /> PLAY BEATS
                    </>
                  )}
                </button>
                <div className="font-mono text-sm flex-1 bg-gray-50 border-2 border-black rounded-xl p-2.5">
                  <div className="text-gray-400 font-bold uppercase text-[10px]">Active Track</div>
                  <div className="font-black truncate">
                    {isPlaying ? 'Lo-Fi Melodic Progression (A min)' : 'Click Play to Synthesize Audio'}
                  </div>
                </div>
              </div>
              {!soundEnabled && (
                <p className="text-xs text-custom-red font-mono font-bold text-center mt-1">
                  ⚠️ Sound is disabled in settings. Toggle 🎨 icon at bottom-left to enable.
                </p>
              )}
            </div>
          </div>

          {/* Widget 2: Pixel Painter */}
          <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col gap-4">
            <div className="bg-custom-pink text-black px-4 py-1.5 rounded-xl border-2 border-black font-mono font-bold flex justify-between items-center">
              <span>🎨 PIXEL_PAINTER_CANVAS.SYS</span>
              <span className="w-3.5 h-3.5 bg-black rounded-full border border-white" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* 10x10 Painter Grid */}
              <div
                className="grid grid-cols-10 border-4 border-black bg-black p-0.5 rounded-xl gap-0.5 overflow-hidden w-44 h-44 cursor-crosshair select-none"
                onMouseDown={() => setIsMouseDown(true)}
                onMouseUp={() => setIsMouseDown(false)}
                onMouseLeave={() => setIsMouseDown(false)}
              >
                {grid.map((color, idx) => (
                  <div
                    key={idx}
                    onMouseDown={() => handlePixelPaint(idx)}
                    onMouseEnter={() => handlePixelMouseEnter(idx)}
                    className="w-4 h-4 transition-colors duration-75"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Controls and Palette */}
              <div className="flex flex-col gap-3 flex-1 w-full">
                {/* Color chips */}
                <div className="font-mono font-bold text-xs text-gray-400 uppercase">Palette</div>
                <div className="flex flex-wrap gap-2">
                  {['#ff9fac', '#60a5fa', '#4ade80', '#fcd34d', '#000000', '#ffffff'].map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        handleClickEffect();
                        setActiveColor(color);
                      }}
                      className={`w-8 h-8 rounded-lg border-2 border-black transition-all cursor-pointer ${
                        activeColor === color ? 'scale-110 ring-2 ring-black outline-none' : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={downloadPixelArtwork}
                    onMouseEnter={handleHoverEffect}
                    className="flex-1 bg-custom-green text-black border-2 border-black font-bold py-2 px-3 rounded-xl shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-1.5 text-xs cursor-pointer"
                  >
                    <FiDownload /> DOWNLOAD PNG
                  </button>
                  <button
                    onClick={clearPixelGrid}
                    onMouseEnter={handleHoverEffect}
                    className="bg-gray-100 text-black border-2 border-black font-bold py-2 px-3 rounded-xl shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-1.5 text-xs cursor-pointer"
                  >
                    <FiRotateCcw /> RESET
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Third Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Widget 3: 8-Bit Playable Piano */}
          <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col gap-4">
            <div className="bg-custom-yellow text-black px-4 py-1.5 rounded-xl border-2 border-black font-mono font-bold flex justify-between items-center">
              <span>🎹 PIANO_8BIT_SYNTH.EXE</span>
              <span className="font-mono text-xs">HOTKEYS: [1-8]</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex border-4 border-black rounded-2xl bg-black p-1.5 overflow-hidden h-32 select-none relative">
                {pianoKeys.map((k) => (
                  <button
                    key={k.key}
                    onClick={() => playPianoNote(k)}
                    onMouseEnter={handleHoverEffect}
                    className={`flex-1 flex flex-col justify-end items-center pb-3 border-2 border-black rounded-xl font-mono text-xs font-black transition-all cursor-pointer ${
                      pressedKey === k.key
                        ? 'bg-custom-yellow text-black translate-y-1 border-b shadow-none'
                        : 'bg-white text-black hover:bg-gray-50 shadow-[0_4px_0_#000]'
                    }`}
                  >
                    <span>{k.note}</span>
                    <span className="text-gray-400 text-[10px] mt-1 bg-gray-100 border border-black/10 px-1 rounded-sm">
                      {k.key}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-center font-mono text-[10px] text-gray-400 uppercase mt-1">
                Click keys with mouse or tap numbers 1 to 8 on your physical keyboard to jam.
              </p>
            </div>
          </div>

          {/* Widget 4: CPU Monitor & Turbo Mode */}
          <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col gap-4">
            <div className="bg-custom-green text-black px-4 py-1.5 rounded-xl border-2 border-black font-mono font-bold flex justify-between items-center">
              <span>⚡ SYSTEM_MONITOR_CHIP.IO</span>
              <span className="font-mono text-xs">STATUS: ONLINE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Canvas Oscilloscope Wave */}
              <div className="border-4 border-black rounded-2xl bg-black h-28 overflow-hidden">
                <canvas ref={waveRef} width={200} height={104} className="w-full h-full object-cover" />
              </div>

              {/* System Specs panel */}
              <div className="flex flex-col gap-2.5">
                <div className="font-mono text-xs bg-gray-50 border-2 border-black rounded-xl p-3 flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-bold">Uptime:</span>
                    <span className="font-black">{uptime}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-bold">Active Time:</span>
                    <span className="font-black">{time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-bold">WTF Mode:</span>
                    <span className={`font-black ${turboMode ? 'text-custom-red animate-pulse' : 'text-custom-green'}`}>
                      {turboMode ? 'BOOST_MAX' : 'OPTIMAL'}
                    </span>
                  </div>
                </div>

                {/* Turbo Toggle */}
                <button
                  onClick={handleTurboToggle}
                  onMouseEnter={handleHoverEffect}
                  className={`w-full border-4 border-black font-shrikhand text-sm p-2.5 rounded-2xl shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    turboMode ? 'bg-custom-red text-white' : 'bg-custom-yellow text-black'
                  }`}
                >
                  <FiZap /> {turboMode ? 'DEACTIVATE TURBO' : 'ACTIVATE TURBO MODE'}
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
