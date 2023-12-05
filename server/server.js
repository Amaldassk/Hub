import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import multer from 'multer'
const upload = multer()
import authRoute from './routes/auth.route.js'
import Database from './config/dbConnect.js'
import userRoute from './routes/user.route.js'
import productRoute from './routes/product.route.js'
import emailRoute from './routes/email.route.js'

const PORT = process.env.PORT || 3500;

const db = new Database(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.connect().catch((err)=>
    console.error("Error connecting to database:", err)
);

app.use(express.json());
app.use(cors());
app.use(upload.none());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/message', emailRoute);

app.listen(PORT,()=>{
    console.log(`Server listening to port:${PORT}`);
});