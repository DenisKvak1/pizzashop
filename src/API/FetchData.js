export default async function fetchData(name) {
    try {

        const response = await fetch(`https://13.48.148.160:3000/api/products/${name}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}