export type ExperienceRole = {
  title: string;
  organization: string;
  dates: string;
  location: string;
  highlights: string[];
};

export const experienceRoles: ExperienceRole[] = [
  {
    title: "Computer Vision and Graphics Researcher",
    organization:
      "CVG Kawasaki Laboratory, Kyushu University | Multimedia Lab & LIVIA, ÉTS",
    dates: "May 2024 – Present",
    location: "Fukuoka, Japan & Montreal, QC",
    highlights: [
      "Submitted a paper to 3DV introducing Differentiable Clipped Centroidal Voronoi Tessellation (DCCVT), a differentiable Voronoi-based meshing framework that extracts high-quality meshes from implicit surfaces in PyTorch, outperforming state-of-the-art marching tetrahedra and Voronoi extraction methods.",
      "Focus on differentiable geometry pipelines for 3D reconstruction.",
    ],
  },
  {
    title: "Computer Vision Research Developer",
    organization:
      "Zebra Technologies | Matrox Imaging Industrial Research Chair, LIVIA",
    dates: "May 2023 – Aug 2023",
    location: "Montreal, QC",
    highlights: [
      "Built a Python pipeline to augment barcode datasets using C++ and the Matrox Imaging Library to auto-generate test files and run AI benchmarks, saving ~1500% costs.",
      "Captured hazmat label data, built/augmented a dataset, and trained an RTMDet/YOLO-style model to detect labels in video feeds with 98.2% accuracy.",
    ],
  },
  {
    title: "Analyst Programmer",
    organization: "Loto-Québec, Technologies Nter",
    dates: "Jan 2022 – Apr 2022",
    location: "Montreal, QC",
    highlights: [
      "Improved performance of Vue.js components for a smoother, more responsive UI.",
      "Proposed Bootstrap + CSS typography framework for responsive, consistent UX.",
      "Helped the team adopt Agile story points.",
    ],
  },
  {
    title: "Junior Developer",
    organization: "Vokeso — Gold Microsoft Partner",
    dates: "May 2021 – Aug 2021",
    location: "Montreal, QC",
    highlights: [
      "Built and customized Microsoft Dynamics 365 Business Central extensions and reports.",
      "Developed a website using HTML/CSS/React.js/PHP/Postman API/MSSQL.",
      "Deployed and containerized services with Docker across multiple Azure VMs.",
    ],
  },
  {
    title: "Software Engineering Representative Administrator",
    organization: "AEÉÉTS (ÉTS Student Association)",
    dates: "Sept 2021 – May 2024",
    location: "Montreal, QC",
    highlights: [
      "Sat on the student association board and managed a $1M budget.",
      "Organized social + technical activities for software engineering students.",
    ],
  },
];
