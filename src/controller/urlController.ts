import type { Request, Response } from "express";
import Url from "../models/url.js";


const getUrl = async(req:Request,res:Response )=>{
    try{

        res.status(200).json({message:"message reached here"})

    }catch(error){
        return res.status(500).json({message:"internal server error"})
    }
}



export default  {
    getUrl
}