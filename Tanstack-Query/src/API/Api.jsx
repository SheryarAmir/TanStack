import axios from "axios";

 
// this is a baseURL that we will use to fetch data from the API
// we are using axios to create a baseURL that we will use to fetch data from the API.
const api =axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",

})



// this is a function that fetches posts from the baseURL wich we created above
// it returns a promise that resolves to the data of the response 
export const fetchPosts=()=>{

    return api.get('/posts')
       
}