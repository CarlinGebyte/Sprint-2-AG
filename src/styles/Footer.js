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
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fffffe;
    text-decoration: none;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    svg {
      fill: #fffffe;
    }

    &:hover {
      color: #ccc;
      svg {
        fill: #ccc;
      }
    }
    &:active, &:focus {
      color: #2CB67D;
      svg {
        fill: #2CB67D;
      }
    }
  }
`;
