import express, { urlencoded } from 'express';
import cors from 'cors';
import productRouter from './routes/products.js';
import placeOrderRouter from './routes/place-order.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// product data routes
app.use('/products',productRouter);

// place order routes
app.use('/place-order',placeOrderRouter)


app.listen(5000, ()=>{
    console.log('server started on 5000');
})