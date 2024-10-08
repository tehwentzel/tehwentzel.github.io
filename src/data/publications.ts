export interface MiscItem{
  title: string,
  content: string,
}
export interface PublicationEntry {
  title: string,
  authorList: string[],
  doi: string | null,
  date: number,
  journal: string,
  isFirstAuthor: Boolean,
  archivX: string | null,
  supplement: string | null,
  paperType: "Vis" | "Clinical" | "Other",
  github: string | null,
  misc: MiscItem[] | null,
  pdf: string | null,
}

export const publications: PublicationEntry[] = [
  {
    title:"BI-LAVA: Biocuration With Hierarchical Image Labelling Through Active Learning and Visual Analytics",
    authorList: ['Juan Trelles','Andrew Wentzel','Wiliam Berrios','Hagit Shatkay','G.Elisabeta Marai'],
    doi: 'https://doi.org/10.1111/cgf.15261',
    journal: 'Computer Graphics Forum',
    isFirstAuthor:false,
    archivX: 'https://doi.org/10.48550/arXiv.2308.08003',
    github: null,
    supplement: null,
    paperType: 'Vis',
    date: 2024,
    misc: null,
    pdf: null,
  },
  {
    title:"DITTO: A Visual Digital Twin for Interventions and Temporal Treatment Outcomes in Head and Neck Cancer",
    authorList: ['Andrew Wentzel','Serageldin Attia','Xinhua Zhang','Guadalupe Canahuate','Clifton David Fuller','G.Elisabeta Marai'],
    doi: 'https://doi.org/10.1109/TVCG.2024.3456160',
    journal: 'TVCG',
    isFirstAuthor:true,
    archivX: 'https://doi.org/10.48550/arXiv.2407.13107',
    github: 'https://github.com/uic-evl/DigitalTwinVis',
    supplement: null,
    paperType: 'Vis',
    date: 2024,
    misc: null,
    pdf: null,
  },
  {
    title: 'Kiviat Defense: An Empirical Evaluation of Visual Encoding Effectiveness in Multivariate Data Similarity Detection',
    authorList: ["Mirko Mantovani", "Andrew Wentzel",'Juan Trelles Trabucco','Joseph Michaelis','G.Elisabeta Marai'],
    doi: 'https://doi.org/10.2352/J.ImagingSci.Technol.2023.67.6.060406',
    journal: "Journal of Imaging Science and Technology",
    isFirstAuthor: false,
    archivX: null,
    supplement: null,
    github: null,
    paperType: 'Vis',
    date: 2024,
    misc: null,
    pdf: null,
  },
  {
    title: 'MOTIV: Visual Exploration of Moral Framing in Social Media',
    authorList: ["Andrew Wentzel",'Lauren Levine','Vipu Dhariwal','Zarah Fatemi',"Abara Bhattacharya",'Barbara Di Eugenio','Andrew Rojecki',"Elena Zheleva",'G.Elisabeta Marai'],
    doi: 'https://doi.org/10.1111/cgf.15072',
    journal: "Computer Graphics Forum",
    isFirstAuthor: true,
    archivX: 'https://doi.org/10.48550/arXiv.2403.14696',
    supplement: 'https://osf.io/ygkzn/?view_only=6310c0886938415391d977b8aae8b749',
    github: null,
    paperType: 'Vis',
    date: 2024,
    misc: null,
    pdf: 'SAH_CGF_Revision.pdf',
  },
  {
    title: "Multi-organ spatial stratification of 3-D dose distributions improves risk prediction of long-term self-reported severe symptoms in oropharyngeal cancer patients receiving radiotherapy: development of a pre-treatment decision support tool",
    authorList: ["Andrew Wentzel","Abdallah SR Mohamed","et. al"],
    doi: "https://doi.org/10.3389/fonc.2023.1210087",
    date: 2023,
    journal: "Frontiers in Oncology",
    isFirstAuthor: true,
    archivX: null,
    supplement: 'https://figshare.com/s/323b80aac562a0c910b3',
    github: null,
    paperType: "Clinical",
    misc: null,
    pdf: 'Dose_Cluster_Clinical.pdf',
  },
  {
    title: "Spatially-aware clustering improves AJCC-8 risk stratification performance in oropharyngeal carcinomas",
    authorList: ['Guadalupe Canahuate', "Andrew Wentzel","Abdallah SR Mohamed","Lisanne V van Dikj", "David M Vock","Baher Elgorhari", "Hesham Elhalawani","Clifton D Fuller","G.E Marai"],
    doi: "https://doi.org/10.1016/j.oraloncology.2023.106460",
    date: 2023,
    journal: "Oral Oncology",
    isFirstAuthor: false,
    archivX: null,
    supplement: null,
    github: null,
    paperType: "Clinical",
    misc: null,
    pdf: 'Hypo_testing.pdf',
  },
  {
    title: "DASS Good: Explainable Data Mining of Spatial Cohort Data",
    authorList: ["Andrew Wentzel", "Carla Floricel",'et. al'],
    doi: 'https://doi.org/10.1111/cgf.14830',
    date: 2023,
    journal: 'Computer Graphics Forum',
    isFirstAuthor: true,
    archivX: 'https://doi.org/10.48550/arXiv.2304.04870',
    supplement: null,
    github: 'https://github.com/tehwentzel/QubbedDataAnalysis',
    paperType: 'Vis',
    misc: [{title: "Full Paper Talk", content: "https://youtu.be/r39-4gYAw5c"}],
    pdf: 'DASS.pdf',
  },
  {
    title: "Cohort-based T-SSIM visual computing for radiation therapy prediction and exploration",
    authorList: ["Andrew Wentzel","Peter Hanula", 'et. al'],
    doi: 'https://doi.org/10.1109/TVCG.2019.2934546',
    date: 2019,
    journal: "TVCG",
    isFirstAuthor: true,
    archivX: 'https://doi.org/10.48550/arXiv.1907.05919',
    supplement: 'https://youtu.be/oGUtdK5tL10',
    github: 'https://github.com/uic-evl/CAMP-RT',
    paperType: 'Vis',
    misc: null,
    pdf: 'CAMPRT.pdf',
  },
  {
    title: "A Lens to Stay at Home Pandemic Attitudes",
    authorList: ['Andrew Wentzel','Lauren Levine','et. al'],
    doi: null,
    date: 2023,
    journal: "IEEE Workshop on Visualization for Pandemic and Emergence Response",
    supplement: 'https://figshare.com/articles/media/MOTIV_TVCG_Supplement/21803886',
    github: 'https://github.com/tehwentzel/stay_at_home_vis',
    archivX: 'https://doi.org/10.48550/arXiv.2308.13552',
    paperType: "Vis",
    isFirstAuthor: true,
    misc: null,
    pdf: 'SAH_Workshop.pdf',
  },
  {
    title: "Explainable Spatial Clustering: Leveraging Spatial Data in Radiation Oncology",
    authorList: ['Andrew Wentzel','Guadalupe Canahuate','et. al'],
    doi: 'https://doi.org/10.1109/VIS47514.2020.00063',
    date: 2020,
    journal: "IEEE Visualization Conference (VIS)",
    supplement: null,
    github: null,
    archivX: 'https://doi.org/10.48550/arXiv.2008.11282',
    paperType: "Vis",
    isFirstAuthor: true,
    misc: null,
    pdf: 'LN_Cluster_Short_Paper.pdf',
  },
  {
    title: "Precision toxicity correlates of tumor spatial proximity to organs at risk in cancer patients receiving intensity-modulated radiotherapy",
    authorList: ['Andrew Wentzel','Peter Hanula','et. al'],
    doi: 'https://doi.org/10.1016/j.radonc.2020.05.023',
    date: 2020,
    journal: "Radiotherapy and Oncology",
    supplement: null,
    github: null,
    archivX: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7390671/',
    paperType: "Clinical",
    isFirstAuthor: true,
    misc: null,
    pdf: null,
  },
  {
    title: "Precision association of lymphatic disease spread with radiation-associated toxicity in oropharyngeal squamous carcinomas",
    authorList: ['Andrew Wentzel','Timothy Luciani','et. al'],
    doi: 'https://doi.org/10.1016/j.radonc.2021.06.016',
    date: 2021,
    journal: "Radiotherapy and Oncology",
    supplement: null,
    github: 'https://github.com/tehwentzel/LN_similarity',
    archivX: 'https://www.medrxiv.org/content/10.1101/2020.08.25.20181867v1',
    paperType: "Clinical",
    isFirstAuthor: true,
    misc: null,
    pdf: null,
  },
  {
    title: "Roses Have Thorns: Understanding the Downside of Oncological Care Delivery Through Visual Analytics and Sequential Rule Mining",
    authorList: ['Carla Floricel','Andrew Wentzel','et. al'],
    doi: 'https://doi.org/10.1109/TVCG.2023.3326939',
    date: 2023,
    journal: "TVCG",
    supplement: null,
    github: null,
    archivX: 'https://doi.org/10.48550/arXiv.2308.07895',
    paperType: "Vis",
    isFirstAuthor: false,
    misc: null,
    pdf: null,
  },
  {
    title: "THALIS: Human-Machine Analysis of Longitudinal Symptoms in Cancer Therapy",
    authorList: ['Carla Floricel','Nafiul Nipu','Mikayla Biggs','Andrew Wentzel','Gudalupe Canahuate','Lisanne v Van Dijk','Abdallah S.R. Mohamed','C.David Fuller','G.Elisabeta Marai'],
    doi: 'https://doi.org/10.1109/TVCG.2021.3114810',
    date: 2021,
    journal: "TVCG",
    supplement: null,
    github: null,
    archivX: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8785360/',
    paperType: "Vis",
    isFirstAuthor: false,
    misc: null,
    pdf: null,
  },
  {
    title: "Understanding Stay-at-home Attitudes through Framing Analysis of Tweets",
    authorList: ['Zahra Fatemi','Abari Bhattacharya','Andrew Wentzel','et. al'],
    doi: 'https://doi.org/10.1109/DSAA54385.2022.10032455',
    date: 2022,
    journal: "IEEE 9th Int. Conf. on data Science and Advanced Analytics",
    supplement: null,
    github: null,
    archivX: 'https://doi.org/10.48550/arXiv.2209.05729',
    paperType: "Other",
    isFirstAuthor: false,
    misc: null,
    pdf: null,
  },
  {
    title: "Optimal Treatment Selection in Sequential Systemic and Locoregional Therapy of Oropharyngeal Squamous Carcinomas: Deep Q-Learning With a Patient-Physician Digital Twin Dyad",
    authorList: ['Elisa Tardini','Xinhua Zhang','Guadalupe Canahuate','Andrew Wentzel','et. al'],
    doi: 'https://doi.org/10.2196/29455',
    date: 2022,
    journal: "J Med Internet Res",
    supplement: null,
    github: null,
    archivX: 'https://doi.org/10.1101/2021.04.07.21255092',
    paperType: "Clinical",
    isFirstAuthor: false,
    misc: null,
    pdf: null,
  },
  {
    title: "A spatial neighborhood methodology for computing and analyzing lymph node carcinoma similarity in precision medicine",
    authorList: ['Timothy Luciani','Andrew Wentzel','et. al'],
    doi: 'https://doi.org/10.1016/j.yjbinx.2020.100067',
    date: 2020,
    journal: "Journal of Biomedical Informatic",
    supplement: null,
    github: null,
    archivX: 'https://www.evl.uic.edu/documents/tluciani_journalbioinformatics2020.pdf',
    paperType: "Other",
    isFirstAuthor: false,
    misc: null,
    pdf: null
  },
]
