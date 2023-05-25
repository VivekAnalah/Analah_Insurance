"use client";

import "../../Styles/chooseUs.css";
import "@splidejs/react-splide/css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function Splide_section({children}) {
  console.log("Client Side");

  return (
   <Splide
          options={{
            gap: "1rem",
            type: "loop",
            arrows: false,

            perMove: 1,
            pagination: true,

            breakpoints: {
              3000: {
                perPage: 2,
              },

              1000: {
                perPage: 1,
              },
            },
          }}
          className="lg:pl-[6.5%] lg:pr-[6.5%] sm:pl-[10%] sm:pr-[10%]"
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            {children[0]}
          </SplideSlide>
          <SplideSlide>
          {children[1]}
          </SplideSlide>
          <SplideSlide>
          {children[2]}
          </SplideSlide>
          <SplideSlide>
          {children[3]}
          </SplideSlide>
        </Splide> 
  )
}


