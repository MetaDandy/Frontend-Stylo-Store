import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { ProductItem, Title } from "../../Generals/Components";

const RelatedProduct = ({ category, subcategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => category === item.category.name
      );
      productsCopy = productsCopy.filter(
        (item) => subcategory === item.category.typeCategory.name
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, i) => (
          <ProductItem
            key={i}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.photo[0].path}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
