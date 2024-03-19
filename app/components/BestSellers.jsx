import { allProducts } from "../data";
import Container from "./Container"
import { MdDoubleArrow } from "react-icons/md";
import Favourite from "./Favourite";

const BestSellers = ({heading}) => {
  return (
    <section aria-labelledby="best_sellers">
      <div className="flex justify-between items-center pe-3 ps-6 ">
        <h2 id="best_sellers" className="capitalize text-3xl font-bold text-gray-800">{heading}</h2>
        <button className="items-center justify-center font-medium flex gap-2 p-2 px-4 rounded-md lg:hidden text-blue-400 text-xl">
          <span className="relative -top-[2px]">more</span> 
          <MdDoubleArrow className="font-light" />
        </button>
      </div>


      <Container ltr={'ltr'} classname={' shrink-0 flex items-center lg:grid lg:grid-cols-5 gap-8 overflow-x-auto scroll-ps-6 lg:overflow-hidden '}>
        {
          allProducts.map(favourite => (
            <Favourite key={favourite.id} {...favourite} />
          ))
        }
      </Container>
    </section>
  )
}

export default BestSellers