(function () {
    const timeElement = document.getElementById("time");
    var now = moment();
    timeElement.innerHTML = `Time: ${now.format("MM/DD/YYYY, h:mm:ss a")}`;
    // Service worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").then((reg) => {
            console.log("Service Worker Registered 🤩", reg.scope);
        }).catch(function (err) {
            console.log("Service Worker Failed to Register 😩", err);
        });
    }
})();