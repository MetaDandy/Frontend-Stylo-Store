import { ProductItem } from "../../Generals/Components";
import { useViewAll } from "../../Hooks";

const Catalog = () => {
  const { data } = useViewAll("catalog");

  return (
    <div>
      {data.map((item, i) => (
        <div className="" key={i}>
          <h2 className="mt-10">{item.name}</h2>
          <h3>{item.season.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {item.productCatalog.map((pC, j) => (
              <ProductItem
                key={j}
                id={pC.product.id}
                name={pC.product.name}
                price={pC.product.price}
                image={pC.product.photo[0].path}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
