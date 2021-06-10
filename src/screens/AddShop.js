import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import PageTitle from "../components/PageTitle";
import { FatLink } from "../components/shared";
import routes from "../routes";

const ADD_SHOP_MUTATION = gql`
    mutation addShop(
        $shopName: String!
    ) {
        createCoffeeShop(
            name: $shopName
        ){
            ok
            error
        }
    }   
`;

function AddShop() {
    const history = useHistory();
    const onCompleted = (data) => {
        console.log(data);
    }


    const [addShop, {loading}] = useMutation(ADD_SHOP_MUTATION, {
        onCompleted,
    });


    const {register, handleSubmit, errors, formState} = useForm({
        mode: "onChange",
    });

    const onSubmitValid = (data) => {
        console.log(data);
        if(loading){
            return;
        }
        // graphql trigger      
        addShop({
            variables: {
                ...data,
            },
        });
    };

    return (
        <AuthLayout>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            ref={register({
              required: "Shop Name is required.",
            })}
            name="shopName"
            type="text"
            placeholder="Shop Name"
          />
          <Button type="submit" />
        </form>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
        </AuthLayout>
   
    );

}

export default AddShop;