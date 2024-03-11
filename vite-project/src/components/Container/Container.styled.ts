import styled from 'styled-components';
import breakpoints from '@/helpers/styles/breakpoints';

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  min-width: 320px;
  max-width: 480px;

  @media ${breakpoints.minTablet} {
    padding: 0 32px;
    max-width: 768px;
  }

  @media ${breakpoints.desktop} {
    padding: 0 16px;
    max-width: 1272px;
  }
`;