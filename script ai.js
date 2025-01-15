const api ="";
const inp =document.getElementById('inp')
const images =document.querySelector('.images')


const getImage = async () => {
    // make a request openia api
    const methods = {
        method:"POST",
        Headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"256*256"
            }
        )
    }
    const respons = await fetch("https://api.openai.com/v1/images/generation", methods)
// pares the response as JSON
    const data = await respons.json();
    const listImages = data.data;
    console.log(data)
    images.innerHTML = '';
    listImages.map(photo => {
        const container =document.createElement("div");
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = Photo.url
    });
}
