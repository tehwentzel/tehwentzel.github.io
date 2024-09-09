export interface ExperienceEntry {
  employer: string,
  title: string,
  location: string,
  date: string,
  responsibilities: string[],
}
export const experience: ExperienceEntry[] = [
  {
    employer: 'University of Illinois Chicago',
    title: 'Research Assistant',
    location: 'Chicago, Il',
    date: '2019 - Present',
    responsibilities: [
      'Designed spatial machine learning and data visualization tools for domain experts and clinicians.',
      'Created explainable deep learning models for interactive digital twins of cancer patients using pytorch.',
      'Designed custom interpretable clustering and KNN approaches for clinical risk modeling.',
      'Created and productionized web interfaces to build and visualize machine learning and causal modeling tools for medical and social media data using react, D3.js, docker, and flask.',
      'Created example code and templates used in a graduate data visualization course and mentored new students in the lab.',
      'Performed data analysis is empirical user studies for HCI research.',
      'Assisted in developing image classification tools for biomedical work using CNNs and OpenCV.',
    ],
  },
  {
    employer: 'Epsilon',
    title: 'PhD Intern, Decision Sciences and Visual Analytics Team',
    location: 'Chicago, Il',
    date: 'Summer 2024',
    responsibilities: [
      'Developed and improved clustering and deep learning models for customer segmentation using flask, pytorch and SQL.',
      'Created computational approaches for explaining the outputs of deep embedding cluster models and improved methods of identifying important features to show to clients for both speed and accuracy.',
      "Designed and implemented visualization to inspect and compare multiple clustering models which was integrated into Epsilon's DiME data visualization tool.",
      "Researched methods to improved generative AI (LLM) descriptions of customer segments",
    ],
  },
  {
    employer: 'Nothwestern University',
    title: 'Research/Teaching Assistant',
    location: 'Chicago',
    date: '2018',
    responsibilities: [
      'Research doing simulation modeling for a prototype water collection system using python',
      'Worked as a TA for Engineering Analysis 3 (introduction to systems mechanics)',
    ],
  },
  {
    employer: 'Northwestern University Facilities Management',
    title: 'Architectural Drafter',
    location: 'Chicago, Il',
    date: '2016-2017,2018',
    responsibilities: [
      'Worked as a drafter doing a mixture of field work and autocad to support the space management at Northwestern university',
      'Built scripts in lisp to automate several drafting tasks'
    ],
  },
]
