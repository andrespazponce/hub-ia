import PageHeader from '@/components/PageHeader'
import { siteConfig } from '@/lib/site-config'

const externalResources = [
  {
    category: 'Notion — Workspace',
    items: [
      { label: 'Hub principal', description: 'Página raíz del workspace', href: siteConfig.links.notion_hub },
      { label: 'To-Dos y tareas', description: 'Base de datos de pendientes', href: siteConfig.links.notion_todos },
      { label: 'Procesos internos', description: 'Documentación de procesos', href: siteConfig.links.notion_procesos },
      { label: 'Proyectos', description: 'Gestión de proyectos con clientes', href: siteConfig.links.notion_proyectos },
      { label: 'Empresa', description: 'Información corporativa', href: siteConfig.links.notion_empresa },
    ],
  },
  {
    category: 'Diseño y Flujos',
    items: [
      { label: 'FigJam — Funnels', description: 'Mapa de todos los funnels del negocio', href: siteConfig.links.figjam },
    ],
  },
]

export default function RecursosPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader
        title="Recursos"
        description="Links, herramientas y materiales clave para el equipo."
      />

      {/* Tools overview */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { name: 'Notion', desc: 'Gestión del conocimiento, tareas y proyectos', color: 'bg-gray-50 border-gray-200' },
          { name: 'FigJam', desc: 'Visualización de procesos y funnels de negocio', color: 'bg-orange-50 border-orange-200' },
          { name: 'Claude Cowork', desc: 'Automatización, IA y generación de entregables', color: 'bg-violet-50 border-violet-200' },
        ].map((tool) => (
          <div key={tool.name} className={`rounded-lg border p-4 ${tool.color}`}>
            <p className="font-semibold text-sm text-text-primary mb-1">{tool.name}</p>
            <p className="text-xs text-text-muted leading-relaxed">{tool.desc}</p>
          </div>
        ))}
      </div>

      {/* Links grouped */}
      {externalResources.map((group) => (
        <div key={group.category} className="mb-6 bg-card border border-border rounded-lg overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="text-sm font-semibold text-text-primary">{group.category}</h2>
          </div>
          <div className="divide-y divide-border">
            {group.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3.5 hover:bg-surface transition-colors group"
              >
                <div>
                  <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {item.label}
                  </p>
                  <p className="text-xs text-text-muted">{item.description}</p>
                </div>
                <svg className="w-4 h-4 text-text-faint group-hover:text-accent transition-colors flex-shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Services list */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-text-primary">Servicios de la empresa</h2>
        </div>
        <div className="divide-y divide-border">
          {siteConfig.services.map((service, i) => (
            <div key={i} className="px-5 py-4">
              <p className="text-sm font-medium text-text-primary mb-1">{service.name}</p>
              <p className="text-xs text-text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-6 bg-accent/5 border border-accent/20 rounded-lg px-5 py-4">
        <p className="text-sm font-medium text-text-primary mb-1">Contacto del equipo</p>
        <p className="text-sm text-text-muted">{siteConfig.company.email}</p>
      </div>
    </div>
  )
}
