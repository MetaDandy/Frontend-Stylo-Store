import { Title } from "../../../Generals/Components";
import { useViewAll } from "../../../Hooks";

const ListInventory = () => {
  const { data } = useViewAll("branch");

  const renderSizes = (sizes) => {
    if (!sizes || sizes.length === 0) return "N/A";
    return sizes.map((size) => size.sizeId).join(", ");
  };

  return (
    <div>
      <Title text1="INVENTORY" text2="LIST" />
      <div className="flex flex-col gap-2">
        {/* ----------- Product List ----------- */}
        {data.map((item, i) => (
          <div className="border rounded-md p-4 mb-6" key={i}>
            <p>Sucursal #{`${item.id} ${item.name}`}</p>
            <p>{item.direction}</p>
            {item.inventory.map((inven, j) => (
              <div
                className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                key={j}
              >
                <div className="flex items-start gap-6 text-sm w-full md:w-auto">
                  <img
                    src={inven.product.photo[0].path}
                    className="w-16 sm:w-20"
                    alt={inven.product.name}
                  />
                  <div>
                    <p className="sm:text-base font-medium">
                      {inven.product.name}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <p>Stock: {inven.stock}</p>
                      <p>Tallas: {renderSizes(inven.product.productSize)}</p>
                      <p>Cateogria: {inven.product.category.name}</p>
                      <p>
                        Tipo de Cateogria:{" "}
                        {inven.product.category.typeCategory.name}
                      </p>
                      <p>Marca {inven.product.brand.name}</p>
                      <p>Temporada: {inven.product.season.name}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-between"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListInventory;
