import React from "react";
import Nav from "components/organisms/Nav";
import Footer from "components/organisms/Footer";
import Styled from "./Layout.styles";
import CookiesBanner from "components/molecules/CookiesBanner";

type LayoutProps = {
  hidenNavbar: boolean;
  hidenFooter: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  hidenNavbar,
  hidenFooter,
}) => (
  <Styled.Layout>
    {!hidenNavbar && <Nav />}
    <Styled.Content>{children}</Styled.Content>
    {!hidenFooter && <Footer />}
    <CookiesBanner />
  </Styled.Layout>
);

export default Layout;
