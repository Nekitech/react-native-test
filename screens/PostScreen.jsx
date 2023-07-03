import React from 'react';
import styled from "styled-components/native";
import {useRequest} from "../hooks/use-request";
import {getNewById} from "../api/newsReq";
import Loader from "../components/Loader/Loader";


const PostView = styled.View`
  padding: 15px;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 50px;

`

const PostImage = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;

`;

const PostText = styled.Text`
  width: 100%;
  font-size: 16px;

`;


const PostScreen = ({
                        route,
                        navigation
                    }) => {
    const {id, title} = route.params;
    const [post, isLoading] = useRequest(() => getNewById(id));

    React.useEffect(() => {

        navigation.setOptions({
            title
        });
    }, [])


    if (isLoading) {
        return <Loader text={'Загрузка статьи...'}/>
    }

    return (
        <PostView>
            <PostImage source={{
                uri: post.imageUrl
            }}/>
            <PostText>{post.text}</PostText>
        </PostView>
    );
};

export default PostScreen;
