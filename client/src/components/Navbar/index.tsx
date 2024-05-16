import { useCart } from "@/context/cart"
import { Link } from "react-router-dom";

export default function Navbar() {

   const {items} = useCart();

   const totalItems = items.length

  return (
    <div className="w-full flex bg-blue-400 py-3 px-7 justify-between rounded-b-lg">
        
        <Link to='/'>
            <h3>SHOP</h3>
        </Link>

        <Link to='/place-order'>
            <h5>{`Cart (${totalItems})`}</h5>
        </Link>

    </div>
  )
}
