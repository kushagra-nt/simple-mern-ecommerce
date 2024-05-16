import axios from 'axios';

export async function getProducts(req, res) {
    try{
        const response = await axios.get('https://fakestoreapi.com/products?limit=10');
        return res.send(response.data);
    }
    catch(err){
        console.log(err)
        res.status(500);
        return res.send('Internal server error');
    }
}