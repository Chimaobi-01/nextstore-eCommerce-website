"use client"
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Favourite = ({ img, title }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false)
    const heart = isHeartFilled ? <FaHeart className="text-red-300 text-2xl" /> : <FaRegHeart className="text-red-300 text-2xl" />
    

    return (
        <article className="shrink-0 p-5 bg-white rounded-lg w-[70%] md:w-[35%] lg:w-auto flex-col flex gap-y-4 relative h-fit">
            <div><img src={img} alt="cover image" className="w-full object-cover" /></div>
            <div className="flex-col gap-y-4 flex text-xl">
                <div>
                    <h3 className="text-blue-500 text-2xl font-semibold capitalize">{title}</h3>
                    <p className="text-gray-800">description</p>
                </div>

                <p className="text-gray-400">234 orders</p>

                <div className="flex">
                    <button className="w-full flex items-center gap-4">
                        <span className="bg-blue-500 rounded-md p-2 px-5 text-white flex-1 flex items-center justify-center">purchase</span>
                        <span className="w-2/6 flex justify-center"><img src="assets/images/shopping_cart.png" alt="shopping cart icon" /></span>
                    </button>
                </div>
            </div>

            <div className="absolute top-3 left-0 w-full px-3 flex items-center justify-between">
                <p className="p-2 rounded bg-red-500 text-white text-sm tracking-wide uppercase">top sale</p>
                <button onClick={()=>setIsHeartFilled(!isHeartFilled)}>
                    {heart}
                </button>

            </div>
        </article>
    )
}

export default Favourite