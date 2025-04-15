export const getBookData = async(subject) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${subject}`)
    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data.items;
}