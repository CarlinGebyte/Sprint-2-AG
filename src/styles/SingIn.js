import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Main = styled.main`
  padding: 6% 3%;
`;

export const LogoContainer = styled.div`
  width: 80px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const ContainerItems = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: Inter;
  margin: 20px auto;
  text-align: center;
`;

export const Line = styled.hr`
  color: #94a1b2;
  margin-bottom: 20px;
`;

export const ButtonGmail = styled(Button)`
  width: 100%;
  background-color: #ef4565;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonLogin = styled(Button)`
    margin: 10px 0;
    width: 100%;
`;
