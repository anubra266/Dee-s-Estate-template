import type { ReactNode } from "react";

import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default Layout;
