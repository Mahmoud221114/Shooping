// select landing page element
let landingPag = document.querySelector(".landing-page");

// get array of imgs
let imgsArray = ["../imgs/pro2.jpg","../imgs/pro11.jpg","../imgs/pro12.jpg","../imgs/pro10.jpg","../imgs/pro2.jpg"];


// Function To Randomize Imgs
function randomizeImgs() {

    

    backgroundInterval = setInterval(() => {

        // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);

        // Change Background Image Url 
        landingPag.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

    }, 5000);

    

}

randomizeImgs();