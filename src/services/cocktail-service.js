export default class CocktailSerices {
    getCocktails = async () => {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Optional_alcohol")
        return data.json()
    }
}