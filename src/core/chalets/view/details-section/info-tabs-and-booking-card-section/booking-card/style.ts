import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import {
  mediumScreenSize,
  secondaryColor,
} from "~/bootstrap/helper/global-helper";
import { StyledMainAppButton } from "~/bootstrap/helper/global-styles";

/* -------------------------------------------------------------------------- */
/*                                     All                                    */
/* -------------------------------------------------------------------------- */
export const DetailsBookingCardDiv = styled.div`
  width: calc(50% - 20px);
  border-radius: 16px;
  height: fit-content;
  padding: 24px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
  }
`;

/* -------------------------------------------------------------------------- */
/*                                First section                               */
/* -------------------------------------------------------------------------- */
export const DetailsBookingCardPricePerNightDiv = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const DetailsBookingCardInputsSection = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0px;
`;

export const DetailsBookingCardInput = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
`;

export const DetailsBookingCardErrorMessage = styled.span`
  color: red;
  font-size: 14px;
`;
/* -------------------------------------------------------------------------- */
/*                               Second section                               */
/* -------------------------------------------------------------------------- */
export const DetailsBookingCardConditionText = styled.p`
  margin: 8px 0px;
`;

export const DetailsBookingCardConfirmConditionCheckbox = styled(Checkbox)`
  && {
    margin-top: 4px;
    padding: 0px;
    color: ${secondaryColor};
    &.Mui-checked {
      color: ${secondaryColor};
    }
  }
`;

export const DetailsBookingCardConfirmConditionSpan = styled.span`
  border-bottom: 1px solid black;
  cursor: pointer;
  user-select: none;
`;
/* -------------------------------------------------------------------------- */
/*                                Third section                               */
/* -------------------------------------------------------------------------- */
export const DetailsBookingCardTotalMoneyItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailsBookingCardPayButton = styled(StyledMainAppButton)`
  width: 100%;
  margin-top: 8px !important;
  &:disabled {
    cursor: not-allowed !important;
    pointer-events: all !important;
  }
`;

/**
 * This wrapper is used to show a message under pay button to confirm the condition.
 */
export const DetailsBookingCardConfirmConditionMessage = styled(
  DetailsBookingCardErrorMessage
)`
  display: block;
  margin-top: 14px;
`;
