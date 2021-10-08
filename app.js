function oneTapChat() {
  let number = document.getElementById("number").value;
  if (number !== "" && number.length >= 10) {
    let phoneNumber = Number(number);
    window.location.href = `https://wa.me/91${phoneNumber}?text=Hi`;
  } else {
    document.getElementById("element").style.display = "block";
  }
}

// Registering the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(() => console.log("registered service worker!"));
  });
}
