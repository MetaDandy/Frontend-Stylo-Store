import { toast } from "react-toastify";
import { Title } from "../../../Generals/Components";
import { useViewAll } from "../../../Hooks";

const ListCatalog = () => {
  const { data, handleRemove } = useViewAll("catalog");

  return (
    <div>
      <Title text1="CATALOG" text2="LIST" />
      <div className="flex flex-col gap-2">
        {/* ----------- Product List ----------- */}
        {data.map((item, i) => (
          <div className="border rounded-md p-4 mb-6" key={i}>
            <p>Catalogo #{`${item.id} ${item.name}`}</p>
            <p>{item.season.name}</p>
            <p
              onClick={() => handleRemove(item.id, toast)}
              className="cursor-pointer my-3 "
            >
              click me for eliminate the catalog
            </p>
            {item.productCatalog.map((inven, j) => (
              <div
                className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                key={j}
              >
                <div className="flex items-start gap-6 text-sm">
                  <img
                    src={inven.product.photo[0].path}
                    className="w-16 sm:w-20"
                    alt={inven.product.name}
                  />
                  <div>
                    <p className="sm:text-base font-medium">
                      {inven.product.name}
                    </p>
                    <div className="grid grid-cols-6 gap-10 sm:gap-3 mt-2 text-base text-gray-700">
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

export default ListCatalog;
