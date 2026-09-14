export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 relative z-10 selection:bg-accent selection:text-white">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border bg-surface text-xs font-mono text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>PROJECT BASE INITIALIZED</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-primary">
          DIMAS<span className="text-accent">.DEV</span>
        </h1>

        <p className="font-body text-secondary text-sm sm:text-base leading-relaxed">
          Pondasi teknis portfolio interaktif telah siap. Konfigurasi design token, font Google, custom cursor, dan layout dock navigasi telah aktif.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <div 
            data-cursor="view" 
            className="w-full sm:w-auto px-5 py-3 rounded-lg border border-border bg-surface/60 hover:border-accent/40 transition-colors text-xs font-mono text-secondary hover:text-primary cursor-none select-none"
          >
            [HOVER TO TEST VIEW CURSOR]
          </div>
        </div>

        <div className="pt-4 border-t border-border flex justify-between items-center text-xs font-mono text-secondary">
          <span>STATUS</span>
          <span className="text-primary font-medium">PHASE 01 : BASE READY</span>
        </div>
      </div>
    </main>
  );
}

