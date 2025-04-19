export const getBookData = async(subject) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${subject}`)
    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }
    try {
        const data = await response.json();
        console.log(data.items)
        return data.items;
    } catch (error) {
        return error;
    }
 
}