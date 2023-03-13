var categoryList = document.querySelector('.category-list');
var productList = document.querySelector('.product-list');

fetch('https://api.escuelajs.co/api/v1/categories')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // datayı bölücez > sadece ilk dört tanesini > slice
    data.slice(0, 4).forEach(function (category) {
      // elemanı oluşturma
      var categoryDiv = document.createElement('div');
      //  class ekleme
      categoryDiv.classList.add('category');
      // içeriği değiştirme
      categoryDiv.innerHTML = `
          <img src="${category.image}"/>
          <span>${category.name}</span>
        `;
      // listenin içine atma
      categoryList.appendChild(categoryDiv);
    });
  });

fetch('https://api.escuelajs.co/api/v1/products')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach(function (product) {
      var productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
          <img
            src="${product.images[0]}"
          />
          <p>${product.title}</p>
          <p>${product.category.name}</p>
          <div class="product-info">
            <span>${product.price}</span>
            <button>Sepete Ekle</button>
          </div>
      `;
      // HTMLE GÖNDERME
      productList.appendChild(productDiv);
    });
  });
