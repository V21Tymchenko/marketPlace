import { FC } from "react";
import Container from "@/components/Container";
import {
  ContainerFooter,
  CopyrightText,
  FooterListItem,
  FooterLink,
  FooterTitle,
  InstagramIcon,
  PhoneIcon,
} from "./Footer.styled";

const Footer: FC = () => {
  return (
    <ContainerFooter>
      <Container>
        <div>
          <FooterTitle>Зв’яжіться з нами</FooterTitle>
          <ul>
            <FooterListItem>
              <FooterLink
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to Instagram"
              >
                <InstagramIcon />
                Instagram
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="tel:+380678887744">
                <PhoneIcon />
                +380 67 777 77 77
              </FooterLink>
            </FooterListItem>
          </ul>
        </div>
        <CopyrightText>
          &copy; 2024 Інтернет магазин “Магазин ліків”. Всі права захищені
        </CopyrightText>
      </Container>
    </ContainerFooter>
  );
};
export default Footer;
