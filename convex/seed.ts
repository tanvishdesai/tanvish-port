import { mutation } from "./_generated/server";
import { api } from "./_generated/api";

const projects = [
  {
    "title": "Absolute Resource",
    "repository": "https://github.com/tanvishdesai/aurora-resource-absolute-zero",
    "repoName": "tanvishdesai/aurora-resource-absolute-zero",
    "classification": "Research/ML systems / Research project",
    "abstract": "ML-oriented intelligent resource-allocation system.",
    "topics": [
      "research",
      "ai-tools"
    ]
  },
  {
    "title": "Student Performance Prediction",
    "repository": "https://github.com/tanvishdesai/sarthak-AI-project",
    "repoName": "tanvishdesai/sarthak-AI-project",
    "classification": "Friend project / ML web app",
    "abstract": "Student-performance prediction project with frontend/backend structure.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "Hemit FND AI Project",
    "repository": "https://github.com/tanvishdesai/hemit-fnd-ai-project",
    "repoName": "tanvishdesai/hemit-fnd-ai-project",
    "classification": "Friend project / web app",
    "abstract": "Friend project with client and server folders.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Priyanshi AI Project",
    "repository": "https://github.com/tanvishdesai/Priyanshi-AI-project",
    "repoName": "tanvishdesai/Priyanshi-AI-project",
    "classification": "Friend project / static web app",
    "abstract": "Small static AI-themed web project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Riya AI Project",
    "repository": "https://github.com/tanvishdesai/riya-ai-project",
    "repoName": "tanvishdesai/riya-ai-project",
    "classification": "Friend project / static web app",
    "abstract": "Small HTML/CSS/JS AI folder project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Shreya AI Project",
    "repository": "https://github.com/tanvishdesai/shreya-ai-project",
    "repoName": "tanvishdesai/shreya-ai-project",
    "classification": "Friend project / algorithm demo",
    "abstract": "Hill-climbing/random-restart demo with web interface.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Soham AI Project",
    "repository": "https://github.com/tanvishdesai/soham-AI-project",
    "repoName": "tanvishdesai/soham-AI-project",
    "classification": "Friend project / ML app",
    "abstract": "Text/fake-news classification style ML app.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "AI Target Practice",
    "repository": "https://github.com/tanvishdesai/ai-target-practice",
    "repoName": "tanvishdesai/ai-target-practice",
    "classification": "Game",
    "abstract": "Target-practice game project.",
    "topics": [
      "creative"
    ]
  },
  {
    "title": "Audio DF",
    "repository": "https://github.com/tanvishdesai/audio-df",
    "repoName": "tanvishdesai/audio-df",
    "classification": "Research/ML experiment / Research project",
    "abstract": "Early audio deepfake detection experiments with versions, notebooks, and results.",
    "topics": [
      "research",
      "ai-tools"
    ]
  },
  {
    "title": "Costello / Audio Name",
    "repository": "https://github.com/tanvishdesai/Costello",
    "repoName": "tanvishdesai/Costello",
    "classification": "Backend + website",
    "abstract": "Costello backend website with frontend/backend/deployment notes.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "B99 Kaggle Dashboard",
    "repository": "https://github.com/tanvishdesai/b99-kaggle-dashboard",
    "repoName": "tanvishdesai/b99-kaggle-dashboard",
    "classification": "Dashboard / ML tooling",
    "abstract": "Kaggle dashboard/tooling project with Flask/backend and frontend pieces.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "B99 Frontend",
    "repository": "https://github.com/tanvishdesai/b99-kaggle-dashboard-frontend",
    "repoName": "tanvishdesai/b99-kaggle-dashboard-frontend",
    "classification": "Frontend",
    "abstract": "Frontend repository for the B99 dashboard.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Blog Website",
    "repository": "https://github.com/tanvishdesai/next_blog",
    "repoName": "tanvishdesai/next_blog",
    "classification": "Web app",
    "abstract": "Early simplistic blog website.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Caption Inference",
    "repository": "https://github.com/tanvishdesai/caption-inference",
    "repoName": "tanvishdesai/caption-inference",
    "classification": "Web app / ML inference",
    "abstract": "Website for caption inference workflows.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "Chess Project",
    "repository": "https://github.com/tanvishdesai/chess-python-project",
    "repoName": "tanvishdesai/chess-python-project",
    "classification": "College course project",
    "abstract": "College chess/game coursework project.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "CISCOM",
    "repository": "https://github.com/tanvishdesai/ciscom",
    "repoName": "tanvishdesai/ciscom",
    "classification": "Research/ML experiment / Research project",
    "abstract": "Multimodal deepfake-detection code execution project.",
    "topics": [
      "research",
      "ai-tools"
    ]
  },
  {
    "title": "Clueless",
    "repository": "https://github.com/tanvishdesai/clueless-ML",
    "repoName": "tanvishdesai/clueless-ML",
    "classification": "College course project / docs",
    "abstract": "Course project represented mostly by markdown/planning files.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Code Mode",
    "repository": "https://github.com/tanvishdesai/code-mode",
    "repoName": "tanvishdesai/code-mode",
    "classification": "Concept / markdown project",
    "abstract": "Planning material for code-mode/course-mode idea.",
    "topics": [
      "creative"
    ]
  },
  {
    "title": "CollegeGPT 2.0",
    "repository": "https://github.com/tanvishdesai/collegegpt-2",
    "repoName": "tanvishdesai/collegegpt-2",
    "classification": "College resource platform",
    "abstract": "College-oriented GPT/resource assistant platform idea.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Compere",
    "repository": "https://github.com/tanvishdesai/compere-testing",
    "repoName": "tanvishdesai/compere-testing",
    "classification": "Entertainment dashboard",
    "abstract": "Event planning and entertainment dashboard.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "Crunch Time Multimodal",
    "repository": "https://github.com/tanvishdesai/Crunch-time-MLLM",
    "repoName": "tanvishdesai/Crunch-time-MLLM",
    "classification": "Research project / Research project",
    "abstract": "Multimodal/VLM disaster-management and interpretability research draft.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Dhrumi Website Clone",
    "repository": "https://github.com/tanvishdesai/dhrumi-website",
    "repoName": "tanvishdesai/dhrumi-website",
    "classification": "Website clone",
    "abstract": "Website cloning exercise for polished UI practice.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Expense Tracker / Trip Split",
    "repository": "https://github.com/tanvishdesai/tripspllit",
    "repoName": "tanvishdesai/tripspllit",
    "classification": "Web app",
    "abstract": "Trip expense splitting application.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Gen Images",
    "repository": "https://github.com/tanvishdesai/gen-images",
    "repoName": "tanvishdesai/gen-images",
    "classification": "Generated image archive",
    "abstract": "Generated image and visual experiment collection.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Gifting Dhyana",
    "repository": "https://github.com/tanvishdesai/love-box-dhyana",
    "repoName": "tanvishdesai/love-box-dhyana",
    "classification": "E-commerce website",
    "abstract": "Gift e-commerce storefront.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Architecture Shapes Explainability",
    "repository": "https://github.com/tanvishdesai/spinexhet",
    "repoName": "tanvishdesai/spinexhet",
    "classification": "Research project / Research project",
    "abstract": "Architecture-shape explainability project with BMVC-style paper material.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Image Deblur",
    "repository": "https://github.com/tanvishdesai/image-deblur",
    "repoName": "tanvishdesai/image-deblur",
    "classification": "Research/vision project / Research project",
    "abstract": "Image deblurring and super-resolution research workspace.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "SISR / ISR Experiments",
    "repository": "https://github.com/tanvishdesai/sisr-isr-experiments",
    "repoName": "tanvishdesai/sisr-isr-experiments",
    "classification": "Research/vision experiment / Research project",
    "abstract": "Single-image super-resolution experiments.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Large-Scale Dataset Creation",
    "repository": "https://github.com/tanvishdesai/large-scale-dataset-creation",
    "repoName": "tanvishdesai/large-scale-dataset-creation",
    "classification": "Research project / Research project",
    "abstract": "Dataset creation research effort for image restoration/SISR.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Gujarati Image Captioning",
    "repository": "https://github.com/tanvishdesai/gujarati-image-captioning",
    "repoName": "tanvishdesai/gujarati-image-captioning",
    "classification": "Research project / Research project",
    "abstract": "First Gujarati image captioning research project.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Gujarati Captioning May Rework",
    "repository": "https://github.com/tanvishdesai/Captipon-May-rework",
    "repoName": "tanvishdesai/Captipon-May-rework",
    "classification": "Research project / Research project",
    "abstract": "Major rework with three model types, BLEU/results, and paper assets.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "LAWA / LAVA Multilingual Captioning",
    "repository": "https://github.com/tanvishdesai/lawa-multilingual-captioning",
    "repoName": "tanvishdesai/lawa-multilingual-captioning",
    "classification": "Research project / Research project",
    "abstract": "Multilingual caption generation in 21 languages.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Caption Dashboard",
    "repository": "https://github.com/tanvishdesai/caption-dashboard",
    "repoName": "tanvishdesai/caption-dashboard",
    "classification": "Dashboard / research companion / Research project",
    "abstract": "Dashboard for captioning results.",
    "topics": [
      "research",
      "applications"
    ]
  },
  {
    "title": "Instagram Auto Upload",
    "repository": "https://github.com/tanvishdesai/insta-auto-upload",
    "repoName": "tanvishdesai/insta-auto-upload",
    "classification": "Automation",
    "abstract": "Automated Instagram post uploading.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Jhaad AI/ML Course Project",
    "repository": "https://github.com/tanvishdesai/jhaad-ai-ml-course-project",
    "repoName": "tanvishdesai/jhaad-ai-ml-course-project",
    "classification": "Course/workshop project",
    "abstract": "AI/ML course and project material.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "JSM Banking",
    "repository": "https://github.com/tanvishdesai/jsm_banking",
    "repoName": "tanvishdesai/jsm_banking",
    "classification": "Tutorial clone / web app",
    "abstract": "Banking website tutorial clone.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "JSM Healthcare",
    "repository": "https://github.com/tanvishdesai/jsm-healthcare",
    "repoName": "tanvishdesai/jsm-healthcare",
    "classification": "Tutorial clone / web app",
    "abstract": "Healthcare website tutorial clone.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Kernel Optimization",
    "repository": "https://github.com/tanvishdesai/kernel-opti",
    "repoName": "tanvishdesai/kernel-opti",
    "classification": "Research project / Research project",
    "abstract": "Cardinal/code-level optimization through small-model fine tuning and graph execution.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Lil Cheesecake Corner",
    "repository": "https://github.com/tanvishdesai/LC3",
    "repoName": "tanvishdesai/LC3",
    "classification": "E-commerce website",
    "abstract": "Bakery/cheesecake e-commerce website.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Marut Project",
    "repository": "https://github.com/tanvishdesai/marut-s",
    "repoName": "tanvishdesai/marut-s",
    "classification": "Client/friend web project",
    "abstract": "Practical web project made for Marut.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Mauj Planner",
    "repository": "https://github.com/tanvishdesai/abhivyakti-planner",
    "repoName": "tanvishdesai/abhivyakti-planner",
    "classification": "Entertainment/e-commerce web app",
    "abstract": "Festival/event itinerary planner.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "Messaging Board",
    "repository": "https://github.com/tanvishdesai/messaging_board",
    "repoName": "tanvishdesai/messaging_board",
    "classification": "Web app",
    "abstract": "Early message-board web project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "MMLLM-MedXAI / FedAlert + ESFNet",
    "repository": "https://github.com/tanvishdesai/ESFANet",
    "repoName": "tanvishdesai/ESFANet",
    "classification": "Research project / Research project",
    "abstract": "FedAlert and ESFNet/DST Agentic Net research workspace.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Movie Mate",
    "repository": "https://github.com/tanvishdesai/movie-mate",
    "repoName": "tanvishdesai/movie-mate",
    "classification": "College/web project",
    "abstract": "Movie-related college/web project.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Movie Review",
    "repository": "https://github.com/tanvishdesai/movie-review",
    "repoName": "tanvishdesai/movie-review",
    "classification": "College/web project",
    "abstract": "Movie review web project.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Multimodal Dataset Creation",
    "repository": "https://github.com/tanvishdesai/multimodal-dataset-creation",
    "repoName": "tanvishdesai/multimodal-dataset-creation",
    "classification": "Research project / Research project",
    "abstract": "Multimodal deepfake dataset creation track.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "DeepShield",
    "repository": "https://github.com/tanvishdesai/deepshield",
    "repoName": "tanvishdesai/deepshield",
    "classification": "Research project / Research project",
    "abstract": "Large multimodal deepfake-detection project with runbooks and model baselines.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "RobustAV",
    "repository": "https://github.com/tanvishdesai/robust-av",
    "repoName": "tanvishdesai/robust-av",
    "classification": "Research project / Research project",
    "abstract": "Robust audio-visual deepfake detection project.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "HAVDF",
    "repository": "https://github.com/tanvishdesai/havdf",
    "repoName": "tanvishdesai/havdf",
    "classification": "Research project / Research project",
    "abstract": "Separate HAVDF multimodal deepfake project.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "PinLight",
    "repository": "https://github.com/tanvishdesai/PinLite",
    "repoName": "tanvishdesai/PinLite",
    "classification": "Research project / Research project",
    "abstract": "Research project with paper material under multimodal domain.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Pinpoint",
    "repository": "https://github.com/tanvishdesai/pinpoint",
    "repoName": "tanvishdesai/pinpoint",
    "classification": "Research project / Research project",
    "abstract": "Research project with paper drafts and technical dump.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "SSM vs Transformer",
    "repository": "https://github.com/tanvishdesai/ssm-vs-transformer",
    "repoName": "tanvishdesai/ssm-vs-transformer",
    "classification": "Research project / Research project",
    "abstract": "Experiment comparing SSM-style models and Transformers.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "New Shooter",
    "repository": "https://github.com/tanvishdesai/bubblr_shooter",
    "repoName": "tanvishdesai/bubblr_shooter",
    "classification": "Game",
    "abstract": "Python shooter game.",
    "topics": [
      "creative"
    ]
  },
  {
    "title": "Nexar IQ Portfolio",
    "repository": "https://github.com/tanvishdesai/Nexariq",
    "repoName": "tanvishdesai/Nexariq",
    "classification": "Portfolio website",
    "abstract": "Portfolio website project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Paper Predictor",
    "repository": "https://github.com/tanvishdesai/paper-repo",
    "repoName": "tanvishdesai/paper-repo",
    "classification": "Data scraping + web platform / Research project",
    "abstract": "Large-scale data scraping, hosting, and website project.",
    "topics": [
      "research",
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "Photo Galleria",
    "repository": "https://github.com/tanvishdesai/Photo-Galleria",
    "repoName": "tanvishdesai/Photo-Galleria",
    "classification": "3D gallery website",
    "abstract": "3D representation of second-year photos.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Plant Seedling Classification",
    "repository": "https://github.com/tanvishdesai/plant-seedling-classification",
    "repoName": "tanvishdesai/plant-seedling-classification",
    "classification": "Small research project / Research project",
    "abstract": "Plant seedling classification experiment.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Portfolio",
    "repository": "https://github.com/tanvishdesai/tanvish-port",
    "repoName": "tanvishdesai/tanvish-port",
    "classification": "Portfolio website",
    "abstract": "Personal portfolio website.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Priyanshi Project",
    "repository": "https://github.com/tanvishdesai/priyanshi-project",
    "repoName": "tanvishdesai/priyanshi-project",
    "classification": "College semester project",
    "abstract": "Sixth-semester/final project built for a friend.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Research Assistant",
    "repository": "https://github.com/tanvishdesai/research-assistant",
    "repoName": "tanvishdesai/research-assistant",
    "classification": "Research/software engineering project / Research project",
    "abstract": "Software-engineering course research assistant project.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "RL + Game / PRPO + Gauntlet",
    "repository": "https://github.com/tanvishdesai/rl-game-prpo-gauntlet",
    "repoName": "tanvishdesai/rl-game-prpo-gauntlet",
    "classification": "Research project / Research project",
    "abstract": "Major RL plus game-theory project: PRPO framework and Gauntlet benchmark.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "RNA Prediction",
    "repository": "https://github.com/tanvishdesai/rna-prediction",
    "repoName": "tanvishdesai/rna-prediction",
    "classification": "Future research idea / dataset / Research project",
    "abstract": "Downloaded dataset for future RNA prediction work.",
    "topics": [
      "research",
      "ai-tools"
    ]
  },
  {
    "title": "Saba Testing",
    "repository": "https://github.com/tanvishdesai/saba-paper-testing",
    "repoName": "tanvishdesai/saba-paper-testing",
    "classification": "Web app",
    "abstract": "Website/testing project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "StrideX",
    "repository": "https://github.com/tanvishdesai/stride-x",
    "repoName": "tanvishdesai/stride-x",
    "classification": "College semester mobile app",
    "abstract": "Sixth-semester mobile app project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Surat GenAI",
    "repository": "https://github.com/tanvishdesai/Surat_Gen_AI",
    "repoName": "tanvishdesai/Surat_Gen_AI",
    "classification": "Workshop/course projects",
    "abstract": "GenAI workshop/course practice projects.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Task Manager",
    "repository": "https://github.com/tanvishdesai/custom-task-manager",
    "repoName": "tanvishdesai/custom-task-manager",
    "classification": "Web app",
    "abstract": "Task-management web project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "U-Net Background Removal",
    "repository": "https://github.com/tanvishdesai/unet-background-removal",
    "repoName": "tanvishdesai/unet-background-removal",
    "classification": "Vision project / modified clone",
    "abstract": "Background-removal project based on modified U-Net repo.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Video DF",
    "repository": "https://github.com/tanvishdesai/video-df",
    "repoName": "tanvishdesai/video-df",
    "classification": "Research/ML experiment / Research project",
    "abstract": "Video-only deepfake detection architecture experiments.",
    "topics": [
      "research",
      "ai-tools"
    ]
  },
  {
    "title": "WatermarkBench",
    "repository": "https://github.com/tanvishdesai/robustbenchimg",
    "repoName": "tanvishdesai/robustbenchimg",
    "classification": "Research idea / benchmark / Research project",
    "abstract": "Video watermarking benchmark idea.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "WhatsApp Evolved",
    "repository": "https://github.com/tanvishdesai/wa-bot-to-rescue",
    "repoName": "tanvishdesai/wa-bot-to-rescue",
    "classification": "API + UI project",
    "abstract": "WhatsApp API data extraction and custom UI.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Workout Tracker",
    "repository": "https://github.com/tanvishdesai/workout-tracker",
    "repoName": "tanvishdesai/workout-tracker",
    "classification": "Mobile app",
    "abstract": "Workout tracking mobile app.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "AI Tools Workshop",
    "repository": "https://github.com/tanvishdesai/ai-tools-workshop",
    "repoName": "tanvishdesai/ai-tools-workshop",
    "classification": "Workshop/course projects",
    "abstract": "AI tools workshop material.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Research Paper Writing Skill",
    "repository": "https://github.com/tanvishdesai/Homer",
    "repoName": "tanvishdesai/Homer",
    "classification": "Agent skill / tooling / Research project",
    "abstract": "Public-style research paper writing agent skill.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "Zuckonit",
    "repository": "https://github.com/tanvishdesai/zuckonit",
    "repoName": "tanvishdesai/zuckonit",
    "classification": "Blog/social media web app",
    "abstract": "Blog/social-media project inspired by The Social Network.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "IdeaOne / Smart Waste Classification",
    "repository": "https://github.com/tanvishdesai/ideaone-smart-waste-classification",
    "repoName": "tanvishdesai/ideaone-smart-waste-classification",
    "classification": "Hackathon / ML",
    "abstract": "Nationwide hackathon smart waste classification project.",
    "topics": [
      "ai-tools"
    ]
  },
  {
    "title": "BhashaMed",
    "repository": "https://github.com/tanvishdesai/BhashaMed-ImpacThon",
    "repoName": "tanvishdesai/BhashaMed-ImpacThon",
    "classification": "Hackathon web app",
    "abstract": "Regional prescription decoder prototype.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Breathe Easy",
    "repository": "https://github.com/tanvishdesai/BreatheEasy-ImpacThon",
    "repoName": "tanvishdesai/BreatheEasy-ImpacThon",
    "classification": "Hackathon web + ML",
    "abstract": "Hyperlocal air-quality forecasting prototype.",
    "topics": [
      "ai-tools"
    ]
  },
  {
    "title": "DermAid",
    "repository": "https://github.com/tanvishdesai/DermAid",
    "repoName": "tanvishdesai/DermAid",
    "classification": "Hackathon ML app",
    "abstract": "Skin lesion/region model prototype.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "FairFlow / CODA",
    "repository": "https://github.com/tanvishdesai/FairFlow-ImpacThon",
    "repoName": "tanvishdesai/FairFlow-ImpacThon",
    "classification": "Hackathon winner + research project / Research project",
    "abstract": "Prize-winning ImpactThon project expanded into CODA research.",
    "topics": [
      "research"
    ]
  },
  {
    "title": "FairLens Hiring",
    "repository": "https://github.com/tanvishdesai/FairLense-Hiring-ImpacThon",
    "repoName": "tanvishdesai/FairLense-Hiring-ImpacThon",
    "classification": "Hackathon web app",
    "abstract": "Fairness-oriented hiring prototype.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "FairLens Social Media",
    "repository": "https://github.com/tanvishdesai/FairLense-SocialMedia-ImpacThon",
    "repoName": "tanvishdesai/FairLense-SocialMedia-ImpacThon",
    "classification": "Hackathon web app",
    "abstract": "Social media fairness/content prototype.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Interview Flow Tool",
    "repository": "https://github.com/tanvishdesai/InterviewFlow-ImpacThon",
    "repoName": "tanvishdesai/InterviewFlow-ImpacThon",
    "classification": "Hackathon web app",
    "abstract": "Interview coaching workflow prototype.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Legal Docs Simplifier",
    "repository": "https://github.com/tanvishdesai/LegalDocSimple-ImpacThon",
    "repoName": "tanvishdesai/LegalDocSimple-ImpacThon",
    "classification": "Hackathon web app",
    "abstract": "Legal-document simplification prototype.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "RoadVision",
    "repository": "https://github.com/tanvishdesai/RoadVision-ImpacThon",
    "repoName": "tanvishdesai/RoadVision-ImpacThon",
    "classification": "Hackathon web/ML app",
    "abstract": "Road condition/pothole vision prototype.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "IntelliCredit",
    "repository": "https://github.com/tanvishdesai/intelli-credit",
    "repoName": "tanvishdesai/intelli-credit",
    "classification": "Hackathon fintech project",
    "abstract": "Intelli-Credit challenge project.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Intel AI Diabetic Retinopathy",
    "repository": "https://github.com/tanvishdesai/EnhancedDRDetection",
    "repoName": "tanvishdesai/EnhancedDRDetection",
    "classification": "Hackathon / ML",
    "abstract": "Diabetic retinopathy detection model project.",
    "topics": [
      "ai-tools"
    ]
  },
  {
    "title": "Mindbend",
    "repository": "https://github.com/tanvishdesai/mindbend",
    "repoName": "tanvishdesai/mindbend",
    "classification": "Hackathon web app",
    "abstract": "Hackathon web project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "Petrichor",
    "repository": "https://github.com/tanvishdesai/petrichor",
    "repoName": "tanvishdesai/petrichor",
    "classification": "Hackathon / ML",
    "abstract": "Medical imaging/retinopathy style hackathon notebooks.",
    "topics": [
      "ai-tools"
    ]
  },
  {
    "title": "SIH 2024 ISL Interpretation",
    "repository": "https://github.com/tanvishdesai/sih-2024-isl-interpretation",
    "repoName": "tanvishdesai/sih-2024-isl-interpretation",
    "classification": "Hackathon / ML",
    "abstract": "Indian Sign Language interpretation project.",
    "topics": [
      "ai-tools"
    ]
  },
  {
    "title": "SIH 2025 Internship Recommendation",
    "repository": "https://github.com/tanvishdesai/InternAI",
    "repoName": "tanvishdesai/InternAI",
    "classification": "Hackathon / platform",
    "abstract": "Intelligent internship recommendation system.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "SSIP CRM Dashboard",
    "repository": "https://github.com/tanvishdesai/ssip-crm-dashboard",
    "repoName": "tanvishdesai/ssip-crm-dashboard",
    "classification": "Hackathon / dashboard",
    "abstract": "CRM/custom-dashboard hackathon project.",
    "topics": [
      "applications"
    ]
  },
  {
    "title": "CloudPulse / T3 2026",
    "repository": "https://github.com/tanvishdesai/T-3-26",
    "repoName": "tanvishdesai/T-3-26",
    "classification": "Hackathon / product",
    "abstract": "Cloud database anomaly detection product-style hackathon project.",
    "topics": [
      "other"
    ]
  },
  {
    "title": "Tic-Tech-Toe 2025 Machine Anomaly Detection",
    "repository": "https://github.com/tanvishdesai/Tic-Tech-Toe-2025",
    "repoName": "tanvishdesai/Tic-Tech-Toe-2025",
    "classification": "Hackathon / ML dashboard",
    "abstract": "CNC/instrument anomaly detection hackathon project.",
    "topics": [
      "applications",
      "ai-tools"
    ]
  },
  {
    "title": "TrackShift / EcoVision",
    "repository": "https://github.com/tanvishdesai/trackshift-hass",
    "repoName": "tanvishdesai/trackshift-hass",
    "classification": "Hackathon / ML",
    "abstract": "EcoVision project with custom architecture.",
    "topics": [
      "ai-tools"
    ]
  },
  {
    "title": "UYIR",
    "repository": "https://github.com/tanvishdesai/UYIR-hackathon",
    "repoName": "tanvishdesai/UYIR-hackathon",
    "classification": "Hackathon / safety ML",
    "abstract": "Road accident/safety detection project.",
    "topics": [
      "ai-tools"
    ]
  }
];

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    let count = 0;
    for (const project of projects) {
      const existing = await ctx.db
        .query("projects")
        .withIndex("by_repoName", (q) => q.eq("repoName", project.repoName))
        .first();
      
      if (!existing && project.repoName) {
        await ctx.db.insert("projects", project);
        count++;
      }
    }
    return count;
  }
});
