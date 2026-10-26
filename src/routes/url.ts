import express from "express";
import urlController from '../controller/urlController.js'
const router = express.Router()

router.post('/',urlController.UrlHandler)
router.get('/:shortId',urlController.UrlRedirector)
router.get('/analyitics/:shortId',urlController.visitHistory)



export default router 