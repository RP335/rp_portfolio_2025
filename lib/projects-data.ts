
export interface Project {
  title: string
  shortDescription: string
  fullDescription?: string // Optional now since detailed fields take over
  image: string
  tags: string[]
  demoLink?: string
  codeLink?: string
  detailsLink?: string // Keeping for backward compat if needed
  slug: string
  challenge?: string
  role?: string
  collaborators?: { name: string; link: string }[]
  solution?: string
  keyTechniques?: string[]
  results?: string
  architectureImg?: string
}

export const projectsData: Project[] = [
  {
    slug: "cadenza-icassp",
    title: "Intrusive Lyric Intelligibility (ICASSP Cadenza)",
    shortDescription: "Ranked 2nd in the Cadenza Challenge. Hybrid attention network + tree-based regressors for predicting lyric intelligibility in music.",
    image: "/project-images/cadenza-overview.png",
    tags: ["Hybrid Attention", "Ensemble Learning", "Audio Flamingo", "ICASSP 2026", "Python"],
    demoLink: "https://cadenzachallenge.org/docs/clip1/results",
    codeLink: "https://eval.ai/web/challenges/challenge-page/2634/leaderboard/6866",
    challenge: "The Cadenza ICASSP 2026 Challenge tasked systems to predict lyric intelligibility rates from perceptual experiments on accompanied singing, including simulated hearing loss. The main difficulty was building an intrusive model that accounts for acoustic quality, lexical alignment, and contextual cues in music mixtures.",
    role: "I was responsible for the key orchestration, planning, and delivering results for the entire project. Our team from Aalto University secured 2nd place in the final evaluation rankings.",
    collaborators: [
      { name: "Vivek Mohan", link: "#" },
      { name: "Seralathan Subramanian", link: "#" },
      { name: "Lauri Juvela", link: "#" }
    ],
    solution: "We built a system (T071a) that combines a hybrid neural mixture of experts (WavLM/Wav2Vec2/Whisper) performing attention pooling over time-series embeddings, fused with tree-based regressors (LightGBM, XGBoost, CatBoost). Scalar feature blocks summarized intrusive perceptual metrics (STOI, PESQ, Zimtohrli), ASR stability, and linguistic complexity. A multi-modal LLM (Audio Flamingo) score provided human-like rating priors.",
    keyTechniques: [
      "Hybrid Neural Mixture of Experts (WavLM/Wav2Vec2/Whisper)",
      "Tree-based Regressors (LightGBM, XGBoost, CatBoost)",
      "Intrusive Perceptual Metrics (Zimtohrli, STOI)",
      "Multi-modal LLM scoring (Audio Flamingo 3)",
      "Attention Pooling"
    ],
    results: "The system achieved a Root Mean Squared Error (RMSE) of 0.265 and Normalized Cross-Correlation (NCC) of 0.69 on the official evaluation set, ranking 2nd place.",
    architectureImg: "/project-images/cadenza-architecture.png" // Placeholder
  },
  {
    slug: "savox-otos",
    title: "Personalised Hearing for Savox-Otos",
    shortDescription: "Developing an inline audio module for professional hearing protection headsets to apply personalized hearing profiles.",
    image: "/project-images/savox-otos.png",
    tags: ["Embedded Systems", "DSP", "NFC", "Product Development", "User Research"],
    demoLink: "",
    codeLink: "",
    challenge: "Professional hearing protection headsets are largely one-size-fits-all in terms of audio tuning. Workers with noise-induced hearing loss struggle to understand speech, reducing safety and increasing fatigue. The challenge was to apply worker-specific hearing profiles to the audio signal without modifying the certified headset hardware.",
    role: "As Tech Lead, I worked on the audio programming and DSP for embedded systems. I collaborated with the electronics and research teams to integrate the solution.",
    collaborators: [
      { name: "Hoang Tran (Electronics/NFC)", link: "#" },
      { name: "Robert Örn (PM)", link: "#" }
    ],
    solution: "We designed an inline audio module that uses an NFC card to load the worker's hearing profile into a DSP unit. The module shapes the audio signal in real-time before it reaches the headset. The system works offline, integrates with existing Savox controllers, and requires no user interaction during missions.",
    keyTechniques: [
      "Embedded DSP (Tympan Rev F / Teensy 4.1)",
      "NFC-based Profile Loading (PN7150)",
      "Real-time Audio Processing",
      "Hardware Integration"
    ],
    results: "Designed a functional concept for an NFC-driven inline DSP module. Prototyped the hardware integration and selected algorithms for hearing personalization.",
    architectureImg: "/project-images/savox-architecture.png" // Placeholder
  },
  {
    slug: "dcase-2025",
    title: "DCASE 2025 SELD Challenge",
    shortDescription: "Built a Conformer-based ensemble for stereo sound event localization. Generated synthetic spatial data with SpatialScaper, implemented log-Mel & FOA feature pipelines in Rust with Rayon parallelism.",
    image: "/project-images/dcase-seld-overview.png",
    tags: ["SpatialScaper", "Conformer", "Rust", "PyTorch", "SELD"],
    demoLink: "https://dcase.community/documents/challenge2025/technical_reports/DCASE2025_Bahuguna_20_t3.pdf",
    codeLink: "https://github.com/RP335/dcase_2025_seld_exps.git",
    challenge: "The DCASE 2025 Challenge (Task 3) focused on Sound Event Localization and Detection (SELD) in stereo audio. The primary difficulties were accurately performing joint detection, direction-of-arrival estimation, and distance estimation, especially with the significant class imbalance present in the STARSS23 dataset.",
    role: "I co-led this project, focusing on the core model architecture and performance. My main responsibilities included designing and implementing the Conformer-based ensemble, developing the feature extraction pipelines in Rust for performance, and training the models. I collaborated closely with my partner, Arjun Bahuguna, who was instrumental in the synthetic data generation using SpatialScaper and co-authoring the technical report.",
    collaborators: [
      { name: "Arjun Bahuguna", link: "https://www.linkedin.com/in/arjunbahuguna/" },
    ],
    solution: "We proposed a 'winner-takes-all' ensemble of two specialized Conformer models: one for the full 3D SELD task (multi-ACCDOA) and another expert model for just SED and DOA. This allowed the system to dynamically select the most reliable prediction at each time frame based on pre-calculated, per-class performance metrics. To combat data scarcity for rare classes, we leveraged SpatialScaper for synthetic data generation and applied augmentations like channel-swapping.",
    keyTechniques: [
      "Conformer-based model architecture for sequence modeling.",
      "Multi-ACCDOA output format for joint 3D SELD.",
      "Task-specific SED-DOA model with a weighted loss function.",
      "Frame-level 'winner-takes-all' ensembling strategy based on performance lookup tables.",
      "Synthetic data generation with SpatialScaper to address class imbalance."
    ],
    results: "Our ensemble model achieved a final F-score of 28.0%, a DOA error of 17.3°, and a relative distance error of 0.43 on the development set, outperforming the challenge baseline and demonstrating the effectiveness of our specialized ensemble strategy.",
    architectureImg: "/project-images/dcase-architecture.png",
  },
  {
    slug: "qvim-aes2025",
    title: "QVIM AES 2025 Challenge",
    shortDescription: "Developed an ensemble of PaSST, PANNs, BEATs and MobileNetV3 for query-by-vocal-imitation. Combined DSP-based data augmentation and fine-tuning of pretrained audio transformers.",
    image: "/project-images/qvim-challenge-overview.png",
    tags: ["PaSST", "PANNs", "Data Augmentation", "DSP", "Fine-tuning"],
    demoLink: "https://drive.google.com/drive/folders/1PBCdzSWXXxHemhHLLGjw-Ii9J7pjQ5nb?usp=sharing",
    codeLink: "https://github.com/RP335/qvim-baseline",
    challenge: "The goal of the 'Query-by-Vocal-Imitation' (QVIM) task is to retrieve a specific sound effect from a large database based on a user's vocal imitation of that sound. The challenge lies in bridging the significant acoustic gap between a human voice and a real-world sound event.",
    role: "On this project, I was responsible for the end-to-end system design and implementation. I developed the core ensembling logic, fine-tuned the four pre-trained audio encoders (MobileNetV3, PANNs, PaSST, BEATs), and implemented the class-aware fusion strategy. My collaborator, Vivek Mohan, provided invaluable support in researching data augmentation techniques and co-authoring the final report.",
    collaborators: [
      { name: "Vivek Mohan", link: "https://www.linkedin.com/in/vvk-mhn/" },
    ],
    solution: "Our top-performing system was a 'Class-Aware Mixture-of-Experts' ensemble. We fine-tuned four distinct audio encoders on paired vocal-imitation and sound data using a contrastive (InfoNCE) loss. At inference, instead of treating all models equally, we dynamically weighted their contributions based on pre-calculated, per-class MRR scores. This allows the system to rely on the 'expert' model most suited for a given sound class (e.g., using a model that's good at 'wind' for a 'wind' query).",
    keyTechniques: [
      "Ensemble of four pre-trained encoders: MobileNetV3, PANNs, PaSST, and BEATs.",
      "Contrastive fine-tuning using InfoNCE loss to create a shared embedding space.",
      "Class-Aware Mixture-of-Experts fusion based on per-class MRR scores.",
      "Softmax-weighted averaging to blend model outputs.",
      "MRR-targeted data augmentation pipeline for the MobileNetV3 model."
    ],
    results: "The Class-Aware system (System 1) achieved the highest performance, with a final MRR of 0.3191 on the validation set. This significantly outperformed the challenge baselines and demonstrated the benefit of a dynamic, class-specific fusion strategy over static ensembling.",
    architectureImg: "/project-images/qvim-architecture.png",
  },
  {
    slug: "iitk-icaspp",
    title: "Sound Source Localization in the SH Domain",
    shortDescription: "Collaborated on adversarial masking techniques for robust sound source localization in the SH domain. Derived TDOA equations, conducted beamforming experiments and drafted an ICASSP paper.",
    image: "/project-images/ssl-iit-k.png",
    tags: ["TDOA", "Beamforming", "Adversarial Masking", "ICASSP 2025"],
    demoLink: "mailto:priyadw@iitk.ac.in?subject=Request%20ICASSP%20Draft",
    codeLink: "https://github.com/RP335/msdm_custom",
    challenge: "The primary challenge is the accurate localization of a target audio source in the presence of strong directional interference, background noise, and reverberation. Traditional methods often fail when unwanted sounds mask the spatial cues of the target source.",
    role: "As a research collaborator at IIT Kanpur, my core contribution was on the machine learning side. I developed the generative adversarial model (GAN) responsible for separating the 32-channel spherical microphone array audio into speech and noise components. I implemented the complete pipeline for generating the adversarial binary mask and integrated it with the downstream CNN. Additionally, I contributed to the research on the TDOA equations that informed the model's design. The experimental setup and data collection were handled by the dedicated research team at IITK.",
    collaborators: [
      { name: "Dr. Priyadarshini Dwivedi (Supervisor)", link: "mailto:priyadw@iitk.ac.in" }
    ],
    solution: "We introduced a novel Adversarial Masking (Adv-M) framework. The system first decomposes the signal from a spherical microphone array into the Spherical Harmonic (SH) domain. Then, a generative adversarial network is used to create a real-time binary mask that effectively filters out the SH components corresponding to the interfering source. The 'clean' SH features of the target source are then fed into a CNN, which accurately estimates its Direction of Arrival (DOA).",
    keyTechniques: [
      "Spherical Harmonic (SH) Decomposition for spatial feature extraction.",
      "Adversarial Masking (Adv-M) using a GAN to separate target and interference signals.",
      "Real-time binary mask generation.",
      "Convolutional Neural Network (CNN) for DOA estimation from cleaned SH features.",
    ],
    results: "The Adv-M framework demonstrated a significant leap in performance over existing methods. In both simulations and live lab experiments, our approach achieved over a 30% increase in localization accuracy and a 44% reduction in RMSE compared to traditional techniques, proving its robustness in challenging acoustic environments.",
    architectureImg: "/project-images/iitk-architecture.png",
  },
];
