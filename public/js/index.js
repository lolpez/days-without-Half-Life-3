(function () {
    const totalElement = document.getElementById("total");
    const dayElement = document.getElementById("day");
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");

    let today = moment();
    const halfLife = moment("2007-10-10");

    const updateTotal = (minDate, maxDate) => {
        let min = minDate.clone();
        let max = maxDate.clone();
        let echoesOfAResonanceCascade = "";
        let years = max.diff(min, "year");
        min.add(years, "years");
        let months = max.diff(min, "months");
        min.add(months, "months");
        let days = max.diff(min, "days");
        echoesOfAResonanceCascade += `${years} years`;
        if (months > 0) {
            echoesOfAResonanceCascade += `${(days > 0) ? ", " : " and "} ${months} month${(months > 1) ? "s" : ""}`;
        }
        if (days > 0) {
            echoesOfAResonanceCascade += ` and ${days} day${(days > 1) ? "s" : ""}`;
        }
        echoesOfAResonanceCascade += " without Half Life 3";
        totalElement.innerHTML = echoesOfAResonanceCascade;
    };

    const updateInfoBoxes = (minDate, maxDate) => {
        let min = minDate.clone();
        let max = maxDate.clone();
        dayElement.innerHTML = Math.round(max.diff(min, "days", true) * 100) / 100;
        monthElement.innerHTML = Math.round(max.diff(min, "months", true) * 100) / 100;
        yearElement.innerHTML = Math.round(max.diff(min, "years", true) * 100) / 100;
    };

    setInterval(() => {
        let present = moment();
        if (moment(present.format("YYYY-MM-DD")).isAfter(today.format("YYYY-MM-DD"))) {
            today = present;
            updateApp();
        }
    }, 3000);

    const updateApp = () => {
        updateTotal(halfLife, today);
        updateInfoBoxes(halfLife, today);
    };

    updateApp();
    /*
    // Service worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").then((reg) => {
            console.log("Service Worker Registered 🤩", reg.scope);
        }).catch(function (err) {
            console.log("Service Worker Failed to Register 😩", err);
        });
    }
    */
})();