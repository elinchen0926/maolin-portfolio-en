export const projectsData = [
  {
    id: 'project-1',
    title: 'Medical Image Brain Region Annotation Automation',
    description: 'Developed a semi-automated workflow for brain region annotation in medical images. Used Fiji/ImageJ to calibrate region boundaries and OpenCV to link ROIs, spatial coordinates, and brain region labels. Built a batch auto-assignment process and supported a reusable “automatic registration + manual review” workflow.',
    technologies: [
      'Python',
      'OpenCV',
      'Fiji/ImageJ',
      'Medical Image Processing',
      'ROI Annotation',
      'Data Cleaning',
      'Workflow Automation'
    ],
    imageUrl: `${import.meta.env.BASE_URL}brain_annotation.png`,
    links: [
      {
        label: 'View Protocol',
        url: 'https://drive.google.com/file/d/1TLKZzDh1_JBaRHa1DCGHKlT_8yyq2ZUX/view?usp=sharing'
      }
    ]
  },
  {
    id: 'project-2',
    title: 'HealthLoopQA: CGM Reasoning Benchmark',
    description: 'Built a QA benchmark for evaluating how LLMs understand continuous glucose monitoring data. Extended py-mgipsim simulation outputs, created multi-scenario CGM time series, and added anomaly injection with event annotations. Designed model-facing questions, answer instructions, and standardized interval or timestamp outputs to make CGM reasoning more explainable and reproducible.',
    technologies: [
      'Python',
      'py-mgipsim',
      'Hovorka Model',
      'CGM Simulation',
      'Time Series Analysis',
      'LLM Evaluation',
      'Prompt Design',
      'JSON'
    ],
    imageUrl: `${import.meta.env.BASE_URL}cgm.png`,
    githubLink: 'https://github.com/Abelia0926/ExtendedCambridgeModel',
  },
  {
    id: 'project-3',
    title: 'GenAI Task Management Web Prototype',
    description: 'Created a task management web prototype using an AI-assisted development workflow. Built core functions including task creation, priority management, progress tracking, and a simple dashboard. Translated product requirements into prompts, validated outputs manually, and deployed the prototype for live demonstration.',
    technologies: [
      'Frontend Development',
      'JavaScript',
      'AI-Assisted Development',
      'Prompt-Driven Development',
      'Product Prototyping',
      'Tencent Cloud Deployment'
    ],
    imageUrl: `${import.meta.env.BASE_URL}task_manager.png`,
    links: [
      {
        label: 'Live Demo',
        url: 'https://taskmaster-one-beta.vercel.app'
      }
    ]
  },
  {
  id: 'project-4',
  title: 'AI Product Radar: Global AI Industry Tracking',
  description: 'Tracked global AI product and market updates through a structured research framework. Screened product launches, feature updates, capability shifts, and competitive signals across high-signal sources. Turned fragmented industry information into concise trend observations, product comparisons, and business implications.',
  technologies: [
    'Market Research',
    'Competitive Analysis',
    'Industry Tracking',
    'Structured Information Synthesis',
    'AI Product Analysis',
    'Trend Analysis',
    'Prompt Engineering'
  ],
  imageUrl: `${import.meta.env.BASE_URL}ai_product_radar.png`,
  links: [
    {
      label: 'Live Demo',
      url: 'https://aiproductradar.vercel.app'
    },
    {
      label: 'Project Summary',
      url: 'https://drive.google.com/file/d/1gAZ7CvcG5yr0-UPBGUmANjBz8VfcHxDI/view?usp=drive_link'
    }
  ]
},
];