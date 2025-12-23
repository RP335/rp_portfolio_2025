
export interface Project {
  title: string
  shortDescription: string
  fullDescription: string // Added for detail pages if needed later
  image: string
  tags: string[]
  demoLink?: string
  codeLink?: string
  detailsLink?: string
  slug: string
}

export const projectsData: Project[] = [
  {
    title: "Intrusive Lyric Intelligibility (ICASSP Cadenza)",
    shortDescription:
      "Ranked 2nd in the Cadenza Challenge. Hybrid attention network + tree-based regressors for predicting lyric intelligibility in music.",
    fullDescription:
      "A system for predicting lyric intelligibility in accompanied singing for the Cadenza Challenge intrusive track. Ranked 2nd out of 30 teams (NCC=0.69, RMSE=0.265). The architecture combines a hybrid neural mixture of experts (WavLM/Wav2Vec2/Whisper) with an MLP and tree-based regressors (LightGBM, XGBoost, CatBoost). Features include intrusive perceptual metrics (STOI, Zimtohrli), ASR stability scores, and a multimodal LLM score.",
    image: "/project-images/cadenza-overview.png", // Placeholder, will need to be handled if missing
    tags: ["Hybrid Attention", "Ensemble Learning", "Audio Flamingo", "ICASSP 2026", "Python"],
    demoLink: "https://cadenzachallenge.org/docs/clip1/results",
    codeLink: "https://eval.ai/web/challenges/challenge-page/2634/leaderboard/6866", // Using leaderboard as 'code' link since repo wasn't explicitly provided, user said code instructions are at 'T071a intrusive' but gave no URL.
    detailsLink: "/projects/cadenza-icassp",
    slug: "cadenza-icassp",
  },
  {
    title: "Personalised Hearing for Savox-Otos",
    shortDescription:
      "Developing an inline audio module for professional hearing protection headsets to apply personalized hearing profiles.",
    fullDescription:
      "Explored how personalised hearing profiles could be brought into professional hearing protection headsets. Designed an inline audio module that uses an NFC card to load the worker's hearing profile into a DSP unit. Key features include offline personalization, seamless integration with existing Savox controllers, and hearing protection compliance.",
    image: "/project-images/savox-otos.png", // Placeholder
    tags: ["Embedded Systems", "DSP", "NFC", "Product Development", "User Research"],
    // No specific links provided, leaving optional fields undefined or pointing to contact
    demoLink: "", 
    codeLink: "",
    detailsLink: "/projects/savox-otos",
    slug: "savox-otos",
  },
  {
    title: "DCASE 2025 SELD Challenge",
    shortDescription:
      "Conformer-based ensemble for sound event localization and detection using synthetic data.",
    fullDescription:
      "Built a Conformer-based ensemble for stereo sound event localization. Generated synthetic spatial data with SpatialScaper, implemented log-Mel & FOA feature pipelines in Rust with Rayon parallelism. Achieved macro F-score improvement on underrepresented classes.",
    image: "/project-images/dcase-seld-overview.png",
    tags: ["SpatialScaper", "Conformer", "Rust", "PyTorch", "SELD"],
    demoLink: "https://dcase.community/documents/challenge2025/technical_reports/DCASE2025_Bahuguna_20_t3.pdf",
    codeLink: "https://github.com/RP335/dcase_2025_seld_exps.git",
    detailsLink: "/projects/dcase-2025",
    slug: "dcase-2025",
  },
  {
    title: "QVIM AES 2025 Challenge",
    shortDescription:
      "Ensemble of audio transformers for query-by-vocal-imitation. Top-3 finisher.",
    fullDescription:
      "Developed an ensemble of PaSST, PANNs, BEATs and MobileNetV3 for query-by-vocal-imitation. Combined DSP-based data augmentation and fine-tuning of pretrained audio transformers to boost MRR score.",
    image: "/project-images/qvim-challenge-overview.png",
    tags: ["PaSST", "PANNs", "Data Augmentation", "DSP", "Fine-tuning"],
    demoLink: "https://qvim-aes.github.io/",
    codeLink: "https://github.com/RP335/qvim-baseline",
    detailsLink: "/projects/qvim-aes2025",
    slug: "qvim-aes2025",
  },
  {
    title: "Sound Source localization (SH Domain)",
    shortDescription:
      "Adversarial masking techniques for robust sound source localization. Accepted to Asilomar 2025.",
    fullDescription:
      "Collaborated on adversarial masking techniques for robust sound source localization in the SH domain. Derived TDOA equations, conducted beamforming experiments and drafted an ICASSP paper (accepted to Asilomar 2025).",
    image: "/project-images/ssl-iit-k.png",
    tags: ["TDOA", "Beamforming", "Adversarial Masking", "Research"],
    demoLink: "mailto:priyadw@iitk.ac.in?subject=Request%20ICASSP%20Draft",
    codeLink: "https://github.com/RP335/msdm_custom",
    detailsLink: "/projects/iitk-icaspp",
    slug: "iitk-icaspp",
  },
]
