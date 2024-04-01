import conf from '../conf/conf.js'

import { Client, ID, Account } from 'appwrite'




export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjecId)
        this.account = new Account(client)
    }

    async createAccount({ name, email, password }) {

        try {

            const useraccount = await this.account.createAccount(ID.unique(), email, password, name)
            if (useraccount) {
                // cal another methood
                return this.login(email, password)

            } else {
                return useraccount

            }

        } catch (error) {
            throw error

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        }
        catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()

        } catch (error) {
            console.log("App write error :: getCurrentUser", error);
        }

        return null
    }

    async logout (){
        try{
            await this.account.deleteSessions()

        }
        catch(error){
            console.log("Appwrite service :: Logout",error);
        }

       
    }


}

const authservice = new AuthService()

export default authservice

