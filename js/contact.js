document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", () => {
    document.getElementById("alert-contact").style.display = "inline-block";

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let message = document.getElementById("message");

    // lưu dữ liệu vào file json
    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      address: address.value,
      message: message.value,
    };

    localStorage.setItem("contact", JSON.stringify(contact));

    // xóa dữ liệu trên màn hình
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    address.value = "";
    message.value = "";
  });
});
