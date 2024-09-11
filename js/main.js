
fetch('products.json')

.then(response => response.json())

.then(data => {
    console.log(data)

    data.forEach(item => {
        // document.getElementById('products').innerHTML += `
        
        // <div class="product">

        // <img src="../${item.image}">
        // <h3>${item.name}</h3>
        // <p>Cat: ${item.category}</p>
        // <p>Price: $${item.price}</p>

        // </div>
        // `
    });
})










// when we scroll, the menu changes

window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    var storeList = document.getElementById("storeList");
    var blogList = document.getElementById('blogList');

    if (window.pageYOffset > 150) {
        navbar.classList.add("menuScroll");
        storeList.classList.add("storeScroll");
        blogList.classList.add("blogScroll");
    } else {
        navbar.classList.remove("menuScroll");
        storeList.classList.remove("storeScroll");
        blogList.classList.remove("blogScroll");
    }
};



// hide and show the store list of the store part


let store = document.querySelector('.store');
let blog = document.querySelector('.blog');


let storeList = document.getElementById('storeList');
let blogList = document.getElementById('blogList');


store.addEventListener('mouseover' , ()=> {
    
    storeList.style.display = 'flex';
    storeList.style.transition = 'all 1s ease-in-out';
})

store.addEventListener('mouseout' , ()=> {
    
    storeList.style.display = 'none';
})




blog.addEventListener('mouseover' , ()=> {

    blogList.style.display = 'flex';
    blogList.style.transition = 'all 1s ease-in-out';
})

blog.addEventListener('mouseout' , ()=> {
    
    blogList.style.display = 'none';
})







// the action of Submit button for the form

document.getElementById('formBtn').addEventListener('click' , ()=> {

    alert('Your Request as an Order has been sent.')
})