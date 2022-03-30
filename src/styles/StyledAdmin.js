import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

export const AdminContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const CardItem = styled(Card)`
  width: 100%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  @media (min-width: 768px) {
    width: 80%;
  }
  img {
    border-radius: 50%;
  }
  button {
      width: 70%;
  }
`;

export const ButtonToHome = styled(Button)`
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
