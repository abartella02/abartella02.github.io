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
  tensorflow,
  pytorch,

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
  ford,
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
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "Hardware & Software design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: clang,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "react",
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
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "Unix/Linux",
      icon: linux,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
  ];
  
  const experiences = [
    {
      title: "Test Automation Engineer (co-op)",
      company_name: "Ford Motor Company",
      icon: ford,
      iconBg: "#383E56",
      date: "May 2024 - August 2024",
      points: [
        "Wrote, modified, and documented vehicle infotainment and instrument cluster tests.",
        "Developed workarounds and dynamic tools for tests requiring browser login.",
        "Refined and debugged experimental proof-of-concept test suites, significantly reducing the time needed to write and execute tests.",
        "Expanded the capabilities of a screen recording Android app for in-vehicle use, integrating it into test suites for vehicle systems.",
        "Assembled and optimized a hardware test bench, modifying and debugging both software and hardware test suites.",
      ],
    },
    {
      title: "Full Stack Developer (co-op)",
      company_name: "BlueCat Networks",
      icon: bluecat,
      iconBg: "#383E56",
      date: "May 2023 - April 2024",
      points: [
        "Actively contributed to the development of the Gateway web app including a complete UI overhaul, collaborating with a team of full‐stack developers in an agile environment.",
        "Developed new and modified existing features on frontend and backend harnessing Python, JavaScript/React, and HTML/CSS",
        "Assisted in the creation and execution of comprehensive test plans. Developed UI, image, unit, and code integration testing scripts to identify, verify, and resolve software defects.",
      ],
    },
    {
      title: "QA Analyst (co-op)",
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
      title: "Project Coordinator (co-op)",
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
  
  // TODO: change object name and key names
  const testimonials = [
    {
      testimonial:
        "Designed, manufactured, and delivered merchandising such as t-shirts, hoodies, patches, etc for the Mechatronics Society.",
      name: "Vice President - Merchandising",
      designation: "McMaster Mechatronics Society",
      company: "June 2024 - Current",
      image: "",
    },
    {
      testimonial:
        "Organizing and designing a robotics-based competition for the upper-year students participating in the Ontario Engineering Competition at McMaster University.",
      name: "Senior Design Competition Lead",
      designation: "Ontario Engineering Competition (2025)",
      company: "June 2024 - Current",
      image: "",
    },
    {
      testimonial:
        "Assisted in planning and running multiple sports events for engineering students at McMaster, including a soccer tournament of nearly 400 participants. In charge of collecting forms, organizing participant data. ",
      name: "Sports Committee Data Coordinator",
      designation: "McMaster Engineering Society",
      company: "September 2021 - May 2023",
      image: "",
    },
    {
      testimonial:
        "Aided in organzing and running help sessions for first and second years on subjects such as computer science, calculus, and physics.",
      name: "Academic Services Help Session Leader",
      designation: "McMaster Engineering Society",
      company: "September 2022 - April 2024",
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