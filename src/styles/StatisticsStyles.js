import styled from "styled-components";
import { FormSelect } from "react-bootstrap";

export const ContainerStatistics = styled.main`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 5%;
`;

export const DivStatistic = styled.div`
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  align-items: center;
  padding: 16px;
  margin-bottom: 5%;
  display: flex;
  text-align: left;
  margin-top: 5%;
  svg {
    text-align: left;
    font-size: 3rem;
    width: 10%;

    &:hover {
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        opacity: 0.5;
      }
    }
  }
  p {
    font-size: 1.2rem;
    margin: 0;
    width: 80%;
  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
    width: 10%;
    text-align: right;
  }
`;

export const Select = styled(FormSelect)`
  color: #fff;
  background-color: #16161a;
  border-color: #16161a;
  margin-bottom: 5%;
  margin-top: 5%;
  border: 1px solid transparent !important;
`;
