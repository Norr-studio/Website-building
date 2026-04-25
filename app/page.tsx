import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#111111] flex flex-col overflow-hidden">

      {/* SVG noise texture */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.035]" aria-hidden="true">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Radial accent glow */}
      <div
        className="pointer-events-none absolute -top-64 -left-64 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,229,160,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center px-8 md:px-20 max-w-4xl">

        {/* Logo */}
        <div className="mb-16">
          <Image
            src="/logo.png"
            alt="Norr Studio"
            width={250}
            height={100}
            className="w-28 h-auto object-contain"
            priority
          />
        </div>

        {/* Eyebrow */}
        <p className="text-[#00E5A0] text-xs tracking-widest uppercase mb-6 font-medium">
          ● Norr Studio
        </p>

        {/* Headline */}
        <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-8">
          Coming<br />soon.
        </h1>

        {/* Subline */}
        <p className="text-[#888888] text-lg max-w-sm leading-relaxed mb-10">
          We&apos;re putting the finishing touches on something great.
        </p>

        {/* Button */}
        <div>
          <a
            href="mailto:marijus@norrstudio.fi"
            className="inline-flex items-center bg-[#00E5A0] text-[#111111] font-semibold text-sm px-8 py-3.5 rounded-full hover:opacity-90 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5A0] transition-opacity shadow-[0_0_24px_rgba(0,229,160,0.25)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-[#1E1E1E] px-8 md:px-20 py-5 flex items-center justify-between">
        <p className="text-[#444444] text-xs">Norr Studio · Helsinki, Finland</p>
        <p className="text-[#444444] text-xs">2025</p>
      </footer>

    </main>
  )
}
