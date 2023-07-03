
import {FlatList, RefreshControl, View} from 'react-native';

import Post from "../components/Post/Post";
import axios from "axios";
import React from 'react'

import {getNews} from "../api/newsReq";
import Loader from "../components/Loader/Loader";


export default function HomeScreen({navigation}) {
    const [data, setData] = React.useState([]);
    const [isLoadingData, setIsLoadingData] = React.useState(false)

    const fetchData = async () => {
        const data = await getNews();

        setData(data);
        setIsLoadingData(false)
    }

    React.useEffect(() => {
        setIsLoadingData(true)
        fetchData()
    }, [])


    if (isLoadingData) {
        return <Loader text={'Загрузка статей...'}/>
    }

    return (
        <View>
            <FlatList
                refreshControl={
                    <RefreshControl refreshing={isLoadingData}
                                    onRefresh={fetchData}

                    />}
                data={data}
                renderItem={({item: post}) =>
                    <Post
                        onPress={() => navigation.navigate('Article', {
                            id: post.id,
                            title: post.title
                        })}
                        title={post.title}
                        urlImg={post.imageUrl}
                    />}
            />

        </View>
    );
}

