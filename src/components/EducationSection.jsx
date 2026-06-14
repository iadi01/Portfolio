import { useRef, useState, useEffect } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { education } from '../data/personalData';

function Chalkboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [chalkColor, setChalkColor] = useState('#ffffff');
  const [lineWidth, setLineWidth] = useState(4);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = chalkColor;
        ctx.lineWidth = lineWidth;
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas && canvas.parentElement) {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        tempCtx?.drawImage(canvas, 0, 0);

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(tempCanvas, 0, 0);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = chalkColor;
          ctx.lineWidth = lineWidth;
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [chalkColor, lineWidth]);

  const getCoordinates = (e, canvas) => {
    if ('touches' in e || (e.nativeEvent && 'touches' in e.nativeEvent)) {
      const touch = e.touches ? e.touches[0] : e.nativeEvent.touches[0];
      const rect = canvas.getBoundingClientRect();
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top
      };
    } else {
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY
      };
    }
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = chalkColor;
    ctx.lineWidth = lineWidth;
    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.getContext('2d')?.closePath();
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="h-[400px] md:h-[600px] w-full bg-[#2a2a2a] border-8 border-custom-yellow rounded-3xl shadow-neo relative overflow-hidden group">
      {/* Chalkboard texture pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-chalk.png')]" />
      
      {/* Chalk Controls toolbar */}
      <div className="absolute top-4 left-4 z-10 flex gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-xl border-2 border-white/20">
        <button
          onClick={() => {
            setChalkColor('#ffffff');
            setLineWidth(4);
          }}
          className={`p-2 rounded-lg transition-all cursor-pointer ${chalkColor === '#ffffff' ? 'bg-white text-black scale-110' : 'text-white hover:bg-white/20'}`}
          title="White Chalk"
        >
          <FaPencilAlt />
        </button>
        <button
          onClick={() => {
            setChalkColor('#FCD34D');
            setLineWidth(4);
          }}
          className={`p-2 rounded-lg transition-all cursor-pointer ${chalkColor === '#FCD34D' ? 'bg-custom-yellow text-black scale-110' : 'text-custom-yellow hover:bg-white/20'}`}
          title="Yellow Chalk"
        >
          <FaPencilAlt />
        </button>
        <button
          onClick={() => {
            setChalkColor('#F87171');
            setLineWidth(4);
          }}
          className={`p-2 rounded-lg transition-all cursor-pointer ${chalkColor === '#F87171' ? 'bg-custom-red text-black scale-110' : 'text-custom-red hover:bg-white/20'}`}
          title="Red Chalk"
        >
          <FaPencilAlt />
        </button>
        
        <div className="w-px bg-white/30 mx-1" />

        <button
          onClick={clearCanvas}
          className="p-2 text-white hover:text-red-400 hover:rotate-12 transition-all cursor-pointer"
          title="Clear Board"
        >
          <FaTrash />
        </button>
      </div>

      {/* Board Placeholder Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 font-shrikhand text-4xl pointer-events-none select-none">
        DRAW HERE!
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className="cursor-crosshair w-full h-full relative z-0 touch-none"
      />
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

        {/* Chalkboard Column */}
        <div className="w-full lg:w-2/3 sticky top-24">
          <Chalkboard />
          <p className="text-center font-mono font-bold mt-4 bg-white inline-block px-4 py-1 border-2 border-black rounded-full shadow-sm mx-auto block w-fit">
            ✨ Bored? Doodle something cool!
          </p>
        </div>
      </div>
    </section>
  );
}

