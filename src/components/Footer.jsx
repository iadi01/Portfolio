export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-black text-white py-8 border-t-4 border-white mt-20 text-center selection:bg-custom-yellow selection:text-black">
      <h2 className="text-2xl font-shrikhand text-custom-pink mb-2">
        Contact Aditya Sharma
      </h2>
      <p className="text-sm text-gray-400 mb-4 font-mono font-bold">
        Email: adityasharma10@amityonline.com | Location: Jamshedpur, India
      </p>
      <p className="text-lg font-shrikhand text-white mb-2">
        Made with ☕, 💻, and a curious soul
      </p>
      <div className="text-xs text-gray-500">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
}

