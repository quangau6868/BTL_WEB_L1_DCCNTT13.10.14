document.addEventListener("DOMContentLoaded", () => {
  let id = null;
  // lấy ra tất cả param trên url
  let queryString = window.location.search;

  // chuyển param thành 1 object
  let urlParams = new URLSearchParams(queryString);

  // lấy id của sản phẩm
  id = urlParams.get("id");

  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let result = data.find((item) => {
        return item.id == id;
      });

      // lấy giá trị đầu tiên của dữ liệu nếu không có id
      if (!result) {
        result = data[0];
      }

      // in tên
      document.getElementById("product-detail-name").innerText = result.name;

      // in ảnh
      document.getElementById("product-detail-image").src = result.image;
      // in tên
      document.getElementById("product-detail-category").innerText =
        result.category;

      // in giá
      result.price = result.price.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
      document.getElementById("product-detail-price").innerText = result.price;
    });

  // thêm dữ liệu vào giở hàng
  document.getElementById("add-cart").addEventListener("click", () => {
    let count = document.getElementById("count");

    let product = {
      id,
      count: count.value,
    };

    localStorage.setItem("product", JSON.stringify(product));
    window.location.href = "/shopping-cart.html";
  });
});
