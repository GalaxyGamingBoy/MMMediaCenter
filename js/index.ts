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
const form_button = document.getElementById("form") as HTMLButtonElement;

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
f20210517_button.addEventListener("click", () => {
  console.log("Clicked On 2021.05.17");
  getCurrentTime();
  window.location.replace(
    "https://www.dropbox.com/s/soqxdnrfc45mpnt/%CE%A0%CF%81%CE%BF%CF%84%CE%AC%CF%83%CE%B5%CE%B9%CF%82%2017.mp3?dl=1"
  );
});
f20210517_button_r.addEventListener("click", () => {
  console.log("Clicked On 2021.05.17_r");
  getCurrentTime();
  window.location.replace(
    "https://www.dropbox.com/s/f6yo7thh56bbcwj/2021-5-17%20%CE%A0%CF%81%CE%BF%CF%84%CE%AC%CF%83%CE%B5%CE%B9%CF%82%20RD.mp3?dl=1"
  );
});
f20210521_button.addEventListener("click", () => {
  console.log("Clicked On 2021.05.21");
  getCurrentTime();
  window.location.replace(
    "https://www.dropbox.com/s/e7cu3wprv5iylp4/2021-5-21%20%CE%A0%CF%81%CE%BF%CF%84%CE%AC%CF%83%CE%B5%CE%B9%CF%82.mp3?dl=1"
  );
});
f20210528_button.addEventListener("click", () => {
  console.log("Clicked On 2021.05.28");
  getCurrentTime();
  window.location.replace(
    "https://www.dropbox.com/s/8fcfb9g82t4woue/2021-5-28%20%CE%A0%CF%81%CE%BF%CF%84%CE%AC%CF%83%CE%B5%CE%B9%CF%82.mp3?dl=1?token=AMUYX7MTUMM4K42KK6VB343AWDW5A"
  );
});
f20210531_button.addEventListener("click", () => {
  console.log("Clicked On 2021.05.31");
  getCurrentTime();
  window.location.replace(
    "https://www.dropbox.com/s/mrgj485xx0to6tq/2021-5-31%20%CE%A0%CF%81%CE%BF%CF%84%CE%AC%CF%83%CE%B5%CE%B9%CF%82.mp3?dl=1"
  );
});

form_button.addEventListener("click", () => {
  console.log("Form Button Clicked");
  getCurrentTime();
  window.open("https://forms.gle/EZXx7JNGo5r7z63dA", "_blank");
});
console.log("200");
console.log("MMedia Center Finished Loading JS, TS, CSS, HTML Successfully");
