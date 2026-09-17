import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-[#0c0c0c] text-[#f5f5f0]">
      <div className="relative z-10 max-w-lg w-full text-center space-y-8 p-10 rounded-3xl bg-[#141414] border border-white/10 shadow-2xl">
        <span className="font-mono text-xs px-4 py-1.5 rounded-full bg-[#fabb02]/10 text-[#fabb02] border border-[#fabb02]/25 inline-block uppercase tracking-wider">
          404 • Page Not Found
        </span>

        <h1 className="font-editorial text-4xl sm:text-5xl font-medium tracking-tight text-[#f5f5f0]">
          Nothing Here.
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#a6a6a6] font-light leading-relaxed max-w-md mx-auto">
          The project, route, or archive entry you requested is unavailable or has been relocated.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#fabb02] text-[#0c0c0c] font-semibold tracking-wider uppercase hover:bg-[#ffd147] transition-all"
          >
            Return to Overview
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1a1a1a] hover:bg-[#222222] border border-white/15 text-[#f5f5f0] hover:text-[#fabb02] tracking-wider uppercase transition-colors"
          >
            All Projects Directory →
          </Link>
        </div>
      </div>
    </div>
  );
}
