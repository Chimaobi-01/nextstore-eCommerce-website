


export const getProducts = async () => {
    const url = 'https://fakestoreapiserver.reactbd.com/smart';
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("failed to fetch products...")
    }
    return res.json()
}