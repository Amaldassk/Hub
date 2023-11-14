import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import authRoute from './routes/auth.route.js'
import Database from './config/dbConnect.js'

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

app.use('/api/auth', authRoute);

app.listen(PORT,()=>{
    console.log(`Server listening to port:${PORT}`);
});