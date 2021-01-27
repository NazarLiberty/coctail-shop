export default class CocktailSerices {
    getCocktails = async () => {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        return data.json()
    }
}