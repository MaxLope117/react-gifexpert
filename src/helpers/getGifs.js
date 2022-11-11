export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=bwAtSw9UdzycpXZnzZsWp3d1IlVe5F99&q=${ category }&limit=10`
    const resp = await fetch( url );
    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }));
<<<<<<< HEAD
=======

>>>>>>> b45563516fbe18b75916a1590f3e710bfce5003d
    // console.log(gifs);
    return gifs;
    
}