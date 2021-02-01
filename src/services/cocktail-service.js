export default class CocktailSerices {
    getCocktails = async () => {
        const data = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        if (!data.ok) {
            throw new Error('Fetch error - ', data.status)
        }
        return data.json()
    }
    getAlcoholicList = async () => {
        const response = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
        if (!response.ok) {
            throw new Error('Fetch error - ', data.status)
        }
        const data = await response.json()
        return data.drinks.map(this._transformCocktailShort)
    }
    getTopThree = async () => {
        const first = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        const second = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        const third = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        const firstData = await first.json()
        const secondData = await second.json()
        const thirdData = await third.json()
        return [...firstData.drinks, ...secondData.drinks, ...thirdData.drinks]
            .map(this._transformCocktail)
    }
    _transformCocktail = (cocktail) => {
        return {
            key: cocktail.idDrink,
            name: cocktail.strDrink,
            description: cocktail.strInstructions,
            src: cocktail.strDrinkThumb,
            price: (cocktail.idDrink / 2000).toFixed(2),
            ingredients: [
                cocktail.strIngredient1,
                cocktail.strIngredient2,
                cocktail.strIngredient3,
                cocktail.strIngredient4,
                cocktail.strIngredient5,
                cocktail.strIngredient6,
                cocktail.strIngredient7,
                cocktail.strIngredient8,
                cocktail.strIngredient9,
                cocktail.strIngredient10,
                cocktail.strIngredient11,
                cocktail.strIngredient12,
                cocktail.strIngredient13,
                cocktail.strIngredient14,
                cocktail.strIngredient15,
            ]

        }
    }
    _transformCocktailShort = (cocktail) => {
        return {
            key: cocktail.idDrink,
            id: cocktail.idDrink,
            name: cocktail.strDrink,
            src: cocktail.strDrinkThumb,
            active: false,
        }
    }
}