import type { Request, Response } from "express";
import Url from "../models/url.js";
import {nanoid} from 'nanoid'



//getting url
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



//urlredirector
const UrlRedirector = async(req:Request,res:Response )=>{
    try{
        const shortId = req.params.shortId

        if(!shortId){
            return res.status(400).json({message:' shortid is required'})
        }

        const redirect = await Url.findOne({shortId})

        if(!redirect){
             return res.status(400).json({message:' shortid not found'})
        }


    redirect?.visitHistory.push({
  timestamp: new Date(),
});

        await redirect?.save();

        if(redirect){
            res.redirect(redirect?.redirectUrl)
        }
       

    }catch(error){
        return res.status(500).json({message:"internal server error"})
    }
}

//get analytics
const visitHistory = async(req:Request,res:Response )=>{
    try{
        const shortId = req.params.shortId

        if(!shortId){
            return res.status(400).json({message:' shortid is required'})
        }

        const url = await Url.findOne({shortId})

        if(!url){
             return res.status(400).json({message:' shortid not found'})
        }


        res.status(200).json({message:'analtyics fetched',visited:url.visitHistory.length,analytics:url.visitHistory})
       

    }catch(error){
        return res.status(500).json({message:"internal server error"})
    }
}



export default  {
    UrlRedirector,
    UrlHandler,
    visitHistory
}