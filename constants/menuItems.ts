import React from "react";

import {
  HomeIcon,
  MessageIcon,
  NotificationIcon,
  ProfileIcon,
  SectorIcon,
  SettingsIcon,
} from "../assets";

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Home",
    icon: HomeIcon,
    url: "/",
  },
  {
    name: "Profile",
    icon: ProfileIcon,
    url: "/profile",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    url: "/settings",
  },
  {
    name: "Sectors",
    icon: SectorIcon,
    // url: "/sectors",
    subItems: [
      {
        name: "Banking and finance",
        url: "/banking-and-finance",
      },
      {
        name: "Telecommunication",
        url: "/telecommunication",
      },
      {
        name: "Transport",
        url: "/transport",
      },
    ],
  },

  {
    name: "Messages",
    icon: MessageIcon,
    url: "/messages",
  },
  {
    name: "Notification",
    icon: NotificationIcon,
    url: "/notification",
  },
];

export type MenuItemType = {
  name: string;
  icon?: React.ComponentType;
  url?: string;
  id?: string;
  depth?: number;
  subItems?: MenuItemType[];
};

type MenuOption = {
  name: string;
  icon?: React.ComponentType;
  url?: string;
  subItems?: MenuOption[];
};

const makeMenuLevel = (options: MenuOption[], depth = 0): MenuItemType[] => {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
};

export const MENU_ITEMS: MenuItemType[] = makeMenuLevel(MENU_OPTIONS);
