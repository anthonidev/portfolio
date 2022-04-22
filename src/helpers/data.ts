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
    { name: 'GitHub', to: '/', Icon: AiFillGithub },
    { name: 'Linkedin', to: '/about', Icon: AiFillLinkedin },
];

export const languages: Skill[] = [
    {
        Icon: IoLogoPython,
        name: "Python",
    },

    {
        Icon: IoLogoJavascript,
        name: "JavaScript",
    },
    {
        Icon: SiTypescript,
        name: "TypeScript",
    },
]
export const framework: Skill[] = [
    {
        Icon: SiDjango,
        name: "Django",
    },
    {
        Icon: SiNextdotjs,
        name: "Next js",
    },
    {
        Icon: SiTailwindcss,
        name: "Tailwind",
    },
    {
        Icon: GrReactjs,
        name: "React",
    },
    {
        Icon: SiRedux,
        name: "Redux",
    },
    {
        Icon: FiFramer,
        name: "Framer Motion",
    },


];

export const tools: Skill[] = [
    {
        Icon: SiPostgresql,
        name: "Postgresql",
    },
    {
        Icon: SiPostman,
        name: "Postman",
    },

    {
        Icon: IoLogoNpm,
        name: "npm",
    },
]
export const projectsData: IProject[] = [
    {
        id: 1,
        name: "Backend Aton",
        description:
            "This application creates the endpoints to be consumed in the frontend",
        image_path: "/assets/images/backend_aton.png",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/anthonidev/backend-aton",
        category: ["django"],
        key_techs: ["Rest framework", "Djoser", "PyJWT","PostgreSQL"],
    },
    {
        id: 4,
        name: "Aton Frontend",
        image_path: "/assets/images/aton_frontend.png",
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
        image_path: "/assets/images/frontend_academy.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/anthonidev/frontend-surf-academy",
        category: ["nextjs"],
        description:
            "This is a program to register students in the system ",
        key_techs: ["Tailwind", "Redux",  "Axios","ReactJS"],
    },
    

    {
        id: 3,
        name: "Criptografia",
        image_path: "/assets/images/criptografia.png",
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
        image_path: "/assets/images/market_place.png",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/anthonidev/marketplace",
        category: ["django", "postgresql"],
        description:
            "This application is a marketplace for buying and selling books",
        key_techs: [ "Tailwind", "Stripe"],
    },

    {
        id: 6,
        name: "Facebook CLone",
        image_path: "/assets/images/facebook_clone.png",
        deployed_url: "!#",
        github_url: "https://github.com/anthonidev/SocialPy",
        category: ["django","postgresql"],
        description:
            "Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["PyJWT","Tailwind"],
    },
    {
        id: 7,
        name: "TWS SHOP  ",
        image_path: "/assets/images/tws_shop.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/anthonidev/odin",
        category: ["react","django","postgresql"],
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
        image_path: "/assets/images/blog_info.png",
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
        image_path: "/assets/images/backend_academy.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/anthonidev/backend-surf-academy",
        category: ["django"],
        description:
            "This is an application that manages the control and authentication of users",
        key_techs: ["Rest framework", "Djoser", "PyJWT","PostgreSQL"],
    },
];
