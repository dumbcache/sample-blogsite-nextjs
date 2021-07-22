import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import html from "../public/assets/html.png";
import css from "../public/assets/css.png";
import js from "../public/assets/js.png";
import react from "../public/assets/react.png";
import nextjs from "../public/assets/nextjs.svg";
import mongodb from "../public/assets/mongo.svg";
import node from "../public/assets/node.png";
import python from "../public/assets/python.png";
import docker from "../public/assets/docker.png";
import git from "../public/assets/git.png";
import github from "../public/assets/github.png";

export const TechData = [
    {
        id: 1,
        data: "html",
        alt: "html",
        image: html,
        stack: false,
    },
    {
        id: 2,
        data: "css",
        alt: "css",
        image: css,
        stack: false,
    },
    {
        id: 3,
        data: "js",
        alt: "js",
        image: js,
        stack: false,
    },
    {
        id: 4,
        data: "python",
        alt: "python",
        image: python,
        stack: false,
    },
    {
        id: 5,
        data: "React",
        alt: "React",
        image: react,
        stack: true,
    },
    {
        id: 6,
        data: "nextJS",
        alt: "nextJS",
        image: nextjs,
        stack: false,
    },
    {
        id: 7,
        data: "node",
        alt: "node",
        image: node,
        stack: true,
    },
    {
        id: 8,
        data: "Mongodb",
        alt: "Mongodb",
        image: mongodb,
        stack: true,
    },
    {
        id: 9,
        data: "Docker",
        alt: "Docker",
        image: docker,
        stack: true,
    },
    {
        id: 10,
        data: "git",
        alt: "git",
        image: git,
        stack: true,
    },
    {
        id: 11,
        data: "github",
        alt: "github",
        image: github,
        stack: true,
    },
];

export const ProfileData = [
    { id: "github", icon: GitHubIcon, url: "https://github.com/yesu4658" },
    {
        id: "facebook",
        icon: FacebookIcon,
        url: "https://www.facebook.com/yesu4658/",
    },
    {
        id: "twitter",
        icon: TwitterIcon,
        url: "https://twitter.com/yesu4658",
    },
    {
        id: "instagram",
        icon: InstagramIcon,
        url: "https://www.instagram.com/yesu4658/",
    },
    {
        id: "linkedin",
        icon: LinkedInIcon,
        url: "https://www.linkedin.com/in/yesu4658/",
    },
];
