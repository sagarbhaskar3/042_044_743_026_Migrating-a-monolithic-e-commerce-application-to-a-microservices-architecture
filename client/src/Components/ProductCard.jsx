export default function ProductCard(){
    return(
        <div className="flex flex-col">
            <div className="w-72 h-72 bg-gray-200 rounded-xl"></div> 
            <div className="m-4 font-bold">Skinny fit jeans</div>
            <div className="m-4  my-0">3.5/5 </div>
            <div className="flex"> <div className="m-4  font-bold text-[20px] my-0">$120 </div><div className="h-6 w-16 flex items-center text-[12ffpx] justify-center rounded-2xl  text-red-400 bg-red-200">-20%</div></div>
        </div>
    )
}