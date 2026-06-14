export default function MarqueeBanner() {
  const marqueeTexts = [
    "OPEN TO OPPORTUNITIES 🚀",
    "FULL-STACK ENGINEER 💻",
    "REACT • NODE • MONGODB • JAVA ⚡",
    "BUILDING REAL-WORLD PRODUCTS 🛠️",
    "AVAILABLE FOR INTERNSHIPS & ROLES 💼",
  ];

  return (
    <div className="w-full bg-custom-yellow border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative rotate-[-2deg] scale-105 z-20 my-10 selection:bg-custom-yellow selection:text-black">
      {/* Primary animated track */}
      <div className="animate-marquee inline-block font-shrikhand text-2xl">
        {marqueeTexts.map((text, idx) => (
          <span key={idx} className="mx-4">{text}</span>
        ))}
        {/* Duplicate list inside track */}
        {marqueeTexts.map((text, idx) => (
          <span key={`dup-${idx}`} className="mx-4">{text}</span>
        ))}
      </div>

      {/* Secondary absolute overlaid animated track for seamless gap fill */}
      <div className="animate-marquee inline-block font-shrikhand text-2xl absolute top-3 left-0">
        {marqueeTexts.map((text, idx) => (
          <span key={`abs-${idx}`} className="mx-4">{text}</span>
        ))}
        {marqueeTexts.map((text, idx) => (
          <span key={`abs-dup-${idx}`} className="mx-4">{text}</span>
        ))}
      </div>
    </div>
  );
}

