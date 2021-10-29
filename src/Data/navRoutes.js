import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export const navRoutes = [
    {
        icon : <AiOutlineHome style={{ marginBottom: "2px" }}/>,
        to : "/",
        text: "Home",
        exact: true,
        comp: Home
    },
    {
        icon : <AiOutlineUser style={{ marginBottom: "2px" }}/>,
        to : "/about",
        text: "About",
        exact: true,
        comp: About
    },
    {
        icon : <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }}/>,
        to : "/projects",
        text: "Projects",
        exact: true,
        comp: Projects
    },
    {
        icon : <CgFileDocument style={{ marginBottom: "2px" }}/>,
        to : "/resume",
        text: "Resume",
        exact: true,
        comp: Resume
    }
]