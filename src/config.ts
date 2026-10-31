export const siteConfig = {
  name: "Chetan Patel",
  title: "AI/ML Engineer & Web Developer",
  description: "Chetan Patel - AI/ML Engineer & Web Developer",
  accentColor: "#6C63FF",
  social: {
    email: "creativechetan11@gmail.com",
    linkedin: "https://www.linkedin.com/in/justchetan/",
    twitter: "https://x.com/iamjustchetan",
    github: "https://github.com/DistroAgnostic",
    whatsapp: "https://wa.me/916261839502",
  },
  aboutMe:
    "Dual-degree (B.Tech–M.Tech, IT) graduate from IIPS, DAVV Indore with hands-on experience in AI/ML and production web development. I build hybrid deep learning systems (PyTorch, CLIP, spectral analysis) and production RAG applications (LangChain, Chroma DB), while also delivering responsive, multi-page websites using Next.js, React, TypeScript, and Tailwind CSS for clients including NIMHANS and a national conference. Oracle AI Vector Search certified. Currently contributing to product design and development in collaboration with Wipro.",
  skills: [
    // Programming Languages
    "C/C++",
    "Python",
    "TypeScript",
    "JavaScript",
    "SQL",
    "HTML/CSS",
    // AI/ML
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "HuggingFace Transformers",
    "LangChain",
    "RAG",
    "Vector Search",
    // Data Analysis
    "Pandas",
    "NumPy",
    "Matplotlib",
    // Web Development
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Streamlit",
    // Tools
    "Git",
    "GitHub",
  ],
  projects: [
    {
      name: "AI-Generated Image Detector - CLIP + Spectral Analysis",
      description:
        "Hybrid detection system combining frozen CLIP ViT-B/32 semantic embeddings (512-d) with DCT spectral features (64-d) to classify real vs. AI-generated images, achieving 97.5% accuracy and 0.997 AUC-ROC on the CIFAKE benchmark (100K images). Lightweight MLP classifier (~182K parameters) enables CPU-only training in under 30 minutes. Deployed as an interactive Streamlit app with real-time inference, confidence scoring, and spectral analysis visualizations.",
      link: "https://github.com/DistroAgnostic",
      skills: ["Python", "PyTorch", "HuggingFace Transformers", "Streamlit"],
    },
    {
      name: "EVRI Lab - NIMHANS Research Website",
      description:
        "Professional multi-page institutional website for India's first dedicated endovascular research laboratory at NIMHANS, Bengaluru. Features scroll-triggered animations, animated counters, a flagship device showcase, team directory, milestone timeline, and a dynamic contact system. Deployed on Vercel with full SEO optimization.",
      link: "https://evrilab-website.vercel.app/",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "AskMyPDF - Chat with Any PDF",
      description:
        "Full-stack RAG-powered PDF assistant using LangChain and Chroma DB, enabling real-time semantic search and Q&A across 100+ page documents with sub-second retrieval. Deployed as a web app via Streamlit.",
      link: "https://askmypdfpy.streamlit.app/",
      skills: ["Python", "Streamlit", "LangChain", "Chroma DB", "RAG"],
    },
  ],
  experience: [
    {
      company: "EVRI Lab - NIMHANS, Bengaluru",
      title: "Web Developer",
      dateRange: "2025 - Present",
      bullets: [
        "Architected and developed EVRI Lab's multi-page research website using Next.js, TypeScript, and Tailwind CSS with scroll-triggered animations via Framer Motion",
        "Implemented a dynamic contact system, SEO-optimized responsive layouts, and data-driven architecture for team, research, milestones, and news content",
        "Deployed on Vercel with full SEO - dynamic sitemap, OpenGraph metadata, and semantic HTML",
      ],
    },
    {
      company: "Parichay - Collaboration with Wipro",
      title: "UI/UX Designer & Developer",
      dateRange: "2026 - Present",
      bullets: [
        "Contributing to the design and development of a digital product in collaboration with Wipro",
        "Working on product ideation, UI/UX design, and frontend technical implementation",
      ],
    },
    {
      company: "National Conference, Delhi",
      title: "Web Developer",
      dateRange: "2026",
      bullets: [
        "Designed and developed the conference website for a national-level academic event",
        "Implemented responsive layouts, event scheduling, and speaker profiles for attendees",
      ],
    },
  ],
  education: [
    {
      school: "International Institute of Professional Studies, DAVV Indore",
      degree: "B.Tech–M.Tech (IT) Integrated Dual Degree - 5 Years",
      dateRange: "2021 - 2026",
      achievements: [
        "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, NLP, Data Structures & Algorithms",
        "Active participant in technical events, hackathons, and coding competitions",
      ],
    },
    {
      school: "Achievers Academy Higher Secondary School",
      degree: "Senior Secondary (XII) - Science",
      dateRange: "2021",
      achievements: [
        "Completed Science stream with strong foundation in Mathematics and Computer Science",
      ],
    },
  ],
  certifications: [
    {
      name: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle Corporation",
      date: "Dec 2025",
      link: "https://drive.google.com/file/d/1GXVP2OvPwBJAzKkhrpH3KTBgeIe8Fsb9/view",
      bullets: [
        "Mastered vector data storage, indexing, and embedding generation for semantic queries",
        "Built Retrieval-Augmented Generation (RAG) applications using PL/SQL and Python",
        "Executed high-performance similarity search: Exact, Approximate, and Multi-Vector queries",
      ],
    },
    {
      name: "Data Science with AI Trainee",
      issuer: "Growtech by Dr. Reddy's Foundation",
      date: "June 2025 - Sept 2025",
      link: "https://drive.google.com/file/d/14ImntmX0wVM12ovV1D_wBAiuaVhQHP1o/view?usp=sharing",
      bullets: [
        "Intensive training in Machine Learning, Deep Learning, NLP, and GenAI using Python",
        "Developed and deployed ML models for predictive analytics and data-driven projects",
        "Built a working Chatbot using LangChain for real-world problem solving",
      ],
    },
  ],
};
