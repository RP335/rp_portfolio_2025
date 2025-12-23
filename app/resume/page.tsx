"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Globe, MapPin, Phone, Download } from "lucide-react"
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
                    </div>
                    <div className="mt-4 sm:mt-0 flex flex-col sm:items-end gap-2 text-sm text-gray-600">
                        <a href="mailto:rahul.peter@gmail.com" className="hover:text-blue-600 flex items-center gap-2">
                            <Mail className="w-4 h-4" /> rahul.peter@gmail.com
                        </a>
                        <a href="tel:+918431940842" className="hover:text-blue-600 flex items-center gap-2">
                            <Phone className="w-4 h-4" /> +91 84319 40842
                        </a>
                        <div className="flex gap-4 mt-2">
                            <a href="https://github.com/RP335" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/rahul-peter-172293194/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://connect-with-rahul-peter.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Summary */}
                <Card className="border-none shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-blue-800 uppercase tracking-wide">Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 leading-relaxed">
                            M.Sc. student in Acoustics & Audio Technology at Aalto University, Finland.
                            Combined expertise in audio machine learning, software engineering (Rust, Kotlin, Python), signal processing, and acoustics research.
                            Currently collaborating with Savox and Otos on a personalized hearing-protection system for first responders (real-time DSP on Tympan).
                        </p>
                    </CardContent>
                </Card>

                {/* Work Experience */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 ml-1">Work Experience</h2>

                    <Card className="border-none shadow-sm transition-all hover:shadow-md">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg font-semibold">Research Assistant</CardTitle>
                                    <CardDescription className="text-base font-medium text-gray-700">IIT Kanpur</CardDescription>
                                </div>
                                <Badge variant="outline" className="text-xs">June 2024 -- Sept 2024</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                                <li>Developed the Adversarial Masking (Adv-M) framework for robust sound source localization in the Spherical Harmonic (SH) domain, designing a GAN-based real-time binary mask generator.</li>
                                <li>Built and integrated the full ML pipeline: SH decomposition, adversarial mask generation, and downstream CNN-based DOA estimation.</li>
                                <li>Achieved ~30% localization accuracy improvement and 44% RMSE reduction. Paper accepted at IEEE Asilomar 2025.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm transition-all hover:shadow-md">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg font-semibold">Backend Software Engineer</CardTitle>
                                    <CardDescription className="text-base font-medium text-gray-700">Pine Labs</CardDescription>
                                </div>
                                <Badge variant="outline" className="text-xs">July 2023 -- June 2025</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                                <li>Backend Developer in the Online Payments Plural Team, building affordability/EMI features for merchants like Flipkart, Amazon, Apple.</li>
                                <li>Enhanced Svix webhook service performance by implementing custom message serialization in Rust (-34% latency).</li>
                                <li>Built parallel batch processing pipelines with exponential backoff for Dead Letter Queues.</li>
                                <li>Developed retry logic with circuit breaker patterns in Kotlin and secure payload verification.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm transition-all hover:shadow-md">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg font-semibold">Freelance Musician & Engineer</CardTitle>
                                </div>
                                <Badge variant="outline" className="text-xs">June 2021 -- Present</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                                <li>Session pianist, composer, and live FOH assistant.</li>
                                <li>Produced, mixed, and mastered tracks; contributed to open-source audio tools.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* Projects */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 ml-1">Key Projects</h2>

                    <Card className="border-none shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Multimodal Lyric Intelligibility (ICASSP Cadenza)</CardTitle>
                            <p className="text-sm text-gray-500 italic">Ranked 2nd out of 30 teams (intrusive track)</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 mb-2">Compact hybrid system combining audio features with text-level metrics to assess lyric intelligibility in mixtures. Improved NCC to 0.69 (RMSE 0.265).</p>
                            <div className="flex gap-2 flex-wrap">
                                <Badge variant="secondary">ICASSP 2026</Badge>
                                <Badge variant="secondary">Hybrid NN</Badge>
                                <Badge variant="secondary">Whisper/Wav2Vec2</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Esperanto ASR Course Competition</CardTitle>
                            <p className="text-sm text-gray-500 italic">Ranked 3rd (WER=0.13)</p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 mb-2">Fine-tuned Conformer-Transducer with SpecAugment. Ensemble decoding with wav2vec2-large-xlsr-53 via NIST ROVER.</p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Personalized Hearing Protection for First Responders</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 mb-2">Smart audio module between radio and headset. Real-time DSP pipeline (WDRC, noise reduction) on Tympan Rev F < 10ms latency.</p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">DCASE 2025 SELD Challenge</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 mb-2">Conformer ensemble for sound event localization and detection using synthetic data from SpatialScaper.</p>
                        </CardContent>
                    </Card>
                </section>


                {/* Education & Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                        <Card className="border-none shadow-sm h-full">
                            <CardContent className="pt-6 space-y-6">
                                <div>
                                    <h3 className="font-bold text-gray-900">M.Sc., Acoustics and Audio Technology</h3>
                                    <p className="text-blue-600">Aalto University, Espoo, Finland</p>
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>2025 -- Present</span>
                                        <span className="font-medium text-gray-700">GPA: 4.44/5.00</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">B.E., Electronics & Communications</h3>
                                    <p className="text-blue-600">BITS Pilani, Goa Campus</p>
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>2019 -- 2023</span>
                                        <span className="font-medium text-gray-700">GPA: 8.14/10.00</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
                        <Card className="border-none shadow-sm h-full">
                            <CardContent className="pt-6 space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Audio / Research</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Audio ML</Badge>
                                        <Badge variant="outline">SELD</Badge>
                                        <Badge variant="outline">Spatial Audio</Badge>
                                        <Badge variant="outline">DSP</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Software / Dev</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Rust</Badge>
                                        <Badge variant="outline">Kotlin</Badge>
                                        <Badge variant="outline">Python</Badge>
                                        <Badge variant="outline">Docker</Badge>
                                        <Badge variant="outline">CI/CD</Badge>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Tools</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">TensorFlow</Badge>
                                        <Badge variant="outline">PyTorch</Badge>
                                        <Badge variant="outline">SpatialScaper</Badge>
                                        <Badge variant="outline">JUCE</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                <div className="flex justify-center pt-8">
                    <Link href="/">
                        <Button variant="outline" className="gap-2">
                            Back to Portfolio
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
