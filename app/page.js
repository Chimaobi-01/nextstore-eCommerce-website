import Banner from "./components/Banner";
import BestSellers from "./components/BestSellers";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import { ourStores, topBrands } from "./data";

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <BestSellers heading={"best sellers"} />
      <Brands heading={"top brands"} logoArray={topBrands} />
      <BestSellers heading={"most popular"} />
      <Brands heading={"our stores"} logoArray={ourStores} />
    </main>
  );
}
