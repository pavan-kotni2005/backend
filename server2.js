import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())
app.post('/insertmany', async(req, res) => {
    await db.collection("ast").insertMany(req.body)
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany1', async(req, res) => {
        await db.collection("ast").find({Age:{$gte:20}}).toArray()
        .then((result)=>{
            res.json(result)
        })
        .catch((e)=>console.log(e))
})
app.post('/findmany2', async(req, res) => {
    await db.collection("ast").find({Name:{$in:['john','mary']}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany3', async(req, res) => {
    await db.collection("ast").find({Hobbies:"reading"}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany4', async(req, res) => {
    await db.collection("ast").find({salary:{$gt:"1000"}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany5', async(req, res) => {
    await db.collection("ast").find({city:{$in:['newyork','losangeles']}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany6', async(req, res) => {
    await db.collection("ast").find({Hobbies:{$in:['swimming','hiking']}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany7', async(req, res) => {
    await db.collection("ast").find({Age:{$gte:25,$lte:35}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany8', async(req, res) => {
    await db.collection("ast").find({$and:[{Age:{$gte:30}},{city:"San Francisco"}]}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany9', async(req, res) => {
    await db.collection("ast").find({$and:[{Age:{$gte:30}},{Hobbies:'cooking'}]}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany10', async(req, res) => {
    await db.collection("ast").find({Age:{$ne:23}}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany11', async(req, res) => {
    await db.collection("ast").find({$and:[{city:{$ne:'losangeles'}},{Hobbies:'reading'}]}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany12', async(req, res) => {
    await db.collection("ast").find({$and:[{Age:{$gt:25}},{$or:[{city:{$ne:'newyork'}},{city:'losangeles'}]}]}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany13', async(req, res) => {
    await db.collection("ast").find({$and:[{Age:{$gt:25}},{$nor:[{city:{$ne:'newyork'}},{city:'losangeles'}]}]}).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany14', async(req, res) => {
    await db.collection("ast").find().sort({ salary: -1 }).limit(1).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany15', async(req, res) => {
    await db.collection("ast").find().sort({ salary: -1 }).skip(1).limit(1).toArray()
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
app.post('/findmany16', async(req, res) => {
    await db.collection("ast").updateMany({},{$inc:{Age:50}})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})
connectToDB(() => {
        app.listen(900, () => {
            console.log("server running at 900");
        })
    })