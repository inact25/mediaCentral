import axios from "axios";
import {apiKey, baseUrl} from "../configs/config";

export const getNews = async (newsID) => {
    const res = await axios.get(`${baseUrl}top-headlines?country=id&category=${newsID}&apiKey=${apiKey}`)
    return await res.data;
};

export const searchNews = async (searchQuery) => {
    const res = await axios.get(`${baseUrl}everything?q=${searchQuery}&apiKey=${apiKey}`)
    return await res.data
}