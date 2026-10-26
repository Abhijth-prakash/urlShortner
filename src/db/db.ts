import mongoose from "mongoose";


const connect = async(url:string)=>{
    try{
        await mongoose.connect(url)
        console.log('db connected succefully')
    }catch(error){
        console.log(error,'failed to connect mongodb')
    }
}


export default connect