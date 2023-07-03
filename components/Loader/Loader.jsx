import React from 'react';
import {ActivityIndicator, Text} from "react-native";
import styled from "styled-components/native";

const LoaderView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

`

const Loader = ({
    text
                }) => {
    return (
        <LoaderView>
            <ActivityIndicator size={'large'}/>
            <Text>{text}</Text>
        </LoaderView>
    )
};

export default Loader;
