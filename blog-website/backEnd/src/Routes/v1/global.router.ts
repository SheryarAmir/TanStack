
import express from "express"
import { Router } from "express"
import healthRouter from "./health.router"

const Api1=Router()

Api1.use("/health" , healthRouter)


export default Api1