// Variables IDS
const f20210517_button = document.getElementById(
  "f20210517"
) as HTMLButtonElement;
const f20210517_button_r = document.getElementById(
  "f20210517_r"
) as HTMLButtonElement;
const f20210521_button = document.getElementById(
  "f20210521"
) as HTMLButtonElement;
const f20210528_button = document.getElementById(
  "f20210528"
) as HTMLButtonElement;
const f20210531_button = document.getElementById(
  "f20210531"
) as HTMLButtonElement;
const f20210607_button = document.getElementById(
  "f20210607"
) as HTMLButtonElement;

const notes_date = document.getElementById("notes_date");
const form_button = document.getElementById("form") as HTMLButtonElement;
const github_button = document.getElementById("github") as HTMLButtonElement;
const gsheets_button = document.getElementById("gsheets") as HTMLButtonElement;
const fof_button = document.getElementById("404") as HTMLButtonElement;

function getCurrentTime() {
  var CurrentYear: String = new Date().getFullYear().toString();
  var CurrentMonth: String = new Date().getMonth().toString();
  var CurrentDay: String = new Date().getDate().toString();
  var CurrentDate: String = CurrentDay.concat("-")
    .concat(CurrentMonth.toString())
    .concat("-")
    .concat(CurrentYear.toString());
  console.log("Date: ".concat(CurrentDate.toString()));
  var CurrentHour: String = new Date().getHours().toString();
  var CurrentMinute: String = new Date().getMinutes().toString();
  var CurrentSecond: String = new Date().getSeconds().toString();
  var CurrentMillisecond: String = new Date().getMilliseconds().toString();
  var CurrentTime: String = CurrentHour.concat(":")
    .concat(CurrentMinute.toString())
    .concat(":")
    .concat(CurrentSecond.toString())
    .concat(":")
    .concat(CurrentMillisecond.toString());
  console.log("Time: ".concat(CurrentTime.toString()));
  var UnixTimestamp: String = new Date().getTime().toString();
  console.log("Unix Timestampt: ".concat(UnixTimestamp.toString()));
}
window.onload = () => {
  var CurrentYear: String = new Date().getFullYear().toString();
  var CurrentMonth: String = ("0" + (new Date().getMonth() + 1)).slice(-2)
  var CurrentDay: String = new Date().getDate().toString();
  var CurrentDate: String = "-"
    .concat(CurrentDay.concat("."))
    .concat(CurrentMonth.toString())
    .concat(".")
    .concat(CurrentYear.toString());
  notes_date.innerHTML = CurrentDate.toString();
};
f20210517_button.addEventListener("click", () => {
  console.log("Clicked On 2021.05.17");
  getCurrentTime();
  window.location.replace(
    "https://galaxygamingboy.github.io/MMMediaCenter/404"
  );
});
f20210517_button_r.addEventListener("click", () => {
  console.log("Clicked On 2021.05.17_r");
  getCurrentTime();
  window.location.replace(
    "https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.05.17RD.mp3"
  );
});
f20210521_button.addEventListener("click", () => {
  console.log("Clicked On 2021.05.21");
  getCurrentTime();
  window.location.replace(
    "https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.05.21S.mp3"
  );
});
f20210528_button.addEventListener("click", () => {
  console.log("Clicked On 2021.05.28");
  getCurrentTime();
  window.location.replace(
    "https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.05.28S.mp3"
  );
});
f20210531_button.addEventListener("click", () => {
  console.log("Clicked On 2021.05.31");
  getCurrentTime();
  window.location.replace(
    "https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.05.31S.mp3"
  );
});

f20210607_button.addEventListener("click", () => {
  console.log("Clicked On 2021.06.07");
  getCurrentTime();
  window.open(
    "https://galaxygamingboy.github.io/MMMediaCenter/Sentences/2021.06.07S.mp3"
  );
});
form_button.addEventListener("click", () => {
  console.log("Form Button Clicked");
  getCurrentTime();
  window.open("https://forms.gle/EZXx7JNGo5r7z63dA", "_blank");
});

github_button.addEventListener("click", () => {
  console.log("GitHub Button Clicked");
  getCurrentTime();
  window.open("https://github.com/GalaxyGamingBoy/MMMediaCenter");
});

gsheets_button.addEventListener("click", () => {
  console.log("Google Sheets Button Pressed");
  getCurrentTime();
  window.open(
    "https://docs.google.com/spreadsheets/d/1WYLmV6T4GBQ9QkEKuRTZvv52yU9ZMunT_wvpL_mSMgE/edit?usp=sharing"
  );
});

fof_button.addEventListener("click", () => {
  console.log("404 Error Button Pressed");
  getCurrentTime();
  window.location.replace("https://galaxygamingboy.github.io/MMMediaCenter/404");
});
console.log("200");
console.log("MMedia Center Finished Loading JS, TS, CSS, HTML Successfully");
