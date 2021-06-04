import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
`;

const Home = () => { 
    return (
    <Container>
    <Title>Home</Title>
    <button onClick={()=>isLoggedInVar(false)}>Log out Btn</button>
    <button onClick={()=>darkModeVar(true)}>Dark Mode</button>
    <button onClick={()=>darkModeVar(false)}>White Mode</button>
    </Container>
    );
}

export default Home;