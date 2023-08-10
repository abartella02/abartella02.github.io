import {
  logo,
  spinme,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  threejs,
  assembly, 
  bash, 
  clang, 
  cpp, 
  jira, 
  linux, 
  matlab, 
  pyserial,
  python,
  selenium, 
  vba,
  verilog,
  pytest,

  tictactoe,
  steppermotor,
  pwmfancontroller,
  pacemaker, 
  lightsaber, 
  insiderbot,
  autosublistmaker,
  website,

  bluecat,
  duron,
  mircom,

  //////////////////////

  figma,
  mongodb,
  redux,
  typescript,

  meta,
  shopify,
  starbucks,
  tesla,

  carrent,
  jobit,
  tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "https://github.com/abartella02/Portfolio",
      title: "Source Code"
    },
  ];
  
  const services = [
    {
      title: "Robotics \& Mechatronics",
      icon: web,
    },
    {
      title: "Dynamic Control Systems",
      icon: mobile,
    },
    {
      title: "Full Stack Development",
      icon: backend,
    },
    {
      title: "Hardware & Software codesign",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: python,
    },
    {
      name: "CSS 3",
      icon: clang,
    },
    {
      name: "JavaScript",
      icon: cpp,
    },
    {
      name: "TypeScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: matlab,
    },
    {
      name: "Redux Toolkit",
      icon: linux,
    },
    {
      name: "Tailwind CSS",
      icon: verilog,
    },
    {
      name: "Node JS",
      icon: html,
    },
    {
      name: "MongoDB",
      icon: css,
    },
    {
      name: "Three JS",
      icon: reactjs,
    },
    {
      name: "node",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Co-op",
      company_name: "BlueCat Networks",
      icon: bluecat,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Actively contributed to the development of the Gateway web app including a complete UI overhaul, collaborating with a team of full‐stack developers in an agile environment.",
        "Developed new and modified existing features on frontend and backend harnessing Python, JavaScript/React, and HTML/CSS",
        "Assisted in the creation and execution of comprehensive test plans. Developed UI, image, unit, and code integration testing scripts to identify, verify, and resolve software defects.",
      ],
    },
    {
      title: "QA Analyst & Engineering Co-op",
      company_name: "Mircom",
      icon: mircom,
      iconBg: "#E6DEDD",
      date: "May 2022 - August 2022",
      points: [
        "Tested, reported, fixed, and verified over 250 hardware and software bugs on a range of fire detection and smart building systems, learning from & working with a team of analysts and developers across Canada.",
        "Aided in launch of FX‐4000 family of products by identifying and resolving software defects, and performing hardware integrity testing procedures.",
        "Designed and prototyped electronic panel enclosures using AutoDesk Inventor, to later be manufactured out of sheet metal.",
        "Modified and revised product documentation & application guides.",
      ],
    },
    {
      title: "Project Coordinator & Engineering Co-op",
      company_name: "Duron Ontario",
      icon: duron,
      iconBg: "#383E56",
      date: "May 2021 - August 2021",
      points: [
        "Created, revised, and submitted over 200 project drawings and engineering documentation.",
        "Acted as a seamless link between subcontractors, supervisors, and clients on 15 projects simultaneously.",
        "Using python and visual basic, created excel template for bidding lists which automatically scrapes company database for subcontractor information. Reduced turnaround time from 3 hours to 5 minutes.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Designed, launched, and maintain a website via GoDaddy to promote the organization. Consults the committee regarding online aspects such as updates to website, SEO, digital marketing.",
      name: "Website Designer",
      designation: "",
      company: "Castelpizzuto Italian Social club",
      image: "",
    },
    {
      testimonial:
        "Assisted in planning and running multiple sports events for engineering students at McMaster, including a soccer tournament of nearly 400 participants. In charge of collecting forms, organizing participant data. ",
      name: "Data Coordinator",
      designation: "MES Sports Committee",
      company: "McMaster Engineering Society",
      image: "",
    },
    {
      testimonial:
        "Aided in organzing and running help sessions for first and second years on subjects such as computer science, calculus, and physics.",
      name: "Committee Member & Help Session Leader",
      designation: "MES Academic Services Committee",
      company: "McMaster Engineering Society",
      image: "",
    },
    {
      testimonial:
        "Assissted in planning of workshop events and participated in team meetings discussing future plans.",
      name: "Computer Chapter Member",
      designation: "McMaster IEEE Chapter",
      company: "McMaster University",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Pacemaker w/GUI",
      description:
        "A pacemaker designed using simulink paired with a python-based GUI. Features multiple users support, serial communication, real-time plotting of pacemaker data. GUI can program and read pacemaker parameters over serial. APIs used include threading, pyserial, tkinter, matplotlib, and struct.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "simulink",
          color: "green-text-gradient",
        },
        {
          name: "serial communication",
          color: "pink-text-gradient",
        },
      ],
      image: pacemaker,
      source_code_link: "https://github.com/abartella02/Portfolio/tree/main/Python%2C%20Simulink%20-%20Pacemaker",
    },
    {
      name: "ASIP Stepper Motor Controller + SDRAM Controller",
      description:
        "Designed an ASIP using Verilog, including a 14-module datapath and control FSM on an Intel Cyclone V FPGA to control a stepper motor Constructed a motor driver interface circuit using an SN754410 Half-H Driver chip Utilized Quartus Prime for simulation and testing of the ASIP and its modules. Additionally, wrote test programs in assembly to be run on ASIP.",
      tags: [
        {
          name: "verilog",
          color: "blue-text-gradient",
        },
        {
          name: "UAL/assembly",
          color: "green-text-gradient",
        },
        {
          name: "embedded systems design",
          color: "pink-text-gradient",
        },
      ],
      image: steppermotor,
      source_code_link: "https://github.com/abartella02/Portfolio/tree/main/Verilog%20-%20ASIP%20Stepper%20motor%20controller",
    },
    {
      name: "InsiderBot",
      description:
        "A personal project that I created when I began trading in the stock market. Uses Discord for input and output. Reports information on a specified stock (50 day average, daily high, daily low, yield, etc). Provides insider trades information: CEOs/company heads/politicians that bought or sold large amounts of company stock. Uses selenium, requests, beautifulsoup python libraries to scrape the web for the above information, as well as the discord library.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Selenium",
          color: "green-text-gradient",
        },
        {
          name:"HTML",
          color: "pink-text-gradient",
        }
      ],
      image: insiderbot,
      source_code_link: "https://github.com/abartella02/Portfolio/tree/main/Python%20-%20InsiderBot",
    },
    {
      name: "3D Interactive Web Portfolio",
      description:
        "Speaks for itself, doesnt it? Modern, clean, and responsive website built to showcase my experiences and projects, as well as my web development skills. Built using three.js, react, node, html, & tailwindcss.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML & Tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient"
        },
        {
          name: "React",
          color: "orange-text-gradient"
        },
        {
          name: "Three.js",
          color: "blue-text-gradient"
        }
      ],
      image: website,
      source_code_link: "https://github.com/abartella02/3d_portfolio/tree/custom",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };