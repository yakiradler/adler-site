import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-xl px-5 py-3 inline-block opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src="/product/logo.jpg"
              alt="ADLER Tefillin Bags"
              width={110}
              height={61}
              className="object-contain"
            />
          </div>
        </div>
        <div className="text-zinc-600 text-sm space-y-1">
          <p>מגן תפילין. ברמה אחרת.</p>
          <p className="mt-4 text-zinc-700 text-xs">&copy; 2026 ADLER. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
