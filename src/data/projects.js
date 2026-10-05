const projects = [
  {
    id: "jobgenie",
    number: "01",
    title: "JobGenie",
    subtitle: "AI-Powered Resume & Job Matching Platform",
    category: "NLP · AI · Recruitment Technology",

    shortDescription:
      "An AI-driven recruitment platform designed to improve resume screening through multilingual NLP, skills-based job matching, and explainable candidate evaluation.",

    problem:
      "Traditional recruitment can depend heavily on manual resume screening and keyword-based filtering, which may overlook candidates with different terminology or languages. JobGenie explores a more skills-oriented and transparent recruitment workflow.",

    objective:
      "Develop an intelligent recruitment system that supports resume analysis, candidate–job matching, skill-gap analysis, personalized recommendations, and explainable candidate evaluation.",

    approach: [
      "Resume and job description input",
      "OCR and multilingual text processing",
      "NLP and mBERT-based processing",
      "Skills and candidate information extraction",
      "AI-based job matching",
      "Matching and skill-gap analysis",
      "Recruiter and job-seeker outputs",
    ],

    technologies: [
      "mBERT",
      "Natural Language Processing",
      "OCR",
      "AI-based Skill Gap Analysis",
    ],

  },

  {
    id: "amazon-ml",
    number: "02",
    title: "Amazon ML Challenge 2026",
    subtitle: "Business Entity Resolution & Record Linkage",
    category: "Machine Learning · NLP · Entity Resolution",

    shortDescription:
      "A machine-learning-based entity resolution pipeline that identifies matching business records across multiple noisy data sources using preprocessing, candidate generation, similarity features, and Random Forest.",

    problem:
      "The challenge requires identifying records representing the same real-world business despite spelling differences, address variations, abbreviations, typos, missing information, and different representations.",

    objective:
      "Build a scalable entity matching pipeline that normalizes records, generates plausible candidates, extracts similarity features, predicts record matches, and produces Source 1 to Source 2/3 matches.",

    approach: [
      "Dataset inspection and ground-truth analysis",
      "Unicode and text normalization",
      "Business name and address normalization",
      "Candidate generation and blocking",
      "Similarity feature engineering",
      "Training-pair generation",
      "Random Forest classification",
      "Probability threshold selection",
      "Test candidate indexing using SQLite",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "SQLite",
      "Joblib",
      "Git",
      "GitHub",
    ],

    results: [
      "Precision: 98.79%",
      "Recall: 94.46%",
      "F0.5: 97.89%",
      "Candidate recall: ~99.83% on a sampled validation set",
      "Preprocessing: 2,524.83 records/second on 10,000 records",
      "Full Source 1 test index: 1,732,544 records",
    ],

    status: "Working ML pipeline",

    github: "https://github.com/Tharunreddy06/amazon-ml-challenge-2026",


    contribution:
      "Worked on dataset analysis, preprocessing, candidate generation, matching feature engineering, training-pair construction, Random Forest modeling, threshold selection, validation, SQLite indexing, testing, and experimentation.",
  },

  {
    id: "reconai",
    number: "03",
    title: "ReconAI",
    subtitle: "AI-Powered Financial Reconciliation & Exception Investigator",
    category: "AI/ML · FinTech · Financial Automation",

    shortDescription:
      "An AI-assisted financial reconciliation system that reconciles payments, settlements, bank credits, and refunds, detects exceptions, prioritizes anomalies, investigates transaction evidence, and maintains a human-controlled audit trail.",

    problem:
      "Financial reconciliation can require comparing multiple transaction legs and manually investigating mismatches. A mismatch alone does not explain its significance, likely cause, or recommended action.",

    objective:
      "Build a finance-operations prototype that automates multi-leg reconciliation, exception detection, anomaly prioritization, evidence-based investigation, recommendations, and human-controlled auditing.",

    approach: [
      "Payment reconciliation",
      "Settlement reconciliation",
      "Bank reconciliation",
      "Refund reconciliation",
      "Exception detection and classification",
      "Financial feature calculation",
      "Isolation Forest anomaly prioritization",
      "Evidence-based investigation",
      "Optional LLM interpretation",
      "Human approval / escalation",
      "Append-only audit trail",
    ],

    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-learn",
      "Isolation Forest",
      "OpenAI Python SDK",
      "Git",
      "GitHub",
      "Streamlit Community Cloud",
    ],

    results: [
      "Production: 100% precision",
      "Production: 100% recall",
      "Production: 0 false positives",
      "Production: 0 false negatives",
      "Independent holdout: 100% precision",
      "Independent holdout: 98.7% recall",
      "Independent holdout: 99.8% accuracy",
      "12 automated tests passed",
    ],

    status: "Completed / deployed working prototype",

    github: "https://github.com/Tharunreddy06/reconAI",

    demo: "https://reconai-zzmj4nij8hzwabd8qz9gem.streamlit.app/",

    contribution:
      "Individually designed and implemented the reconciliation architecture, financial reconciliation modules, anomaly prioritization, refund-risk assessment, investigation workflow, LLM integration and fallback, human approval workflow, audit trail, evaluation datasets, testing, Streamlit interface, GitHub repository, and deployment.",
  },

  {
    id: "crime-hotspot",
    number: "04",
    title: "AI-Powered Crime Hotspot Prediction",
    subtitle: "Using Real-Time Social Media Data",
    category: "AI · NLP · Geospatial Intelligence",

    shortDescription:
      "An AI-driven crime analytics and geospatial visualization system designed to combine historical crime records with real-time social-media intelligence for crime analysis and hotspot identification.",

    problem:
      "Traditional crime analysis systems primarily depend on historical records and may not capture newly emerging events in real time.",

    objective:
      "Develop an interactive crime analytics system that combines historical crime information with real-time social-media intelligence and supports geographic analysis.",

    approach: [
      "Historical crime-data processing",
      "Crime-domain filtering",
      "World-level geographic visualization",
      "Country-level analysis",
      "India state-level analysis",
      "Place and city analysis",
      "Planned social-media data collection",
      "Planned multilingual NLP processing",
      "Planned hotspot detection and temporal prediction",
    ],

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Leaflet.js",
      "GeoJSON",
      "Python",
      "Flask",
      "Pandas",
      "mBERT",
      "GeoPy / Nominatim",
      "LSTM",
      "DBSCAN",
      "SHAP",
    ],

    results: "No reliable final end-to-end performance metric specified.",

    status: "Working / partially implemented",

    github: "https://github.com/AkramKhan543719/AI-Crime-Hotspot-Prediction",

    demo: null,

    contribution:
      "Worked on the overall system concept, historical and real-time data design, crime-domain filtering, geographic drill-down, Leaflet-based visualization, country and state analysis, data normalization, and the planned integration of real-time NLP and predictive components.",
  },
];

export default projects;