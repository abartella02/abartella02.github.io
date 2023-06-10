import {
  logo,
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
  ];
  
  const services = [
    {
      title: "Robotics \& Mechatronics",
      icon: web,
    },
    {
      title: "Embedded Systems Design",
      icon: mobile,
    },
    {
      title: "Full Stack Development",
      icon: backend,
    },
    {
      title: "Something else I like",
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
      icon: verilog,
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
      icon: javascript,
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
      name: "git",
      icon: nodejs,
    },
    {
      name: "figma",
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
        "Actively contributed to the development of the Gateway web app’s UI overhaul, collaborating with a team of 5 developers, participating in daily scrums, and utilizing Jira and GitLab for ticket tracking.",
        "Modified frontend UI and debugged Gateway web app, utilizing flask and React.",
        "Assisted in the creation and execution of comprehensive test plans, performing unit and integration testing to identify and resolve software defects.",
      ],
    },
    {
      title: "QA Analyst & Engineering Co-op",
      company_name: "Mircom",
      icon: mircom,
      iconBg: "#E6DEDD",
      date: "May 2022 - August 2022",
      points: [
        "Tested, reported, and verified over 250 hardware and software bugs on a range of fire detection and smart building systems, learning from & working with a team of analysts and developers across Canada.",
        "Aided in launch of FX‐4000 family of products by performing software integrity testing procedures.",
        "Designed and 3D printed prototype electronic enclosures to be manufactured out of sheet metal.",
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
        "Acted as a seamless link between subcontractors, supervisors, and clients on 13 projects simultaneously.",
        "Using python and visual basic, created excel template for bidding lists which automatically scrapes company database for subcontractor information. Reduced turnaround time from 3 hours to 5 minutes.",
      ],
    },
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
      name: "ASIP Stepper Motor Controller",
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
      name: "SDRAM controller",
      description:
        "Used Verilog to build an SDRAM controller on an Intel Cyclone V FPGA. VerilogQuartus Prime Designed a controller circuit for an SDRAM chip on a Cyclone V FPGA Controller is able to read and write data to the DRAM.",
      tags: [
        {
          name: "Verilog",
          color: "blue-text-gradient",
        },
        {
          name: "Embedded Systems Design",
          color: "green-text-gradient",
        }
      ],
      image: steppermotor,
      source_code_link: "https://github.com/abartella02/Portfolio/tree/main/Verilog%20-%20SDRAM%20controller",
    },
    {
      name: "Automatic Subcontractor Assembler",
      description:
        "Scrapes a word document for desired subcontractors, scrapes the company database for their contact information and status, sorts the information by subtrade then displays the information in an excel-based GUI with a VBA backend. I created this application to provide an advantage during the time-sensitive job bidding process.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Visual basic",
          color: "green-text-gradient",
        }
      ],
      image: steppermotor,
      source_code_link: "https://github.com/abartella02/Portfolio/tree/main/Verilog%20-%20SDRAM%20controller",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };