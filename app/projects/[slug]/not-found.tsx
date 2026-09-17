import Link from 'next/link';
import { ArrowLeft, Home, FolderGit2 } from 'lucide-react';

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-[#08090d] text-[#e2e8f0]">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[#0c0e17]/80 border border-white/10 backdrop-blur-2xl shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
          <FolderGit2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
            PROJECT NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            Case Study Missing
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The project slug you attempted to access does not exist in the active project database.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-black font-semibold text-xs transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Projects</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
