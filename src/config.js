import axios from 'axios'
export const http = axios.create({
	baseURL: 'https://gateway.marvel.com:443/v1/public/'
	//baseURL: 'http://localhost:8080'
});
export const apiKey = 'eef4f46e65b1227963d1e2b33d011845';

export const availableFormats = ['comic', 'magazine', 'trade paperback', 'graphic novel'];