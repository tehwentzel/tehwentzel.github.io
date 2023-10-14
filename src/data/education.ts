export interface EducationEntry {
  employer: string,
  title: string,
  location: string,
  date: string,
  gpa: string,
  honors: string[],
}

export const education: EducationEntry[] = [
  {
    employer: 'University of Illinois Chicago',
    title: 'PhD Computer Science',
    location: 'Chicago, Il',
    date: '2019-Present',
    gpa: '4',
    honors: [],
  },
  {
    employer: 'University of Illinois Chicago',
    title: 'MS Computer Science',
    location: 'Chicago, Il',
    date: '2018 - 2019',
    gpa: '4',
    honors: [],
  },
  {
    employer: 'Cooper Union',
    title: 'B.Eng Mechanical Engineering ',
    location: 'New York City, NY',
    date: '2012-2016',
    gpa: '3.73',
    honors: ['Summa Cum Laude','Full Tuition Scholarship']
  },
  {
    employer: 'Northwestern University',
    title: 'Partial MS Mechanical Engineering (transferred)',
    location: 'Evanston, Il',
    date: '2017-2018',
    gpa: '3.74',
    honors: ['Walter P. Murphy Fellowship']
  },
]
