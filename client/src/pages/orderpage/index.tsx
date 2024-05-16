import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserInfo, useCart } from "@/context/cart"
import { useState } from "react"
import CartItem from "./cartItem";

export default function OrderPage() {

    const [formData, setFormData] = useState<UserInfo>({
        firstName: '',
        lastName: '',
        address: ''
    })

    const {items, placingOrder, placeOrder} = useCart();

    async function handleSubmit(){
        placeOrder(formData);
    }

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }

    return (
        <>
            <Navbar />
            <div className="my-10 sm:mx-4 md:mx-10 flex gap-x-5 gap-y-10 flex-col lg:flex-row justify-evenly">
                <div className="flex flex-col lg:w-1/2">
                    {items.length === 0 && (
                        <div className="rounded-lg flex align-center mb-10 justify-center">
                            <h3>No Items in your cart! please add some.</h3>
                        </div>
                    )}
                    <div className="flex flex-col gap-y-8">
                        {items.map(item => <CartItem key={item.productInfo.id} item={item} />)}
                    </div>
                </div>

                <form className="w-[80%] md:max-w-[600px] flex flex-col gap-y-7 mx-auto">
                    <Input onChange={handleChange} required placeholder="First Name" name="firstName" />
                    <Input onChange={handleChange} required placeholder="Last Name" name="lastName" />
                    <Input onChange={handleChange} required placeholder="Address" name="address" />

                    <Button disabled={placingOrder || items.length===0} onClick={handleSubmit}>Place Order</Button>
                </form>
            </div>
        </>
    )
}
