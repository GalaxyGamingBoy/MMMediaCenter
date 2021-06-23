// Variables IDS
var f20210517_button = document.getElementById("f20210517");
var f20210517_button_r = document.getElementById("f20210517_r");
var f20210521_button = document.getElementById("f20210521");
var f20210528_button = document.getElementById("f20210528");
var f20210531_button = document.getElementById("f20210531");
var f20210607_button = document.getElementById("f20210607");
var notes_date = document.getElementById("notes_date");
var form_button = document.getElementById("form");
var github_button = document.getElementById("github");
var gsheets_button = document.getElementById("gsheets");
var fof_button = document.getElementById("404");
var gfolder_button = document.getElementById("gfolder");
function getCurrentTime() {
    var CurrentYear = new Date().getFullYear().toString();
    var CurrentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
    var CurrentDay = new Date().getDate().toString();
    var CurrentDate = CurrentDay.concat("-")
        .concat(CurrentMonth.toString())
        .concat("-")
        .concat(CurrentYear.toString());
    console.log("Date: ".concat(CurrentDate.toString()));
    var CurrentHour = new Date().getHours().toString();
    var CurrentMinute = new Date().getMinutes().toString();
    var CurrentSecond = new Date().getSeconds().toString();
    var CurrentMillisecond = new Date().getMilliseconds().toString();
    var CurrentTime = CurrentHour.concat(":")
        .concat(CurrentMinute.toString())
        .concat(":")
        .concat(CurrentSecond.toString())
        .concat(":")
        .concat(CurrentMillisecond.toString());
    console.log("Time: ".concat(CurrentTime.toString()));
    var UnixTimestamp = new Date().getTime().toString();
    console.log("Unix Timestampt: ".concat(UnixTimestamp.toString()));
}
window.onload = function () {
    var CurrentYear = new Date().getFullYear().toString();
    var CurrentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
    var CurrentDay = new Date().getDate().toString();
    var CurrentDate = "-"
        .concat(CurrentDay.concat("."))
        .concat(CurrentMonth.toString())
        .concat(".")
        .concat(CurrentYear.toString());
    notes_date.innerHTML = CurrentDate.toString();
};
f20210517_button.addEventListener("click", function () {
    console.log("Clicked On 2021.05.17");
    getCurrentTime();
    window.location.replace("https://galaxygamingboy.github.io/MMMediaCenter/404");
});
f20210517_button_r.addEventListener("click", function () {
    console.log("Clicked On 2021.05.17_r");
    getCurrentTime();
    window.location.replace("https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.05.17RD.mp3");
});
f20210521_button.addEventListener("click", function () {
    console.log("Clicked On 2021.05.21");
    getCurrentTime();
    window.location.replace("https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.05.21S.mp3");
});
f20210528_button.addEventListener("click", function () {
    console.log("Clicked On 2021.05.28");
    getCurrentTime();
    window.location.replace("https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.05.28S.mp3");
});
f20210531_button.addEventListener("click", function () {
    console.log("Clicked On 2021.05.31");
    getCurrentTime();
    window.location.replace("https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.05.31S.mp3");
});
f20210607_button.addEventListener("click", function () {
    console.log("Clicked On 2021.06.07");
    getCurrentTime();
    window.open("https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.06.07S.mp3");
});
form_button.addEventListener("click", function () {
    console.log("Form Button Clicked");
    getCurrentTime();
    window.open("https://forms.gle/EZXx7JNGo5r7z63dA", "_blank");
});
github_button.addEventListener("click", function () {
    console.log("GitHub Button Clicked");
    getCurrentTime();
    window.open("https://github.com/GalaxyGamingBoy/MMMediaCenter");
});
gsheets_button.addEventListener("click", function () {
    console.log("Google Sheets Button Pressed");
    getCurrentTime();
    window.open("https://docs.google.com/spreadsheets/d/1WYLmV6T4GBQ9QkEKuRTZvv52yU9ZMunT_wvpL_mSMgE/edit?usp=sharing");
});
fof_button.addEventListener("click", function () {
    console.log("404 Error Button Pressed");
    getCurrentTime();
    window.location.replace("https://galaxygamingboy.github.io/MMMediaCenter/404");
});
gfolder_button.addEventListener("click", function () {
    console.log("Going to google drive folder");
    getCurrentTime();
    window.location.replace("https://drive.google.com/drive/u/0/folders/1HtS2iIH4hvmCkSGvlNIGzvCpCx-p9oR5");
});
console.log("200");
console.log("MMedia Center Finished Loading JS, TS, CSS, HTML Successfully");
