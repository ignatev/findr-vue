import axios from 'axios';

export default class RestClient{
    constructor() {
        this.instance = axios.create({
          baseURL: "http://localhost:8080/api/",
          timeout: 1000,
        });
    }
    get(url, options) {
        console.log("instance: ", this.instance)
        console.log("hello from get")
        return this.instance.get(url, options)
    }
}