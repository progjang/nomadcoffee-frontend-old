import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PageCon from "../components/PageCon";
import ShopBlock from "../components/ShopBlock";
import routes from "../routes";

const SEE_COFFEESHOPS_QUERY = gql`
  query seeCoffeeShops($page: Int!) {
    seeCoffeeshops(page: $page) {
        coffeeShops{
            id
            name
            user {
                name
                email
            }
            categories {
                id
                name
            }
        }
        totalShops
    }
  }
`;

const Welcome = styled.div`
  text-align: center;
  margin: 50px 0;
  font-size: 30px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.texts};
  text-align: center;
  font-size: 50px;
`;

const SLink = styled(Link)`
  border: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
  padding: 5px;
  background-color: ${(props) => props.theme.boxColor};
`;

function Root() {
  const [page, setPage] = useState(1);
  const { loading, data } = useQuery(SEE_COFFEESHOPS_QUERY, {
    variables: { page },
  });

  const calcTotalPage = (totalShops) => Math.ceil(totalShops / 3);

  return (
    <>
        <Title>HOME</Title>
        <Welcome>Welcome to Nomad Coffee.</Welcome>
        <SLink to={routes.add}>Add Your Shop.</SLink>
        {data?.seeCoffeeshops?.totalShops > 3 ? (
          <PageCon
            totalPage={calcTotalPage(data.seeCoffeeshops.totalShops)}
            setPage={setPage}
            page={page}
          />
        ) : null}
        {loading ? (
          <div>LOADING...</div>
        ) : (
          data?.seeCoffeeshops?.coffeeShops?.map((shop) => (
            <ShopBlock key={shop.id} shop={shop} />
          ))
        )}
    </>
  );
}

export default Root;