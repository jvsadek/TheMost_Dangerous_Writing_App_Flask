
const num = 1;

const NewTargetData = new addMinutes( num, new Date())
// Update the countdown every second
setInterval(updateCountdown, 1000);

 // Initial call to set the countdown immediately
updateCountdown();

let timer;
const waitTime = 5000;
const messageInput = document.getElementById('body');

function addMinutes (minutes, date = new Date()) {
          if (typeof minutes !== 'number') {
            throw new Error('Invalid "minutes" argument')
          }

          if (!(date instanceof Date)) {
            throw new Error('Invalid "date" argument')
          }

          date.setMinutes(date.getMinutes() + minutes)

          return date
        }

function updateCountdown() {
            // Set the target date (replace with your desired date and time)

            const targetDate = NewTargetData;

            // Get the current date and time
            const currentDate = new Date();

            // Calculate the time difference
            const timeDifference = targetDate - currentDate;

            // Calculate days, hours, minutes, and seconds
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const time = minutes + seconds;

            // Update the countdown element
            if ( time > 1) {
                    document.getElementById('countdown').innerHTML = `
                    <h3 style="color: #343a40">Minutes: ${minutes}</h3>
                    <h3 style="color: #343a40">Seconds: ${seconds}</h3>`;
                    document.getElementById("submit").style.display = "none";
                    } else if (time < 1) {
                    document.getElementById("submit").style.display = "inline"
                    document.getElementById('countdown').innerHTML = `
                    <h3 style="color: #343a40">Minutes: ${0}</h3>
                    <h3 style="color: #343a40">Seconds: ${0}</h3>`;
                    sleep(2000).then(() => { Redirect()});;
                    }

        }

function doneTyping(value) {
              alert(`You failed in the Most Dangerous App. Try Again!`)
              Redirect();
            }

function Redirect() {
        window.location = "http://127.0.0.1:5003/";
       }
