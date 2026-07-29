import companyDNA from "../assets/images/companyDNA.png";
import portfolio from "../assets/images/portfolio.png";

const projects = [
  {
    id: 1,
    title: "CompanyDNA",
    description:
      "AI-powered knowledge management platform for seamless employee handovers.",

    image: companyDNA,

    tech: ["React", "Node.js", "Express", "MongoDB"],

    github: "https://github.com/bhoga08/companydna",

    live: "https://company-dna.vercel.app/",
  },

  {
    id: 2,
    title: "Developer Portfolio",
    description:
      "A modern responsive portfolio built with React and custom animations.",

    image: portfolio,

    tech: ["React", "CSS"],

    github: "https://github.com/yourusername/portfolio",

    live: "https://portfolio.vercel.app",
  },
];

export default projects;