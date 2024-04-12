import { conf } from '..conf.js'
import {Storage,Client,ID ,Databases,Query} from 'appwrite'



export class Service {
    client = new Client()
    databases;
    bucket;

   constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjecId)
    
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
   }

   async createPost ({title,slug,content,featuredImage,status,userId}){

    return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
            title,
            slug,
            content,
            featuredImage,status
        }
    )
   }

   

   async updateDocumnet (slug,{content,featuredImage,status,title}){

    try {
        await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                status,
                featuredImage,content
            }
        )
        
    } catch (error) {
        console.log("APPWRITE Updatedocument ERROR:: ",Error);
        
    }

   }

   async deltePost (slug){
    try {

        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )

        return true
        
    } catch (error) {
        console.log("App write ::deltetedocumet",error);
        return  false
    }
   }

   async getPost (slug){
   try {

    return await this.databases.listDocuments(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        slug
        
    )
    return true
    
   } catch (error) {
    console.log("appwrite service::GETpost ",error);
    return false
   }
   
   }

   async getPosts(queries = [Query.equal("status","active")]){
    
   try {

    return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
    )

    return true
    
   }
    catch (error) {
    console.log("App Write Service ::GETpostss",error);
    return false
   }

   }


//    UPLOAD FILES

   async uploadFile(file){
    try {

        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
        
        return true
    
    } catch (error) {
        console.log("APPwRITE SERVICE:: Upload Files ",error);
        return false
    }
   }

   async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            file
        )
    
    }

    catch(error){
        console.log("AppWrite service:: delete FIle",error);
    }
   }


   getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        file
    )
   }





};


const service = new Service()



export default service