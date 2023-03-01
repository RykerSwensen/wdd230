if (typeof(Storage) !== "undefined") {
    var currentDate = new Date();

    if (localStorage.getItem("lastVisit")) {
        var timeDifference = currentDate.getTime() - localStorage.getItem("lastVisit");
        var timeDifferenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        document.getElementById("timeBetweenVisits").innerHTML = timeDifferenceInDays;
    }

    localStorage.setItem("lastVisit", currentDate.getTime());
} else {
    console.log("Sorry, your browser does not support local storage.");
}
