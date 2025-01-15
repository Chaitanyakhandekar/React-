import config from "../config/config";
import {Client ,Databases ,ID ,Storage ,Query} from "appwrite"

export class DatabaseServices{
    client;
    databases;
    storage;

    constructor(){

        this.client = new Client()
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
        
    }

    async createPost({title ,content ,featuredImage ,status ,userId}){          //! Create Post Method
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log("Appwrite :: dbServices :: CreatePOst :: error ",error)
        }
    }

    async updatePost(slug ,{title ,content ,featuredImage ,status}){            //! Update Post Method
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,

                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )

        } catch (error) {
            console.log("Appwrite :: dbServices :: UpdatePost :: error ",error)
        }
    }

    async deletePost(slug){         //! Delete Post Method
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log("Appwrite :: dbServices :: DeletePost :: error ",error)
            return false
        }
    }

    async getPost(slug){            //! Get Post Method
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite :: dbServices :: GetPost :: error ",error)
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){           //! Get Posts Method
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
            
        } catch (error) {
            console.log("Appwrite :: dbServices :: getPosts :: error ",error)
            return false;
        }
    }

    async uploadFile(file){             //! Upload File Method
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID,unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite :: dbServices :: UploadFile :: error ",error)
            return false
        }
    }

    async deleteFile(fileId){           //! Delete File Method
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("Appwrite :: dbServices :: DeleteFile :: error ",error)
            return false
        }
    }

    getFilePreview(fileId){             //! Get File Preview Method
        return this.storage.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const databaseServices = new DatabaseServices();
export default databaseServices;