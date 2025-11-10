import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 mt-20 py-10 flex flex-col items-center text-gray-500">
      {/* Соцсети */}
      <div className="flex gap-6 mb-6">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <Facebook className="w-6 h-6 hover:text-emerald-500 transition-colors" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram className="w-6 h-6 hover:text-emerald-500 transition-colors" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <Youtube className="w-6 h-6 hover:text-emerald-500 transition-colors" />
        </a>
      </div>

      <p className="text-sm text-gray-500">© 2025 Recipe Radar. All Rights Reserved.</p>

      <p className="text-xs italic text-gray-400 mt-2 text-center max-w-lg">
        Recipe Radar provides content for informational and educational purposes only. It is not
        intended to replace professional dietary or medical advice.
      </p>
    </footer>
  );
}
