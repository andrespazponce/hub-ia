export const siteConfig = {
  company: {
    name: '[Nombre de la Empresa]',
    tagline: 'Inteligencia Artificial, Tecnología y Automatización de Procesos',
    email: 'andrespazponce@gmail.com',
  },

  team: [
    { name: 'Andrés', role: '[Definir rol]' },
    { name: '[Hermano]', role: '[Definir rol]' },
  ],

  links: {
    notion_hub: 'https://app.notion.com/p/3885fc2f0c548136b25efaef48b86e78',
    notion_todos: 'https://app.notion.com/p/563d49d5e59e4af389368acd739d3703',
    notion_procesos: 'https://app.notion.com/p/3885fc2f0c5481fbaee8cdeb10f108aa',
    notion_proyectos: 'https://app.notion.com/p/3885fc2f0c5481978cfdd3aef53a576f',
    notion_empresa: 'https://app.notion.com/p/3885fc2f0c548187b4e9cd928b9123ee',
    figjam: 'https://www.figma.com/board/RHxURsUU2inhNFeZBJcaan',
  },

  nav: [
    { label: 'Overview', href: '/' },
    { label: 'To-Dos', href: '/todos' },
    { label: 'Procesos', href: '/procesos' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Recursos', href: '/recursos' },
  ],

  todos: [
    {
      id: 'T01',
      task: 'Definir nombre y branding de la empresa',
      area: 'General',
      priority: 'Alta',
      assignee: 'Andrés',
      notes: 'Logo, paleta de colores, nombre legal y comercial.',
      url: 'https://app.notion.com/p/3885fc2f0c5481ac818af8147cd9c2f3',
    },
    {
      id: 'T02',
      task: 'Completar sección Quiénes Somos en el Hub',
      area: 'General',
      priority: 'Alta',
      assignee: 'Andrés',
      notes: 'Llenar misión, visión, diferenciadores y datos de contacto.',
      url: 'https://app.notion.com/p/3885fc2f0c5481bf8808cb555ff937ce',
    },
    {
      id: 'T03',
      task: 'Definir roles y responsabilidades del equipo',
      area: 'Operaciones',
      priority: 'Alta',
      assignee: 'Andrés',
      notes: 'Quién lidera ventas, quién lidera entrega, quién maneja operaciones.',
      url: 'https://app.notion.com/p/3885fc2f0c54810caa4bd7b95db58022',
    },
    {
      id: 'T04',
      task: 'Preparar deck de ventas inicial',
      area: 'Ventas',
      priority: 'Alta',
      assignee: 'Andrés',
      notes: 'Basarse en matrices de trabajo y flowchart de FigJam.',
      url: 'https://app.notion.com/p/3885fc2f0c5481d58222e6a9f535b841',
    },
    {
      id: 'T05',
      task: 'Definir precios y paquetes de servicios',
      area: 'Ventas',
      priority: 'Alta',
      assignee: 'Andrés',
      notes: 'Al menos 2-3 paquetes diferenciados (proyecto, horas, soporte).',
      url: 'https://app.notion.com/p/3885fc2f0c5481d69dbef36e35bb4f78',
    },
    {
      id: 'T06',
      task: 'Identificar y contactar 5 primeros prospectos',
      area: 'Ventas',
      priority: 'Alta',
      assignee: 'Andrés',
      notes: 'Prioridad: empresas medianas con procesos manuales en Excel.',
      url: 'https://app.notion.com/p/3885fc2f0c5481929ac6c5a526da896a',
    },
    {
      id: 'T07',
      task: 'Definir estrategia de contenido en redes sociales',
      area: 'Marketing',
      priority: 'Media',
      assignee: 'Andrés',
      notes: 'LinkedIn como canal principal para B2B.',
      url: 'https://app.notion.com/p/3885fc2f0c5481c08e76d10c731892e0',
    },
    {
      id: 'T08',
      task: 'Configurar stack de herramientas del equipo',
      area: 'Operaciones',
      priority: 'Media',
      assignee: 'Andrés',
      notes: 'Notion, Figma, Claude Cowork, herramienta de facturación, correo corporativo.',
      url: 'https://app.notion.com/p/3885fc2f0c54816bbd5bf4438c5a3850',
    },
  ],

  methodology: {
    name: 'Metodología AIM',
    description:
      'Marco de trabajo aplicado a todos los proyectos de implementación con clientes. Garantiza consistencia, visibilidad y adopción real de cada solución.',
    phases: [
      {
        id: 'A',
        name: 'Análisis',
        objective:
          'Comprender el proceso actual del cliente, identificar brechas y definir el alcance de la solución.',
        activities:
          'Entrevistas y talleres con stakeholders, mapeo de procesos As-Is, levantamiento de requerimientos, análisis GAP, definición del proceso To-Be.',
        deliverables:
          'Matriz de levantamiento de requerimientos (GAP), diagnóstico de procesos, propuesta de solución.',
        duration: 'Semanas 1 – 2',
      },
      {
        id: 'I',
        name: 'Implementación',
        objective:
          'Diseñar, configurar, desarrollar y validar la solución tecnológica o de automatización.',
        activities:
          'Diseño de la solución, configuración y desarrollo, pruebas internas (QA), pruebas con el cliente (UAT), ajustes, capacitación, puesta en marcha (go-live).',
        deliverables:
          'Solución configurada, acta de UAT aprobada, plan de capacitación ejecutado, solución en producción.',
        duration: 'Semanas 2 – 7',
      },
      {
        id: 'M',
        name: 'Monitoreo',
        objective:
          'Asegurar la adopción, estabilidad y mejora continua de la solución luego del go-live.',
        activities:
          'Soporte post-implementación (hypercare), monitoreo de KPIs y uso, resolución de incidencias, identificación de nuevas oportunidades de automatización.',
        deliverables:
          'Reporte de adopción, bitácora de soporte, plan de mejora continua.',
        duration: 'Desde semana 8 (continuo)',
      },
    ],
    timeline: [
      { week: 1, activity: 'Levantamiento de información', phase: 'Análisis', deliverable: 'Matriz GAP' },
      { week: 2, activity: 'Diseño de solución', phase: 'Implementación', deliverable: 'Documento de diseño aprobado' },
      { week: 3, activity: 'Configuración y desarrollo', phase: 'Implementación', deliverable: 'Solución configurada' },
      { week: 4, activity: 'Pruebas internas', phase: 'Implementación', deliverable: 'Reporte QA' },
      { week: 5, activity: 'Pruebas con cliente', phase: 'Implementación', deliverable: 'Acta de aceptación (UAT)' },
      { week: 6, activity: 'Capacitación', phase: 'Implementación', deliverable: 'Plan de capacitación ejecutado' },
      { week: 7, activity: 'Puesta en marcha', phase: 'Implementación', deliverable: 'Acta de go-live' },
      { week: 8, activity: 'Soporte post-implementación', phase: 'Monitoreo', deliverable: 'Plan de hypercare' },
    ],
  },

  services: [
    { name: 'Automatización de procesos administrativos', description: 'Eliminación de tareas manuales y repetitivas mediante RPA e integraciones de sistemas.' },
    { name: 'Automatización de procesos financieros', description: 'Conciliaciones, reportes, cierres contables y flujos de aprobación financiera automatizados.' },
    { name: 'Soluciones de Inteligencia Artificial', description: 'Agentes de IA, modelos predictivos y asistentes virtuales aplicados al negocio.' },
    { name: 'Integración de sistemas', description: 'Conexión entre ERP, CRM, hojas de cálculo y bases de datos para un flujo de datos único.' },
    { name: 'Consultoría y transformación digital', description: 'Diagnóstico de procesos y acompañamiento en la adopción de nuevas tecnologías.' },
  ],
}
