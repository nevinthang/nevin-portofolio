export const projects = [
  {
    slug: 'lexical-mutation-analysis',
    number: '01',
    title: 'Lexical Mutation Analysis',
    tagline: 'Mapping public discourse across X and YouTube.',
    description: 'A multi-layered hybrid analytical framework analyzing 35,000+ social data entries to map linguistic shifts.',
    tags: ['Python', 'NLP', 'IndoBERTweet', 'E5-small', 'Clustering'],
    image: '/images/porto-lexical.png', // Update with your actual image path
    github: '', 
    live: 'https://drive.google.com/file/d/1SjevIhhWhQ03ksBp5EB4gvHyTMwDr8R1/view?usp=drive_link', // Replace with the actual Paper link
    featured: true,
    metrics: [
      { label: 'Data Volume', value: '35K+ Entries' },
      { label: 'Accuracy', value: '85.90%' },
      { label: 'Model', value: 'Transformers' },
    ],
    caseStudy: {
      problem:
        'Tracking shifting public sentiment and linguistic trends across platforms like X and YouTube is massive, noisy, and difficult to classify accurately.',
      approach:
        'Engineered a multi-layered NLP framework using E5-small embeddings and fine-tuned IndoBERTweet transformers to automatically cluster and classify lexical mutations.',
      result:
        'Achieved up to 85.90% classification accuracy on over 35,000 entries, providing clear visibility into complex public discourse patterns.',
    },
  },
  {
    slug: 'sales-analytics-dashboard',
    number: '02',
    title: 'Sales Analytics Dashboard',
    tagline: 'Consolidating multi-source chaos into targeted marketing action.',
    description: 'An end-to-end Power BI & SQL dashboard tracking KPIs and customer purchasing behavior.',
    tags: ['Power BI', 'SQL', 'DAX', 'RFM Analysis'],
    image: '/images/porto-insight.png', // Update with your actual image path
    github: 'https://github.com/nevinthang/dashboard_project/tree/main/Sales%20Dashboard', // Replace with the actual Dashboard Repo link
    live: 'https://drive.google.com/file/d/1613UErg3Wm4drPDT1rX-gNjjVKSxRsOT/view?usp=drive_link',
    featured: true,
    metrics: [
      { label: 'Stack', value: 'Power BI' },
      { label: 'Logic', value: 'DAX' },
      { label: 'Analysis', value: 'RFM' },
    ],
    caseStudy: {
      problem:
        'Transactional data was scattered across multiple sources, making it impossible to quickly see true profit margins or identify high-value customer segments.',
      approach:
        'Consolidated the raw data using SQL and built an interactive Power BI dashboard. Engineered DAX measures for precise KPIs (Profit Margin, AOV) and executed an RFM analysis.',
      result:
        'Delivered a unified reporting view that directly informs and drives targeted marketing strategies based on actual purchasing behavior.',
    },
  },
  {
    slug: 'qatar-airways-analytics',
    number: '03',
    title: 'Qatar Airways Analytics',
    tagline: 'Forecasting passenger satisfaction to drive airline loyalty.',
    description: 'Customer segmentation and sentiment forecasting to enhance airline service quality.',
    tags: ['K-Means', 'Sentiment Analysis', 'Forecasting', 'Data Strategy'],
    image: '/images/porto-falcon.png', // Update with your actual image path
    github: '',
    live: 'https://drive.google.com/drive/folders/1NdsVCEg6quNO5pfOszhXAY0WNP1pr8fP?hl=ID', // Replace with the actual Infographic link
    featured: true,
    metrics: [
      { label: 'Clustering', value: 'K-Means' },
      { label: 'Sentiment', value: 'AFINN' },
      { label: 'Algorithm', value: 'Exp. Smoothing' },
    ],
    caseStudy: {
      problem:
        'Airlines struggle to proactively predict satisfaction trends and identify exactly which customer segments require intervention to maintain long-term loyalty.',
      approach:
        'Applied K-Means clustering for customer segmentation, AFINN for sentiment analysis, and Exponential Smoothing to forecast future satisfaction trends based on historical data.',
      result:
        'Formulated clear, data-driven strategies that target service quality improvements. (Awarded 3rd Place at the Falcon Project X Competition).',
    },
  },
  {
    slug: 'sdc-inflation-forecasting',
    number: '04',
    title: 'Inflation Targeting Analytics',
    tagline: 'Forecasting food commodity CPI to support monetary policy.',
    description: 'Time-series forecasting and decomposition for macroeconomic indicators.',
    tags: ['LightGBM', 'EDA', 'Time Series', 'STL Decomposition'],
    image: '/images/porto-sdcc.png', // Update with your actual image path
    github: '',
    live: 'https://drive.google.com/drive/folders/1Tke3T4x-XHXyJ5BpmCvUuapAWWfr2ctC?hl=ID', // Replace with the actual Infographic link
    featured: true,
    metrics: [
      { label: 'Model', value: 'LightGBM' },
      { label: 'Analysis', value: 'Time Series' },
      { label: 'Domain', value: 'Macroeconomics' },
    ],
    caseStudy: {
      problem:
        'Volatile food commodity prices make the Consumer Price Index (CPI) unpredictable, complicating inflation targeting and macroeconomic planning.',
      approach:
        'Conducted deep Exploratory Data Analysis (EDA) and STL decomposition on historical CPI data, then trained a LightGBM model for robust time-series forecasting.',
      result:
        'Delivered high-impact visualizations and predictive insights designed to directly inform and stabilize monetary policy decisions.',
    },
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);

export default projects;