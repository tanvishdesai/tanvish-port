import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-black/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/60">Tanvish Desai</p>
          <p className="mt-1 text-sm text-black/65">AI/ML Researcher and Full-stack Builder</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/TanvishDesai"
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black/80"
          >
            <Github size={15} />
            GitHub Profile
          </a>
          <p className="text-xs text-black/55">{new Date().getFullYear()} Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
