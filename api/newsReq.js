import axios from "axios";
import {Alert} from "react-native";

export const getNews = async ()  => {
    try {
        const res = await axios.get('https://64a126d70079ce56e2dad5af.mockapi.io/news');
        return res.data
    } catch (e) {
        Alert.alert('Ошибка', e)
    }

}

export const getNewById = async (id) => {
    try {
        const res = await axios.get('https://64a126d70079ce56e2dad5af.mockapi.io/news/' + id);
        return res.data
    } catch (e) {
        Alert.alert('Ошибка', e)
    }
}