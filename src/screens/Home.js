import { logUserOut } from "../apollo";
import {gql, useQuery} from "@apollo/client";
import React from "react";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import BottomBox from "../components/auth/BottomBox";
import routes from "../routes";
const LIST_SHOP_QUERY = gql`
query seeShops($page:Int){
  seeCoffeeshops(page:$page){
    name
  }
}
`;

function Home() {

  const {data, loading, error} =  useQuery(LIST_SHOP_QUERY,{
    variables: {
      page: 1,
    }
  });
  if(error) {
    console.log(error.message)
  }
  if(loading) return (<div>loading...</div>);
  console.log(data);
  return (
    <div>
      <button onClick={() => logUserOut()}>Log out now!</button>

      <h1>Welcome we did it!</h1>
      <Separator />
      {data.seeCoffeeshops.map((shop) => 
        <div key={shop.id}>{shop.name}</div>
         )}


    </div>
  );
}
export default Home;