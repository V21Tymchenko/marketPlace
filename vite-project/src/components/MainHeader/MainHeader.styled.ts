import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { flexStart } from "@/helpers/fragments";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing(12)};
`;
export const LinkContainer = styled.div`
  ${flexStart}
`;
export const HeaderLink = styled(NavLink)`
  padding: 12px 24px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  border-radius: ${({ theme }) => theme.radii.button};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-family: ${({ theme }) => theme.fonts.secondary};
  transition: ${({ theme }) => theme.transitions.primary};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hoverHeaderIcon};
  }
`;
export const LinkLogo = styled(NavLink)`
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
  margin-right: ${({ theme }) => theme.spacing(10)};
`;
