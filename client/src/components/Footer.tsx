export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white py-10 text-center text-gray-500">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4">
        <div className="flex gap-4 text-sm font-medium">
          <a
            href="https://github.com/ArtakN/recipe-radar"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-200 px-4 py-2 text-gray-600 transition-colors hover:border-emerald-500 hover:text-emerald-600">
            GitHub Repo
          </a>
          <a
            href="https://portfolio-app-94139.web.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-200 px-4 py-2 text-gray-600 transition-colors hover:border-emerald-500 hover:text-emerald-600">
            View Portfolio
          </a>
        </div>

        <p className="text-sm text-gray-500">© 2026 Recipe Radar. All rights reserved.</p>

        <p className="max-w-lg text-center text-xs italic text-gray-400">
          Recipe Radar provides content for informational purposes only and is not a replacement for
          professional dietary or medical advice.
        </p>
      </div>
    </footer>
  );
}
