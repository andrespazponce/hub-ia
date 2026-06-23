import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { siteConfig } from '@/lib/site-config'

const priorityColor = {
  Alta: 'text-priority-high bg-red-50',
  Media: 'text-priority-med bg-amber-50',
  Baja: 'text-priority-low bg-green-50',
}

export default function OverviewPage() {
  const highPriorityTodos = siteConfig.todos.filter(t => t.priority === 'Alta')
  const allTodos = siteConfig.todos

  return (
    <div className="max-w-5xl">
      <PageHeader
        title="Overview"
        description={siteConfig.company.tagline}
      />

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Tareas totales', value: allTodos.length },
          { label: 'Alta prioridad', value: highPriorityTodos.length },
          { label: 'Equipo', value: siteConfig.team.length },
          { label: 'Servicios', value: siteConfig.services.length },
        ].map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-lg px-5 py-4">
            <p className="text-3xl font-semibold text-text-primary">{stat.value}</p>
            <p className="text-sm text-text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Pending tasks */}
        <div className="col-span-2 bg-card border border-border rounded-lg overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h2 className="text-sm font-semibold text-text-primary">Tareas pendientes</h2>
            <Link
              href="/todos"
              className="text-xs text-accent hover:underline"
            >
              Ver todas
            </Link>
          </div>
          <div className="divide-y divide-border">
            {allTodos.slice(0, 5).map((todo) => (
              <a
                key={todo.id}
                href={todo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-3 hover:bg-surface transition-colors group"
              >
                <span className="text-xs font-mono text-text-faint w-8 flex-shrink-0">{todo.id}</span>
                <span className="flex-1 text-sm text-text-primary group-hover:text-accent transition-colors truncate">
                  {todo.task}
                </span>
                <span className="text-xs text-text-muted flex-shrink-0">{todo.area}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${priorityColor[todo.priority]}`}>
                  {todo.priority}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Methodology card */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <h2 className="text-sm font-semibold text-text-primary">Metodología AIM</h2>
            </div>
            <div className="p-5 space-y-3">
              {siteConfig.methodology.phases.map((phase) => (
                <div key={phase.id} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-accent/10 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {phase.id}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{phase.name}</p>
                    <p className="text-xs text-text-muted">{phase.duration}</p>
                  </div>
                </div>
              ))}
              <Link
                href="/procesos"
                className="block mt-2 text-xs text-accent hover:underline"
              >
                Ver metodología completa
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <h2 className="text-sm font-semibold text-text-primary">Accesos directos</h2>
            </div>
            <div className="p-3 space-y-1">
              {[
                { label: 'Notion — Hub', href: siteConfig.links.notion_hub },
                { label: 'Notion — To-Dos', href: siteConfig.links.notion_todos },
                { label: 'FigJam — Funnels', href: siteConfig.links.figjam },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-text-muted hover:bg-surface hover:text-text-primary transition-colors group"
                >
                  <span>{link.label}</span>
                  <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mt-6 bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-text-primary">Servicios que ofrecemos</h2>
        </div>
        <div className="grid grid-cols-3 gap-0 divide-x divide-border">
          {siteConfig.services.map((service, i) => (
            <div key={i} className="px-5 py-4">
              <p className="text-sm font-medium text-text-primary mb-1">{service.name}</p>
              <p className="text-xs text-text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
