import Vodka from '../assets/images/vodka.jpg'
import Tequila from '../assets/images/tequila.jpg'
import Gin from '../assets/images/gin.png'
import Whiskey from '../assets/images/whiskey.jpg'
import Martini from '../assets/images/martini.jpg'
import Beer from '../assets/images/beer.jpg'
import Wine from '../assets/images/wine.jpeg'
import Absent from '../assets/images/absent.jpg'
import Rum from '../assets/images/rum.jpg'
import Brandy from '../assets/images/brandy.jpg'



class DummyAlcoholService {
    db = [
        { name: 'Vodka', src: Vodka, key: 0 },
        { name: 'Gin', src: Gin, key: 1 },
        { name: 'Tequila', src: Tequila, key: 2 },
        { name: 'Whiskey', src: Whiskey, key: 3 },
        { name: 'Martini', src: Martini, key: 4 },
        { name: 'Beer', src: Beer, key: 5 },
        { name: 'Wine', src: Wine, key: 6 },
        { name: 'Absent', src: Absent, key: 7 },
        { name: 'Rum', src: Rum, key: 8 },
        { name: 'Brandy', src: Brandy, key: 9 }
    ]

    getAlcoholList = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.db)
            }, 2000)
        })
    }
}

export default DummyAlcoholService