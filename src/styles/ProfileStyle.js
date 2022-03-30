import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ProfileContainer = styled.main`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 5%;
`;

export const NextTitle = styled.div`
    text-align: center;
    margin-top: 10%;
`;

export const ButtonCloseSS = styled(Button)`
    font-weight: 600;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 2%;
`;