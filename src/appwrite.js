import { Client, Databases, Query, ID } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client)

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm)
        ])

        if (result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1
            })

        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                anime_id: anime.mal_id,
                poster_url: anime.images.jpg.image_url
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchTest = async () => {
    try {
        const res = await database.listDocuments(DATABASE_ID, COLLECTION_ID);
        console.log("Ping successful. Data:", res.documents);
    } catch (error) {
        console.error("Appwrite connection failed:", error.message);
    }
};
