import fetchData from "@/API/FetchData.js";

export default function addonArray(array){
    //Логика поиска нужного массив продуктов (временно нету)

    let data = [
        {
            "id": 17,
            "title": "Напиток 1",
            "description": "Ролл с лососем, авокадо и сливочным сыром, украшенный икрой тобико",
            "price": {"S":300, "M": 340, "XL": 450},
            "image": "http://213.227.241.132:3000/images/drinkItem.png",
            "image2": "http://213.227.241.132:3000/images/drinkCart.png",
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
            "price": {"S":300, "M": 340, "XL": 450},
            "image": "http://213.227.241.132:3000/images/drinkItem2.png",
            "image2": "http://213.227.241.132:3000/images/drinkCart2.png",
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
            "price": {"S":300, "M": 340, "XL": 450},
            "image": "http://213.227.241.132:3000/images/drinkItem.png",
            "image2": "http://213.227.241.132:3000/images/drinkCart.png",
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
            "price": {"S":300, "M": 340, "XL": 450},
            "image": "http://213.227.241.132:3000/images/drinkItem2.png",
            "image2": "http://213.227.241.132:3000/images/drinkCart2.png",
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
            "price": {"S":300, "M": 340, "XL": 450},
            "image": "http://213.227.241.132:3000/images/drinkItem2.png",
            "image2": "http://213.227.241.132:3000/images/drinkCart2.png",
            "weight": 152,
            "length": 25,
            "date": "2021-12-10",
            "category": "addonDrink",
            "addon" : true
        }
    ]
    let arrayIds = array.map(item => item.product.id);
    let filteredData = data.filter(item => !arrayIds.includes(item.id));
    return filteredData

}