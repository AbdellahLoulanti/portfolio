// All page copy lives here so the components only handle layout.

export const person = {
  name: 'Abdellah AL UOLANTI',
  first: 'Abdellah',
  last: 'AL UOLANTI',
  role: 'Software engineer, AI and DevOps',
  email: 'abdellahloulanti234@gmail.com',
  phone: '+212 622 544 767',
  phoneHref: 'tel:+212622544767',
  github: 'https://github.com/AbdellahLoulanti',
  linkedin: 'https://linkedin.com/in/abdellah-al-uolanti',
  city: 'Tétouan, Morocco',
}

export const mailto = `mailto:${person.email}?subject=${encodeURIComponent('Hello Abdellah')}`

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Automation', href: '#automation' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const intro = {
  heading: 'Built in Tétouan',
  note:
    'I graduated in computer engineering from ENSA Tétouan in 2025. Since then I have shipped AI chatbots, CI/CD pipelines and n8n automations that real teams use every day.',
  facts: [
    { value: '2025', label: 'Engineering degree, ENSA Tétouan' },
    { value: '3 teams', label: 'OpsVoid, CODEVICE, PAPERLESS' },
    { value: '4 languages', label: 'Arabic, French, English, Spanish' },
    { value: 'Tétouan', label: 'Open to remote work' },
  ],
}

// Roles first, then personal projects: one folder each.
export const folders = [
  {
    name: 'OpsVoid',
    kind: 'Software & AI integration engineer',
    period: 'Dec 2025 – Sep 2026',
    place: 'Tétouan',
    image: { src: '/automation/chatbot-1.jpeg', w: 1279, h: 580, alt: 'The AI chatbot I built at OpsVoid, answering a question with structured results' },
    summary:
      'Built intelligent tools and automated the company’s deployment infrastructure, from the first commit to production.',
    points: [
      'An AI chatbot that automates conversations with users',
      'OCR pipelines that pull data out of documents',
      'Web scraping that collects data from many sources',
      'Vector embeddings for semantic search',
      'CI/CD pipelines with GitHub Actions',
      'n8n and GoHighLevel workflows for leads and follow-ups',
    ],
    tech: ['Docker', 'Docker Compose', 'Nginx', 'GitHub Actions', 'n8n', 'pgvector'],
  },
  {
    name: 'CODEVICE',
    kind: 'Graduation project (PFE)',
    period: 'Feb – Jun 2025',
    place: 'Tangier',
    summary:
      'Designed and built the full web platform of an alumni association: public site, admin dashboard, shop and payments.',
    points: [
      'Modules for articles, events, job offers, products and orders',
      'Automatic emails over SMTP and payments with Stripe',
      'Role-based access control across the whole platform',
      'Deployed to DigitalOcean with managed environments',
    ],
    tech: ['Laravel', 'Livewire', 'Filament', 'Tailwind CSS', 'MySQL', 'Stripe'],
  },
  {
    name: 'PAPERLESS',
    kind: 'Engineering internship (PFA)',
    period: 'Jul – Sep 2024',
    place: 'Tétouan',
    summary:
      'Built the infrastructure that hosts the company’s SaaS products, and automated how it is managed.',
    points: [
      'Containerised the applications with Docker',
      'Automated Linux and Windows servers with Ansible',
      'A web app to manage Docker instances',
      'Live monitoring with Prometheus, Grafana and cAdvisor',
    ],
    tech: ['Docker', 'Ansible', 'Prometheus', 'Grafana', 'Python'],
  },
  {
    name: 'Tawsilat',
    kind: 'Delivery management app',
    period: 'Project',
    place: 'ENSA',
    summary:
      'Real-time order tracking, secure management of delivery drivers, and a dashboard to follow the numbers.',
    points: [
      'Live order tracking',
      'Driver accounts secured with JWT',
      'An analytics dashboard',
      'Email notifications',
    ],
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'JWT'],
    link: 'https://github.com/AbdellahLoulanti',
  },
  {
    name: 'Rental-Car',
    kind: 'Car rental platform',
    period: 'Project',
    place: 'ENSA',
    summary:
      'Customers book a car, check availability and cancel online; the agency manages its fleet in one place.',
    points: [
      'User accounts and roles',
      'Vehicle availability in real time',
      'Bookings and cancellations',
    ],
    tech: ['Spring Boot', 'MongoDB', 'Thymeleaf', 'Tailwind CSS'],
    link: 'https://github.com/AbdellahLoulanti',
  },
  {
    name: 'DaliAide',
    kind: 'Handyman services platform',
    period: 'Project',
    place: 'ENSA',
    summary:
      'Connects people with local craftsmen, with project tracking, scheduling and reviews built in.',
    points: [
      'Matching clients with local artisans',
      'Project tracking and scheduling',
      'Ratings and reviews',
    ],
    tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
    link: 'https://github.com/AbdellahLoulanti',
  },
]

