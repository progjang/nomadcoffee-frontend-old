import { useReactiveVar } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import {Link} from "react-router-dom";
import useUser from "../hooks/useUser";

const SHeader = styled.header`
with: 100%;
border-bottom: 1px solid ${(props)=>props.theme.borderColor};
background-color: ${(props)=>props.theme.bgColor};
padding: 18px 8px;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 100%;
max-width: 930px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Column = styled.div``;

const Icon = styled.span`
margin-left: 15px;
`;

const Button = styled.span`
background-color:${props => props.theme.accent};
border-radius:4px;
padding: 3px 15px;
color:white;
font-weight: 600;
`;

function Header() {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const {data} = useUser();
    return(
        <SHeader>
            <Wrapper>
                <Column>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                 </Column>
                 <Column>
                 {isLoggedIn?(<>
                    <Icon>
                     {data?.me?.username} <FontAwesomeIcon icon={faHome} size="lg" />
                 </Icon>
                 <Icon>
                     <FontAwesomeIcon icon={faCompass} size="lg" />
                 </Icon>
                 <Icon>
                     <FontAwesomeIcon icon={faUser} size="lg" />
                 </Icon></>) : <Link to="routes.login"><Button>Login</Button></Link>}
                 </Column>
            </Wrapper>
        </SHeader>
    );
}

export default Header;