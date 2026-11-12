// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Efficient LLM inference, quantization, and agents for systems development and evaluation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Accepted workshop publications and public preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Public academic CV · Updated November 2026",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-my-visiting-semester-at-uc-berkeley-through-the-global-access-program-go-bears",
          title: 'Started my visiting semester at UC Berkeley through the Global Access Program. Go...',
          description: "",
          section: "News",},{id: "news-agenticmath-preprint-is-available-on-arxiv",
          title: 'AgenticMath preprint is available on arXiv',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-completed-my-fall-2025-visiting-semester-at-uc-berkeley-through-the-berkeley-global-access-program-with-a-3-914-4-000-gpa",
          title: 'Completed my Fall 2025 visiting semester at UC Berkeley through the Berkeley Global...',
          description: "",
          section: "News",},{id: "news-joined-mbzuai-s-undergraduate-research-internship-program-ugrip-2026-to-study-efficient-and-reliable-on-device-ai-agents",
          title: 'Joined MBZUAI’s Undergraduate Research Internship Program (UGRIP 2026) to study efficient and reliable...',
          description: "",
          section: "News",},{id: "news-our-mbzuai-ugrip-2026-project-received-the-best-project-award-one-of-three-awarded-projects-among-22-for-work-on-efficient-and-reliable-on-device-agents",
          title: 'Our MBZUAI UGRIP 2026 project received the Best Project Award, one of three...',
          description: "",
          section: "News",},{id: "projects-reliable-on-device-ai-agents-and-real-world-evaluation",
          title: 'Reliable On-Device AI Agents and Real-World Evaluation',
          description: "Prototyping mobile agent capabilities and improving the reliability of Android and cross-session memory evaluations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clawmobile/";
            },},{id: "projects-hardware-aware-kv-cache-quantization-for-efficient-llm-serving",
          title: 'Hardware-Aware KV-Cache Quantization for Efficient LLM Serving',
          description: "Studying how low-bit representations and GPU execution constraints affect quantization accuracy and serving efficiency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kv-cache-quantization/";
            },},{id: "projects-benchmarking-ai-agents-for-quantization-kernel-development",
          title: 'Benchmarking AI Agents for Quantization Kernel Development',
          description: "Investigating how to evaluate coding agents on quantization-related GPU kernel tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantization-kernel-agent-benchmark/";
            },},{id: "projects-agenticmath-multi-agent-mathematical-data-synthesis",
          title: 'AgenticMath: Multi-Agent Mathematical Data Synthesis',
          description: "Engineering and evaluating a multi-agent pipeline for compact mathematical reasoning datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/synermath/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Yilin_Liu.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6C%69%75%38%35%39@%63%6F%6E%6E%65%63%74.%68%6B%75%73%74-%67%7A.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yilin-610-c", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yilin-liu-87a051365", "_blank");
        },
      },];
