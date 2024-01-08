export default async function fetchData(name) {
    try {
        const response = await fetch(`http://192.168.0.161:3000/${name}`);

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