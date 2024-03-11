import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ShopContainer } from "./ShopComponents.styled";
import pills from "@/assets/paracetamol.webp";
import pillsRetina from "@/assets/paracetamol.webp";

const ShopComponent: FC = () => {
  return (
    <ShopContainer>
      <div>
        <NavLink to="drugs">Drugs</NavLink>
        <NavLink to="pharmacy">Pharmacy</NavLink>
        <NavLink to="syrops">Syrops</NavLink>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet={`${pills} 1x, ${pillsRetina} 2x`}
                  type="image/webp"
                />
                <img src={pills} alt="Images pills" loading="lazy" />
              </picture>
            </div>
            <p>Paracetamol</p>
            <button>Add to cart</button>
          </li>
          <li>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${pills} 1x, ${pillsRetina} 2x`}
                type="image/webp"
              />
              <img src={pills} alt="Images pills" loading="lazy" />
            </picture>
            <p>Paracetamol</p>
            <button>Add to cart</button>
          </li>
          <li>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${pills} 1x, ${pillsRetina} 2x`}
                type="image/webp"
              />
              <img src={pills} alt="Images pills" loading="lazy" />
            </picture>
            <p>Paracetamol</p>
            <button>Add to cart</button>
          </li>
          <li>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${pills} 1x, ${pillsRetina} 2x`}
                type="image/webp"
              />
              <img src={pills} alt="Images pills" loading="lazy" />
            </picture>
            <p>Paracetamol</p>
            <button>Add to cart</button>
          </li>
          <li>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${pills} 1x, ${pillsRetina} 2x`}
                type="image/webp"
              />
              <img src={pills} alt="Images pills" loading="lazy" />
            </picture>
            <p>Paracetamol</p>
            <button>Add to cart</button>
          </li>
          <li>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`${pills} 1x, ${pillsRetina} 2x`}
                type="image/webp"
              />
              <img src={pills} alt="Images pills" loading="lazy" />
            </picture>
            <p>Paracetamol</p>
            <button>Add to cart</button>
          </li>
        </ul>
      </div>
    </ShopContainer>
  );
};
export default ShopComponent;
