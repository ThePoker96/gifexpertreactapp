


//const getImagePromesa = () => new Promise(resolve => resolve('https://asdgdsagda.com'))
//getImagePromesa().then(console.log);

const getImage = async () => {
    //return 'https://asdgdsagda.com';

    try {
        const apiKey = 'llmlRRfOrYv0dEvbRuexGai3bXAPVCcE';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);        
    } catch (error) {
        //Manejo del Error
        console.error(error)
    }


   //console.log(url);
}
//console.log(getImage());
getImage();
