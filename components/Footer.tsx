export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-sm gradient-text">Tanvish Desai</span>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} &mdash; Designed & built with Next.js
        </p>
      </div>
    </footer>
  );
}
