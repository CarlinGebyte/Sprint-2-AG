import { FormGroup } from "react-bootstrap";
import styled from "styled-components";

export const QuestionContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button#check {
    background-color: #6b47dc !important;
    border-color: #6b47dc !important;
    width: 95%;
  }
`;
export const OptionContainer = styled(FormGroup)`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 95%;
  padding: 16px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  align-items: center;
  text-align: left;
  label {
    margin: 0;
    width: 80%;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Correct = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
  }
  position: absolute;
  color: #16161a;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #acffcf;
  background-color: #acffcf;
  width: 50%;
  h6 {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
    text-align: left;
  }
  button {
    margin-top: 10px;
    width: 95%;
    text-transform: uppercase;
    background-color: #0f915b !important;
    border: 1px solid #0f915b !important;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
export const Incorrect = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
  }
  position: absolute;
  color: #b81e3b;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #f9cfd7;
  background-color: #f9cfd7;
  width: 50%;
  h6 {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
    text-align: left;
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
    text-align: left;
  }
  button {
    margin-top: 10px;
    width: 95%;
    text-transform: uppercase;
    background-color: #ef4565 !important;
    border: 1px solid #ef4565 !important;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;
