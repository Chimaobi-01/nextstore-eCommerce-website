

const Category = ({
    title,
    img
  }) => {
    return (
      <article className="rounded-lg  bg-white p-2 flex-col flex gap-2 ">
          <div className="flex-1">
            <img src={img} alt="product image" className="w-full h-full object-cover" />
          </div>
          <div className="mx-4 mb-4">
            <h3 className="text-center text-gray-700 capitalize ">{title}</h3>
          </div>
      </article>
    )
  }
  
  export default Category