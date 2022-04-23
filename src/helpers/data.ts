import { IProject, LinkIten, NavbarIten, Skill } from "../types/types";
import { AiFillGithub, AiFillLinkedin, AiFillPlayCircle, AiFillMessage } from "react-icons/ai";
import { SiHomebridge, SiTypescript, SiDjango, SiNextdotjs, SiTailwindcss, SiRedux, SiPostgresql, SiPostman, SiVisualstudiocode, SiGithub } from "react-icons/si";
import { FaLinux, FaUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoLogoPython, IoLogoJavascript, IoLogoNpm } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { FiFramer } from "react-icons/fi";

export const NavbarItens: NavbarIten[] = [
    { name: 'Home', to: '/', Icon: SiHomebridge },
    { name: 'About', to: '/about', Icon: FaUserCircle },
    { name: 'Skills', to: '/skills', Icon: MdLanguage },
    { name: 'Projects', to: '/projects', Icon: AiFillPlayCircle },
    { name: 'Contact', to: '/contact', Icon: AiFillMessage },
];
export const LinksHome: LinkIten[] = [
    { name: 'GitHub', to: 'https://github.com/anthonidev', Icon: AiFillGithub },
    { name: 'Linkedin', to: 'https://www.linkedin.com/in/anthoni-portotocarrero-rodriguez-06089119a/', Icon: AiFillLinkedin },
];

export const languages: Skill[] = [
    {
        Icon: IoLogoPython,
        name: "Python",
        color:"yellow",
    },

    {
        Icon: IoLogoJavascript,
        name: "JavaScript",
        color:"yellow"

    },
    {
        Icon: SiTypescript,
        name: "TypeScript",
        color:"blue"

    },
]
export const framework: Skill[] = [
    {
        Icon: SiDjango,
        name: "Django",
        color:"green"

    },
    {
        Icon: SiNextdotjs,
        name: "Next js",
        color:"black"

    },
    {
        Icon: SiTailwindcss,
        name: "Tailwind",
        color:"sky"

    },
    {
        Icon: GrReactjs,
        name: "React",
        color:"sky"

    },
    {
        Icon: SiRedux,
        name: "Redux",
        color:"violet"

    },
    {
        Icon: FiFramer,
        name: "Framer Motion",
        color:"black"

    },


];

export const tools: Skill[] = [
    {
        Icon: SiPostgresql,
        name: "Postgresql",
        color:"sky"

    },
    {
        Icon: SiPostman,
        name: "Postman",
        color:"orange"

    },

    {
        Icon: IoLogoNpm,
        name: "npm",
        color:"red"

    },
]
export const projectsData: IProject[] = [
    {
        id: 1,
        name: "Backend Aton",
        description:
            "This application creates the endpoints to be consumed in the frontend",
        image_path: "/assets/images/backend_aton.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/anthonidev/backend-aton",
        category: ["django"],
        key_techs: ["Rest framework", "Djoser", "PyJWT", "PostgreSQL"],
    },
    {
        id: 4,
        name: "Aton Frontend",
        image_path: "/assets/images/aton_frontend.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/anthonidev/frontend-aton",
        category: ["nextjs"],
        description:
            "This application is an ecommerce for the sale of TV accessories.",
        key_techs: ["React", "Tailwind", "TypeScript", "Redux", "Axios"],
    },
    {
        id: 8,
        name: "Frontend Academy ",
        image_path: "/assets/images/frontend_academy.jpg",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/anthonidev/frontend-surf-academy",
        category: ["nextjs"],
        description:
            "This is a program to register students in the system ",
        key_techs: ["Tailwind", "Redux", "Axios", "ReactJS"],
    },


    {
        id: 3,
        name: "Criptografia",
        image_path: "/assets/images/criptografia.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/anthonidev/Criptografia",
        category: ["nextjs"],
        description:
            "This application receives a text and gives as a result the number of monograms and digrams with their frequency",
        key_techs: [
            "Tailwind",
            "Framer Motion",
        ],
    },


    {
        id: 5,
        name: "Market Book",
        image_path: "/assets/images/market_place.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/anthonidev/marketplace",
        category: ["django", "postgresql"],
        description:
            "This application is a marketplace for buying and selling books",
        key_techs: ["Tailwind", "Stripe"],
    },

    {
        id: 6,
        name: "Facebook CLone",
        image_path: "/assets/images/facebook_clone.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/anthonidev/SocialPy",
        category: ["django", "postgresql"],
        description:
            "Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["PyJWT", "Tailwind"],
    },
    {
        id: 7,
        name: "TWS SHOP  ",
        image_path: "/assets/images/tws_shop.jpg",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/anthonidev/odin",
        category: ["react", "django", "postgresql"],
        description:
            'This application is an ecommerce for the sale of clothes. ',
        key_techs: [
            "React",
            "Baintree",
            "Stripe",
            "Redux",
            "Sass",
            "Tailwind",
            "Axios",
        ],
    },
    {
        id: 2,
        name: "Blog DevInfo",
        image_path: "/assets/images/blog_info.jpg",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["django"],
        description:
            "This application is a blog where users can publish their content ",
        key_techs: ["Tailwind", "PostgreSQL"],
    },
    {
        id: 9,
        name: "Backend Academy ",
        image_path: "/assets/images/backend_academy.jpg",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/anthonidev/backend-surf-academy",
        category: ["django"],
        description:
            "This is an application that manages the control and authentication of users",
        key_techs: ["Rest framework", "Djoser", "PyJWT", "PostgreSQL"],
    },
];
