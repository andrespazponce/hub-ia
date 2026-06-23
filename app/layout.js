import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Hub IA — Empresa de Automatización e Inteligencia Artificial',
  description: 'Centro de operaciones interno: proyectos, procesos, to-dos y recursos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-surface">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 ml-60 overflow-y-auto">
            <div className="px-8 py-8 min-h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
