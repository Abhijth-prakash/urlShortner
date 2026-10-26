import express from "express";
import urlController from '../controller/urlController.js'
const router = express.Router()


router.get('/',urlController.getUrl)


export default router 