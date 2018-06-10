import axios from 'axios'
export const http = axios.create({
	baseURL: 'https://gateway.marvel.com:443/v1/public/'
	//baseURL: 'http://localhost:8080'
});
export const apiKey = '<YOUR_API_KEY>';

export const availableFormats = ['comic', 'magazine', 'trade paperback', 'graphic novel'];
