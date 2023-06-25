import styled from 'styled-components';

export const TweetsListStyled = styled.ul`
  display: grid;
  gap: 25px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 768px;
    width: 100%;
    gap: 10px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    width: 100%;
    gap: 25px;
  }
`;

export const ImageCatStyles = styled.img`
  height: 30%;
`;
