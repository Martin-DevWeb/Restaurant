import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9gYjCCvd7T_eVDEeRw3KQjn5seEeGCqtGJ9cZzReI5dHa6sLiyIvL_TxIj5s622drT5j4cnQ8kOdc38bfHNH_KATw0dhbGFMpjzDOhvFCOxXel8b0IY-0q8FqQxCYHYx'
    }
})