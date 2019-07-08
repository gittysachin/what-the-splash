const KEY = '?client_id=e132d12a20344c348decd747802f64a0bd229d0639cfa89cd57c62a1d7462056';
const URL = 'https://api.unsplash.com/photos/';

const fetchImages = async page => {
    // const response = await fetch(`${URL}${KEY}&per_page=3&page=abc`);
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);

    const data = await response.json();
    if(response.status >= 400){
        throw new Error(data.errors);
    }
    return data;
}

const fetchImageStats = async id => {
    // throw new Error('Sorry');    -->  to check the error given if server not responding even after 3 tries
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if(response.status >= 400){
        throw new Error(data.errors);
    }
    return data;
}

export { fetchImages, fetchImageStats };