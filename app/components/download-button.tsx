"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"

export function DownloadButton({ className }: { className?: string }) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Create a Blob with the CV text content
    const cvContent = `
Abdallah Abdelmajeed
PostDoc Fellow Seeker

abdallah.abdelmajeed@up.poznan.pl • 0048 664 512 865 • LinkedIn/in/abdallahabdelmajeed

Profile
PhD candidate in Environmental Engineering with extensive experience in UAV-based research, 
remote sensing, and geoinformation science. Proven record in academic teaching, research project 
management, and publication in high-impact journals. Adept at integrating innovative earth 
observation techniques with smart agricultural applications and environmental analysis.

Education
• Ph.D. in Environmental Engineering
  Poznan University of Life Science, Poznan, Poland | 2021 – Expected Sep 2025
• M.Sc. in Geoinformation Science, Earth Observation and Spatial Management
  Poznan University of Life Science, Poznan, Poland | 2019 – 2021
• B.Sc. in Agriculture
  Fayoum University, Fayoum, Egypt | 2013 – 2017

Research & Project Experience
• Impact of Heatwaves and Droughts on Peatland Vegetation
  Poznan University of Life Science | Oct 2021 – Present
  • UAV data acquisition and processing to analyze drought and heatwave impact on sun-
    induced fluorescence, photosynthesis, and vegetation parameters.
• Intern-Drought Monitoring
  AgriWatch, Enschede, The Netherlands | Jul 2020 – Sep 2020
  • Team member responsible for UAV-based data collection, hypothesis generation, and 
    pattern classification.
• Research Assistant - Smart Agrihub
  Poznan University of Life Science | Mar 2020 – Sep 2020
  • Assisted in field measurements and designed ground control points for UAV flights in
    support of precision agriculture research.

Teaching & Academic Involvement
• Course Assistance
  Assisted in delivering seminars and classes in:
  • Geoinformation Science and Spatial Management
  • Recent Advances in Environmental Engineering
  • ESA and NASA Earth Observation Missions, Platforms and Databases
  • Climate Aspects in Spatial Planning
  (Courses delivered in English)

• Reviewer for International Journals:
  • International Journal of Applied Earth Observation and Geoinformation (IF: 7.6)
  • Computers and Electronics in Agriculture (IF: 7.7)
  • Geomatica

• Professional Memberships
  • LI-COR-Carbon Dew Community for Climate Solutions (Feb 2023 – Present)
  • GRSS Instrumentation and Future Technologies Technical Committee (IFT-TC) & 
    Geoscience Spaceborne Imaging Spectroscopy (GSIS) (Sep 2022 – Present)
  • Pan-European Network for Green Deal Agriculture and Forestry Earth Observation 
    Science (PANGEOS COST Action)

• Recent Academic Training:
  • IGARSS 2024 Summer School – Sponsored by IEEE GRSS, Athens, Greece, July 4–6, 2024
  • UAVs in Precision Agriculture – Online course by ITC, University of Twente

Publications & Presentations
• Abdelmajeed, A. Y. A., et al. (2025). Assessing SIF-GPP Relationships in Peatlands: 
  Temporal Insights for FLEX Mission Validation. Egu25. https://doi.org/10.5194/egusphere-egu25-18025
• Antala, M., Abdelmajeed, A. Y. A., et al. (2024). Photosynthetic Responses of Peat Moss 
  and Bog Cranberry to Spring Warming. Plants, 13(22), 3246. https://doi.org/10.3390/plants13223246
• Abdelmajeed, A. Y. A., et al. (2024). Diurnal Variations of Solar-Induced Fluorescence 
  in a Heterogeneous Peatland Ecosystem. Egu24. https://doi.org/10.5194/EGUSPHERE-EGU24-20509
• Abdelmajeed, A. Y. A. & Juszczak, R. (2024). Challenges and Limitations of Remote 
  Sensing in Northern Peatlands. Remote Sensing, 16(3), 591. https://doi.org/10.3390/rs16030591
• Abdelmajeed, A. Y. A., et al. (2023). Cloud-Based Remote Sensing for Wetland 
  Monitoring—A Review. Remote Sensing, 15(6), 1660. https://doi.org/10.3390/rs15061660

Technical Skills
• Research & Analysis: Photogrammetry (Pix4D, Agisoft Metashape, Drone Deploy, WebODM), 
  GIS (ILWIS, ArcGIS Pro, QGIS)
• Programming & Data Analysis: principles of R, Python, MATLAB, Power BI
• Software: Autodesk (AutoCAD, Revit, Recap), Adobe Photoshop

Languages
• Arabic (Native)
• English (Advanced)
• Polish (Beginner)

References
• References Available Upon Request
    `

    // Create a Blob with the text content
    const blob = new Blob([cvContent], { type: "text/plain" })

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob)

    // Create a temporary link element
    const link = document.createElement("a")
    link.href = url
    link.download = "abdallah-abdelmajeed-cv.txt" // Name of the downloaded file

    // Append the link to the body
    document.body.appendChild(link)

    // Trigger the download
    link.click()

    // Clean up
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    setIsDownloading(false)
  }

  return (
    <Button variant="outline" size="sm" onClick={handleDownload} disabled={isDownloading} className={className}>
      <Download className="h-4 w-4 mr-2" />
      {isDownloading ? "Downloading..." : "Download CV"}
    </Button>
  )
}

