import { Account, Client, ID } from "appwrite";
import config from "../config/config";

export class AuthService {      //! class for Authentication Service
    client;
    account;

    constructor(){
        this.client = new Client()
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({email ,password ,name}){       //! Create Account Method
        try{
            const userAccount = await this.account.create(ID.unique() ,email ,password ,name);

            if(userAccount){
                // we will write here another method
                return this.login({email ,password})
            }
            else{
                return userAccount;
            }

        }catch(error){
            console.log("authService :: createAccount :: error ",error)
        }
    }

    async login({email ,password}){         //! Login Method
        try{
            return await this.account.createEmailSession(email ,password)

        }catch(error){
            console.log("authService :: Login :: error ",error)
        }
    }

    async logout(){         //! Logout Method
        try{
            await this.account.deleteSessions()

        }catch(error){
            console.log("authService :: Logout :: error ",error)
        }
    }

    async getCurrentUser(){         //! Get Current User Method
        try{
            return this.account.get()

        }catch(error){
            console.log("authService :: getCurrentUser :: error ",error)
        }
    }


}

const authService = new AuthService()

export default authService;