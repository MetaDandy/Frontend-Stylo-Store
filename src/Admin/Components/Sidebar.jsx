import { assets } from "../../assets/admin_assets/assets";
import { useState } from "react";
import ChevronIcon from "./ChevronIcon";
import SideBarItem from "./SideBarItem";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({
    open1: false,
    open2: false,
    open3: false,
    open4: false,
  });

  const handleOpen = (key) => {
    setIsOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <div>
          <button
            onClick={() => handleOpen("open1")}
            className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            <span>Gestionar Producto</span>
            <ChevronIcon isOpen={isOpen.open1} />
          </button>
          {isOpen.open1 && (
            <div className="px-4 pt-2 pb-2 text-sm text-gray-300">
              <ul>
                <SideBarItem
                  assets={assets.add_icon}
                  path="product/add"
                  title="Add Products"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="product/list"
                  title="List Products"
                />
                <SideBarItem
                  assets={assets.add_icon}
                  path="brand/add"
                  title="Add Brand"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="brand/list"
                  title="List Brand"
                />
                <SideBarItem
                  assets={assets.add_icon}
                  path="category/add"
                  title="Add Category"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="category/list"
                  title="List Category"
                />
                <SideBarItem
                  assets={assets.add_icon}
                  path="categoryType/add"
                  title="Add Category's Type"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="categoryType/list"
                  title="List Category's type"
                />
                <SideBarItem
                  assets={assets.add_icon}
                  path="season/add"
                  title="Add Season"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="season/list"
                  title="List Season"
                />
              </ul>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleOpen("open2")}
            className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            <span>Gestionar venta</span>
            <ChevronIcon isOpen={isOpen.open2} />
          </button>
          {isOpen.open2 && (
            <div className="px-4 pt-2 pb-2 text-sm text-gray-300">
              <ul>
                <SideBarItem
                  assets={assets.order_icon}
                  path="order/list"
                  title="List Orders"
                />
                <SideBarItem
                  assets={assets.add_icon}
                  path="orderType/add"
                  title="Add orderType"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="orderType/list"
                  title="List orderType"
                />
                <SideBarItem
                  assets={assets.add_icon}
                  path="payment/add"
                  title="Add payment"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="payment/list"
                  title="List payment"
                />
              </ul>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleOpen("open3")}
            className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            <span>Gestionar inventario</span>
            <ChevronIcon isOpen={isOpen.open3} />
          </button>
          {isOpen.open3 && (
            <div className="px-4 pt-2 pb-2 text-sm text-gray-300">
              <ul>
                <SideBarItem
                  assets={assets.order_icon}
                  path="order/list"
                  title="List Orders"
                />
              </ul>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleOpen("open4")}
            className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            <span>Gestionar usuario</span>
            <ChevronIcon isOpen={isOpen.open4} />
          </button>
          {isOpen.open4 && (
            <div className="px-4 pt-2 pb-2 text-sm text-gray-300">
              <ul>
                <SideBarItem
                  assets={assets.order_icon}
                  path="user/list"
                  title="Add User"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="user/list"
                  title="List Users"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="role/add"
                  title="Add Role"
                />
                <SideBarItem
                  assets={assets.order_icon}
                  path="role/list"
                  title="List Role"
                />
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
