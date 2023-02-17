// import { MenuItem as MenuItemType } from "../constants/menuItems";
import React from "react";
import { MenuItemType } from "../constants/menuItems";
import MenuItem from "./MenuItem";
// import { MenuItem } from ".";

type MenuListProps = {
  options: MenuItemType[];
};

const MenuList = ({ options }: MenuListProps) => {
  return (
    <div>
      {options.map((option) => {
        return <MenuItem menuItem={option} key={option.id} />;
      })}
    </div>
  );
};

export default MenuList;
