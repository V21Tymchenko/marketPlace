import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import {
  Header,
  HeaderLink,
  LinkContainer,
  LinkLogo,
} from "./MainHeader.styled";

type MainHeaderProps = {
  children: React.ReactNode;
};
const MainHeader: FC<MainHeaderProps> = () => {
  return (
    <Header>
      <LinkContainer>
        <LinkLogo to="/">
          <img src={logo} alt="logo" />
        </LinkLogo>
        <HeaderLink to="shop">Shop</HeaderLink>
        <HeaderLink to="shopCart">Shopping Cart</HeaderLink>
      </LinkContainer>

      {/* <ButtonLanguage type="button">UA</ButtonLanguage>
              <ButtonLanguage type="button">ENG</ButtonLanguage> */}
    </Header>
  );
};

export default MainHeader;
