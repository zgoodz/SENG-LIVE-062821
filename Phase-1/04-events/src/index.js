
document.querySelector('#book-form').addEventListener('submit',(e)=> {
  e.preventDefault()
  let newBook = {
    title: e.target.title.value,
    author: e.target.author.value,
    price:e.target.price.value,
    image_url:e.target.image_url.value,
    inventory: 0,
    reviews: []
  }
  renderCard(newBook)
})


//Render ***********
function renderAside(storeObj){
  document.querySelector('.location').textContent = storeObj.name
  document.querySelector('#hours').textContent = storeObj.hours
  console.log(document.querySelectorAll('aside ul li'))
  document.querySelectorAll('aside ul li')[0].textContent = storeObj.number
  document.querySelectorAll('aside ul li')[1].textContent = storeObj.address

}

function seperateReviews(singleReview, ul) {
 let liReview = document.createElement('li')
 liReview.textContent = `"${singleReview.content}"`
 ul.append(liReview)
}


function renderCard(book){
  let li = document.createElement('li')
  let h4Title = document.createElement('h4')
  let h4Author = document.createElement('h4')
  let img = document.createElement('img')
  let pPrice = document.createElement('p')
  let pInventory = document.createElement('p')
  let ulReview = document.createElement('ul')

  // let formReview = document.createElement('form')
  // let labelReview = document.createElement('label')
  // let inputReview = document.createElement('input')
  // let btnReview = document.createElement('button')
  let btn = document.createElement('button')

// render reviews here


 
  li.className = 'card'
  img.src = book.image_url
  h4Title.textContent = book.title 
  h4Author.textContent = book.author
  pPrice.textContent = `Price: ${book.price}`
  pInventory.textContent = `Inventory: ${book.inventory}`
  ulReview.textContent = `Reviews: `
  book.reviews.forEach(singleReview => {
    // let liReview = document.createElement('li')
    //  liReview.textContent = `"${singleReview.content}"`
     seperateReviews(singleReview, ulReview)
  })
  // liReview.textContent = `"${book.reviews.map(printReviews => printReviews.content)}"`
  btn.textContent = 'Add Inventory'

  btn.addEventListener('click', () => {
    console.log('hi')
    book.inventory+=1
    pInventory.textContent = `Inventory: ${book.inventory}`
  })



  
  //HomeWork-------------------------------------------------
  //The books has an array of reviews
  //Add the review content to the card. 
  //Bonus
  //Add a form to the card that will render a new review to the card. 

  li.append(img, h4Title, h4Author, pPrice, pInventory, ulReview, btn)
  document.querySelector('#book-list').prepend(li)

}

// Render HTML is powerful but can cause issues with 
// Cross-site scripting
// Its safe to use if you're not using external data with it
// In this example it can be d
// function renderHTML(book){
//   let li = document.createElement('li')
//   li.className = 'card'
//   li.innerHTML = `
//     <img src=${book.image_url}>
//     <h4>${book.title}</h4>
//     <h4>${book.author}</h4>
//     <p>Price: ${book.price}</p>
//     <p>Inventory ${book.inventory}</p>
//   `
//   document.querySelector('#book-list').prepend(li)
// }


//Initial Render 
function initialRender(){
  console.log(bookStore)
  renderAside(bookStore)
  document.querySelector('#book-list li').remove()
  bookStore.inventory.forEach(renderCard)
  // the forEach above and below are doing the same thing
  // the one below has an unnecessary nested callback
  // the above is using renderCard as the callback
  // bookStore.inventory.forEach(book => renderCard(book))

}
initialRender()
