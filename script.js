// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('done')
//         console.log('resolved')
//     }, 2000)
//     setTimeout(() => {
//         reject(new Error('whoops'))
//         console.log(new Error('error'))
//     }, 2000)
// })

// pending
// resolve
// reject

// fetch
// axios


// const row = document.querySelector('.row')
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(data => data.json())
// .then(result =>{
//     result.map(el =>{
//         row.innerHTML += `<div class="col-4">
// <h2>${el.name}</h2>
// <h2>${el.username}</h2>
// <h2>${el.email}</h2>
// <h2>${el.address.city}</h2>
// </div>`
//     })
// })
//-------------------------------------------------
// fetch('https://restcountries.com/v3.1/all')
//     .then(data => data.json())
//     .then(result => {
//         result.map(el => {
//             row.innerHTML += `<div class="col-4">
//  <img src="${el.flags.png}" alt="" class="image object-fit-contain" style="width: 240px; height: 140px">
//  <h3>${el.name.common}</h3>
//  <p>area: ${el.area} km2
//  </p>
// </div>`
//         })
//     })



const row = document.querySelector('.row')
axios.get('https://restcountries.com/v3.1/all')
.then(result => {
    result.data.sort((a,b) => b.population-a.population ).map((el,idx) =>{
        row.innerHTML += `<div class="col-4"> 
<h1>${idx+1}</h1>
<img src="${el.flags.png}" alt="" class="image object-fit-contain" style="width: 240px; height: 140px">
<h2 class="text-white">${el.name.official}</h2>
<h3 class="text-white">population: ${el.population}</h3>
<h4 class="text-white">center: ${el.capital ? el.capital : 'error'}</h4>
<h5 class="text-white">area: ${el.area} km <sup>2</sup></h5>
<h5 class="text-white">region: ${el.region}</h5>
</div>`

    })
})
const input = document.querySelector('.search-input'),
    btn = document.querySelector('.search-btn')

btn.addEventListener('click',()=>{
countries()
})
function countries(){
    axios.get(`https://restcountries.com/v3.1/name/${input.value}`)
        .then(res => {
            res.data.map(el =>{
                row.innerHTML = `<div class="col-4"> 
<img src="${el.flags.png}" alt="" class="image object-fit-contain" style="width: 240px; height: 140px">
<h2 class="text-white">${el.name.official}</h2>
<h3 class="text-white">population: ${el.population}</h3>
<h4 class="text-white">center: ${el.capital ? el.capital : 'error'}</h4>
<h5 class="text-white">area: ${el.area} km <sup>2</sup></h5>
<h5 class="text-white">region: ${el.region}</h5>
</div>`

            })
        })
}

input.addEventListener('keydown',(e)=>{
    switch (e.key){
        case 'Enter' :
            countries()
            break
    }
})