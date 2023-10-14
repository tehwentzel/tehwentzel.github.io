interface ExperienceEntry {
  employer: string,
  title: string,
  location: string,
  date: string,
  responsibilities: string[],
}
const experience: ExperienceEntry[] = [
  {
    employer: 'University of Illinois Chicago',
    title: 'Research Assistant',
    location: 'Chicago, Il',
    date: '2019 - Present',
    responsibilities: [
      'Research assistant researching integrated machine learning and data visualization systems',
      'Improved predictive models for patient outcome prediction using clinical data',
      'Built interactive machine learning systems using python (flask, scipy, pytorch, tensorflow) and javascript + react frontends',
      'Successfully published in several clinical and computer science journals.'
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

export default experience