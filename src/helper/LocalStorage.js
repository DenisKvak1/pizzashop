export function saveLocalData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Data saved successfully with key: ${key}`);
    } catch (e) {
        console.error(`Error saving data with key: ${key}`, e);
    }
}

export function loadLocalData(key) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        console.log(`Data loaded successfully with key: ${key}`);
        return value;
    } catch (e) {
        console.error(`Error loading data with key: ${key}`, e);
        return null;
    }
}