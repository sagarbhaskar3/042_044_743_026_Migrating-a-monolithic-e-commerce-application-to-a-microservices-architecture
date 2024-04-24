
import shopimg from "../assets/shopimg.png" 
import versace from "../assets/versace.png"
import gucci from "../assets/gucci.png"
import zara from "../assets/zara.png"
import prada from "../assets/prada.png"
import calvin from "../assets/calvin.png"


export default  function Catalogue(){
    return(
        <div className="overflow-hidden bg-[#F2F0F1]"> 
            <div className="flex w-screen h-[600px]  "> 
                <div className="w-1/2 h-[600px] flex flex-col items-center justify-center bg-gray-300 font-black text-[70px]  leading-none">
                    FIND CLOTHES<br></br> THAT MATCHES<br></br>YOUR STYLE
                    <div className="text-[15px] font-semibold mt-8 text-gray-500  w-[560px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div> 
                    <button className="h-12 w-52 bg-black text-white font-semibold text-[20px] ml-[-350px] mt-8 rounded-full">Shop Now</button> 
                    <div className="flex gap-16 mt-12">
                        <div className="flex flex-col">
                            <div className="font-semibold text-[40px]">200+</div>
                            <div className="font-semibold text-gray-500 text-[13px]">International Brands</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-semibold text-[40px]">2,000+</div>
                            <div className="font-semibold text-gray-500 text-[13px]">High-Quality Products</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-semibold text-[40px]">30,000+</div>
                            <div className="font-semibold text-gray-500 text-[13px]">Happy Customers</div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={shopimg}></img>
                </div>
            </div> 
            <div className="  bg-black h-32 z-10 absolute     w-screen"> 
            <div className="flex gap-28 itmes-center justify-center  mt-12 ">
                <div> <img className="z-20" src={versace}></img></div>
                <div> <img className="z-20" src={zara}></img></div>
                <div> <img className="z-20" src={gucci}></img></div>
                <div> <img className="z-20" src={prada}></img></div>
                <div> <img className="z-20" src={gucci}></img></div>
             </div>    
            </div>

        </div>
    )
}