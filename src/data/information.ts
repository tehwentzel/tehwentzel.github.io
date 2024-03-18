interface InfoEntry {
  full_name: string,
  title: string,
  languages: object,
  email: string,
  github: string,
  summary: string,
  googleScholar: string,
  instagram: string | null,
}

const info = {
  full_name: 'Andrew Wentzel',
  title: 'PhD Student in Computer Science (Data Vis + ML)',
  languages: {
    english: null,
  },
  email: 'awentze2@uic.edu',
  github: 'tehwentzel',
  instagram: 'https://www.instagram.com/tehwentzel/',
  summary: "I'm a PhD student in computer science. Currently studying for a PhD, my main interests are in combining data visualization and machine learning, focusing on connecting ML and Vis to improve the usefulness and explanability of models."
  + " I have 5+ experience in collaborative user interface design, data visualization, machine learning, data engineering, and statistical analysis."
  + " Before I got into programming I studied mechanical engineering where I was interested in design and robotics, which gave me the background in client-centered spatial design that inspired my current thesis topic (spatial explainable machine learning design)."
  + " In my free time I enjoy biking, reading, weightlifting, and playing obscure videogames.",
  googleScholar: 'https://scholar.google.com/citations?user=m16NzxUAAAAJ&hl=en',
}
export default info