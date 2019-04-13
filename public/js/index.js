(function () {
    const dayElement = document.getElementById("day");
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");
    var now = moment();
    var halfLife = moment("2007-10-10");
    dayElement.innerHTML = now.diff(halfLife, "days");
    monthElement.innerHTML = now.diff(halfLife, "months");
    yearElement.innerHTML = now.diff(halfLife, "years");
    // Service worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").then((reg) => {
            console.log("Service Worker Registered 🤩", reg.scope);
        }).catch(function (err) {
            console.log("Service Worker Failed to Register 😩", err);
        });
    }
})();