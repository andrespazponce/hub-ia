import PageHeader from '@/components/PageHeader'
import { siteConfig } from '@/lib/site-config'

const priorityOrder = { Alta: 0, Media: 1, Baja: 2 }
const priorityDot = {
  Alta: 'bg-priority-high',
  Media: 'bg-priority-med',
  Baja: 'bg-priority-low',
}
const priorityBadge = {
  Alta: 'text-priority-high bg-red-50 border border-red-100',
  Media: 'text-priority-med bg-amber-50 border border-amber-100',
  Baja: 'text-priority-low bg-green-50 border border-green-100',
}

const areas = [...new Set(siteConfig.todos.map(t => t.area))]

export default function TodosPage() {
  const sorted = [...siteConfig.todos].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  )

  return (
    <div className="max-w-4xl">
      <PageHeader
        title="To-Dos"
        description="Tareas de lanzamiento de la empresa. Edita y gestiona directamente en Notion."
        action={
          <a
            href={siteConfig.links.notion_todos}
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

      {/* Summary row */}
      <div className="flex items-center gap-4 mb-6">
        {['Alta', 'Media', 'Baja'].map((p) => {
          const count = siteConfig.todos.filter(t => t.priority === p).length
          return (
            <div key={p} className="flex items-center gap-2 text-sm text-text-muted">
              <span className={`w-2 h-2 rounded-full ${priorityDot[p]}`} />
              <span>{count} {p} prioridad</span>
            </div>
          )
        })}
      </div>

      {/* Group by area */}
      {areas.map((area) => {
        const tasks = sorted.filter(t => t.area === area)
        return (
          <div key={area} className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 px-1">
              {area}
            </h2>
            <div className="bg-card border border-border rounded-lg overflow-hidden divide-y divide-border">
              {tasks.map((todo) => (
                <a
                  key={todo.id}
                  href={todo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 px-5 py-4 hover:bg-surface transition-colors group"
                >
                  <span className="text-xs font-mono text-text-faint pt-0.5 w-8 flex-shrink-0">
                    {todo.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                      {todo.task}
                    </p>
                    {todo.notes && (
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">{todo.notes}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-text-faint">{todo.assignee}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityBadge[todo.priority]}`}>
                      {todo.priority}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )
      })}

      <div className="mt-4 flex items-center justify-between text-xs text-text-faint border-t border-border pt-4">
        <span>{siteConfig.todos.length} tareas en total</span>
        <a
          href={siteConfig.links.notion_todos}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Agregar nueva tarea en Notion
        </a>
      </div>
    </div>
  )
}
