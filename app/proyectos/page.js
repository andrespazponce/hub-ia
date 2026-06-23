import PageHeader from '@/components/PageHeader'
import { siteConfig } from '@/lib/site-config'

export default function ProyectosPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Proyectos"
        description="Seguimiento de proyectos activos con clientes. Gestiona los detalles directamente en Notion."
        action={
          <a
            href={siteConfig.links.notion_proyectos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors"
          >
            Abrir en Notion
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        }
      />

      {/* Empty state */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-text-primary">Proyectos activos</h2>
        </div>
        <div className="px-5 py-16 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-text-faint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-text-primary mb-1">Sin proyectos activos aún</p>
          <p className="text-xs text-text-muted max-w-xs">
            Cuando tengas proyectos en curso, aparecerán aquí o los puedes gestionar desde Notion.
          </p>
          <a
            href={siteConfig.links.notion_proyectos}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xs text-accent hover:underline"
          >
            Crear primer proyecto en Notion
          </a>
        </div>
      </div>

      {/* Phases reference */}
      <div className="mt-6 bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-text-primary">Estructura de proyecto — Metodología AIM</h2>
        </div>
        <div className="p-5">
          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-6 relative">
              {siteConfig.methodology.phases.map((phase, i) => (
                <div key={phase.id} className="flex gap-4 pl-10 relative">
                  <div className="absolute left-3.5 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-white ring-1 ring-accent/30" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-text-primary">{phase.id}. {phase.name}</span>
                      <span className="text-xs text-text-muted">{phase.duration}</span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{phase.objective}</p>
                    <p className="text-xs text-text-faint mt-1">Entregables: {phase.deliverables}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
