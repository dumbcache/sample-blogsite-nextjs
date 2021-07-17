import { TechData } from "./Data";

const Card = () => {
    return (
        <div>
            <div className="card-outercontainer">
                <h4 className="skills">Tech Knowledge</h4>
                <div className="card-innercontainer">
                    {TechData.map((card) => (
                        <div key={TechData.id} className={card.id}>
                            {card.data}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
