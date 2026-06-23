import PageHeader from '@/components/PageHeader'
import { siteConfig } from '@/lib/site-config'

const phaseColors = {
  A: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500' },
  I: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', dot: 'bg-teal-500' },
  M: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500' },
}

const timelinePhaseColor = {
  Análisis: 'bg-blue-100 text-blue-700',
  Implementación: 'bg-teal-100 text-teal-700',
  Monitoreo: 'bg-purple-100 text-purple-700',
}

export default function ProcesosPage() {
  const { methodology } = siteConfig

  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Procesos"
        description={methodology.description}
        action={
          <a
            href={siteConfig.links.figjam}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm bg-card border border-border text-text-primary px-4 py-2 rounded-md hover:bg-surface transition-colors"
          >
            Ver funnels en FigJam
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        }
      />

      {/* Phase cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {methodology.phases.map((phase) => {
          const c = phaseColors[phase.id]
          return (
            <div key={phase.id} className={`rounded-lg border p-5 ${c.bg} ${c.border}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold ${c.text} bg-white/80`}>
                  {phase.id}
                </span>
                <h3 className={`font-semibold ${c.text}`}>{phase.name}</h3>
              </div>
              <p className="text-xs text-text-muted leading-relaxed mb-3">{phase.objective}</p>
              <p className={`text-xs font-medium ${c.text}`}>{phase.duration}</p>
            </div>
          )
        })}
      </div>

      {/* Detailed phases */}
      <div className="space-y-4 mb-8">
        {methodology.phases.map((phase) => {
          const c = phaseColors[phase.id]
          return (
            <div key={phase.id} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className={`px-5 py-3 border-b border-border flex items-center gap-3 ${c.bg}`}>
                <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold bg-white/80 ${c.text}`}>
                  {phase.id}
                </span>
                <span className={`font-semibold text-sm ${c.text}`}>{phase.name}</span>
                <span className="ml-auto text-xs text-text-muted">{phase.duration}</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-border">
                <div className="px-5 py-4">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Actividades</p>
                  <p className="text-sm text-text-primary leading-relaxed">{phase.activities}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Entregables</p>
                  <p className="text-sm text-text-primary leading-relaxed">{phase.deliverables}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Timeline */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-text-primary">Cronograma de 8 semanas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left px-5 py-3 text-xs font-medium text-text-muted w-16">Semana</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted">Actividad</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted">Fase</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-text-muted">Entregable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {methodology.timeline.map((row) => (
                <tr key={row.week} className="hover:bg-surface/60 transition-colors">
                  <td className="px-5 py-3 text-text-faint font-mono text-xs">S{row.week}</td>
                  <td className="px-4 py-3 text-text-primary font-medium">{row.activity}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${timelinePhaseColor[row.phase]}`}>
                      {row.phase}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-muted text-xs">{row.deliverable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-text-faint mt-4">
        Para el flujo completo de todos los funnels (Marketing, Ventas, Entrega, Operaciones), abre el{' '}
        <a href={siteConfig.links.figjam} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          tablero de FigJam
        </a>.
      </p>
    </div>
  )
}
