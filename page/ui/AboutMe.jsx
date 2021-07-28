import Link from "next/link";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import SportsCricketIcon from "@material-ui/icons/SportsCricket";
import LiveTvIcon from "@material-ui/icons/LiveTv";

const AboutMe = () => {
    return (
        <>
            <div className="aboutme-container">
                <h4>AboutME</h4>
                <p style={{ fontWeight: "normal", fontSize: "0.9rem" }}>
                    <i>
                        ``` I'll Leave Tomorrow’s Problems To Tomorrow's Me. ```
                    </i>
                </p>
                <p>
                    I am a computer science graduate. I started my career aiming
                    to become a full-stack develper. I am currently focusing on
                    web-develpment, learning and trying different technolog(self
                    learner)
                </p>
                <h6>Hobbies</h6>
                <ul>
                    <li>
                        cricket
                        <SportsCricketIcon
                            style={{
                                fontSize: 15,
                                marginTop: "0.3em",
                                marginLeft: "0.5em",
                            }}
                        />
                    </li>
                    <li>
                        watching anime
                        <LiveTvIcon
                            style={{
                                fontSize: 15,
                                marginTop: "0.3em",
                                marginLeft: "0.5em",
                            }}
                        />
                    </li>
                    <li>
                        music
                        <AudiotrackIcon
                            style={{
                                fontSize: 15,
                                marginTop: "0.3em",
                                marginLeft: "0.5em",
                            }}
                        />
                    </li>
                </ul>
                {/* <h6>Currently Working on</h6>
                <ul>
                    <li>
                        <Link href="https://github.com/yesu4658/project-StackUP">
                            <a target="_blank">stackUp </a>
                        </Link>
                        <small
                            style={{ fontSize: "0.7rem", fontWeight: "normal" }}
                        >
                            {"(data stacking app)"}
                        </small>
                    </li>
                    <li>
                        <Link href="https://github.com/yesu4658/project-LOOK">
                            <a target="_blank">look </a>
                        </Link>
                        <small
                            style={{ fontSize: "0.7rem", fontWeight: "normal" }}
                        >
                            {"(data provider app)"}
                        </small>
                    </li>
                </ul> */}
            </div>
        </>
    );
};

export default AboutMe;
