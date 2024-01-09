import fetchData from "@/API/FetchData.js";

export default function addonArray(array){
    //Логика поиска нужного массив продуктов (временно нету)

    let data = [
        {
            "id": 17,
            "title": "Напиток 1",
            "description": "Ролл с лососем, авокадо и сливочным сыром, украшенный икрой тобико",
            "price": 300,
            "image": "http://192.168.0.161:3000/drinkItem.png",
            "image2": "http://192.168.0.161:3000/drinkCart.png",
            "weight": 152,
            "length": 25,
            "date": "2021-12-10",
            "category": "addonDrink",
            "addon" : true
        },
        {
            "id": 18,
            "title": "Напиток 2",
            "description": "Ролл с лососем, авокадо и сливочным сыром, украшенный икрой тобико",
            "price": 300,
            "image": "http://192.168.0.161:3000/drinkItem2.png",
            "image2": "http://192.168.0.161:3000/drinkCart2.png",
            "weight": 152,
            "length": 25,
            "date": "2021-12-10",
            "category": "addonDrink",
            "addon" : true
        },
        {
            "id": 19,
            "title": "Напиток 3",
            "description": "Ролл с лососем, авокадо и сливочным сыром, украшенный икрой тобико",
            "price": 300,
            "image": "http://192.168.0.161:3000/drinkItem.png",
            "image2": "http://192.168.0.161:3000/drinkCart.png",
            "weight": 152,
            "length": 25,
            "date": "2021-12-10",
            "category": "addonDrink",
            "addon" : true
        },
        {
            "id": 20,
            "title": "Напиток 4",
            "description": "Ролл с лососем, авокадо и сливочным сыром, украшенный икрой тобико",
            "price": 300,
            "image": "http://192.168.0.161:3000/drinkItem2.png",
            "image2": "http://192.168.0.161:3000/drinkCart2.png",
            "weight": 152,
            "length": 25,
            "date": "2021-12-10",
            "category": "addonDrink",
            "addon" : true
        },
        {
            "id": 21,
            "title": "Напиток 5",
            "description": "Ролл с лососем, авокадо и сливочным сыром, украшенный икрой тобико",
            "price": 300,
            "image": "http://192.168.0.161:3000/drinkItem2.png",
            "image2": "http://192.168.0.161:3000/drinkCart2.png",
            "weight": 152,
            "length": 25,
            "date": "2021-12-10",
            "category": "addonDrink",
            "addon" : true
        }
    ]
    return data
}