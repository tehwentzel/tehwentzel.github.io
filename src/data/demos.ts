export interface DemoEntry {
  name: string,
  description: string,
  link: string,
  image: string,
}
export const demos: DemoEntry[] = [
  {
    name: '(Published Interface) DASS Good: Explainable Data Mining of Spatial Cohort Data',
    description: 'We describe the co-design of a modeling system, DASS, to support the hybrid human-machine development and validation of predictive models for estimating long-term toxicities related to radiotherapy doses in head and neck cancer patients. Developed in collaboration with domain experts in oncology and data mining, DASS incorporates human-in-the-loop visual steering, spatial data, and explainable AI to augment domain knowledge with automatic data mining.',
    link: 'https://youtu.be/3roUiGum5ZU',
    image: 'dass.PNG',
  },
  {
    name: '(Published Interface) MOTIV ',
    description: 'This is an interface designed to explore a cohort of head and neck cancer patients with an accompanied custom k-nearest-neighbors algorithm to predict their radiation dose using anatomical information.'
      + ' This is a demo where I had to generate fake data to avoid privacy issue, so the 3d models look a little wonky (the image below is with correct data). The real project was published in IEEE TVCG.',
      link: 'https://youtu.be/dlee1FBaNd4',
      image: 'MOTIV.PNG'
  },
  {
    name: '(Published Interface) Cohort Visualization of Radiation Therapy Data',
    description: 'This is an interface for exploring geotagged twitter data for tweets annotated with moral frames and stance regarding controversial topics, which was applied COVID-19 lockdown order and early BLM protests. It focused on helping Social Scientists identify possible trends and integrates several additional datasets along with Interactive Generalized Additive Models to analyze how morality and stance intersect with regional demographics.',
      link: 'https://tehwentzel.github.io/camprt_fakedata_demo/',
      image: 'camprt.PNG'
  },
  {
    name: '(Visualization) COVID-19 Demographics Map',
    description: 'This is an interactive map I built as a prototype for a COVID-19 social media data analysis project to test ways of visualizing multiple variables on a map (see Research).'
      + ' This version combined early COVID-19 case rates and census data, and allows you to visualize 3 different variables at once.'
      + ' Aggregation also allows you to group by county or aggregated counties by voting district to aggregate very sparse regions.'
      + ' This was built using D3, React, and Material UI.',
    link: 'https://tehwentzel.github.io/covid_map/',
    image: 'covid_map.PNG',
  },
  {
    name: "(Visualization) Fluid Particle Simulation",
    description: "This is a demo visualization of a 3-dimensional particle system, which is a variant of example code I made for CS528 visual data science at the University of Illinois Chicago."
    + ' The visualization shows a 3d view of particles from a slice in a simulation, along with a configurable cross section that shows the concentration an in-plane velocity of the particles.',
    link: 'https://tehwentzel.github.io/fluidvis/',
    image: 'fluidvis.PNG',
  },
  {
    name: '(Visualization) Gun Deaths',
    description:'Project that used d3.js to create an interactive visualization of use Gun death reports between 12/14/2012 and 09/16/2013.',
    link: 'https://tehwentzel.github.io/GunDeathsGood/',
    image: 'gun_death_vis.PNG',
  },
  {
    name: '(Unity) Video Game Demo',
    description: 'A video game demo of a co-op puzzle game made for CS426 (Video Game Design) in unity with 2 design students. Play the demo at https://github.com/tehwentzel/BonefireBuilds/releases (its 193 MB, unzip and go to output => CS426Final.exe)',
    link: 'https://www.youtube.com/watch?v=m2kmuIpEjvU',
    image: 'bonfire.PNG',
  },
  {
    name: '(Visualization) Opiod Prescription Visualization',
    description:'Group project done for a Graduate Data Visualization Course at UIC in 2018. A web-based visualization tool using Javascript, and D3.js, that uses opioid prescription and claims data to visualize the patient/physician behaviors and help identify signs of opioid abuse.',
    link: 'https://tehwentzel.github.io/VDS_Opioid_Abuse_Visualization/',
    image:'vds_final.PNG',
  },
  {
    name: '(UI Project) DocDoc',
    description:"Group project for User Interface Design Class. Web-based prototype of an app designed for parents to manage their dependent's medical requirements. Implemented in Javascript and JQuery. Designed for desktop but is designed to be responsive and works on mobile.",
    link: 'https://tehwentzel.github.io/DocDoc/',
    image:'docdoc.PNG',
  },
  {
    name: '(UI Project) COVID Saftey App',
    description: "Example Website for COVID-19 saftey guidlines built for a User Interface course in 2020 as part of a group effort. Uses React.",
    link: 'https://carlafloricel.github.io/cs522-covid-app/',
    image: 'covidapp.PNG',
  }
]