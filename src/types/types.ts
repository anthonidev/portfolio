import { IconType } from "react-icons";



export interface NavbarIten {
    name:string;
    to:string;
    Icon: IconType;

}
export interface LinkIten {
    name:string;
    to:string;
    Icon: IconType;
}
export interface Skill {
    Icon: IconType;
    name:string;
}

export interface IProject {
    id:number,
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    category: Category[];
    key_techs: string[];
}

export type Category = "react" | "nextjs" | "django" | "postgresql";