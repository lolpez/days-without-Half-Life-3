(function () {
    const totalYearsElement = document.getElementById("total-years");
    const totalMonthsElement = document.getElementById("total-months");
    const totalDaysElement = document.getElementById("total-days");
    const dayElement = document.getElementById("day");
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");

    const now = moment();
    const halfLife = moment("2007-10-10");

    const updateTotal = (today, oldDate) => {
        let years = today.diff(oldDate, "year");
        oldDate.add(years, "years");
        let months = today.diff(oldDate, "months");
        oldDate.add(months, "months");
        let days = today.diff(oldDate, "days");
        totalYearsElement.innerHTML = years;
        totalMonthsElement.innerHTML = months;
        totalDaysElement.innerHTML = days;
    };

    const updateInfo = (today, oldDate) => {
        dayElement.innerHTML = today.diff(oldDate, "days");
        monthElement.innerHTML = today.diff(oldDate, "months");
        yearElement.innerHTML = today.diff(oldDate, "years");
    };

    updateTotal(now.clone(), halfLife.clone());
    updateInfo(now.clone(), halfLife.clone());

    // Service worker
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js").then((reg) => {
            console.log("Service Worker Registered 🤩", reg.scope);
        }).catch(function (err) {
            console.log("Service Worker Failed to Register 😩", err);
        });
    }
})();