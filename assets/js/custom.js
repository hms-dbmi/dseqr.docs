const deployButton = document.getElementById("deploy");
const deployProgress = document.getElementById("deploy-progress");
const deployProgressBar = document.getElementById("deploy-progress-bar");

deployButton.addEventListener("click", (event) => {
  checkDeployed();
  // deployCountdown();
});

const checkDeployed = () => {
  // check if site is active
  const http = new XMLHttpRequest();
  const url = "https://drugseqr.com";
  http.open("OPTIONS", url);
  http.send();

  http.onreadystatechange = (e) => {
    console.log(http.responseText);
  };
};

const deployCountdown = () => {
  const url =
    "https://jdy8c3206d.execute-api.us-east-2.amazonaws.com/default/CDKLambdaDockerStack-functionF19B1A04-RVIOF18XPMZM";

  var i = 0;
  var totaltime = 60 * 6;
  const interval = setInterval(function () {
    i += 1;
    var timeleft = totaltime - i;
    var percent = ((totaltime - timeleft) / totaltime) * 100;

    var result = new Date(timeleft * 1000).toISOString().substr(15, 4);
    deployButton.innerHTML = result;
    deployProgressBar.style.width = percent + "%";

    if (timeleft == 0) {
      deployButton.innerHTML = "Open Dseqr";
      deployButton.href = "https://drugseqr.com";
      deployProgressBar.style.width = "100%";
      deployProgress.style.visibility = "hidden";
      clearInterval(interval);
    }
  }, 1000); //calling it every 1 second
};
