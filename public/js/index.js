(function () {
    const totalElement = document.getElementById("total");
    const dayElement = document.getElementById("day");
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");

    const now = moment();
    const halfLife = moment("2007-10-10");

    const updateTotal = (today, oldDate) => {
        let echoesOfAResonanceCascade = "";
        let years = today.diff(oldDate, "year");
        oldDate.add(years, "years");
        let months = today.diff(oldDate, "months");
        oldDate.add(months, "months");
        let days = today.diff(oldDate, "days");
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

    const updateInfo = (today, oldDate) => {
        dayElement.innerHTML = today.diff(oldDate, "days");
        monthElement.innerHTML = today.diff(oldDate, "months");
        yearElement.innerHTML = today.diff(oldDate, "years");
    };

    updateTotal(now.clone(), halfLife.clone());
    updateInfo(now.clone(), halfLife.clone());

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