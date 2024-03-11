import { FC, ReactNode } from "react";
import { MainContainer } from "./Container.styled";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <MainContainer>{children}</MainContainer>
);
export default Container;