export const workflows = [
  {
    title: 'Contract renewal reminders',
    description:
      'Runs every day, checks when each domiciliation contract expires, emails a reminder 60, 30, 15 and 3 days before and on the day, and creates a task for the team.',
    img: '/automation/n8n-3.jpeg', w: 1365, h: 654,
  },
  {
    title: 'Incomplete record detection',
    description:
      'Twice a week, scans every company for missing mandatory fields, builds an Excel report and emails it to the manager in charge.',
    img: '/automation/n8n-4.jpeg', w: 1406, h: 744,
  },
  {
    title: 'Lead follow-up sequence',
    description:
      'When a lead fills in the form, tags it, opens an opportunity in the pipeline, assigns an owner and sends timed follow-ups.',
    img: '/automation/n8n-6.jpeg', w: 1600, h: 1208,
  },
  {
    title: 'Conversational interface',
    description:
      'A chat that keeps the conversation history, fetches live data and renders structured answers.',
    img: '/automation/chatbot-1.jpeg', w: 1279, h: 580,
  },
  {
    title: 'Structured answers',
    description:
      'Results formatted by the model with type, agency, deadline and a direct link, generated from a plain question.',
    img: '/automation/chatbot-4.jpeg', w: 1259, h: 597,
  },
  {
    title: 'Search that remembers context',
    description:
      'Filters by industry, place and category, narrowing the results with what was said earlier in the chat.',
    img: '/automation/chatbot-6.jpeg', w: 1274, h: 657,
  },
]

// value = where the tool was used, taken from the CV.
export const skillGroups = [
  {
    group: 'Languages',
    rows: [
      ['Python', 'OpsVoid, PAPERLESS'],
      ['Java', 'Tawsilat, Rental-Car'],
      ['PHP', 'CODEVICE, DaliAide'],
      ['JavaScript', 'Tawsilat, CODEVICE'],
      ['C', 'ENSA Tétouan'],
    ],
  },
  {
    group: 'Web',
    rows: [
      ['Laravel, Livewire, Filament', 'CODEVICE, DaliAide'],
      ['Spring Boot', 'Tawsilat, Rental-Car'],
      ['Django, Django REST', 'Python web'],
      ['React', 'Tawsilat'],
      ['Tailwind CSS', 'Every project'],
    ],
  },
  {
    group: 'DevOps',
    rows: [
      ['Docker, Docker Compose', 'OpsVoid, PAPERLESS'],
      ['GitHub Actions, CI/CD', 'OpsVoid'],
      ['Ansible', 'PAPERLESS'],
      ['Nginx', 'OpsVoid'],
      ['DigitalOcean', 'CODEVICE'],
    ],
  },
  {
    group: 'AI and automation',
    rows: [
      ['Chatbots and RAG', 'OpsVoid'],
      ['Embeddings, pgvector', 'OpsVoid'],
      ['OCR and web scraping', 'OpsVoid'],
      ['n8n, GoHighLevel', 'OpsVoid'],
    ],
  },
  {
    group: 'Data and monitoring',
    rows: [
      ['PostgreSQL', 'Tawsilat'],
      ['MySQL', 'CODEVICE, DaliAide'],
      ['MongoDB', 'Rental-Car'],
      ['Prometheus, Grafana', 'PAPERLESS'],
      ['Linux, Windows, networks', 'PAPERLESS'],
    ],
  },
]

export const education = {
  facts: [
    ['Degree', 'Computer engineering'],
    ['School', 'ENSA Tétouan'],
    ['Years', '2020 – 2025'],
  ],
  paragraph:
    'Five years at the National School of Applied Sciences of Tétouan: software engineering, networks, algorithms, distributed systems and system architecture. A city that was a crossroads of Andalusia, Spain and Morocco also taught me to work in four languages.',
  lists: [
    {
      title: 'Languages',
      rows: [['Arabic', 'Native'], ['French', 'B2'], ['English', 'B2'], ['Spanish', 'A2']],
    },
    {
      title: 'Studied',
      rows: [['Algorithms', ''], ['Networks', ''], ['Databases', ''], ['DevOps', ''], ['Web development', ''], ['Artificial intelligence', '']],
    },
  ],
}

export const credits = [
  {
    title: 'Medina de Tetouan Nov2020 016',
    creator: 'Yamen',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    page: 'https://commons.wikimedia.org/w/index.php?curid=96560303',
  },
  {
    title: 'Medina de Tetouan Nov2020 010',
    creator: 'Yamen',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    page: 'https://commons.wikimedia.org/w/index.php?curid=96560284',
  },
]
