
export interface Project {
  title: string
  shortDescription: string
  fullDescription?: string // Optional now since detailed fields take over
  image: string
  tags: string[]
  demoLink?: string
  codeLink?: string
  detailsLink?: string // Keeping for backward compat if needed
  leaderboardLink?: string
  slug: string
  challenge?: string
  role?: string
  collaborators?: { name: string; link: string }[]
  solution?: string
  keyTechniques?: string[]
  results?: string
  architectureImg?: string
  gallery?: string[]
  highlights?: { value: string; label: string }[]
}

export const projectsData: Project[] = [
  {
    slug: "recorder-mystery-tones",
    title: "Mystery Tones in the Recorder",
    shortDescription: "Coupled flow–acoustic simulations of a capped recorder head to track down a faint note that sounds one octave below the main tone. Ongoing research at MATINE Lab, KAIST.",
    image: "/project-images/recorder-vorticity-loop.webp",
    tags: ["Computational Aeroacoustics", "Navier–Stokes", "Finite Differences", "GPU / HPC", "Musical Acoustics"],
    highlights: [
      { value: "f₀/2", label: "the mystery tone" },
      { value: "3D", label: "coupled flow + sound" },
      { value: "GPU", label: "FD solvers" },
    ],
    challenge: "Blow harder into a recorder head and the pitch does not simply rise. It whistles, then drops to a lower note, and close to that drop a faint extra tone appears exactly one octave below the main pitch: the half-harmonic. It comes out of the coupling between a thin, unstable air jet, a sharp edge (the labium) and the resonating air behind it. A linear acoustic model can't explain it, and it is very hard to see inside a real instrument.",
    role: "Visiting research student at MATINE Lab, KAIST, working with Jin Woo Lee on his GPU finite-difference flow–acoustic solver. I build the instrument geometry, run the jet-speed sweeps on the cluster, work on solver performance, and handle the signal analysis and visualisation of the flow and the sound.",
    collaborators: [
      { name: "Jin Woo Lee", link: "https://matine-kaist.github.io/" },
    ],
    solution: "We rebuild the head in 3D and solve the incompressible flow and the sound field together with a hydrodynamic/acoustic splitting method. The jet and its vortices act as a Lighthill-type acoustic source, and the sound pushes back on the jet (two-way coupling). Virtual microphones in the mouth window, inside the cavity and in the far field record each blowing speed, so the simulation can be listened to as well as looked at. Filtering the flow field at the main pitch and at half of it shows where in the flow the mystery tone lives.",
    keyTechniques: [
      "Incompressible Navier–Stokes with a hydrodynamic/acoustic splitting method",
      "Lighthill-type acoustic source terms with two-way flow–sound coupling",
      "GPU finite-difference solvers run on an HPC cluster",
      "3D geometry of a capped recorder head with a sub-millimetre jet channel",
      "Virtual probes, spectral analysis and phase-band filtering of the flow (f₀ vs f₀/2)",
      "Vortex identification with the Q-criterion, visualised in Python and ParaView",
    ],
    results: "Ongoing. The simulated blowing sweep reproduces the sequence heard in mechanical-mouth experiments: silence, a high whistle, the octave-below tone, then the drop to a lower note. More soon.",
    gallery: [
      "/project-images/recorder-anim-u15.webp",
      "/project-images/recorder-vortex-3d.webp",
      "/project-images/recorder-phase-frames.webp",
    ],
  },
  {
    slug: "pianoid",
    title: "PianoID: Inverse Physical Modelling of the Piano",
    shortDescription: "Calibrating a real-time physical piano model to one specific acoustic instrument from a sparse set of recorded notes: analytical string identification, 88-key compass interpolation, and a nonlinear hammer inverse. JUCE/C++ prototype running; research ongoing.",
    image: "/project-images/ui_screenshots_pianoID/screenshots/01_instrument_perform.png",
    tags: ["Computational Acoustics", "Inverse Problems", "System Identification", "Physical Modelling", "JUCE / C++", "DSP"],
    highlights: [
      { value: "4", label: "stage inverse" },
      { value: "88", label: "keys from ~10" },
      { value: "12 kHz", label: "modal bandwidth" },
    ],
    challenge: "Matching a physical piano model to a real instrument is an ill-posed inverse problem. From a handful of notes recorded in an untreated room, you have to recover hundreds of coupled parameters: string stiffness and inharmonicity, frequency-dependent losses, unison detuning, nonlinear hysteretic hammer felt, and soundboard radiation. Black-box neural capture (the way amp modellers work) cannot help, because a piano has no input jack for a test sweep, and a snapshot trained on a few notes cannot extrapolate to 88 keys, 128 velocities, pedals and sympathetic resonance. End-to-end gradient descent through a recursive waveguide or FDTD scheme is not much better: backpropagating through tens of thousands of time steps is unstable, and a fraction-of-a-percent error in f₁ or B misaligns the upper partials so badly that spectral losses stop carrying useful gradients.",
    role: "I designed and built the real-time JUCE/C++ engine (codename sora), the plugin UI and the analysis tooling, and I'm leading the calibration research.",
    solution: "The pipeline exploits the piano's physical modularity, so the parameters that can be solved in closed form never go near an optimiser. Stage 1 is analytical: a Partial Frequencies Deviation loop (Rauhala–Välimäki) jointly locks f₁ and B from f_k = k·f₁·√(1 + B·k²), restricted to partials 6–12 on double-wound bass strings. Per-partial decay rates σ_k ≈ b₁ + b₃·ω_k² come from STFT tracking with Bank's τ⁴-weighted regression, and unison detuning is read off the beat nodes. Stage 2 takes 9–15 anchor notes to all 88 keys with Rigaud's dual-bridge model, B(m) = exp(b_B(m)) + exp(b_T(m)), and rebuilds the Railsback stretch curve from octave-type matching. With the partials already aligned, Stage 3 becomes a well-conditioned search over Stulov's hysteretic felt parameters {H₀, p, τ₀, ε_h, α}: an encoder trained offline on synthetic renders of the engine gives the starting point, and Ceres (Jet autodiff, Levenberg–Marquardt) or NLopt refines it against a multi-resolution STFT loss on the first 100 ms. Stage 4 recovers the soundboard, cabinet and microphone response by Tikhonov-regularised spectral division against the simulated bridge force, then fits a minimum-phase FIR, an FDN tail and the damper and release behaviour. The target is a full calibration in under a minute on a background CPU thread, fully offline.",
    keyTechniques: [
      "Stiff lossy string PDE (Chaigne–Askenfelt) realised as modal synthesis up to 12 kHz",
      "Joint f₁ / inharmonicity B estimation (PFD algorithm), with a double-wound bass correction",
      "Frequency-dependent loss fitting, σ_k ≈ b₁ + b₃·ω_k², with perceptually weighted least squares",
      "Sparse-to-dense compass interpolation (Rigaud dual-bridge model) and Railsback stretch tuning",
      "Nonlinear hysteretic hammer inverse: neural initialisation plus local Ceres / NLopt refinement",
      "Regularised spectral deconvolution of soundboard radiation, minimum-phase FIR, FDN reverb",
      "Thread-safe background calibration in JUCE with an atomic parameter swap into the audio thread",
    ],
    results: "Running today in the JUCE prototype: the forward model (strings, hammer, damping, unison, pedals, soundboard and air stages), per-note f₁, B and decay estimation from 3–9 labeled notes, the log-B compass view and stretch tuning with Scala import. In progress: the full Stage 1 loss and beating extraction, the hammer inverse (Stage 3) and soundboard deconvolution (Stage 4). Open questions: identifiability of the felt parameters, model mismatch, and generalising to notes and dynamics left out of the fit.",
    architectureImg: "/project-images/pianoid-workflow.webp",
    gallery: [
      "/project-images/ui_screenshots_pianoID/screenshots/02_instrument_mechanics.png",
      "/project-images/ui_screenshots_pianoID/screenshots/03_instrument_space.png",
      "/project-images/ui_screenshots_pianoID/screenshots/04_inverse.png",
      "/project-images/ui_screenshots_pianoID/screenshots/05_tuning.png",
    ],
  },
  {
    slug: "orbkord",
    title: "OrbKord: Piano Analysis & Transcription",
    shortDescription: "A browser app for studying harmony: real-time chord recognition, piano audio-to-MIDI transcription, a harmoniser and microtonal tunings. Live, with paying users.",
    image: "/project-images/orbkord-hero-app.webp",
    tags: ["Web Audio", "Web MIDI", "TransKun", "Music Theory", "Microtonal", "Product"],
    demoLink: "https://orbkord.net",
    highlights: [
      { value: "700+", label: "monthly users" },
      { value: "60+", label: "paid licences" },
      { value: "63", label: "chord shapes" },
    ],
    challenge: "Most chord tools name one chord at a time from typed-in notes. They can't follow real playing with the sustain pedal down, can't take a piano recording as input, and stop at 12-tone equal temperament. I wanted one tool that names whatever a pianist is actually holding, whether it comes from a MIDI file, a keyboard or a recording.",
    role: "I built and deployed OrbKord end to end: the in-browser chord engine and UI, the GPU-backed transcription service, accounts, licensing and payments. It sells as a one-time $15 licence, with credits for audio-to-MIDI.",
    solution: "Everything except transcription runs in the browser, so the app costs almost nothing per user and can sell for a one-time price. Notes come from MIDI files, a MIDI keyboard (Web MIDI), the laptop keyboard or a piano recording. A sustain-aware recogniser names the held chord with its inversion, voicing, intervals and key-aware spelling, and draws it on a grand staff. Recordings go to a rented GPU server running TransKun-based piano transcription with custom expression post-processing (plus piano separation for noisy recordings), and the MIDI opens straight back in the app.",
    keyTechniques: [
      "Sustain-aware chord recognition across 63 chord shapes, with exact, jazz and simple naming",
      "Key-aware note spelling in 15 keys, rendered on a grand staff",
      "TransKun-based piano audio-to-MIDI on GPU, with piano separation for noisy recordings",
      "Harmoniser and sequencer: 190 progressions, 22 moods, 5 comping styles",
      "Microtonal tunings: 19-, 31-, 41- and 53-EDO, Scala import, MPE MIDI export",
      "Sampled Rhodes and grand piano (6 velocity layers) with convolution reverb",
      "1080p / 60 fps video export with audio",
    ],
    results: "700+ monthly users and 60+ paid licences. Run on a single MIDI file (Memories of Paris), it identified 164 distinct chords. Launched on Product Hunt on 9 November 2026.",
    gallery: [
      "/project-images/orbkord-stage-paris.webp",
      "/project-images/orbkord-chord-panel.webp",
      "/project-images/orbkord-harmonise.webp",
      "/project-images/orbkord-iso-31edo.webp",
      "/project-images/orbkord-a2m.webp",
      "/project-images/orbkord-sequencer-side.webp",
    ],
  },
  {
    slug: "cadenza-icassp",
    title: "Intrusive Lyric Intelligibility (ICASSP Cadenza)",
    shortDescription: "Ranked 2nd in the Cadenza Challenge. Hybrid attention network + tree-based regressors for predicting lyric intelligibility in music.",
    image: "/project-images/cadenza-image.png",
    tags: ["Hybrid Attention", "Ensemble Learning", "Audio Flamingo", "ICASSP 2026", "Python"],
    demoLink: "https://ieeexplore.ieee.org/document/11464474",
    codeLink: "https://github.com/vvk-mhn/cad_icassp_2026/tree/main",
    leaderboardLink: "https://eval.ai/web/challenges/challenge-page/2634/leaderboard/6866",
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
    image: "/project-images/savox-otos-image.png",
    tags: ["Embedded Systems", "DSP", "NFC", "Product Development", "User Research", "C++", "Python"],
    demoLink: "",
    codeLink: "", // Removed as it's a private repo
    challenge: "Professional hearing protection headsets are largely one-size-fits-all in terms of audio tuning. Workers with noise-induced hearing loss struggle to understand speech, reducing safety and increasing fatigue. The challenge was to apply worker-specific hearing profiles to the audio signal without modifying the certified headset hardware, while ensuring ultra-low latency (<3ms) and preserving high speech intelligibility avoiding low-frequency masking.",
    role: "As Tech Lead (Acoustics and Audio Tech) for the Aalto PDP team, I engineered the real-time audio pipeline and DSP for embedded hardware (Teensy 3.2/4.0). I implemented the NAL-R prescription algorithm with 8-band WDRC compression and managed the overall technical architecture. The algorithm and work developed are now being mirrored to Savox and Otos for integration into their product lines.",
    collaborators: [
      { name: "Robert Örn (PM - Product Dev)", link: "https://www.linkedin.com/in/robert-orn/" },
      { name: "Hoang Tran (Tech - Robotics/Control)", link: "https://www.linkedin.com/in/hoanggtrann/" },
      { name: "Aws Alizzawi (Supply/Research - Product Dev)", link: "https://www.linkedin.com/in/aws-alizzawi-89210b226/" },
      { name: "Yun Bai (Design/HCI)", link: "https://www.linkedin.com/in/yun-bai-3ab8b5380/" },
      { name: "Hanna Rozmarynowska (Safety Officer - Industrial Design)", link: "https://www.linkedin.com/in/hanna-rozmarynowska/" },
      { name: "Shotaro Tanigawa (Economy Officer - Economics)", link: "#" },
      { name: "Petteri Hyvarinen (External Consultant - Acoustics)", link: "#" }
    ],
    solution: "We engineered an inline NFC-enabled DSP module that reads individual audiometric data from NFC-encoded cards and applies frequency-specific amplification using the NAL-R prescription formula to maximize speech intelligibility. This work is confidential as it is being implemented by Savox and Otos, and may be patented or made available based on company rules in the future.",
    keyTechniques: [
      "NAL-R Prescription Formula Implementation",
      "8-Band Parametric EQ & WDRC Compression Pipeline",
      "Embedded DSP (Teensy 3.2/4.0, ARM Cortex-M4/M7, PJRC Audio Shield)",
      "NFC-based Audiogram Loading (NTAG213, HIMSA Noah format XMLs)",
      "Real-time Audio Processing (under 3ms latency)",
      "Psychoacoustic Testing with KEMAR mannequin"
    ],
    results: "Validated a functional prototype that applies NAL-R correction in real-time. The developed IP is currently being integrated by Savox and Otos. Source code is private due to confidentiality agreements.",
    architectureImg: "/project-images/kemar_head_diagram.jpeg",
    gallery: [
      "/project-images/electronics_and_stuff_raw.jpg",
      "/project-images/my_team_mates_and_me_working.jpeg",
      "/project-images/user-flow.jpeg"
    ]
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
