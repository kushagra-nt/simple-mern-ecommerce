import ProductCard from "@/components/product-card";
import { useProducts } from "../../context/products"
import Navbar from "@/components/Navbar";

export default function HomePage() {

    const {products, loading, errorMessage} = useProducts();

    if(loading)
    return <h1 className="w-full my-10 text-center">Loading...</h1>;

    if(!loading && products.length === 0){
        return <h1 className="w-full my-10 text-center">{errorMessage ?? 'Oops! something went wrong :('}</h1>
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-evenly gap-y-10 gap-3 sm:mx-5 lg:mx-16 sm:my-5 lg:my-16">
                {products.map((product) => {
                    return (
                        <div className="w-[90%] sm:w-[40%] md:w-[30%] lg:w-[20%]">
                            <ProductCard product={product} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
