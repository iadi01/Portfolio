import { useState, useEffect } from 'react';
import { education } from '../data/personalData';
import { audioSynth } from '../utils/audioSynth';

function SchoolPiano() {
  const [pressedKey, setPressedKey] = useState(null);
  const [waveform, setWaveform] = useState('sine');

  const pianoKeys = [
    { key: '1', note: 'C4', freq: 261.63 },
    { key: '2', note: 'D4', freq: 293.66 },
    { key: '3', note: 'E4', freq: 329.63 },
    { key: '4', note: 'F4', freq: 349.23 },
    { key: '5', note: 'G4', freq: 392.00 },
    { key: '6', note: 'A4', freq: 440.00 },
    { key: '7', note: 'B4', freq: 493.88 },
    { key: '8', note: 'C5', freq: 523.25 }
  ];

  const playPianoNote = (keyInfo) => {
    setPressedKey(keyInfo.key);
    audioSynth.playTone(keyInfo.freq, waveform, 0.4, 0.15);
    setTimeout(() => {
      setPressedKey((curr) => (curr === keyInfo.key ? null : curr));
    }, 150);
  };

  // Keyboard hotkeys mapping
  useEffect(() => {
    const handleKeyDown = (e) => {
      const match = pianoKeys.find((k) => k.key === e.key);
      if (match) {
        // Prevent typing numbers in search inputs or forms from triggering the sound
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
          return;
        }
        e.preventDefault();
        playPianoNote(match);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [waveform]);

  const handleHoverEffect = () => {
    audioSynth.playHover();
  };

  return (
    <div className="bg-[#1a1a1a] border-8 border-black rounded-3xl p-6 md:p-8 shadow-neo flex flex-col gap-6 relative select-none w-full">
      {/* Header */}
      <div className="bg-custom-yellow text-black px-4 py-2 rounded-xl border-2 border-black font-mono font-bold flex justify-between items-center text-xs md:text-sm shadow-[2px_2px_0_rgba(0,0,0,1)]">
        <span>🎹 AADI_PIANO_SYNTH.EXE</span>
        <span className="font-mono text-xs hidden sm:inline">HOTKEYS: [1-8]</span>
      </div>

      {/* Waveform Selector */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-gray-400 uppercase tracking-wider text-left">Select Instrument Tone</span>
        <div className="flex flex-wrap gap-2">
          {['sine', 'triangle', 'square', 'sawtooth'].map((wave) => (
            <button
              key={wave}
              onClick={() => {
                audioSynth.playClick();
                setWaveform(wave);
              }}
              className={`px-3 py-1.5 rounded-lg border-2 border-black font-mono font-black text-xs cursor-pointer capitalize transition-all shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none ${
                waveform === wave
                  ? 'bg-custom-green text-black scale-105'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {wave}
            </button>
          ))}
        </div>
      </div>

      {/* Piano Keyboard keys */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-gray-400 uppercase tracking-wider text-left">Interactive Keyboard</span>
        <div className="flex border-4 border-black rounded-2xl bg-black p-2 h-36 md:h-44 overflow-hidden relative shadow-[4px_4px_0_rgba(0,0,0,1)]">
          {pianoKeys.map((k) => (
            <button
              key={k.key}
              onClick={() => playPianoNote(k)}
              onMouseEnter={handleHoverEffect}
              className={`flex-1 flex flex-col justify-end items-center pb-4 border-2 border-black rounded-xl font-mono text-xs md:text-sm font-black transition-all cursor-pointer ${
                pressedKey === k.key
                  ? 'bg-custom-yellow text-black translate-y-1 border-b shadow-none'
                  : 'bg-white text-black hover:bg-gray-50 shadow-[0_6px_0_#000] border-b-4'
              }`}
              style={{
                margin: '0 2px'
              }}
            >
              <span className="font-black">{k.note}</span>
              <span className="text-gray-400 text-[10px] md:text-xs mt-1.5 bg-gray-100 border border-black/10 px-1 rounded-sm">
                {k.key}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Help text */}
      <p className="text-center font-mono text-[10px] md:text-xs text-gray-400 uppercase leading-relaxed mt-2">
        Click keys with your mouse or press numbers 1 to 8 on your physical keyboard to compose a melody!
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

        {/* Interactive Piano Column */}
        <div className="w-full lg:w-2/3 sticky top-24">
          <SchoolPiano />
          <p className="text-center font-mono font-bold mt-4 bg-white inline-block px-4 py-1 border-2 border-black rounded-full shadow-sm mx-auto block w-fit">
            ⚡ Play the 8-bit piano keys above or jam with number keys 1 to 8!
          </p>
        </div>
      </div>
    </section>
  );
}
