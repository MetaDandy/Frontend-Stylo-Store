import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { assets } from "../../assets/assets";
import { ProductItem, Title } from "../../Generals/Components";
import { useViewAll } from "../../Hooks";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const { data } = useViewAll("category");
  const { data: dato } = useViewAll("categoryType");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value))
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    else setCategory((prev) => [...prev, e.target.value]);
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value))
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    else setSubCategory((prev) => [...prev, e.target.value]);
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search)
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

    if (category.length > 0)
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category.name)
      );

    if (subCategory.length > 0)
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.category.typeCategory.name)
      );

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
    console.log(category, subCategory, search, showSearch);
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
    console.log(sortType);
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <section className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700"></div>
          {data &&
            data.map((item) => (
              <p className="flex gap-2" key={item.name}>
                <input
                  type="checkbox"
                  className="w-3"
                  value={item.name}
                  onChange={toggleCategory}
                />
                {item.name}
              </p>
            ))}
        </div>
        {/* Subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORIES TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700"></div>
          {dato &&
            dato.map((item) => (
              <p className="flex gap-2" key={item.name}>
                <input
                  type="checkbox"
                  className="w-3"
                  value={item.name}
                  onChange={toggleSubCategory}
                />
                {item.name}
              </p>
            ))}
        </div>
      </section>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 ">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* Product Sort */}
          <select
            name=""
            className="border-2 border-gray-300 text-sm px-2 "
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: low to high</option>
            <option value="high-low">Sort by: high to low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, i) => (
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
    </div>
  );
};

export default Collection;
