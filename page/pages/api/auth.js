import { MongoClient } from "mongodb";
const getCredentials = async () => {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const credentials = await client
            .db("siteOPM")
            .collection("credentials")
            .findOne({ username: "gunther1817" });
        return credentials;
    } finally {
        await client.close();
        console.log("closed succesfully");
    }
};

export default async (req, res) => {
    let credentials = await getCredentials();
    res.status(200).json({ credentials: credentials });
};
