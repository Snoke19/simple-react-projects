async function fetchMemes(setAllMemeImages) {
    try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json()
        setAllMemeImages(data.data.memes)
    } catch (error) {
        console.error("Error fetching memes:", error);
    }
}

export default fetchMemes;