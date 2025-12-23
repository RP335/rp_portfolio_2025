"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Globe, Phone, FileText } from "lucide-react" // Replaced MapPin/Download with FileText for generic doc icon if needed
import Link from "next/link"

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header Section */}
                <section className="bg-white rounded-2xl shadow-sm p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Rahul Peter</h1>
                        <p className="text-lg text-gray-600 mt-2">M.Sc. Student in Acoustics & Audio Technology</p>
                        <p className="text-sm text-gray-500 mt-1 flex items-center justify-center sm:justify-start gap-2">
                            <Phone className="w-4 h-4" /> +91 84319 40842
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex flex-col sm:items-end gap-2 text-sm text-gray-600">
                        <div className="flex gap-4 mt-2 justify-center sm:justify-end">
                            <a href="https://github.com/RP335" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors flex items-center gap-1">
                                <Github className="w-4 h-4" /> RP335
                            </a>
                            <a href="https://www.linkedin.com/in/rahul-peter-172293194/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors flex items-center gap-1">
                                <Linkedin className="w-4 h-4" /> rahul
                            </a>
                            <a href="mailto:rahul.peter@gmail.com" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                                <Mail className="w-4 h-4" /> rahul.peter@gmail.com
                            </a>
                            <a href="https://connect-with-rahul-peter.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-1">
                                <Globe className="w-4 h-4" /> Portfolio
                            </a>
                        </div>
                    </div>
                </section>

                {/* Summary */}
                <section>
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b pb-2 mb-4">Summary</h2>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        M.Sc. student in Acoustics & Audio Technology at Aalto University, Finland.
                        Combined expertise in audio machine learning, software engineering (Rust, Kotlin, Python), signal processing, and acoustics research.
                        Currently collaborating with Savox and Otos on a personalized hearing-protection system for first responders (real-time DSP on Tympan).
                    </p>
                </section>

                {/* Work Experience */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b pb-2 mb-4">Work Experience</h2>

                    <div className="space-y-2">
                        <div className="flex justify-between items-baseline flex-wrap">
                            <h3 className="text-lg font-bold text-gray-900">Research Assistant, IIT Kanpur</h3>
                            <span className="text-sm text-gray-600 font-medium">June 2024 -- Sept 2024</span>
                        </div>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 text-justify">
                            <li>Developed the Adversarial Masking (Adv-M) framework for robust sound source localization in the Spherical Harmonic (SH) domain, designing and implementing a GAN-based real-time binary mask generator to separate target speech from directional interference.</li>
                            <li>Built and integrated the full ML pipeline: SH decomposition, adversarial mask generation, and downstream CNN-based DOA estimation; contributed to deriving and incorporating TDOA-informed model design choices.</li>
                            <li>System demonstrated substantial gains (approximately 30% localization accuracy improvement and 44% RMSE reduction) and led to a paper accepted at the IEEE Asilomar Conference on Signals, Systems & Computers 2025.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-baseline flex-wrap">
                            <h3 className="text-lg font-bold text-gray-900">Backend Software Engineer at Pine Labs</h3>
                            <span className="text-sm text-gray-600 font-medium">July 2023 -- June 2025</span>
                        </div>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 text-justify">
                            <li>Backend Developer in the Online Payments Plural Team at PineLabs, collaborating with industry-leading merchants such as Flipkart, Amazon, and brands like Apple to build and integrate affordability and EMI features into the online payments platform, streamlining business processes.</li>
                            <li>Enhanced Svix webhook service performance by implementing custom message serialization in Rust, reducing latency by 34%.</li>
                            <li>Built parallel batch processing pipelines with exponential backoff for Dead Letter Queue handling.</li>
                            <li>Developed retry logic with circuit breaker patterns in Kotlin and secure payload verification for financial events.</li>
                            <li>Integrated metrics collection for delivery success rates and processing times.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-baseline flex-wrap">
                            <h3 className="text-lg font-bold text-gray-900">Freelance Musician & Engineer</h3>
                            <span className="text-sm text-gray-600 font-medium">June 2021 -- Present</span>
                        </div>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 text-justify">
                            <li>Session pianist, composer, and live FOH assistant.</li>
                            <li>Produced, mixed, and mastered tracks; contributed to open-source audio tools.</li>
                        </ul>
                    </div>
                </section>

                {/* Projects */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b pb-2 mb-4">Projects</h2>

                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900">Multimodal Lyric Intelligibility (ICASSP Cadenza)</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            Ranked 2nd out of 30 teams (intrusive track) and invited to present the paper at ICASSP 2026: NCC=0.69, RMSE=0.265. Compact hybrid system combining audio features with text-level metrics to assess lyric intelligibility in mixtures.
                        </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 text-justify">
                            <li>Extracted ASR hypotheses (Whisper/Wav2Vec2/WavLM/Canary) and linguistic features (NLTK POS ratios, syllables/word), computed BERTScore against references, and fused scalar blocks with attention-pooled encoder embeddings.</li>
                            <li>Implemented vocal separation (Demucs) and computed intrusive perceptual metrics (STOI, Zimtohrli) to model acoustic quality and lexical alignment.</li>
                            <li>Emphasis on clean, reproducible pipelines for data processing, scoring, and model training.</li>
                        </ul>
                        <div className="flex gap-4 text-sm">
                            <a href="https://eval.ai/web/challenges/challenge-page/2634/leaderboard/6866" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Leaderboard EvalAI</a>
                            <a href="https://cadenzachallenge.org/docs/clip1/results" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Leaderboard official</a>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900">Esperanto ASR Course Competition at Aalto</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            Ranked 3rd in class out of 15 teams. (WER=0.13, CER=0.04). Reproducible code: <a href="https://github.com/RP335/speech_rec_course_comp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">RP335/speech_rec_course_comp</a>.
                        </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 text-justify">
                            <li>Built NeMo manifests and fine-tuned a Conformer-Transducer with SpecAugment and partial layer freezing; averaged top-5 checkpoints for stability.</li>
                            <li>Ensemble decoding with wav2vec2-large-xlsr-53-esperanto via NIST ROVER; applied rule-based phonetic post-processing (word-final devoicing) for consistent pronunciation.</li>
                            <li>Modular scripts for normalization, inference, and submission; demonstrates multilingual text handling, hypothesis scoring, and reproducible research code.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900">Personalized Hearing Protection for First Responders</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            Defined a smart audio module between radio/comms and headset to balance protection and intelligibility while preserving speech cues.
                        </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 text-justify">
                            <li>Real-time DSP pipeline (WDRC, noise reduction, safety limiter, smart mixing) targeting &lt;10ms latency on Tympan Rev F.</li>
                            <li>Personalization using audiogram + PAR fit-check + noise dose tracking; planned validation with STOI, LAeq, latency, and field tests.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900">DCASE 2025 SELD Challenge</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            Conformer ensemble for sound event localization and detection using synthetic data from SpatialScaper. <a href="https://dcase.community/documents/challenge2025/technical_reports/DCASE2025_Bahuguna_20_t3.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Technical report</a>
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900">Query-by-Vocal-Imitation (QVIM) Challenge</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            Top-3 team finisher using MobileNetV3, PANNs, PaSST, and BEATs transformers on VimSketch. Focus on query-to-item matching, embeddings, and retrieval. <a href="https://qvim-aes.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">qvim-aes.github.io</a> | <a href="https://connect-with-rahul-peter.vercel.app/projects/qvim-aes2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">QVIM-Aalto</a>
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900">Voiced/Non-Voiced Detection in Speech</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            Research project under Prof. <strong>Anurag Nishad</strong> on detecting voiced vs. non-voiced segments using iterative Variational Mode Decomposition (VMD) to extract fundamental frequency components and their envelopes. Evaluated against Empirical Mode Decomposition and wavelet-based baselines on CMU Arctic and NOISEX-92 datasets under varied noise conditions to quantify robustness. <a href="https://drive.google.com/file/d/1ZTTUJ7lAKjL9760fouujA7ea0Itf53jW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Details</a>
                        </p>
                    </div>
                </section>

                {/* Publications */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b pb-2 mb-4">Publications</h2>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 text-justify">
                        <li>
                            <strong>Adversarial Masking Approach for Robust Source Localization in the SH Domain.</strong> Accepted to IEEE Asilomar Conference on Signals, Systems & Computers 2025. <a href="https://cmsworkshops.com/Asilomar2025/view_paper.php?PaperNum=1523" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Session page</a>
                        </li>
                        <li>
                            <strong>Class-Aware Hybrid Ensemble for Query-by-Vocal Imitation.</strong> Published as a late-breaking demo in the LBDP track at the 2025 AES International Conference on Machine Learning and Artificial Intelligence for Audio (AIMLA), London, UK. <a href="https://aes2.org/event-extra/2025-aes-international-conference-on-artificial-intelligence-and-machine-learning-for-audio-latebreaking/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LBDP page</a>
                        </li>
                    </ul>
                </section>


                {/* Education */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b pb-2 mb-4">Education</h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between flex-wrap">
                            <div>
                                <span className="font-medium text-gray-900">2025 -- Present</span> <span className="mx-2">M.Sc., Acoustics and Audio Technology, <strong>Aalto University</strong>, Espoo, Finland</span>
                            </div>
                            <a href="https://drive.google.com/file/d/1ORS3tgQssICOc8uHI9eK302wExFgVe99/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium whitespace-nowrap">GPA: 4.44/5.00</a>
                        </div>
                        <div className="flex justify-between flex-wrap">
                            <div>
                                <span className="font-medium text-gray-900">2019 -- 2023</span> <span className="mx-2">B.E., Electronics & Communications, <strong>BITS Pilani, K.K. Birla Goa Campus</strong></span>
                            </div>
                            <span className="text-gray-700 font-medium whitespace-nowrap">(GPA: 8.14/10.00)</span>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b pb-2 mb-4">Skills</h2>
                    <div className="grid grid-cols-[160px_1fr] gap-4 text-sm">
                        <div className="font-semibold text-gray-900">Audio / Research</div>
                        <div className="text-gray-700">Audio Machine Learning, Sound Event Localization, Spatial Audio Synthesis, Signal Processing</div>

                        <div className="font-semibold text-gray-900">Software / Dev</div>
                        <div className="text-gray-700">Rust, Kotlin, Python, Docker, CI/CD, Team Collaboration</div>

                        <div className="font-semibold text-gray-900">Tools / Frameworks</div>
                        <div className="text-gray-700">TensorFlow, PyTorch, SpatialScaper, JUCE, Git, AWS</div>
                    </div>
                </section>

                <div className="flex justify-center pt-8 border-t mt-8">
                    <Link href="/">
                        <Button variant="outline" className="gap-2">
                            Back to Portfolio
                        </Button>
                    </Link>
                </div>

                <div className="text-center text-xs text-gray-400 mt-8 pb-4">
                    Last updated: July 24, 2025
                </div>

            </div>
        </div>
    )
}
