
export default async function testPromo(promoCode) {
    try {
        const response = await fetch('https://13.48.148.160:3000/check-promo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ promoCode }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}
