import React from 'react';
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";


const PostView = styled.View`
  padding: 15px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  
`

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;

`;

const PostTitle = styled.Text`
  font-size: 20px;
  flex: 1;
`

const Post = ({
    title,
    urlImg,
    onPress
              }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <PostView>
                <PostImage source={{
                    uri: urlImg
                }}/>
                <PostTitle>{title}</PostTitle>
            </PostView>
        </TouchableOpacity>
    );
};

export default Post;
