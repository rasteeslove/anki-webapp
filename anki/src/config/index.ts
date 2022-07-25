let API_URL: string;
if (process.env.REACT_APP_API_URL) {
    API_URL = process.env.REACT_APP_API_URL;
} else {
    API_URL = 'http://localhost:8000/api';
}

export { API_URL };
