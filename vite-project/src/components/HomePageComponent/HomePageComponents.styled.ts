import styled from "styled-components";
import { flexSpaceBetween } from "@/helpers/fragments";

export const HomeContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(10)};
  ${flexSpaceBetween}
  gap:  ${({ theme }) => theme.spacing(10)};
`;
export const HomeTextContainer = styled.div`
  max-width: 520px;
`;

export const MainTitleHome = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 57.6px;
`;

export const SecondaryTitleHome = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 27.6px;
`;
export const TextHome = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 22.4px;
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  &:last-child {
    margin-bottom: 0px;
  }
`;
export const ImageContainer = styled.p`
  border-radius: ${({ theme }) => theme.radii.cards};
  overflow: hidden;
`;
