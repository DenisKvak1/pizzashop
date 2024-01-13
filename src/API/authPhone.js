export async function authPhone(phone) {
    try {
        const response = await fetch('http://192.168.0.161:3000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone }),
        });

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}
export async function authPhoneCode(code, phone){
    try {
        const response = await fetch('http://192.168.0.161:3000/auth/code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({code, phone}),
        });


        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}
export async function loadData(jwt){
    try {
        const response = await fetch(`http://192.168.0.161:3000/auth/load`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({jwt}),
        });


        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}
export async function saveData(jwt , ForSend){
    try {
        const response = await fetch('http://192.168.0.161:3000/auth/patchData', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({jwt, ForSend}),
        });


        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}

