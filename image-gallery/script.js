// ---------------------- query selectors ---------------------- //

const infoButton = document.querySelector('.info-button');
const infoUnsplash = document.querySelector('.info-unsplash');
const closeInfo = document.querySelector('.close-info');

const evenPhoto = document.querySelectorAll('.images');
const allPhotos = document.querySelector('.photo-container')
const bigPhoto = document.querySelector('.big-photo');

const generalSearch = document.querySelector('.general-search');
const generalButton = document.querySelector('.general-button');

// ---------------------- general fetch API ---------------------- //

fetch('https://api.unsplash.com/photos/random?&count=12&client_id=KePj_Sn9PZ1NgFSekKlRNQPgmu9pdKqxp3hDsFrTPUM').then((response) => {
    response.json().then((result) => {
        loadImage(result);
    })
});

// ---------------------- functions, listeners ---------------------- //

function loadImage(images) {
    evenPhoto.forEach( (item, index) => {
        item.src = images[index].urls.raw + `${`&w=1920&h=1080`}`;
    })
}

generalButton.addEventListener('click', async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${generalSearch.value}&per_page=12&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`);
        const result = await response.json();
        loadImage(result['results']);
})

generalSearch.addEventListener('keyup', async (item) => {
    if (item.keyCode === 13) {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${generalSearch.value}&per_page=12&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`);
        const result = await response.json();
        loadImage(result['results']);
    }
})

infoButton.addEventListener('click', toOpen);
closeInfo.addEventListener('click', toOpen);

function toOpen() {
    infoUnsplash.classList.toggle('open');
}

allPhotos.addEventListener('click', () => {
    if (event.target.classList.contains('images') || event.target.classList.contains('big-photo')) {
        bigPhoto.classList.toggle('active');
        bigPhoto.src = event.target.src;
    }
})

// ---------------------- classic fetch functions ---------------------- //

// generalButton.addEventListener('click', () => {
//     fetch(`https://api.unsplash.com/search/photos?query=${generalSearch.value}&per_page=12&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`).then((response) => {
//     response.json().then((result) => {
//         loadImage(result['results']);
//         })
//     });
// })

// generalSearch.addEventListener('keyup', (item) => {
//     if (item.keyCode === 13) {
//         fetch(`https://api.unsplash.com/search/photos?query=${generalSearch.value}&per_page=12&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`).then((response) => {
//             response.json().then((result) => {
//             loadImage(result['results']);
//             })
//         });
//     }
// })