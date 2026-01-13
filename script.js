function showMessage() {
    alert("Hi! Thanks for visiting my portfolio 😊");
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}
