import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection=async()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@clone-whatsapp-shard-00-00.tjxph.mongodb.net:27017,clone-whatsapp-shard-00-01.tjxph.mongodb.net:27017,clone-whatsapp-shard-00-02.tjxph.mongodb.net:27017/?ssl=true&replicaSet=atlas-rx5q08-shard-0&authSource=admin&retryWrites=true&w=majority&appName=clone-WhatsApp`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true});
        console.log('Database Connected Successfully');
    }catch(error){
        console.log('Error While connecting with the database',error.message);
    }
}

export default Connection;