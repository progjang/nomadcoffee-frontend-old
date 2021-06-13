import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../apollo";

const ME_QUERY = gql`
query me {
    me {
        id
        username
        avatarURL
    }
}
`;

function useUser(){
    const hasToken = useReactiveVar(isLoggedInVar);
    const {data, error} = useQuery(ME_QUERY,{
        skip: !hasToken, //only check when there is a token in LocalStorage
    });

    if(error) {
        console.log(error.message)
      }
    useEffect(()=>{
        if(data?.me === null){
            logUserOut()
        } else{
            console.log(data?.me);
        }
    }, [data])
    return;
}

export default useUser;