import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  return (
    <main className="grid min-h-dvh lg:grid-cols-[1fr_1fr]">
      <section className="flex flex-col"></section>
      <section className="flex h-full min-h-0 bg-slate-300"></section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
