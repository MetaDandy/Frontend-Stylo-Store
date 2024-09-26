import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { ProductItem, Title } from "../../Generals/Components";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latest, setLatest] = useState([]);

  useEffect(() => {
    setLatest(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          veritatis nulla nostrum maiores eaque doloremque. Ea rem esse et totam
          quam, laborum culpa facilis voluptatum magnam ex suscipit, iusto
          temporibus?
        </p>
      </div>
      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latest.map((item, index) => (
          <ProductItem
            key={index}
            price={item.price}
            id={item.id}
            image={item.photo[0].path}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
