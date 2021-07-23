import Link from "next/link";

const AboutMe = () => {
    return (
        <>
            <div className="aboutme-container">
                <h4>AboutME</h4>
                <p>
                    I am a computer science graduate. I started my career aiming
                    to become a full-stack develper. I am currently focusing on
                    web-develpment, learning and trying different technolog(self
                    learner)
                </p>
                <h6>Currently Working on</h6>
                <ul style={{ margin: "0" }}>
                    <li>
                        <Link href="https://github.com/yesu4658/project-StackUP">
                            <a target="_blank">stackUp</a>
                        </Link>
                        <small
                            style={{ fontSize: "0.7rem", fontWeight: "normal" }}
                        >
                            {"(data stacking app)"}
                        </small>
                    </li>
                    <li>
                        <Link href="https://github.com/yesu4658/project-LOOK">
                            <a target="_blank">look</a>
                        </Link>
                        <small
                            style={{ fontSize: "0.7rem", fontWeight: "normal" }}
                        >
                            {"(data provider app)"}
                        </small>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AboutMe;
