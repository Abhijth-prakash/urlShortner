import type { Request, Response } from "express";
import Url from "../models/url.js";
import {nanoid} from 'nanoid'

const UrlHandler = async(req:Request,res:Response)=>{
    try{

        const {url} = req.body
        if(!url){
            return res.status(400).json({message:'url is required'})
        }

        const shortId = nanoid(8)

        const newshortId = new Url({
            shortId:shortId,
            redirectUrl:url,
            visitHistory:{
                timestamp:Date.now()
            }
        })

        await newshortId.save()
        return res.status(200).json({message:"new short id created",shortId})

    }catch(error){
         return res.status(500).json({message:"internal server error"})
    }
}




const getUrl = async(req:Request,res:Response )=>{
    try{

        res.status(200).json({message:"message reached here"})

    }catch(error){
        return res.status(500).json({message:"internal server error"})
    }
}



export default  {
    getUrl,
    UrlHandler
}