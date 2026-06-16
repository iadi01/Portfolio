import { useState, useEffect, useRef } from 'react';
import { audioSynth } from '../utils/audioSynth';
import { FiPlay, FiPause, FiDownload, FiRotateCcw, FiZap } from 'react-icons/fi';

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
        // Give random bars a jump in sync with the beat
        for (let i = 0; i < 12; i++) {
          if (Math.random() > 0.4) {
            visualizerRef.current.getContext('2d');
            const maxVal = canvas.height - 15;
            const jumpVal = Math.random() * (maxVal - 30) + 30;
            // Boost certain bars higher on chord hits
            visualizerRef.current.barHeights = visualizerRef.current.barHeights || Array(12).fill(10);
            visualizerRef.current.targetHeights = visualizerRef.current.targetHeights || Array(12).fill(10);
          }
        }
      }
    }
  }, [currentBeat]);

  // Adjust canvas visualizer targets separately to bypass closures
  useEffect(() => {
    if (currentBeat === -1) return;
    const canvas = visualizerRef.current;
    if (!canvas) return;
    
    // Inject spikes into the rendering loop targets
    const spikeCount = 6;
    for (let i = 0; i < spikeCount; i++) {
      const idx = Math.floor(Math.random() * 12);
      // Give a retro audio burst
      const isKickStep = currentBeat % 4 === 0;
      const magnitude = isKickStep ? canvas.height - 10 : canvas.height / 2;
      const targetHeight = Math.random() * magnitude + 10;
      
      const ctx = canvas.getContext('2d');
      // Directly modify height arrays inside execution loops
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
    
    // Dynamically adjust marquee speed in Navbar/Banner
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
        // Prevent typing numbers in search inputs from trigger
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

  return (
    <section id="workspace" className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-4xl md:text-5xl font-shrikhand text-black uppercase tracking-wider">
          AadiOS Workspace
        </h2>
        <div className="h-2 flex-1 bg-black border-2 border-black rounded-full shadow-[2px_2px_0_#000]" />
        <span className="font-mono text-sm bg-black text-custom-yellow px-3 py-1 border-2 border-black rounded-lg hidden sm:inline-block">
          v1.2.0-STABLE
        </span>
      </div>

      {/* Grid Layout of OS Widgets */}
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

        {/* Widget 3: 8-Bit Playable Piano */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col gap-4">
          <div className="bg-custom-yellow text-black px-4 py-1.5 rounded-xl border-2 border-black font-mono font-bold flex justify-between items-center">
            <span>🎹 PIANO_8BIT_SYNTH.EXE</span>
            <span className="font-mono text-xs">HOTKEYS: [1-8]</span>
          </div>

          <div className="flex flex-col gap-2">
            {/* Piano Keyboard keys */}
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
    </section>
  );
}
