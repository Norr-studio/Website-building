import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#111111] flex flex-col overflow-hidden">

      {/* Noise texture */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.045]" aria-hidden="true">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Glass card 1 — large, tilted left, center */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '55vw',
          height: '65vh',
          top: '8%',
          left: '22%',
          transform: 'rotate(-18deg)',
          borderRadius: '2.5rem',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(2px)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
        aria-hidden="true"
      />

      {/* Glass card 2 — smaller, tilted right, bottom-right */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '38vw',
          height: '50vh',
          top: '35%',
          left: '45%',
          transform: 'rotate(12deg)',
          borderRadius: '2.5rem',
          background: 'rgba(255,255,255,0.025)',
          backdropFilter: 'blur(1.5px)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
        aria-hidden="true"
      />

      {/* Glass card 3 — thin strip, bottom */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '30vw',
          height: '35vh',
          top: '55%',
          left: '8%',
          transform: 'rotate(-8deg)',
          borderRadius: '2rem',
          background: 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(1px)',
          border: '1px solid rgba(255,255,255,0.04)',
        }}
        aria-hidden="true"
      />

      {/* Subtle green glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
        style={{ background: 'radial-gradient(ellipse at top, rgba(0,229,160,0.06) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-7">
        <Image
          src="/logo.png"
          alt="Norr Studio"
          width={120}
          height={48}
          className="w-40 h-auto object-contain opacity-90"
          priority
        />
        <div className="text-right space-y-1">
          <p className="text-[#00E5A0] text-[9px] tracking-[0.2em] uppercase font-medium">Helsinki, Finland</p>
          <p className="text-[#333333] text-[9px] tracking-[0.2em] uppercase">Est. 2024</p>
        </div>
      </header>

      {/* Headline */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 md:px-6 mt-2">
        <h1
          className="font-bold text-white leading-[0.86] tracking-[-0.04em] select-none"
          style={{ fontSize: 'clamp(70px, 16.5vw, 260px)' }}
        >
          <span className="block">Coming</span>
          <span className="block" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)', color: 'transparent' }}>soon.</span>
        </h1>

        {/* Sub-section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-8 md:mt-10 px-1">
          <div>
            <p className="text-[#00E5A0] text-[9px] tracking-[0.2em] uppercase font-medium mb-3">
              ● Norr Studio
            </p>
            <p className="text-[#555555] text-sm md:text-base leading-relaxed max-w-[280px]">
              We&apos;re putting the finishing touches on something great.
            </p>
          </div>

          <a
            href="mailto:marijus@norrstudio.fi"
            className="inline-flex self-start items-center bg-[#00E5A0] text-[#111111] font-semibold text-sm px-7 py-3.5 rounded-full hover:opacity-90 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5A0] transition-opacity shadow-[0_0_40px_rgba(0,229,160,0.18)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1C1C1C] mt-8 px-6 md:px-10 py-4 flex items-center justify-between">
        <p className="text-[#2E2E2E] text-[9px] tracking-[0.2em] uppercase">Norr Studio</p>
        <p className="text-[#2E2E2E] text-[9px] tracking-[0.2em] uppercase">Helsinki · Finland</p>
        <p className="text-[#2E2E2E] text-[9px] tracking-[0.2em] uppercase">2025</p>
      </footer>

    </main>
  )
}
