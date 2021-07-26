import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Blog.module.scss";

const blogs = ({ blogs }) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {blogs.map(({ slug, metaData }) => (
                    <div
                        style={{
                            backgroundColor: "greenyellow",
                            marginBottom: "2em",
                        }}
                    >
                        <Link href={`/blogs/${slug}`}>
                            <a>
                                <Image
                                    src={metaData.cover}
                                    width={400}
                                    height={300}
                                />

                                <div>{metaData.title}</div>
                                <div>{metaData.description}</div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
};

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join("blogs"));

    const blogs = files.map((filename) => {
        const slug = filename.replace(".md", "");
        const rawData = fs
            .readFileSync(path.join("blogs", filename))
            .toString();
        const { data: metaData } = matter(rawData);
        return {
            slug,
            metaData,
        };
    });
    return { props: { blogs } };
};

export default blogs;
