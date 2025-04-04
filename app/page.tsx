"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Linkedin,
  Mail,
  MapPin,
  User,
  FlaskRoundIcon as Flask,
  FileText,
  Book,
  Database,
  Heart,
  Send,
  GraduationCap,
  Users,
  Code,
  Globe,
  FileIcon as FilePresentation,
  ChevronRight,
  ExternalLink,
} from "lucide-react"
import { DownloadButton } from "./components/download-button"

// Google Scholar Icon Component
const GoogleScholarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
)

// ORCID Icon Component
const OrcidIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm4.162 0h3.881c3.131 0 5.134 2.044 5.134 5.022 0 2.978-1.966 5.022-5.134 5.022h-3.881V7.416zm1.444 1.303v7.444h2.406c2.456 0 3.728-1.559 3.728-3.728 0-2.169-1.291-3.722-3.728-3.722h-2.406v.006z" />
  </svg>
)

export default function Home() {
  const [activeTab, setActiveTab] = useState("about-me")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#f9fafb]">
      <header
        className={`py-4 border-b border-gray-200 bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/profile-photo.png"
              alt="Abdallah Abdelmajeed"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div>
              <h1 className="text-xl font-semibold text-[#2e5f96]">Abdallah Abdelmajeed</h1>
              <p className="text-sm text-gray-600">PostDoc Fellow Seeker</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:ay1214@fayoum.edu.eg" className="text-gray-600 hover:text-[#4a90e2] transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdallahabdelmajeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#4a90e2] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=Zg0Z-pgAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#4a90e2] transition-colors"
            >
              <GoogleScholarIcon className="h-5 w-5" />
            </a>
            <a
              href="https://orcid.org/0000-0002-3662-1824"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#4a90e2] transition-colors"
            >
              <OrcidIcon className="h-5 w-5" />
            </a>
            <DownloadButton className="ml-2" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2e5f96]/90 to-[#4a90e2]/90 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/profile-photo.png"
              alt="Abdallah Abdelmajeed"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Abdallah Abdelmajeed</h1>
              <h2 className="text-xl md:text-2xl font-light mb-4">
                Environmental Engineering Researcher & Drone Specialist
              </h2>
              <p className="text-lg max-w-2xl opacity-90 mb-6">
                PhD candidate with expertise in UAV-based research, remote sensing, and geoinformation science.
                Specializing in environmental monitoring and climate change research.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-white/20 hover:bg-white/30 text-white">UAV Research</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Remote Sensing</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Environmental Engineering</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Geoinformation Science</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-72 bg-white rounded-lg shadow-md p-6 md:sticky md:top-24 md:self-start">
            <nav>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab("about-me")}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all ${
                      activeTab === "about-me"
                        ? "bg-[#f0f7ff] text-[#2e5f96] font-medium border-l-4 border-[#4a90e2]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#4a90e2]"
                    }`}
                  >
                    <User className={`h-5 w-5 ${activeTab === "about-me" ? "text-[#4a90e2]" : "text-gray-500"}`} />
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("research")}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all ${
                      activeTab === "research"
                        ? "bg-[#f0f7ff] text-[#2e5f96] font-medium border-l-4 border-[#4a90e2]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#4a90e2]"
                    }`}
                  >
                    <Flask className={`h-5 w-5 ${activeTab === "research" ? "text-[#4a90e2]" : "text-gray-500"}`} />
                    Research
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("cv")}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all ${
                      activeTab === "cv"
                        ? "bg-[#f0f7ff] text-[#2e5f96] font-medium border-l-4 border-[#4a90e2]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#4a90e2]"
                    }`}
                  >
                    <FileText className={`h-5 w-5 ${activeTab === "cv" ? "text-[#4a90e2]" : "text-gray-500"}`} />
                    CV
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("publications")}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all ${
                      activeTab === "publications"
                        ? "bg-[#f0f7ff] text-[#2e5f96] font-medium border-l-4 border-[#4a90e2]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#4a90e2]"
                    }`}
                  >
                    <Book className={`h-5 w-5 ${activeTab === "publications" ? "text-[#4a90e2]" : "text-gray-500"}`} />
                    Publications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("datasets")}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all ${
                      activeTab === "datasets"
                        ? "bg-[#f0f7ff] text-[#2e5f96] font-medium border-l-4 border-[#4a90e2]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#4a90e2]"
                    }`}
                  >
                    <Database className={`h-5 w-5 ${activeTab === "datasets" ? "text-[#4a90e2]" : "text-gray-500"}`} />
                    Datasets
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("interests")}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all ${
                      activeTab === "interests"
                        ? "bg-[#f0f7ff] text-[#2e5f96] font-medium border-l-4 border-[#4a90e2]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#4a90e2]"
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${activeTab === "interests" ? "text-[#4a90e2]" : "text-gray-500"}`} />
                    Interests
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("contact")}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all ${
                      activeTab === "contact"
                        ? "bg-[#f0f7ff] text-[#2e5f96] font-medium border-l-4 border-[#4a90e2]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-[#4a90e2]"
                    }`}
                  >
                    <Send className={`h-5 w-5 ${activeTab === "contact" ? "text-[#4a90e2]" : "text-gray-500"}`} />
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Connect</h3>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:ay1214@fayoum.edu.eg"
                  className="text-gray-700 hover:text-[#4a90e2] transition-colors flex items-center gap-2 text-sm"
                >
                  <Mail className="h-4 w-4" />
                  ay1214@fayoum.edu.eg
                </a>
                <a
                  href="https://www.linkedin.com/in/abdallahabdelmajeed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#4a90e2] transition-colors flex items-center gap-2 text-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://scholar.google.com/citations?user=Zg0Z-pgAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#4a90e2] transition-colors flex items-center gap-2 text-sm"
                >
                  <GoogleScholarIcon className="h-4 w-4" />
                  Google Scholar
                </a>
                <a
                  href="https://orcid.org/0000-0002-3662-1824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#4a90e2] transition-colors flex items-center gap-2 text-sm"
                >
                  <OrcidIcon className="h-4 w-4" />
                  ORCID
                </a>
                <p className="text-gray-700 flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  Poznan, Poland
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* About Me */}
            {activeTab === "about-me" && (
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#f0f7ff] px-8 py-4 border-b border-[#e1effe]">
                  <h2 className="text-2xl font-semibold text-[#2e5f96] flex items-center gap-3">
                    <User className="h-6 w-6 text-[#4a90e2]" />
                    About Me
                  </h2>
                </div>
                <CardContent className="p-8">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      PhD candidate in Environmental Engineering with extensive experience in UAV-based research, remote
                      sensing, and geoinformation science. Proven record in academic teaching, research project
                      management, and publication in high-impact journals. Adept at integrating innovative earth
                      observation techniques with smart agricultural applications and environmental analysis.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Research Focus</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                            <span>UAV-based climate change research in peatlands</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                            <span>Remote sensing applications in environmental monitoring</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                            <span>Geoinformation science for spatial management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                            <span>Sun-induced fluorescence and photosynthesis studies</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Academic Background</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                            <span>PhD in Environmental Engineering (2021-2025)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                            <span>MSc in Geoinformation Science (2019-2021)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                            <span>BSc in Agriculture (2013-2017)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                            <span>Multiple specialized certifications and training</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Professional Profile</h3>
                      <p className="text-gray-700 leading-relaxed">
                        As a researcher at Poznan University of Life Science, I focus on utilizing advanced UAV
                        technology and remote sensing techniques to study environmental changes, particularly in
                        peatland ecosystems. My work contributes to understanding climate change impacts and developing
                        monitoring methodologies using cutting-edge earth observation techniques.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        I have published in high-impact journals and presented my research at international conferences.
                        My technical expertise spans photogrammetry, GIS applications, and programming for environmental
                        data analysis.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Research */}
            {activeTab === "research" && (
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#f0f7ff] px-8 py-4 border-b border-[#e1effe]">
                  <h2 className="text-2xl font-semibold text-[#2e5f96] flex items-center gap-3">
                    <Flask className="h-6 w-6 text-[#4a90e2]" />
                    Research & Project Experience
                  </h2>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="relative pl-8 pb-8 border-l-2 border-[#e1effe]">
                      <div className="absolute w-4 h-4 bg-[#4a90e2] rounded-full -left-[9px] top-0"></div>
                      <div className="mb-2">
                        <span className="inline-block bg-[#f0f7ff] text-[#4a90e2] text-sm font-medium px-2.5 py-0.5 rounded mb-2">
                          Oct 2021 – Present
                        </span>
                        <h3 className="text-xl font-semibold text-[#2e5f96]">
                          Impact of Heatwaves and Droughts on Peatland Vegetation
                        </h3>
                        <p className="text-gray-600 italic">Poznan University of Life Science</p>
                      </div>
                      <div className="prose max-w-none text-gray-700">
                        <p>Leading research on the impact of climate extremes on peatland ecosystems, focusing on:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
                          <li>
                            UAV data acquisition and processing to analyze drought and heatwave impact on sun-induced
                            fluorescence, photosynthesis, and vegetation parameters
                          </li>
                          <li>Developing methodologies for monitoring environmental changes using remote sensing</li>
                          <li>
                            Correlating field measurements with satellite data for validation of earth observation
                            techniques
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative pl-8 pb-8 border-l-2 border-[#e1effe]">
                      <div className="absolute w-4 h-4 bg-[#4a90e2] rounded-full -left-[9px] top-0"></div>
                      <div className="mb-2">
                        <span className="inline-block bg-[#f0f7ff] text-[#4a90e2] text-sm font-medium px-2.5 py-0.5 rounded mb-2">
                          Jul 2020 – Sep 2020
                        </span>
                        <h3 className="text-xl font-semibold text-[#2e5f96]">Intern-Drought Monitoring</h3>
                        <p className="text-gray-600 italic">AgriWatch, Enschede, The Netherlands</p>
                      </div>
                      <div className="prose max-w-none text-gray-700">
                        <p>Contributed to agricultural monitoring projects as a UAV specialist:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
                          <li>
                            Team member responsible for UAV-based data collection, hypothesis generation, and pattern
                            classification
                          </li>
                          <li>
                            Analysis of weed patch patterns using remote sensing data and agricultural information
                          </li>
                          <li>Developed recommendations based on data analysis for agricultural management</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute w-4 h-4 bg-[#4a90e2] rounded-full -left-[9px] top-0"></div>
                      <div className="mb-2">
                        <span className="inline-block bg-[#f0f7ff] text-[#4a90e2] text-sm font-medium px-2.5 py-0.5 rounded mb-2">
                          Mar 2020 – Sep 2020
                        </span>
                        <h3 className="text-xl font-semibold text-[#2e5f96]">Research Assistant - Smart Agrihub</h3>
                        <p className="text-gray-600 italic">Poznan University of Life Science</p>
                      </div>
                      <div className="prose max-w-none text-gray-700">
                        <p>Supported precision agriculture research through:</p>
                        <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
                          <li>Assisting in field measurements and designed ground control points for UAV flights</li>
                          <li>Data collection and processing for agricultural monitoring applications</li>
                          <li>Contributing to research methodology development and implementation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CV */}
            {activeTab === "cv" && (
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#f0f7ff] px-8 py-4 border-b border-[#e1effe] flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-[#2e5f96] flex items-center gap-3">
                    <FileText className="h-6 w-6 text-[#4a90e2]" />
                    Curriculum Vitae
                  </h2>
                  <DownloadButton />
                </div>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold text-[#2e5f96] mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <GraduationCap className="h-5 w-5 text-[#4a90e2]" />
                        Education
                      </h3>

                      <div className="space-y-6 mt-4">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="md:w-1/4 text-[#4a90e2] font-medium">2021 – Expected 2025</div>
                          <div className="md:w-3/4">
                            <h4 className="text-lg font-medium text-gray-900">Ph.D. in Environmental Engineering</h4>
                            <p className="text-gray-700">Poznan University of Life Science, Poznan, Poland</p>
                            <p className="text-gray-600 mt-1 italic">
                              Research: UAV-based research on climate change manipulation in peatlands
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="md:w-1/4 text-[#4a90e2] font-medium">2019 – 2021</div>
                          <div className="md:w-3/4">
                            <h4 className="text-lg font-medium text-gray-900">
                              M.Sc. in Geoinformation Science, Earth Observation and Spatial Management
                            </h4>
                            <p className="text-gray-700">Poznan University of Life Science, Poznan, Poland</p>
                            <p className="text-gray-600 mt-1 italic">
                              Research: The capabilities and limitations of cloud-based Farm Management Information
                              Systems (FMIS) for UAV-based imaging
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="md:w-1/4 text-[#4a90e2] font-medium">2013 – 2017</div>
                          <div className="md:w-3/4">
                            <h4 className="text-lg font-medium text-gray-900">B.Sc. in Agriculture</h4>
                            <p className="text-gray-700">Fayoum University, Fayoum, Egypt</p>
                            <p className="text-gray-600 mt-1 italic">
                              Minor in GIS and Remote Sensing in Soils and Water Science Department
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-[#2e5f96] mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Users className="h-5 w-5 text-[#4a90e2]" />
                        Teaching & Academic Involvement
                      </h3>

                      <div className="space-y-6 mt-4">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Course Assistance</h4>
                          <p className="text-gray-700 mb-2">Assisted in delivering seminars and classes in:</p>
                          <ul className="list-disc list-inside text-gray-700 pl-4 space-y-1">
                            <li>Geoinformation Science and Spatial Management</li>
                            <li>Recent Advances in Environmental Engineering</li>
                            <li>ESA and NASA Earth Observation Missions, Platforms and Databases</li>
                            <li>Climate Aspects in Spatial Planning (Courses delivered in English)</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">
                            Reviewer for International Journals
                          </h4>
                          <ul className="list-disc list-inside text-gray-700 pl-4 space-y-1">
                            <li>International Journal of Applied Earth Observation and Geoinformation (IF: 7.6)</li>
                            <li>Computers and Electronics in Agriculture (IF: 7.7)</li>
                            <li>Geomatica</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Professional Memberships</h4>
                          <ul className="list-disc list-inside text-gray-700 pl-4 space-y-1">
                            <li>LI-COR-Carbon Dew Community for Climate Solutions (Feb 2023 – Present)</li>
                            <li>
                              GRSS Instrumentation and Future Technologies Technical Committee (IFT-TC) & Geoscience
                              Spaceborne Imaging Spectroscopy (GSIS) (Sep 2022 – Present)
                            </li>
                            <li>
                              Pan-European Network for Green Deal Agriculture and Forestry Earth Observation Science
                              (PANGEOS COST Action)
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Recent Academic Training</h4>
                          <ul className="list-disc list-inside text-gray-700 pl-4 space-y-1">
                            <li>IGARSS 2024 Summer School – Sponsored by IEEE GRSS, Athens, Greece, July 4–6, 2024</li>
                            <li>UAVs in Precision Agriculture – Online course by ITC, University of Twente</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-[#2e5f96] mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Code className="h-5 w-5 text-[#4a90e2]" />
                        Technical Skills
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-gray-50 p-5 rounded-lg">
                          <h4 className="text-lg font-medium text-[#2e5f96] mb-2">Research & Analysis</h4>
                          <p className="text-gray-700">
                            Photogrammetry (Pix4D, Agisoft Metashape, Drone Deploy, WebODM), GIS (ILWIS, ArcGIS Pro,
                            QGIS)
                          </p>
                        </div>

                        <div className="bg-gray-50 p-5 rounded-lg">
                          <h4 className="text-lg font-medium text-[#2e5f96] mb-2">Programming & Data Analysis</h4>
                          <p className="text-gray-700">Principles of R, Python, MATLAB, Power BI</p>
                        </div>

                        <div className="bg-gray-50 p-5 rounded-lg">
                          <h4 className="text-lg font-medium text-[#2e5f96] mb-2">Software</h4>
                          <p className="text-gray-700">Autodesk (AutoCAD, Revit, Recap), Adobe Photoshop</p>
                        </div>

                        <div className="bg-gray-50 p-5 rounded-lg">
                          <h4 className="text-lg font-medium text-[#2e5f96] mb-2">Drone Technology</h4>
                          <p className="text-gray-700">
                            UAV piloting, flight planning, data acquisition, troubleshooting, maintenance
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-[#2e5f96] mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Globe className="h-5 w-5 text-[#4a90e2]" />
                        Languages
                      </h3>

                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <h4 className="font-medium text-gray-900">Arabic</h4>
                          <p className="text-gray-600">Native</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <h4 className="font-medium text-gray-900">English</h4>
                          <p className="text-gray-600">Advanced</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <h4 className="font-medium text-gray-900">Polish</h4>
                          <p className="text-gray-600">Beginner</p>
                        </div>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Publications */}
            {activeTab === "publications" && (
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#f0f7ff] px-8 py-4 border-b border-[#e1effe]">
                  <h2 className="text-2xl font-semibold text-[#2e5f96] flex items-center gap-3">
                    <Book className="h-6 w-6 text-[#4a90e2]" />
                    Publications & Presentations
                  </h2>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <section>
                      <h3 className="text-xl font-semibold text-[#2e5f96] mb-4 pb-2 border-b border-gray-200">
                        Journal Articles & Conference Papers
                      </h3>

                      <div className="space-y-6 mt-4">
                        <div className="p-5 border border-gray-100 rounded-lg hover:border-[#e1effe] hover:bg-gray-50 transition-colors">
                          <p className="text-gray-700 mb-2">
                            <span className="font-medium">Abdelmajeed, A. Y. A.</span>, et al. (2025). Assessing SIF-GPP
                            Relationships in Peatlands: Temporal Insights for FLEX Mission Validation.{" "}
                            <span className="italic">Egu25</span>.{" "}
                            <a
                              href="https://doi.org/10.5194/egusphere-egu25-18025"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a90e2] hover:underline inline-flex items-center"
                            >
                              https://doi.org/10.5194/egusphere-egu25-18025
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              2025
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Remote Sensing
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Peatlands
                            </Badge>
                          </div>
                        </div>

                        <div className="p-5 border border-gray-100 rounded-lg hover:border-[#e1effe] hover:bg-gray-50 transition-colors">
                          <p className="text-gray-700 mb-2">
                            Antala, M., <span className="font-medium">Abdelmajeed, A. Y. A.</span>, et al. (2024).
                            Photosynthetic Responses of Peat Moss and Bog Cranberry to Spring Warming.{" "}
                            <span className="italic">Plants</span>, 13(22), 3246.{" "}
                            <a
                              href="https://doi.org/10.3390/plants13223246"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a90e2] hover:underline inline-flex items-center"
                            >
                              https://doi.org/10.3390/plants13223246
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              2024
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Plants
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Climate Change
                            </Badge>
                          </div>
                        </div>

                        <div className="p-5 border border-gray-100 rounded-lg hover:border-[#e1effe] hover:bg-gray-50 transition-colors">
                          <p className="text-gray-700 mb-2">
                            <span className="font-medium">Abdelmajeed, A. Y. A.</span>, et al. (2024). Diurnal
                            Variations of Solar-Induced Fluorescence in a Heterogeneous Peatland Ecosystem.{" "}
                            <span className="italic">Egu24</span>.{" "}
                            <a
                              href="https://doi.org/10.5194/EGUSPHERE-EGU24-20509"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a90e2] hover:underline inline-flex items-center"
                            >
                              https://doi.org/10.5194/EGUSPHERE-EGU24-20509
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              2024
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Solar-Induced Fluorescence
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Peatlands
                            </Badge>
                          </div>
                        </div>

                        <div className="p-5 border border-gray-100 rounded-lg hover:border-[#e1effe] hover:bg-gray-50 transition-colors">
                          <p className="text-gray-700 mb-2">
                            <span className="font-medium">Abdelmajeed, A. Y. A.</span> & Juszczak, R. (2024). Challenges
                            and Limitations of Remote Sensing in Northern Peatlands.{" "}
                            <span className="italic">Remote Sensing</span>, 16(3), 591.{" "}
                            <a
                              href="https://doi.org/10.3390/rs16030591"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a90e2] hover:underline inline-flex items-center"
                            >
                              https://doi.org/10.3390/rs16030591
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              2024
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Remote Sensing
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Northern Peatlands
                            </Badge>
                          </div>
                        </div>

                        <div className="p-5 border border-gray-100 rounded-lg hover:border-[#e1effe] hover:bg-gray-50 transition-colors">
                          <p className="text-gray-700 mb-2">
                            <span className="font-medium">Abdelmajeed, A. Y. A.</span>, et al. (2023). Cloud-Based
                            Remote Sensing for Wetland Monitoring—A Review.{" "}
                            <span className="italic">Remote Sensing</span>, 15(6), 1660.{" "}
                            <a
                              href="https://doi.org/10.3390/rs15061660"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a90e2] hover:underline inline-flex items-center"
                            >
                              https://doi.org/10.3390/rs15061660
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              2023
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Cloud-Based
                            </Badge>
                            <Badge variant="outline" className="text-[#4a90e2] border-[#e1effe]">
                              Wetland Monitoring
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-[#2e5f96] mb-4 flex items-center gap-2 pb-2 border-b border-gray-200">
                        <FilePresentation className="h-5 w-5 text-[#4a90e2]" />
                        Poster Presentations
                      </h3>

                      <div className="space-y-4 mt-4">
                        <div className="p-5 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-1">
                            Challenges of Linking EC Data (GPP) to Hyperspectral Data (SIF)
                          </h4>
                          <p className="text-gray-700 mb-2">A Case Study in Rzecin Peatland, Poland</p>
                          <p className="text-gray-600 text-sm italic">
                            Presented at Mountain Research Station, University of Colorado, Boulder, CO, USA
                          </p>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-1">
                            The capabilities and limitations of cloud-based Farm Management Information Systems (FMIS)
                            for UAV-based imaging
                          </h4>
                          <p className="text-gray-600 text-sm italic">
                            Presented in training led by European Space Agency, 21-25 November 2022 – at the Institute
                            of Advanced Studies Kőszeg (iASK), Kőszeg, Hungary
                          </p>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-1">
                            Does the spectrum signature change according to the altitude?
                          </h4>
                          <p className="text-gray-600 text-sm italic">
                            Presented in training led by European Space Agency, 21-25 November 2022 – at the Institute
                            of Advanced Studies Kőszeg (iASK), Kőszeg, Hungary
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Datasets */}
            {activeTab === "datasets" && (
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#f0f7ff] px-8 py-4 border-b border-[#e1effe]">
                  <h2 className="text-2xl font-semibold text-[#2e5f96] flex items-center gap-3">
                    <Database className="h-6 w-6 text-[#4a90e2]" />
                    Datasets
                  </h2>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <div className="text-center">
                      <Database className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Dataset information coming soon</p>
                      <p className="text-gray-500 text-sm mt-1">Check back for updates on research data availability</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Interests */}
            {activeTab === "interests" && (
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#f0f7ff] px-8 py-4 border-b border-[#e1effe]">
                  <h2 className="text-2xl font-semibold text-[#2e5f96] flex items-center gap-3">
                    <Heart className="h-6 w-6 text-[#4a90e2]" />
                    Research Interests
                  </h2>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Environmental Monitoring</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>UAV-based remote sensing for environmental assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Climate change impacts on wetland ecosystems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Peatland carbon dynamics and greenhouse gas fluxes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Remote Sensing Applications</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Hyperspectral imaging for vegetation analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Solar-induced fluorescence (SIF) for photosynthesis studies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Multi-scale remote sensing from UAVs to satellites</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Precision Agriculture</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Farm Management Information Systems (FMIS)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Crop monitoring and yield prediction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Smart farming technologies and applications</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Geospatial Analysis</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>GIS applications for environmental management</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Spatial data analysis and modeling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Earth observation for sustainable development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-[#4a90e2] shrink-0 mt-0.5" />
                          <span>Cloud Computing for environmental data processing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact */}
            {activeTab === "contact" && (
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#f0f7ff] px-8 py-4 border-b border-[#e1effe]">
                  <h2 className="text-2xl font-semibold text-[#2e5f96] flex items-center gap-3">
                    <Send className="h-6 w-6 text-[#4a90e2]" />
                    Contact Information
                  </h2>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Get In Touch</h3>
                      <p className="text-gray-700 mb-6">
                        I'm interested in research collaborations, academic opportunities, and discussions related to
                        environmental monitoring, remote sensing, and UAV applications. Feel free to reach out through
                        any of the channels below.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-[#4a90e2] mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">Email</h4>
                            <a href="mailto:ay1214@fayoum.edu.eg" className="text-[#4a90e2] hover:underline">
                              ay1214@fayoum.edu.eg
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Linkedin className="h-5 w-5 text-[#4a90e2] mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">LinkedIn</h4>
                            <a
                              href="https://www.linkedin.com/in/abdallahabdelmajeed"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a90e2] hover:underline flex items-center gap-1"
                            >
                              linkedin.com/in/abdallahabdelmajeed
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <GoogleScholarIcon className="h-5 w-5 text-[#4a90e2] mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">Google Scholar</h4>
                            <a
                              href="https://scholar.google.com/citations?user=Zg0Z-pgAAAAJ&hl=en"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a90e2] hover:underline flex items-center gap-1"
                            >
                              Google Scholar Profile
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <OrcidIcon className="h-5 w-5 text-[#4a90e2] mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">ORCID</h4>
                            <a
                              href="https://orcid.org/0000-0002-3662-1824"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a90e2] hover:underline flex items-center gap-1"
                            >
                              0000-0002-3662-1824
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-[#4a90e2] mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">Address</h4>
                            <p className="text-gray-700">ul. Piatkowska 94A, 60-64 Poznan, Poland</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-[#2e5f96] mb-4">Academic Affiliation</h3>
                      <p className="text-gray-700 mb-4">
                        Department of Environmental Protection
                        <br />
                        Faculty of Environmental and Mechanical Engineering
                        <br />
                        Poznan University of Life Sciences
                        <br />
                        Poznan, Poland
                      </p>

                      <h4 className="font-medium text-gray-900 mt-6 mb-2">Research Interests for Collaboration</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-[#f0f7ff] text-[#4a90e2] hover:bg-[#e1effe]">UAV Research</Badge>
                        <Badge className="bg-[#f0f7ff] text-[#4a90e2] hover:bg-[#e1effe]">Remote Sensing</Badge>
                        <Badge className="bg-[#f0f7ff] text-[#4a90e2] hover:bg-[#e1effe]">Peatland Ecology</Badge>
                        <Badge className="bg-[#f0f7ff] text-[#4a90e2] hover:bg-[#e1effe]">Climate Change</Badge>
                        <Badge className="bg-[#f0f7ff] text-[#4a90e2] hover:bg-[#e1effe]">
                          Environmental Monitoring
                        </Badge>
                        <Badge className="bg-[#f0f7ff] text-[#4a90e2] hover:bg-[#e1effe]">Cloud Computing</Badge>
                        <Badge className="bg-[#f0f7ff] text-[#4a90e2] hover:bg-[#e1effe]">Smart Farming</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-gray-200 bg-white mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">© 2025 Abdallah Abdelmajeed. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:ay1214@fayoum.edu.eg" className="text-gray-600 hover:text-[#4a90e2] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdallahabdelmajeed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#4a90e2] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=Zg0Z-pgAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#4a90e2] transition-colors"
              >
                <GoogleScholarIcon className="h-5 w-5" />
              </a>
              <a
                href="https://orcid.org/0000-0002-3662-1824"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#4a90e2] transition-colors"
              >
                <OrcidIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

