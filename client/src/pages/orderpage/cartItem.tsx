import { Button } from '@/components/ui/button'
import { CartItem, useCart } from '@/context/cart'

export default function CartItemCard({item}: {item: CartItem}) {

    const {setItems} = useCart();

    function handleQuantityChange(change: number){
        setItems(items => {
            return items.map(i => {
                if(i.productInfo.id !== item.productInfo.id)return i;
                return {...i, quantity: i.quantity+change}
            })
        })

        setItems(items => items.filter(i => i.quantity!==0));
    }

  return (
    <div className='flex gap-5 rounded-lg shadow-lg py-5 px-5'>
        <img src={item.productInfo.image} className='w-[40px] h-[40px] mr-4' />

        <div>
            <h4>{item.productInfo.title}</h4>
            <h4>{item.productInfo.price}</h4>
        </div>

        <div className='flex gap-3 items-center ml-auto'>
            <Button onClick={()=>{handleQuantityChange(+1)}}>+</Button>
            <h4>{item.quantity}</h4>
            <Button onClick={()=>{handleQuantityChange(-1)}}>-</Button>
        </div>
    </div>
  )
}
