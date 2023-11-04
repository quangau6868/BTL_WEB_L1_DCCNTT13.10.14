document.addEventListener("DOMContentLoaded", () => {
  let product = localStorage.getItem("product");
  product = JSON.parse(product);

  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let result = data.find((item) => {
        return item.id === Number(product.id);
      });

      if (!result) {
        return;
      }
      result.total = Number(product.count) * result.price;
      result.count = Number(product.count);

      // in tên
      document.getElementById("product-name").innerText = result.name;

      // in ảnh
      document.getElementById("product-image").src = result.image;

      //in giá
      result.price = result.price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      document.getElementById("product-price").innerText = result.price;

      document.getElementById("product-count").value = product.count;

      result.total = result.total.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      document.getElementById("product-total").innerText = result.total;
      document.getElementById("total-money").innerText = result.total;
      localStorage.setItem("order-product", JSON.stringify(result));

    });
});
