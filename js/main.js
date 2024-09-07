
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