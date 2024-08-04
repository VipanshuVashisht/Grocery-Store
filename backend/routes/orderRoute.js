import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, verifyOrder } from "../controllers/orderController.js"
import { userOrders } from "../controllers/userController.js"

const orderRouter = express.Router()

orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify", verifyOrder)
orderRouter.post("/userorders", authMiddleware, userOrders )
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus)

export default orderRouter