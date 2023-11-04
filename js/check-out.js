document.addEventListener("DOMContentLoaded", () => {
  let product = localStorage.getItem("order-product");
  product = JSON.parse(product);

  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-price").innerText = product.price;
  document.getElementById("product-count").innerText = product.count;
  document.getElementById("product-total").innerText = product.total;

  document.getElementById("submit-order").addEventListener("click", () => {
    document.getElementById("alert-contact").style.display = "inline-block";
  });
});
