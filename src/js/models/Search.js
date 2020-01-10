import axios from "axios"

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            const recipes = res.data.recipes;
            this.result = recipes
            return this.result
        } catch(error){
            console.log(error)
        }
    }
}