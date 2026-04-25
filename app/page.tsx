import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-6">
        <Image
          src="/logo.png"
          alt="Norr Studio"
          width={250}
          height={100}
          className="w-40 h-auto object-contain"
          priority
        />

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
          Coming soon.
        </h1>

        <p className="text-[#888888] text-base md:text-lg max-w-xs leading-relaxed">
          We&apos;re putting the finishing touches on something great.
        </p>

        <a
          href="mailto:marijus@norrstudio.fi"
          className="mt-2 inline-flex items-center bg-[#00E5A0] text-[#111111] font-semibold text-sm px-8 py-3 rounded-full hover:opacity-90 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5A0] transition-opacity"
        >
          Get in touch
        </a>
      </div>

      <footer className="py-6 text-center">
        <p className="text-[#444444] text-xs">Norr Studio · Tampere, Finland</p>
      </footer>
    </main>
  )
}
