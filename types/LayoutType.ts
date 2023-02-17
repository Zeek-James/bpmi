import { NextPage } from "next";
import type { ReactElement } from "react";
import { AltLayout, Layout } from "../components";

export type MainLayoutType = NextPage & { layout: typeof Layout };
export type AltLayoutType = NextPage & {
  layout: typeof AltLayout;
};

export type LayoutType = MainLayoutType | AltLayoutType;

export type LayoutProps = ({
  children,
}: {
  children: ReactElement;
}) => ReactElement;

export default LayoutType;
