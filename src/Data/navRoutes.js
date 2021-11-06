// import {
//     AiOutlineHome,
//     AiOutlineFundProjectionScreen,
//     AiOutlineUser,
// } from "react-icons/ai";
import { lazy } from "react";

const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Projects = lazy(() => import("../components/Projects"));

export const navRoutes = [
    {
        // icon : <AiOutlineHome style={{ marginBottom: "2px" }}/>,
        to : "/",
        text: "Home",
        exact: true,
        comp: Home
    },
    {
        // icon : <AiOutlineUser style={{ marginBottom: "2px" }}/>,
        to : "/about",
        text: "About",
        exact: true,
        comp: About
    },
    {
        // icon : <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }}/>,
        to : "/projects",
        text: "Projects",
        exact: true,
        comp: Projects
    },
//     {
//         icon : <CgFileDocument style={{ marginBottom: "2px" }}/>,
//         to : "/resume",
//         text: "Resume",
//         exact: true,
//         comp: Resume
//     }
]