import express from 'express';
const app = express();
import userRoutes from './routes/user.route.js';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
app.get('/', (req,res)=>{
    res.json({
        success:true,
        message: 'Server is running on Port 3000',
    });
})

app.use('/api/user', userRoutes);
