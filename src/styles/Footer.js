import styled from "styled-components";

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 50%;
  margin-left: 50%;
  transform: translate(-50%, 0);
  background-color: #232e35;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
