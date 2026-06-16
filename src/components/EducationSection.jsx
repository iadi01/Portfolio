import { useRef, useState, useEffect } from 'react';
import { education } from '../data/personalData';
import { audioSynth } from '../utils/audioSynth';

function AcademyTerminal() {
  const [activeTab, setActiveTab] = useState('report');
  const [gameState, setGameState] = useState('idle'); // idle, waiting, ready, result, early
  const [startTime, setStartTime] = useState(0);
  const [score, setScore] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [highScore, setHighScore] = useState(() => {
    try {
      const saved = localStorage.getItem('aadi-reflex-highscore');
      return saved ? parseInt(saved, 10) : null;
    } catch {
      return null;
    }
  });

  const startTest = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setGameState('waiting');
    setScore(null);
    audioSynth.playTone(300, 'sine', 0.05, 0.08);

    const delay = 1500 + Math.random() * 2500; // 1.5s - 4s
    const id = setTimeout(() => {
      setGameState('ready');
      setStartTime(Date.now());
      audioSynth.playTone(880, 'sine', 0.1, 0.12);
    }, delay);
    setTimeoutId(id);
  };

  const handleScreenClick = () => {
    if (gameState === 'waiting') {
      if (timeoutId) clearTimeout(timeoutId);
      setGameState('early');
      audioSynth.playTone(150, 'sawtooth', 0.2, 0.15);
    } else if (gameState === 'ready') {
      const clickTime = Date.now() - startTime;
      setScore(clickTime);
      setGameState('result');
      audioSynth.playChirp();

      if (!highScore || clickTime < highScore) {
        setHighScore(clickTime);
        try {
          localStorage.setItem('aadi-reflex-highscore', clickTime.toString());
        } catch (e) {
          console.warn("Storage write blocked", e);
        }
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const getRank = (time) => {
    if (time < 150) return { title: 'GODLIKE SPEED ⚡', remark: 'Are you a CPU?' };
    if (time < 250) return { title: 'SENIOR DEVELOPER 🚀', remark: 'Ultra-fast reflexes!' };
    if (time < 400) return { title: 'JUNIOR DEVELOPER 🐢', remark: 'Standard human speed.' };
    return { title: 'COMPILING... ☕', remark: 'Wake up, get some coffee!' };
  };

  const reportCard = [
    { subject: 'Data Structures & Algorithms', score: 'O', percent: 100 },
    { subject: 'Web Application Dev', score: 'O', percent: 100 },
    { subject: 'Java Core & Spring Boot', score: 'A+', percent: 90 },
    { subject: 'Database Management (SQL)', score: 'A+', percent: 90 },
    { subject: 'Creative Problem Solving', score: 'O', percent: 100 },
  ];

  const remarks = [
    '• "Attentive in labs, but wireframes standard desks during lectures."',
    '• "Caught compiling React components while professor discussed assembly language."',
    '• "Highly creative and writes code under the desk."',
    '• "Result: Pass with flying colors. Code speaks loader than words."',
  ];

  return (
    <div className="h-[400px] md:h-[500px] w-full bg-[#1e1e1e] border-8 border-black rounded-3xl shadow-neo relative overflow-hidden flex flex-col font-mono text-[#4ade80]">
      {/* CRT Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-15"
        style={{
          backgroundImage: 'repeating-linear-gradient(rgba(0, 0, 0, 0.3) 0px, rgba(0, 0, 0, 0.3) 1px, transparent 1px, transparent 3px)'
        }}
      />

      {/* Terminal Title Bar */}
      <div className="bg-black text-[#4ade80] px-4 py-2.5 border-b-4 border-black flex justify-between items-center text-xs">
        <span className="font-bold flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] inline-block animate-pulse"></span>
          AadiOS v1.0 - ACADEMY_TERMINAL.EXE
        </span>
        <span className="text-gray-500">SYS_OK</span>
      </div>

      {/* Terminal Menu Tabs */}
      <div className="bg-black/40 border-b-2 border-black flex flex-wrap gap-1 p-2">
        <button
          onClick={() => {
            audioSynth.playClick();
            setActiveTab('report');
          }}
          className={`px-3 py-1.5 rounded-lg border-2 border-black font-bold text-xs cursor-pointer transition-all ${
            activeTab === 'report' ? 'bg-[#4ade80] text-black shadow-sm' : 'bg-black text-[#4ade80] hover:bg-black/60'
          }`}
        >
          [📊 REPORT_CARD]
        </button>
        <button
          onClick={() => {
            audioSynth.playClick();
            setActiveTab('remarks');
          }}
          className={`px-3 py-1.5 rounded-lg border-2 border-black font-bold text-xs cursor-pointer transition-all ${
            activeTab === 'remarks' ? 'bg-[#4ade80] text-black shadow-sm' : 'bg-black text-[#4ade80] hover:bg-black/60'
          }`}
        >
          [📝 REMARKS]
        </button>
        <button
          onClick={() => {
            audioSynth.playClick();
            setActiveTab('reflex');
          }}
          className={`px-3 py-1.5 rounded-lg border-2 border-black font-bold text-xs cursor-pointer transition-all ${
            activeTab === 'reflex' ? 'bg-[#4ade80] text-black shadow-sm' : 'bg-black text-[#4ade80] hover:bg-black/60'
          }`}
        >
          [⚡ REFLEX_TEST]
        </button>
      </div>

      {/* Main Terminal Screen */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto relative flex flex-col justify-between text-xs md:text-sm bg-black/90">
        
        {activeTab === 'report' && (
          <div className="flex flex-col gap-4">
            <div className="text-[#86efac] font-bold uppercase tracking-wider text-xs border-b border-[#4ade80]/30 pb-1">
              *** STUDENT ACADEMIC SCORE CARD v1.0 ***
            </div>
            <div className="flex flex-col gap-3">
              {reportCard.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-1.5">
                  <span className="truncate text-[#86efac]">{item.subject}</span>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-[#a7f3d0]">
                      {'['}
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className={i < item.percent / 10 ? 'text-[#4ade80]' : 'text-gray-800'}>
                          █
                        </span>
                      ))}
                      {']'}
                    </span>
                    <span className="font-bold text-[#4ade80] bg-[#4ade80]/10 px-1.5 py-0.5 rounded border border-[#4ade80]/20 min-w-[28px] text-center">
                      {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'remarks' && (
          <div className="flex flex-col gap-4">
            <div className="text-[#86efac] font-bold uppercase tracking-wider text-xs border-b border-[#4ade80]/30 pb-1">
              *** FACULTY PORTAL NOTES & REMARKS ***
            </div>
            <div className="flex flex-col gap-3 leading-relaxed text-[#a7f3d0]">
              {remarks.map((remark, idx) => (
                <div key={idx} className="bg-black/30 p-2 rounded border border-[#4ade80]/20">
                  {remark}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reflex' && (
          <div className="flex-1 flex flex-col">
            <div className="text-[#86efac] font-bold uppercase tracking-wider text-xs border-b border-[#4ade80]/30 pb-1 mb-4">
              *** BRAIN_REFLEX_COMPILER_TEST.EXE ***
            </div>
            
            <div 
              onClick={handleScreenClick}
              className={`flex-1 rounded-2xl border-4 border-black flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all duration-150 select-none ${
                gameState === 'idle' ? 'bg-[#18181b] hover:bg-[#27272a] text-[#4ade80]' :
                gameState === 'waiting' ? 'bg-[#b91c1c]/20 text-[#fca5a5] border-dashed animate-pulse' :
                gameState === 'ready' ? 'bg-[#22c55e] text-black font-black border-double shadow-[0_0_15px_rgba(34,197,94,0.5)]' :
                gameState === 'result' ? 'bg-[#1e1b4b] text-[#c084fc] border-[#c084fc]/50' :
                'bg-[#7f1d1d] text-[#fca5a5]' // early
              }`}
            >
              {gameState === 'idle' && (
                <div className="flex flex-col items-center gap-3">
                  <span className="text-3xl">🕹️</span>
                  <p className="font-bold text-xs md:text-sm">TEST YOUR CODER REFLEXES</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      startTest();
                    }}
                    className="bg-[#4ade80] text-black px-4 py-2 rounded-xl border-2 border-black font-bold text-xs shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none cursor-pointer"
                  >
                    START COMPILER TEST
                  </button>
                  {highScore && <p className="text-[10px] text-gray-500 mt-2">PERSONAL HIGH SCORE: {highScore}ms</p>}
                </div>
              )}

              {gameState === 'waiting' && (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl animate-bounce">⚙️</span>
                  <p className="font-black text-sm uppercase tracking-widest text-[#fca5a5]">COMPILING COMPILER...</p>
                  <p className="text-[10px] opacity-75">Click as soon as the screen flashes green!</p>
                </div>
              )}

              {gameState === 'ready' && (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-4xl animate-ping">💥</span>
                  <p className="text-lg md:text-xl font-black tracking-widest uppercase text-black">CLICK NOW!</p>
                  <p className="text-xs font-bold uppercase opacity-80 text-black">COMPILE_SUCCESS!!</p>
                </div>
              )}

              {gameState === 'result' && score && (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">🚀</span>
                  <p className="font-bold text-xs">COMPILE SPEED: <span className="text-[#facc15] font-black text-sm">{score}ms</span></p>
                  <div className="bg-black/60 px-3 py-1.5 rounded-lg border border-[#4ade80]/20 max-w-[250px] mt-1">
                    <p className="font-black text-[#a7f3d0] text-xs uppercase">{getRank(score).title}</p>
                    <p className="text-[10px] text-[#86efac] mt-0.5">{getRank(score).remark}</p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      startTest();
                    }}
                    className="bg-[#4ade80] text-black px-3 py-1.5 rounded-lg border border-black font-bold text-[10px] shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none cursor-pointer mt-3"
                  >
                    RETEST
                  </button>
                </div>
              )}

              {gameState === 'early' && (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-3xl">⚠️</span>
                  <p className="font-bold text-xs text-[#ef4444] uppercase">ERR: FALSE START!</p>
                  <p className="text-[10px] max-w-[200px]">You clicked before compilation finished.</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      startTest();
                    }}
                    className="bg-[#ef4444] text-white px-3 py-1.5 rounded-lg border border-black font-bold text-[10px] shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none cursor-pointer mt-3"
                  >
                    TRY AGAIN
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="text-[10px] text-gray-500 flex justify-between border-t border-[#4ade80]/20 pt-2 mt-4 font-mono">
          <span>PORT: 8080</span>
          <span>AADI_SHARMA_ACADEMICS</span>
        </div>
      </div>
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

        {/* CRT Terminal Column */}
        <div className="w-full lg:w-2/3 sticky top-24">
          <AcademyTerminal />
          <p className="text-center font-mono font-bold mt-4 bg-white inline-block px-4 py-1 border-2 border-black rounded-full shadow-sm mx-auto block w-fit">
            ⚡ Click the interactive terminal tabs to view Aadi's records!
          </p>
        </div>
      </div>
    </section>
  );
}
