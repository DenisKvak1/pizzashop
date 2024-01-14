
export async function  clearanceOfProductApi(myData){
    try {
        const response = await fetch('http://213.227.241.132:3000/newOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ myData }),
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}