import { Router } from "express";
import { placeOrder } from "../controllers/place-order.js";

const router = new Router();

router.post('/', placeOrder);

export default router;