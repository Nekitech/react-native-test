
import React from 'react'
import styled from "styled-components/native";

import Navigation from "./routing/Navigation";


const LoaderView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

`

export default function App() {

    return (
            <Navigation/>
    );
}
