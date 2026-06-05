import { LetterBook } from './components/LetterBook'
import { Heart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0505] text-rose-100 flex flex-col items-center justify-center p-4 sm:p-8 overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
      </div>

      <header className="relative z-10 mb-12 text-center">
        <div className="flex justify-center mb-4">
          <Heart className="w-12 h-12 text-rose-600 animate-pulse fill-rose-600/20" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200 tracking-tighter mb-2">
          Для моей любимой Елены
        </h1>
        <p className="text-rose-400/60 font-mono text-sm tracking-widest uppercase">
          С любовью от твоего мужа
        </p>
      </header>

      <main className="relative z-10 w-full">
        <LetterBook />
      </main>

      <footer className="relative z-10 mt-16 text-center text-rose-400/30 text-xs font-mono tracking-[0.2em] uppercase pb-8">
        Навсегда и вовек • 2026
      </footer>
    </div>
  )
}

export default App
