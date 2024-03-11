import { FC } from "react";
import team from "../../assets/ourTeam.webp";
import teamRetina from "../../assets/ourTeamRetina.webp";
import {
  HomeContainer,
  HomeTextContainer,
  ImageContainer,
  MainTitleHome,
  SecondaryTitleHome,
  TextHome,
} from "./HomePageComponents.styled";

const HomePageComponent: FC = () => {
  return (
    <HomeContainer>
      <HomeTextContainer>
        <MainTitleHome>The biggest choice</MainTitleHome>
        <SecondaryTitleHome>
          Here you will find all the necessary medicines for you and your family
        </SecondaryTitleHome>
        <TextHome>
          A range of very high quality nutrients has been created based on plant
          components, vitamins and amino acids. All products of Elite-Pharm LLC
          were developed by a group of qualified nutritionists. The production
          of dietary supplements by the company is carried out on high-tech
          equipment by high-class specialists, and careful control is carried
          out at all stages.
        </TextHome>
        <TextHome>
          Today the company has a wide range of products (over a hundred items),
          which are in great demand throughout Ukraine, and more recently,
          abroad.
        </TextHome>
      </HomeTextContainer>
      <ImageContainer>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${team} 1x, ${teamRetina} 2x`}
            type="image/webp"
          />
          <img src={team} alt="Images Cakes" loading="lazy" />
        </picture>
      </ImageContainer>
    </HomeContainer>
  );
};

export default HomePageComponent;
