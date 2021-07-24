import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";

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
                    <p>|--------- Bio ---------|</p>
                    <p>
                        <i>
                            ``` May be a fresher but will be professional in no
                            time ```
                        </i>
                    </p>

                    <ul>
                        <li>loves cricket</li>
                        <li>watching anime &#128512;</li>
                        <li>music</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
