import axios from 'axios';

const KEY = 'AIzaSyB3o2p4IN5KrQ4WOJG5HVioLYmgN9SZa9o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
});