import React from "react";
import Image from "next/image";
import { TechData } from "./Data";

export const TechList = () => {
    return (
        <>
            <div className="techlist-container">
                {TechData.map((item) => (
                    <div key={item.id} className={item.data}>
                        <Image
                            src={item.image}
                            unoptimized={true}
                            alt={item.alt}
                        />
                        <span className="hovertip">{item.data}</span>
                    </div>
                ))}
            </div>
        </>
    );
};
export const TechStack = () => {
    const StackData = TechData.filter((element) => element.stack === true);
    return (
        <>
            <div className="techstack-outercontainer">
                <div className="stack-title">
                    <h4>Favourite Stack</h4>
                </div>
                <div className="techstack-innercontainer">
                    {StackData.map((item) => (
                        <div key={item.id} className={item.data}>
                            <div className="stackcard">
                                <Image
                                    src={item.image}
                                    unoptimized={true}
                                    alt={item.alt}
                                />
                                <span>{item.data}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
