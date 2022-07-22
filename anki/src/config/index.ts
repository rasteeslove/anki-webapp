let API_URL: string;
if (process.env.API_URL) {
    API_URL = process.env.API_URL;
} else {
    API_URL = 'http://localhost:8000/api';
}

export { API_URL };
