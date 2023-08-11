let input = document.querySelector('#searchInput');
let btn = document.querySelector('.btn');
let box = document.querySelector('.box');
let loadGif = document.querySelector('#gifImg');

let url = `https://image.pollinations.ai/prompt/`
let image = document.createElement('img');

async function getImg(prompt) {
    try {
        let img = url + prompt;
        image.src = img;
        image.classList.add('img');

        await image.decode();
        box.innerHTML = '';
        box.append(image);
    }
    catch(err) {
        console.log("An Error Occured : ", err);
    }
    finally {
        loadGif.style.display = "none";
    }
}

btn.addEventListener('click', async () => {
    loadGif.style.display = "block";
    var prompt = input.value;
    await getImg(prompt);
})