import express from "express";
import {getByCity} from '../controllers/EventController';
const router=express.Router();

router.post('/getByCity',getByCity);

export default router;