import { allCategories } from "../data"
import Category from "./Category"
import Container from "./Container"


const Categories = () => {
  return (
    <section aria-labelledby="categories">
      <Container>
        <h2
          id="categories"
          className="capitalize mb-6 text-3xl font-bold text-gray-800 hidden lg:block"
        >
          categories
        </h2>
        <div className="grid grid-cols-2 gap-4 justify-center lg:grid-cols-8 items-center ">
          {allCategories.map((product) => (
            <Category key={product.id} {...product} />
          ))}
        </div>
        <div className="my-5">
          <button className="bg-white p-3 w-full text-lg">more details</button>
        </div>
      </Container>
    </section>
  )
}

export default Categories