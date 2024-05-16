import { Product } from "@/context/products";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useCart } from "@/context/cart";

export default function ProductCard({ product }: { product: Product }) {

    const {items, setItems} = useCart();

    const alreadyInCart = items.find(item => item.productInfo.id === product.id)?.quantity ?? 0;

    function addToCard(){
        setItems(items => {
            if(alreadyInCart){
                return items.map(item => {
                    if(item.productInfo.id !== product.id)return item;
                    return {...item , quantity: alreadyInCart +1};
                })
            }
            else{
                return [...items, {productInfo: product, quantity: 1}];
            }
        })
    }

    const truncatedDescription = product.description?.length > 250 ? `${product.description.substring(0, 250)}...` : product.description;

    return (
        <Card className="h-[500px] relative rounded shadow-lg text-center p-4">
            <img src={product.image} className="w-[100px] h-[100px] mx-auto" />
            <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription title={product.description}>{truncatedDescription}</CardDescription>
            </CardHeader>
            <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <Button onClick={addToCard} className="mx-auto">{`Add To Cart ${alreadyInCart ? `(${alreadyInCart})`: ''}`}</Button>
            </div>
        </Card>
    )
}
