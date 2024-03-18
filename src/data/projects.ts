interface Project {
  name: string,
  description: string,
  technologies: string[],
  role: string,
  papers: string[],
  date: string,
}

const projects: Project[] = [
  {
    name: 'Radiation Therapy Plan Prediction + Exploration using Imaging Data',
    description: 'A project that took data extracted from head & neck imaging data for cancer patients using a custom predictive model. Collaborated with a team of data scientists and clincal oncologists.'
     + ' Involved an intergrated predictive model and visualization system that improved RT plan prediction performance by 8% and prediction of feeding tube incidence by  26% over clincal guidelines',
    technologies: ['Javascript','THREE.js','WebGL','Python','D3.js','Git','Tensorflow'],
    role: 'Designer, Model Builder, Statistical Analysis, Developer, Paper Lead Author',
    papers: [
      'A. Wentzel et al., "Cohort-based T-SSIM Visual Computing for Radiation Therapy Prediction and Exploration," in IEEE Transactions on Visualization and Computer Graphics, Jan. 2020, doi: 10.1109/TVCG.2019.2934546.',
      'A. Wentzel et al., "Precision toxicity correlates of tumor spatial proximity to organs at risk in cancer patients receiving intensity-modulated radiotherapy" in Radiotherapy & Oncology, May 2020 doi: https://doi.org/10.1016/j.radonc.2020.05.023',
    ],
    date: '2018-2019',
  },
  {
    name: 'Radiation Therapy Outcome Modeling using Lymph Node Involvement',
    description: 'A project that looked at predicting and improving non-survival outcomes in patients using information such as involved lymph node spread.' 
    + ' Improved prior model performance for predicting patient outcomes by 6.6% while improving model interpretability. Collaborated with a team of data scientists and clincal oncologists.',
    technologies: ['Javascript','Python','D3.js','Git'],
    role: 'Designer, Model Builder, Statistical Analysis, Developer, Paper Lead Author, Paper Co-author, Presenter',
    papers: [
      'A. Wentzel et al., "Precision association of lymphatic disease spread with radiation-associated toxicity in oropharyngeal squamous carcinomas," in Radiotherapy & Oncology, August 2021, doi: https://doi.org/10.1016/j.radonc.2021.06.016',
      'A. Wentzel et al., "Explainable Spatial Clustering: Leveraging Spatial Data in Radiation Oncology," in IEEE Visualization Conference (Short paper), Oct 2020, doi: 10.1109/VIS47514.2020.00063',
      'T. Luciani, A.Wentzel et al, "A spatial neighborhood methodology for computing and analyzing lymph node carcinoma similarity in precision medicine", in Journal of Biomedical Informatics, Jan 2020, doi: https://doi.org/10.1016/j.yjbinx.2020.100067',
    ],
    date: '2019-2021',
  },
  {
    name: 'Radiation Therapy Symptom Prediction and Improvment using Radiation Therapy Plans',
    description: 'A project focused on creating interactive modeling to create models to predict long-term patient symptoms as a result on radiation therapy.'
    + ' This project focused on interactive modeling to improve explainability and generalibilty. Improved predictive performance of existing clincal models for 5 different outcomes.'
    + ' Collaborated with a team of data scientists and clincal oncologists.',
    technologies: ['Javascript','React','Flask','Python','D3.js','Git'],
    role: 'Designer, Model Builder, Statistical Analysis, Developer, Paper Lead Author, Presenter',
    papers: [
      'A. Wentzel et al. "DASS Good: Explainable Data Mining of Spatial Cohort Data" in Computer Graphics Forum + Eurovis Conference, July 2023, doi: https://doi.org/10.1111/cgf.14830',
      'A. Wentzel et al. "Multi-organ spatial stratification of 3-D dose distributions improves risk prediction of long-term self-reported severe symptoms in oropharyngeal cancer patients receiving radiotherapy: development of a pre-treatment decision support tool", in Fronteirs in Oncology, Aug 2023. doi: https://doi.org/10.3389/fonc.2023.1210087'
    ],
    date: '2022-2023',
  },
  {
    name: 'Visual Analysis of Stay-at-home Attitudes During the COVID-19 Pandemic',
    description: 'A project focused on identifying underlying causes for how people responded to stay-at-home orders at the start of the pandemic in the US. Collaborated with Natural Language Processing experts and Social Scientists.',
    technologies: ['Javascript','React','Flask','Python','D3.js','Git'],
    role: 'Designer, Data Engineering, Statistical Analysis, Developer, Paper Lead Author, Presenter, Co Author',
    papers: [
      'A. Wentzel et al. "A Lens to Stay at Home Attidues", at the IEEE 2023 Vis4PandEmRes Visualization Conference Workshop, Oct 2023. doi: https://arxiv.org/abs/2308.13552',
    ],
    date: '2020-Present (WIP)',
  },
]

export default projects