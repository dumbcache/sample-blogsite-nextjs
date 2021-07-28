import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Blogs.module.scss";

const blogs = ({ blogs }) => {
    return (
        <div className={styles.container}>
            {blogs.map(({ slug, metaData }) => (
                <div className={styles.posts}>
                    <Link href={`/blogs/${slug}`}>
                        <a>
                            <Image
                                src={metaData.cover}
                                width={400}
                                height={100}
                                layout="responsive"
                                blurDataURL={metaData.cover}
                                placeholder="blur"
                                objectFit="cover"
                            />
                            <div className={styles.metadata}>
                                <h1>{metaData.title}</h1>
                                <div
                                    className="postedDate"
                                    style={{ marginBottom: "0.5em" }}
                                >
                                    <small>{metaData.postedDate}</small>
                                </div>
                                <p>{metaData.description}</p>
                            </div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
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
