import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import { MenuItem as MenuItemType } from "../constants/menuItems";
import { ExpandedIcon, MenuList } from ".";
import { MenuItemType } from "../constants/menuItems";

type MenuItemProps = {
  menuItem: MenuItemType;
};

const MenuItem = ({ menuItem }: MenuItemProps) => {
  const { name, url, depth, subItems } = menuItem;
  const { icon: Icon }: any = menuItem;
  const [isExpanded, toggleExpanded] = React.useState(false);

  const router = useRouter();
  const selected = router.asPath === url;
  const isNested = subItems && subItems?.length > 0;

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  return (
    <div>
      <div className="flex  items-center h-fit mt-6 md:mt-10">
        <Link href={url} passHref>
          <div className="flex items-center  h-full">
            <Icon />
            <p className="pl-3 font-semibold text-[20px] leading-[32px] pr-4">
              {name}
            </p>
          </div>
        </Link>

        {isNested ? (
          <ExpandedIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </div>
      <div className=" text-center ml-5">
        {isExpanded && isNested ? <MenuList options={subItems} /> : null}
      </div>
    </div>
  );
};

export default MenuItem;
