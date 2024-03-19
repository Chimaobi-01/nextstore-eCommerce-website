import Container from "./Container"


const Brands = ({heading, logoArray}) => {
  return (
    <section  aria-labelledby="brands">
        
        <Container>
        <h2 id="brands" className="capitalize mb-6 text-3xl font-bold text-gray-800">{heading}</h2>

        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-8">
            {
                logoArray.map(brand=>(
                    <div key={brand.id} className="bg-white rounded-lg py-4 px-10 flex items-center justify-center">
                        <img className=""  src={brand.image} alt="brand photo" />
                    </div>
                ))
            }
        </div>
        </Container>

        

    </section>
  )
}

export default Brands