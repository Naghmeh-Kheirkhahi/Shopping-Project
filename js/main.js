
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
    if (window.pageYOffset > 150) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};



// the action of Submit button for the form

document.getElementById('formBtn').addEventListener('click' , ()=> {

    alert('Your Request as an Order has been sent.')
})