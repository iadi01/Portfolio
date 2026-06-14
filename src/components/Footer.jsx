export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 border-t-4 border-white mt-20 text-center selection:bg-custom-yellow selection:text-black">
      <h2 className="text-2xl font-shrikhand text-custom-pink mb-2">
        Made with ☕, 💻, and a curious soul
      </h2>
      <div className="text-xs text-gray-500">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
}

