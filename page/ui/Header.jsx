import React from "react";
import Link from "next/link";
import { ProfileData } from "./Data";
import ProfileIcon from "./ProfileIcon";
import saitama from "../assets/onePunchMan.jpg";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="title-container">
                    <img src="/saitama.png" alt="saitama" id="logo" />
                    <h1 id="title">Personal Page</h1>
                </div>
                <div className="navigation-container">
                    <div id="home">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div id="blog">
                        <Link href="/blogs">
                            <a>Blog</a>
                        </Link>
                    </div>
                </div>
                <div className="social-container">
                    <div className="github">
                        <a
                            href={ProfileData[0].url}
                            title={ProfileData[0].url}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <ProfileIcon
                                Icon={ProfileData[0].icon}
                                style={{ color: "#63A814" }}
                            />
                        </a>
                    </div>
                    <div className="social">
                        {ProfileData.map((element) =>
                            element.id === "github" ? (
                                <></>
                            ) : (
                                <span key={element.id}>
                                    <a
                                        href={element.url}
                                        title={element.url}
                                        rel="noreferrer"
                                        target="_blank"
                                        className={element.id}
                                    >
                                        <ProfileIcon
                                            Icon={element.icon}
                                            style={{ color: "#2496ED" }}
                                        />
                                    </a>
                                </span>
                            )
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
