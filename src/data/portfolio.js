export const data = {
  person: {
    name: "Ahmed Ibrahim Mohamed Kamel",
    brand: "Ahmed Shosha",
    intro:
      "Mathematics and Computer Science graduate with hands-on experience in web and mobile development, applied mathematical modeling and robotics teaching. Interested in software development and cybersecurity.",
    headline: "Junior software developer · React and Python",
    availability: "Open to junior software roles and internships · Suez, Egypt",
  },

  links: {
    github: "https://github.com/AhmedShosha3",
    linkedin: "https://www.linkedin.com/in/ahmed-shosha-212192296/",
    email: "ahmed.shoshua@gmail.com",
    cv: "CV.pdf",
  },

  about: [
    "I graduated in 2026 with a Bachelor of Science in Mathematics and Computer Science from Suez University. My academic work covers two sides of the field: applied mathematical modeling in MATLAB, and software, including web interfaces in React, mobile apps in Flutter and a desktop tool in Python.",
    "Outside the classroom I completed summer training in IT at Suez Shipyard Company and in databases at Nasr Petroleum Academy. I now teach LEGO WeDo robotics and assist with electronics at Big Hero Robotics Academy in Suez.",
    "I'm building a foundation in networking and cybersecurity through a 20-hour course at The British University in Egypt and short courses on the ITI Mahara-Tech platform. I learn by building things, and I'm early in my career.",
  ],

  facts: [
    {
      title: "Education",
      text: "Bachelor of Science, Suez University, 2026",
    },
    {
      title: "Department",
      text: "Mathematics and Computer Science department",
    },
    {
      title: "Currently",
      text: "LEGO WeDo instructor and electronics assistant, Big Hero Robotics Academy",
    },
    {
      title: "Interests",
      text: "Software development and Cybersecurity",
    },
  ],

  skills: [
    {
      group: "Programming",
      items: ["Python", "JavaScript", "Dart", "MATLAB", "Regular expressions"],
      evidence:
        "Python in the regex extraction tool, JavaScript in Laffa, Dart in two Flutter apps, MATLAB in the modeling project.",
    },
    {
      group: "Web development",
      items: ["React.js", "Vite", "React Router", "HTML", "CSS"],
      evidence: "Co-built the web frontend for Laffa with a teammate.",
    },
    {
      group: "Mobile development",
      items: ["Flutter", "Dart"],
      evidence: "Categorized Quotes app and Calculator app.",
    },
    {
      group: "Databases",
      items: [
        "Database fundamentals",
        "SQL",
        "Database design",
        "Relational database",
      ],
      evidence: "Summer database training at Nasr Petroleum Academy.",
    },
    {
      group: "Cybersecurity and networking",
      items: [
        "Network fundamentals",
        "Cryptography",
        "Network security basics",
        "Cybersecurity basics",
      ],
      evidence:
        "20-hour Cyber Security course (British University in Egypt) and three Mahara-Tech courses. Learning stage.",
    },
    {
      group: "Robotics and electronics",
      items: ["LEGO WeDo (Coach)", "Electronics (Assistant)"],
      evidence: "Current role at Big Hero Robotics Academy.",
    },
    {
      group: "AI tools",
      items: ["Prompt engineering"],
      evidence: "Completed the One Million Prompters initiative.",
    },
    {
      group: "Development tools",
      items: ["Git", "GitHub"],
      evidence: "Version control on the Laffa team project.",
    },
    {
      group: "Professional",
      items: ["Teaching", "Technical writing", "Team collaboration"],
      evidence:
        "Robotics teaching, the written graduation book for the modeling project, and the Laffa team project.",
    },
  ],

  projectFilters: [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "desktop", label: "Desktop" },
    { id: "math", label: "Mathematics" },
  ],

  projects: [
    {
      id: "calculator-app",
      title: "Simple Calculator App",
      cat: "mobile",
      glyph: "mobile",
      kind: "Academic project",
      state: "Completed",
      team: false,
      summary:
        "A Flutter calculator with a responsive interface, percentage and decimal handling, and clear and reset functions.",
      tags: ["Flutter", "Dart", "UI state management"],
      role: "Mobile app developer",
      overview: [
        "A mobile calculator app with a responsive interface. It handles user input and updates the displayed result as the person types.",
      ],
      features: [
        "Basic arithmetic operations",
        "Percentage calculations",
        "Decimal handling",
        "Clear and reset functions",
        "Responsive user interface",
      ],
      links: [
        {
          label: "Source code",
          href: "https://github.com/AhmedShosha3/simple-calculator",
          icon: "github",
        },
      ],

      video: "ProjectsScreenshots/Calc/Calculator.mp4",
      screenshots: [
        {
          src: "ProjectsScreenshots/Calc/Calculator_App.png",
          alt: "Simple Calculator App",
          caption: "Simple Calculator App",
        },
      ],
      contribution: [
        "Implemented UI state management to handle user input and update the displayed result",
      ],
      stackMine: { label: "", items: ["Flutter", "Dart"] },
    },

    {
      id: "categorized-quotes-app",
      title: "Categorized Quotes App",
      cat: "mobile",
      glyph: "mobile",
      kind: "Academic project",
      state: "Completed",
      team: true,
      summary:
        "A Flutter app that organizes Arabic quotes into Love, Life, Islamic and General categories, with light and dark themes.",
      tags: [
        "Flutter",
        "Dart",
        "UI design",
        "Arabic typography",
        "Light and dark themes",
      ],
      role: "Mobile app developer",
      overview: [
        "A mobile application that organizes inspirational Arabic quotes into categories so people can browse them simply.",
      ],
      features: [
        "Quotes grouped into Love, Life, Islamic and General categories",
        "Category-based navigation",
        "Light and dark themes",
        "Custom Arabic typography for readability",
      ],
      links: [
        {
          label: "Source code",
          href: "https://github.com/AhmedShosha3/categorized-quotes-app",
          icon: "github",
        },
      ],

      screenshots: [
        {
          src: "ProjectsScreenshots/Quote/Arabic_Quotes_App.png",
          alt: "The App Image",
          caption: "The App Image",
        },
        {
          src: "ProjectsScreenshots/Quote/1.png",
          alt: "Main Page Light Mode",
          caption: "Main Page Light Mode",
        },
        {
          src: "ProjectsScreenshots/Quote/2.png",
          alt: "Main Page Dark Mode",
          caption: "Main Page Dark Mode",
        },
        {
          src: "ProjectsScreenshots/Quote/3.png",
          alt: "Love Page Dark Mode",
          caption: "Love Page",
        },
        {
          src: "ProjectsScreenshots/Quote/4.png",
          alt: "Life Page Dark Mode",
          caption: "Life Page",
        },
        {
          src: "ProjectsScreenshots/Quote/5.png",
          alt: "Quote Page Dark Mode",
          caption: "Quote Page",
        },
        {
          src: "ProjectsScreenshots/Quote/6.png",
          alt: "Islamic Page Dark Mode",
          caption: "Islamic Page",
        },
      ],
      contribution: [
        "Built the app with Flutter and Dart: category pages, navigation and light/dark themes",
      ],
      stackMine: { label: "", items: ["Flutter", "Dart"] },
    },

    {
      id: "regex-extraction-tool",
      title: "Regex-Based Data Extraction and Masking Tool",
      cat: "desktop",
      glyph: "desktop",
      kind: "Academic project",
      state: "Completed",
      team: true,
      summary:
        "A Python tool with a file picker that extracts emails, phone numbers, names, addresses and dates from text, PDF and Word files, and masks phone-like numbers in the output.",
      tags: [
        "Python",
        "Regular expressions",
        "Tkinter",
        "PDF/DOCX/TXT",
        "Data validation",
        "Data masking",
      ],
      role: "Developer (reworked and extended a team project)",

      overview: [
        "A Python tool that extracts and analyzes structured information from text, PDF and Word files, including email addresses, phone numbers, names, addresses and dates. You run it from the terminal and pick a file in a dialog window.",
      ],
      features: [
        "Extracts emails, phone numbers, names, addresses and dates using regular expressions",
        "Reads TXT, PDF and DOCX files",
        "Validates emails, phone numbers and dates, and filters out fake phone numbers",
        "Masks the last six digits of phone-like numbers while keeping text positions",
        "Writes an analysis report (line and column), an ordered list and a masked copy of the text",
        "Covered by automated tests with pytest",
      ],

      contribution: [
        "Reworked the team's original extraction code across all modules",
        "Added validation for emails, phone numbers and dates",
        "Built the phone-number masking that preserves text positions",
        "Added the analysis report (line and column numbers) and the output writer",
        "Wrote the automated tests with pytest",
      ],
      stackMine: {
        label: "",
        items: [
          "Python",
          "Regular expressions",
          "phonenumbers",
          "email-validator",
          "pypdf",
          "python-docx",
          "Tkinter",
          "pytest",
        ],
      },
      links: [
        {
          label: "Source code",
          href: "https://github.com/AhmedShosha3/regex-data-extraction-tool",
          icon: "github",
        },
      ],

      screenshots: [
        {
          src: "ProjectsScreenshots/Regex/Regex_Data_Extraction_and_Masking_Console.png",
          alt: "Data Extraction and Masking Console",
          caption: "Regex Data Extraction and Masking Console",
        },
        {
          src: "ProjectsScreenshots/Regex/Select.png",
          alt: "Select file screen",
          caption: "Select file",
        },
      ],
      samplesNote:
        "Excerpts from the output files generated for samples/test.txt.",
      samples: [
        {
          title: "Extracted data (ordered_output.txt)",
          text: `Email: support@techhub.com
Email: hr.department@techhub.co.uk
Email: info_2025-service@mail-server.org
Address: 25 Main Street
Date: 25/12/2026
Date: 2026-10-19
PhoneNumber: +201001234567
PhoneNumber: +201122334455
PhoneNumber: +971501234567
Name: Ahmed Khaled
Name: Mona Saleh
Email: ahmed.khaled22@gmail.com`,
        },
        {
          title: "Masked text (masked_output.txt)",
          text: `For business inquiries, call us at:
+201001******, or our Cairo office: +201122******.
We also have a Dubai number: +971501******.

Customer Service lines:
- +1234******
- +966531******
- +20223****** (landline)
- +201100******`,
        },
      ],
    },

    {
      id: "fractional-order-modeling",
      title: "Numerical Approaches for Cancer and COVID-19 Mathematical Models",
      cat: "math",
      glyph: "math",
      kind: "Graduation project",
      state: "Completed",
      team: true,
      summary:
        "Developed and simulated mathematical models of cancer progression and COVID-19 transmission using MATLAB, applying classical and fractional-order differential equations and numerical solution methods.",
      tags: [
        "MATLAB",
        "Mathematical Modeling",
        "Numerical Methods",
        "Differential Equations",
        "Scientific Computing",
        "Real Data Modeling",
      ],
      role: "MATLAB Programming and Graduation Report Writing",
      overview: [
        "Developed and studied two mathematical models to investigate complex biological systems: a cancer progression model describing interactions between tumor, healthy, and immune cells, and a COVID-19 transmission model describing different stages of an epidemic.",
        "Applied integer-order and fractional-order differential equations to investigate system dynamics and incorporate memory effects. The cancer model also explored variable-order fractional dynamics and a crossover between integer-order, fractional-order, and variable-order phases.",
        "Implemented numerical methods in MATLAB, generated simulations, compared numerical solutions, and documented the mathematical models, methods, and findings in the graduation report.",
      ],
      features: [
        "Three-variable cancer model of tumor, healthy, and immune cell interactions",
        "Eight-variable COVID-19 transmission model",
        "Numerical implementation using ODE45 and Euler methods",
        "Fractional-order simulations using the PECE method and Euler method",
        "Variable-order fractional and crossover simulations for cancer dynamics",
        "Performance comparisons between numerical solvers using execution time",
        "Comparison of simulated COVID-19 infection dynamics with reported data",
      ],
      contribution: [
        "Implemented the mathematical models and numerical solution methods in MATLAB",
        "Generated numerical simulations and comparative plots",
        "Contributed to the preparation and writing of the graduation report in Microsoft Word",
      ],
      results: [
        "Cancer simulations demonstrated the influence of immune response strength on tumor progression.",
        "Fractional-order formulations provided a way to investigate memory effects in cancer and epidemic dynamics.",
        "Compared the execution times of numerical methods at different step sizes.",
        "Compared simulated COVID-19 infection dynamics with reported data from the study period.",
      ],
      links: [
        {
          label: "Source code",
          href: "https://github.com/AhmedShosha3/Cancer-and-COVID-19-Mathematical-Models",
          icon: "github",
        },
      ],
      resultsNote:
        "Findings are based on the numerical simulations and analyses documented in the graduation report.",
      stackMine: {
        label: "",
        items: [
          "MATLAB",
          "Microsoft Word",
          "ODE45",
          "Euler Method",
          "PECE Method",
        ],
      },
      screenshots: [
        {
          src: "ProjectsScreenshots/Math/Mathematical_Models_of_Cancer_and_COVID-19.png",
          alt: "Mathematical Models of Cancer and COVID-19",
          caption: "Mathematical Models of Cancer and COVID-19",
        },
        {
          src: "ProjectsScreenshots/Math/1.png",
          alt: "Numerical Approaches for Cancer and COVID-19 Mathematical Models",
          caption:
            "Mathematical modeling of cancer progression and COVID-19 using numerical methods.",
        },
        {
          src: "ProjectsScreenshots/Math/2.png",
          alt: "Cancer mathematical model",
          caption:
            "Cancer model simulations of tumor, healthy, and immune cell dynamics.",
        },
        {
          src: "ProjectsScreenshots/Math/3.png",
          alt: "COVID-19 mathematical model",
          caption:
            "COVID-19 spread modeled using susceptible, infected, and recovered populations.",
        },
        {
          src: "ProjectsScreenshots/Math/4.png",
          alt: "Fractional-order mathematical equations",
          caption:
            "Fractional-order differential equations used to model biological systems.",
        },
        {
          src: "ProjectsScreenshots/Math/5.png",
          alt: "Numerical solution methods",
          caption:
            "Numerical approaches for solving mathematical models in MATLAB.",
        },
        {
          src: "ProjectsScreenshots/Math/6.png",
          alt: "Cancer model simulation results",
          caption:
            "Simulation results showing changes in tumor, healthy, and immune cells.",
        },
        {
          src: "ProjectsScreenshots/Math/7.png",
          alt: "COVID-19 simulation results",
          caption: "Numerical simulation of infection dynamics over time.",
        },
        {
          src: "ProjectsScreenshots/Math/8.png",
          alt: "ODE45 numerical method",
          caption: "Numerical solutions computed using MATLAB's ODE45 solver.",
        },
        {
          src: "ProjectsScreenshots/Math/9.png",
          alt: "Euler method",
          caption:
            "Approximate solutions obtained using the Euler numerical method.",
        },
        {
          src: "ProjectsScreenshots/Math/10.png",
          alt: "PECE numerical method",
          caption:
            "Predictor-corrector numerical approach for differential equations.",
        },
        {
          src: "ProjectsScreenshots/Math/11.png",
          alt: "Variable-order mathematical model",
          caption:
            "Analysis of variable-order models for complex biological dynamics.",
        },
        {
          src: "ProjectsScreenshots/Math/12.png",
          alt: "Cancer progression graphs",
          caption:
            "Graphical analysis of cancer progression and cell population dynamics.",
        },
        {
          src: "ProjectsScreenshots/Math/13.png",
          alt: "COVID-19 epidemiological graphs",
          caption:
            "Graphical analysis of susceptible, infected, and recovered populations.",
        },
        {
          src: "ProjectsScreenshots/Math/14.png",
          alt: "MATLAB mathematical modeling",
          caption:
            "MATLAB implementation of numerical methods for biological models.",
        },
        {
          src: "ProjectsScreenshots/Math/15.png",
          alt: "Mathematical modeling comparison",
          caption:
            "Comparison of numerical approaches for cancer and COVID-19 models.",
        },
      ],
    },

    {
      id: "laffa",
      title: "Laffa",
      cat: "web",
      glyph: "web",
      kind: "Graduation project",
      state: "refining",
      team: true,
      summary:
        "A web and mobile marketplace for customized products and supplier negotiations. I co-built the web frontend, using React and CSS, with a teammate.",
      tags: ["React", "Vite", "CSS", "JavaScript", "Responsive design"],
      role: "Web frontend developer (co-built with a teammate, as part of a larger team)",
      overview: [
        "Laffa is a graduation project for procurement and marketplace workflows where customers need products made to their own specifications. Ordinary marketplaces offer catalogs and checkout, but not the back-and-forth between a customer's detailed requirements and competing suppliers.",
      ],
      problem: {
        intro:
          "The project report identifies these gaps in existing marketplaces:",
        list: [
          "Hard to find suppliers who can deliver custom products to specification",
          "No efficient way to compare quotations",
          "Weak communication between customers and vendors, which often moves to channels outside the platform",
          "Limited transparency in supplier evaluation and trust",
          "Inefficient order tracking and status monitoring",
          "No intelligent recommendation and filtering",
          "Limited integration between mobile and web",
        ],
      },
      contribution: [
        "Co-built the web frontend with a teammate using React.js and CSS",
        "Messaging system",
        "Chatbot feature on the web side",
        "Responsive layout across screen sizes",
        "Other frontend features across the web app",
      ],
      stackMine: {
        label: "Web frontend (built with a teammate)",
        items: [
          "React",
          "Vite",
          "React Router v6",
          "Plain CSS",
          "JavaScript ES6+",
        ],
      },
      screenshots: [
        {
          src: "ProjectsScreenshots/Laffa/Welcome1.png",
          alt: "Laffa first Welcome screen",
          caption: "First Welcome",
        },
        {
          src: "ProjectsScreenshots/Laffa/Welcome2.png",
          alt: "Laffa second Welcome screen",
          caption: "Second Welcome",
        },
        {
          src: "ProjectsScreenshots/Laffa/Sign.png",
          alt: "Laffa sign in screen",
          caption: "Sign in",
        },
        {
          src: "ProjectsScreenshots/Laffa/Reg.png",
          alt: "Laffa register screen",
          caption: "Register",
        },
        {
          src: "ProjectsScreenshots/Laffa/MyReq.png",
          alt: "Laffa requests screen",
          caption: "Requests",
        },
        {
          src: "ProjectsScreenshots/Laffa/Catalog.png",
          alt: "Laffa catalog screen",
          caption: "Catalog",
        },
        {
          src: "ProjectsScreenshots/Laffa/Message.png",
          alt: "Laffa Messages screen",
          caption: "Messages",
        },
        {
          src: "ProjectsScreenshots/Laffa/CreateNewRequests2.png",
          alt: "Laffa CreateNewRequests screen",
          caption: "Create New Requests",
        },

        {
          src: "ProjectsScreenshots/Laffa/AddProj.png",
          alt: "Laffa add product screen",
          caption: "Add product",
        },
      ],
      links: [{ label: "Live demo", href: "", icon: "external" }],
      stackTeam: [
        {
          label: "Backend (team)",
          items: [
            "Node.js",
            "Express.js",
            "MongoDB Atlas with Mongoose",
            "JWT authentication",
            "Cloudinary",
            "Nodemailer",
          ],
        },
        {
          label: "Mobile (team)",
          items: [
            "Flutter",
            "Dart",
            "BLoC with Clean Architecture",
            "flutter_bloc",
          ],
        },
        {
          label: "AI services (team)",
          items: [
            "Python FastAPI",
            "Groq (LLaMA 3.3)",
            "ChromaDB",
            "ResNet50 (PyTorch)",
            "OpenRouter API",
          ],
        },
        {
          label: "Deployment and tooling (team)",
          items: ["Vercel serverless functions", "Git and GitHub"],
        },
      ],
      callout:
        "The backend, mobile app and AI services were part of the team deliverable. I co-built the web frontend with a teammate. The source code is private, so there is no repository link.",
    },
  ],

  experience: [
    {
      when: "August 2026 to Present",
      role: "LEGO WeDo instructor and electronics assistant",
      org: "Big Hero Robotics Academy, Suez, Egypt",
      desc: "Teaches LEGO WeDo robotics and assists with electronics sessions.",
    },
    {
      when: "During January 2026",
      role: "Trainee, MATLAB for computational mathematics",
      org: "Faculty of Science, Suez University, Suez, Egypt",
      desc: "Trained in MATLAB under Dr. Walid Abd El-kareem, covering vectors and matrices, built-in functions and M-files. Implemented numerical methods (linear systems, Euler, Runge-Kutta second order, Newton-Raphson, bisection) and compared their accuracy against exact solutions using error tables and plots. Co-authored a team report documenting the work.",
    },
    {
      when: "During August 2025",
      role: "Summer trainee, database training",
      org: "Nasr Petroleum Academy (Nasr Petroleum Company), Suez, Egypt",
      desc: "Took part in the company's summer training program for university students.",
      proof:
        "Participation is confirmed by the academy's letter to the Dean of the Faculty of Science, Suez University.",
    },
    {
      when: "During July 2025",
      role: "Summer trainee, IT training",
      org: "Suez Shipyard Company, Suez, Egypt",
      desc: "Completed a month of summer training as a third-level student in the Mathematics and Computer Science division.",
      proof:
        "The training period is confirmed by the company's letter to the Dean of the Faculty of Science, Suez University.",
    },
  ],

  education: {
    degree: "Bachelor of Science, Mathematics and Computer Science department",
    school: "Suez University, Faculty of Science",
    year: "Graduated 2026",
    gpa: "3.542 / 4.0",
    projects: ["laffa", "fractional-order-modeling"],
  },

  certFilters: [
    { id: "all", label: "All" },
    { id: "security", label: "Cybersecurity and Networking" },
    { id: "prompt engineering", label: "Prompt Engineering" },
    { id: "english", label: "English" },
  ],

  certs: [
    {
      title: "Cyber Security",
      issuer: "The British University in Egypt, School of Continuing Education",
      cat: "security",
      type: "Course",
      sort: "2024-08-31",
      date: "26 to 31 Aug 2024",
      length: "20 hours",
      desc: "Certificate of Achievement, issued with the Faculty of Informatics and Computer Science and the Faculty of Engineering.",
    },
    {
      title: "Introduction to network security",
      issuer: "Information Technology Institute (ITI), Mahara-Tech platform",
      cat: "security",
      type: "Course",
      sort: "2025-06-21",
      date: "21 Jun 2025",
      length: "1 hour 15 minutes",
      code: "R2MPiNdBqN",
    },
    {
      title: "Computer Network Fundamentals",
      issuer: "Information Technology Institute (ITI), Mahara-Tech platform",
      cat: "security",
      type: "Course",
      sort: "2025-05-31",
      date: "31 May 2025",
      length: "1 hour",
      code: "5utBa9eiyZ",
    },
    {
      title: "Cybersecurity For All",
      issuer: "ITI Mahara-Tech Cybersecurity Academy, content partner EG-CERT",
      cat: "security",
      type: "Course",
      sort: "2026-07-17",
      date: "17 Jul 2026",
      length: "37 minutes",
      code: "iDoXb29q7Q",
    },
    {
      title: "One Million Prompters initiative",
      issuer:
        "Dubai Future Foundation and Dubai Centre for Artificial Intelligence",
      cat: "prompt engineering",
      type: "Initiative",
      sort: "2026-07-30",
      date: "30 Jul 2026",
      length: "3 hours",
      desc: "Certificate of completion for the initiative that trains people in prompt engineering for AI systems.",
    },
    {
      title: "Prompt Engineering Mastery: From Basics to Advanced",
      issuer: "Udemy",
      cat: "prompt engineering",
      type: "Certificate",
      sort: "2026-07-14",
      date: "14 Jul 2026",
      length: "9.5 hours",
      desc: "Certificate of completion for a comprehensive prompt engineering course covering fundamental and advanced techniques for working with AI systems.",
    },
    {
      title: "English Conversational Skills for Beginners (1)",
      issuer: "Edraak, British Council course",
      cat: "english",
      type: "Course",
      sort: "2026-07-21",
      date: "21 Jul 2026",
      length: "3 hours",
      desc: "Self-introduction, basic questions about time, food and tasks, and making plans.",
    },
    {
      title: "Learn English: Conversational Skills 2",
      issuer: "Edraak, British Council course",
      cat: "english",
      type: "Course",
      sort: "2026-07-25",
      date: "25 Jul 2026",
      length: "3 hours",
      desc: "Asking about and describing places, talking about the past, and managing conversations.",
    },
    {
      title: "Learn English: Conversational Skills 3",
      issuer: "Edraak, British Council course",
      cat: "english",
      type: "Course",
      sort: "2026-07-27",
      date: "27 Jul 2026",
      length: "3 hours",
      desc: "Plans and ambitions, phone calls, and texting and emailing.",
    },
  ],
};

export const projectById = (id) => data.projects.find((p) => p.id === id);
