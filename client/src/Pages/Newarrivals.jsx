import ProductCard from "../Components/ProductCard";




export default function Newarrivals(){
    return(
        <> 
            <div className="bg-white flex flex-col  items-center  h-screen   mt-32">
                <div className="font-black mt-12 text-[40px]">NEW ARRIVALS</div>   
                <div className="mt-24 flex gap-12"> 
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                </div>
            </div>
        </>
    )
}