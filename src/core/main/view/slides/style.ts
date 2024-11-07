import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  appHeaderHeight,
  secondaryColor,
} from "~/bootstrap/helper/global-helper";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: calc(90vh - ${appHeaderHeight});

  @media (max-width: 1024px) {
    height: calc(70vh - ${appHeaderHeight});
  }

  @media (max-width: 768px) {
    height: calc(60vh - ${appHeaderHeight});
  }

  @media (max-width: 480px) {
    height: calc(50vh - ${appHeaderHeight});
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      background-color: white;
      opacity: 0.8;
      margin: 0 8px;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const overlayColor = "rgba(31, 13, 45, 0.61)";

export const TransparentOverlayLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${overlayColor};
`;

const commonProps = `
position: absolute;
top: 50%;
transform: translateY(-50%);
background-color: transparent;
border: 3px solid white;
border-radius: 50%;
cursor: pointer;
color: white;
padding: 8px;
&& {
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    padding: 6px;
  }
  @media (max-width: 480px) {
    display: none
  }
}

&:hover {
  border-color: ${secondaryColor};
  color: ${secondaryColor};
}
`;

export const CustomPrevButton = styled(ArrowForwardIosIcon)`
  ${commonProps}
`;

export const CustomNextButton = styled(ArrowBackIosNewIcon)`
  ${commonProps}
`;
