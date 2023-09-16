import express from "express";
import {getByCity} from '../controllers/CityController';
const router=express.Router();

router.post('/getByCity',getByCity);

export default router;