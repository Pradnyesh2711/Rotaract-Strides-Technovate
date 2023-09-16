import express from "express";
import {CreateCity} from '../controllers/CityController';
const route=express.route();

router.post('/city',CreateCity)