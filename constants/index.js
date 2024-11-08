import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Blockchain Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Data Engineer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  web: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    }
  ],
  dataTools: [
    {
      name: "Hadoop",
      icon: "/assets/tech/hadoop.png",
      link: "https://hadoop.apache.org/",
    },
    {
      name: "Pyspark",
      icon: "/assets/tech/spark.png",
      link: "https://spark.apache.org/",
    },
  ],
  versionControls: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "SDE - I",
    company_name: "Fresh Prints",
    link: "https://www.freshprints.com",
    icon: "/assets/company/fp-logo.png",
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Currently Serving as a Software Development Engineer I (SDE-I), leading technical automation efforts, fostering cross-functional collaboration, and contributing to strategic decision-making processes.",
      "Spearheaded the development and implementation of best practices in data engineering and product analysis, enhancing product accuracy by 40% through the effective use of Playwright, Jira, Bitbucket, and CircleCI.",
      "Created interactive data visualization dashboards that provided stakeholders with intuitive insights, resulting in 25% increase in data-driven decision-making across departments.",
    ],
  },
  {
    title: "Software Developer ",
    company_name: "Zimozi",
    link: "https://zimozi.co/",
    icon: "/assets/company/zimozi-logo.png",
    iconBg: "#E6DEDD",
    date: "July 2022 - April 2023",
    points: [
      "Pioneered the development of an advanced DeFi platform on Ethereum, integrating React and Solidity for a responsive, secure full-stack solution that supports real-time user interactions and seamless transactions.", 
      "Enhanced platform analytics and scalability through collaborative data engineering efforts, implementing robust security protocols, and aligning features with the latest trends in decentralized finance.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Oropocket",
    link: "https://oropocket.com/",
    icon: "/assets/company/oropocket-logo.png",
    iconBg: "#E6DEDD",
    date: "January 2022 - April 2022",
    points: [
      "Collaborated with a team of professionals to develop and test full-stack features for financial management web applications, emphasizing data-driven insights, security, and an optimized user experience. Utilized analytical methods to refine application functionality, ensuring reliable performance across diverse user interactions",
    ],
  },
  {
    title: "Solidity Developer Intern",
    company_name: "Rapid Innovation",
    link: "https://www.rapidinnovation.io/",
    icon: "/assets/company/rapid-logo.png",
    iconBg: "#E6DEDD",
    date: "January 2022 - April 2022",
    points: [
      "Collaborated within a professional team to design and rigorously test DeFi and NFT smart contracts, emphasizing robust security and optimal efficiency in blockchain-driven solutions.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Bisync Solutions",
    icon: "/assets/company/bisync-logo.png",
    iconBg: "#E6DEDD",
    date: "October 2021 - December 2021",
    points: [
      "Contributed to developing a dynamic e-commerce platform, optimizing front-end design for user experience.", 
      "Developed essential features, including interactive product cataloging, seamless cart integration, and secure, streamlined checkout experiences to elevate user engagement and satisfaction",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HexaMaint",
    description:
      "HexaMaint is an innovative predictive maintenance solution powered by blockchain and data analytics. It enables real-time monitoring of equipment health, and ensures data integrity with blockchain, providing secure and reliable insights to minimize downtime.",
      tags: [
        {
          name: "blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "data analytics",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "yellow-text-gradient",
        },
        {
          name: "ethereum",
          color: "purple-text-gradient",
        },
        {
          name: "sql",
          color: "orange-text-gradient",
        }
     ],
    image: "/assets/projects/HexaMaint.png",
    source_code_link: "https://github.com/lashmanv/Blockchain-Enabled-Predictive-Maintenance-System",
  },
  {
    name: "BitWiseWave Forecaster",
    description:
      "BitWiseWave Forecaster leverages blockchain and data science to predict Bitcoin price movements. Utilizing data science models, it analyzes market trends and blockchain metrics to provide users with predictive insights, assisting them in making informed trading decisions.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "data science",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "LSTM",
        color: "purple-text-gradient",
      },
      {
        name: "pandas",
        color: "orange-text-gradient",
      }
    ],
    image: "/assets/projects/BitWiseWave.png",
    source_code_link: "https://github.com/lashmanv/Bitcoin-Price-Prediction-using-LSTM",
  },
  {
    name: "SolOptiLab",
    description:
      "SolOptiLab is a blockchain-powered optimization platform, integrating data science techniques to streamline Solidity code. It detects the inefficiencies in smart contracts and provides recommendations for improvement, ensuring more cost-effective blockchain transactions.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "data science",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "yellow-text-gradient",
      },
      {
        name: "python",
        color: "purple-text-gradient",
      },
      {
        name: "smart contracts",
        color: "orange-text-gradient",
      }
    ],
    image: "/assets/projects/SolOptiLab.png",
    source_code_link:
      "https://github.com/lashmanv/Solidity-Code-Optimization-with-Data-Science-Pipeline"
  },
  {
    name: "ZeroBound Lending",
    description:
      "ZeroBound Lending is a blockchain-based lending platform offering zero-interest loans. Built on decentralized technology, it provides a transparent, secure, and efficient lending, allowing users to access interest-free financial support without traditional intermediaries.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "yellow-text-gradient",
      },
      {
        name: "web3.js",
        color: "purple-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      }
    ],
    image: "/assets/projects/ZeroBound.png",
    source_code_link:
      "https://github.com/lashmanv/Zero-Percent-Interest-Loan"
  },
  {
    name: "CertiChain",
    description:
      "CertiChain is a secure certification issuance and verification system powered by blockchain and machine learning. It streamlines the certification process, providing tamper-proof digital credentials that can be easily verified on a decentralized ledger, enhancing trust and transparency.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "purple-text-gradient",
      },
      {
        name: "solidity",
        color: "yellow-text-gradient",
      },
      {
        name: "ethereum",
        color: "orange-text-gradient",
      }
    ],
    image: "/assets/projects/CertiChain.png",
    source_code_link:
      "https://github.com/lashmanv/Certify"
  },
  {
    name: "DrowseShield",
    description:
      "DrowseShield is an drowsiness detection system built with machine learning and AI. Designed to monitor signs of fatigue in real-time, it alerts users to prevent accidents, making it ideal for applications in driver safety and other fatigue-sensitive environments.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "yellow-text-gradient",
      },
      {
        name: "tensorflow",
        color: "purple-text-gradient",
      },
      {
        name: "opencv",
        color: "orange-text-gradient",
      }
    ],
    image: "/assets/projects/DrowseShield.png",
    source_code_link:
      "https://github.com/lashmanv/Drowsiness-Detection"
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/lashmanv",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/lashmanv",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/lashmansabarish",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/lashxn_",
  },
];

const heroTexts = [
  "Full-Stack Developer",
  500,
  "Blockchain Developer",
  500,
  "Data Engineer/Analyst",
  500,
  "Automation Engineer",
  500,
  "Freelancer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
