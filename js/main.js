
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










// when we scroll, the menu changes ????????

window.onscroll = function() {
    
    let navbar = document.querySelector('.navbar')

    if (window.pageYOffset > 150) {
        navbar.classList.add("navbarScroll");
    } else {
        navbar.classList.remove("navbarScroll");   
    }
};






// the store list of the store part of the menu

let store = document.getElementById('store');

store.addEventListener('mouseover' , ()=> {
    document.getElementById('storeMenu').style.display = 'block';
})

store.addEventListener('mouseout' , ()=> {
    document.getElementById('storeMenu').style.display = 'none';
})



// the blog list of the blog part of the menu

let blog = document.getElementById('blog');

blog.addEventListener('mouseover' , ()=> {
    document.getElementById('blogMenu').style.display = 'block';
})

blog.addEventListener('mouseout' , ()=> {
    document.getElementById('blogMenu').style.display = 'none';
})



// the list of the products on the store part of the menu

let storeTitle = document.querySelector('.storeTitle');

storeTitle.addEventListener('mouseover' , ()=> {
    document.querySelector('.storeProducts').style.display = 'block';
})

storeTitle.addEventListener('mouseout' , ()=> {
    document.querySelector('.storeProducts').style.display = 'none';
})

















// the action of Submit button for the form

document.getElementById('formBtn').addEventListener('click' , ()=> {

    alert('Your Request as an Order has been sent.')
})




// when we scroll, the upscroll icon will be hidden 

window.onscroll = function() {
    let upScroll = document.querySelector('.upScroll');

    if (window.pageYOffset < 150) {
        upScroll.classList.add("hide");
    }

    else {
        upScroll.classList.remove("hide");
    }
}
