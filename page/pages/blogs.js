import React from "react";
import styles from "../styles/Blog.module.scss";

const blogs = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>None</div>
        </main>
    );
};
export const getServerSideProps = async () => {
    console.log(process.env);
    console.log(process.cwd());

    return {
        props: {},
    };
};

export default blogs;
