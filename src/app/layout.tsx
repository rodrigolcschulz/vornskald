import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vornskald | Rune Translator',
  description: 'Convert Latin text into Elder Futhark runes and explore their meanings',
  keywords: ['runes', 'Elder Futhark', 'translator', 'runic', 'Germanic'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-nordic-bg via-nordic-surface to-nordic-bg text-nordic-text">
        <header className="border-b border-nordic-border backdrop-blur-sm bg-nordic-surface/80 py-3 sm:py-4 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            <Link 
              href="/" 
              className="font-rune text-2xl sm:text-3xl font-bold bg-gradient-to-r from-nordic-gold via-nordic-bronze to-nordic-copper bg-clip-text text-transparent hover:opacity-80 transition"
            >
              Vornskald
            </Link>
            <nav className="flex gap-4 sm:gap-8">
              <Link 
                href="/" 
                className="text-xs sm:text-sm font-medium text-nordic-subtext hover:text-nordic-gold transition relative group"
              >
                <span className="hidden sm:inline">Transcriber</span>
                <span className="sm:hidden">STT</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-nordic-gold to-nordic-bronze group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/runes" 
                className="text-xs sm:text-sm font-medium text-nordic-subtext hover:text-nordic-gold transition relative group"
              >
                Runes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-nordic-gold to-nordic-bronze group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/gods" 
                className="text-xs sm:text-sm font-medium text-nordic-subtext hover:text-nordic-gold transition relative group"
              >
                Gods
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-nordic-gold to-nordic-bronze group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-nordic-border bg-nordic-surface/50 backdrop-blur-sm py-4 sm:py-6 mt-12 sm:mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs sm:text-sm text-nordic-subtext">Vornskald</p>
            <p className="text-xs text-nordic-subtext/60 mt-1 sm:mt-2">Elder Futhark | Rune Wisdom</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
