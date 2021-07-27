import LocationOnIcon from "@material-ui/icons/LocationOn";
import { TechList } from "./Tech";

const Profile = () => {
    return (
        <div>
            <div className="cover">
                <img
                    id="profile"
                    alt="profile"
                    src="https://avatars.githubusercontent.com/u/50919263?v=4"
                />
            </div>
            <div className="profile-container">
                <div id="bio">
                    <div>
                        <h2 id="name">Yesu Babu .G</h2>
                    </div>
                    <h4>age:22</h4>

                    <h5>(Full-stack Developer)</h5>
                    <p>
                        <LocationOnIcon
                            style={{
                                fontSize: 15,
                                marginTop: "0.3em",
                                marginRight: "0.5em",
                            }}
                        />
                        vijayawada,
                        <small style={{ fontWeight: "normal" }}>(India)</small>
                    </p>
                    <p>|--------- Tech Knowledge ---------|</p>
                    {/* <p style={{ fontWeight: "normal" }}>
                        good Knowledge : html, react, javascript, react,
                        node,python
                    </p>
                    <p style={{ fontWeight: "normal" }}>
                        basic Knowledge : nextjs, docker, aws, git, github
                    </p> */}
                    <TechList />
                </div>
            </div>
        </div>
    );
};

export default Profile;
