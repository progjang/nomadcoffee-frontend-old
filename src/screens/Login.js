import styled from "styled-components";
import { isLoggedInVar, darkModeVar } from "../apollo";

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
`;

const Login = () => { 
    return (
    <Container>
    <Title>Login</Title>
    <button onClick={()=>isLoggedInVar(true)}>Log in Btn</button>
    <button onClick={()=>darkModeVar(true)}>Dark Mode</button>
    <button onClick={()=>darkModeVar(false)}>White Mode</button>
    </Container>
    );
}

export default Login;