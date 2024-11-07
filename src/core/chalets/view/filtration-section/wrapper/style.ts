import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input/Input";
import { styled } from "styled-components";
import {
  largeScreenSize,
  mediumScreenSize,
  primaryColor,
} from "~/bootstrap/helper/global-helper";

export const StyledChaletsFilterationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 0px 32px 0px;
`;

export const inputCommonProps = `
border-radius: 32px;
border: 1px solid black;
font-family: Tajawal;
padding: 6px;
`;

export const ChaletsFilterationSearchInput = styled(Input)`
  && {
    padding-right: 16px !important;
    ${inputCommonProps}
    width: 80%;
    @media (max-width: ${largeScreenSize}) {
      width: 90%;
    }
    @media (max-width: ${mediumScreenSize}) {
      width: 100%;
    }
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  background-color: ${primaryColor};
  padding: 4px;
  border-radius: 50%;
  color: white;
  width: 32px !important;
  height: 32px !important;
`;

export const ChaletsFilterationSpecificSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 40%;
  @media (max-width: ${largeScreenSize}) {
    width: 60%;
  }
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
  }
`;

export const ChaletsFilterationSpecificSearchInput = styled(Input)`
  && {
    ${inputCommonProps}
    color: black;
    border: none;
    border: 1px solid black;
    input::placeholder {
      opacity: 0.8;
    }
    width: 49%;
    font-size: 14px;
  }
`;
export const ChaletsFilterationSpecificSearchInputIcon = styled.img`
  width: 32px;
`;
