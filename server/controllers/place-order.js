export async function placeOrder(req, res){
    const {firstName, lastName, address, orderItems} = req.body;

    if(!firstName || !lastName || !address){
        res.status(400);
        return res.json('Incomplete user details for order');
    }

    if(!Array.isArray(orderItems)){
        res.status(400);
        return res.json('Invalid order items');
    }

    res.status(200);
    return res.send('Success, Order Placed!');
}