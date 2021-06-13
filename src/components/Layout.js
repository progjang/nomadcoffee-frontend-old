import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
width: 100%;
max-width: 930px;
margin: 0 auto;
margin-top: 35px;

`;

function Layout({children}) {
    return (
        <>
        <Header />
        <Content>
            {children}
        </Content>
        </>
    );
}

export default Layout;