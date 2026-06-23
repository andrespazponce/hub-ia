export default function PageHeader({ title, description, action }) {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary tracking-tight">{title}</h1>
        {description && (
          <p className="text-text-muted text-sm mt-1 max-w-2xl">{description}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0 ml-4">{action}</div>}
    </div>
  )
}
