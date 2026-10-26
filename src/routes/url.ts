import express from "express";
import urlController from '../controller/urlController.js'
const router = express.Router()


router.get('/',urlController.getUrl)
router.post('/',urlController.UrlHandler)


export default router 