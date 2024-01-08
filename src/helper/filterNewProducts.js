export function filterNewProducts(array) {
    const sortedArray = [...array].sort((a, b) => new Date(b.date) - new Date(a.date));
    if(array.length>=6){
        const newestItems = sortedArray.slice(0, 6);
        return newestItems;
    }
    return sortedArray
}
