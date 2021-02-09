const deployButton = document.getElementById("deploy");
const deployProgress = document.getElementById("deploy-progress");
const deployProgressBar = document.getElementById("deploy-progress-bar");

deployButton.addEventListener("click", (event) => {
  deployCountdown();
});

const deployCountdown = () => {
  var isDeployed = false;
  const http = new XMLHttpRequest();
  const url =
    "https://jdy8c3206d.execute-api.us-east-2.amazonaws.com/default/CDKLambdaDockerStack-functionF19B1A04-XCOBCMG259NY";
  http.open("GET", url);
  http.send();

  http.onreadystatechange = (e) => {
    isDeployed = true;
    console.log(http.responseText);
  };

  var i = 0;
  var totaltime = 60 * 6;
  const interval = setInterval(function () {
    i += 1;
    var timeleft = totaltime - i;
    var percent = ((totaltime - timeleft) / totaltime) * 100;

    var result = new Date(timeleft * 1000).toISOString().substr(15, 4);
    deployButton.innerHTML = result;
    deployProgressBar.style.width = percent + "%";

    if ((isDeployed && timeleft > 60 * 5) || timeleft == 0) {
      deployButton.innerHTML = "Open Dseqr";
      deployButton.href = "https://drugseqr.com";
      deployProgressBar.style.width = "100%";
      deployProgress.style.visibility = "hidden";
      clearInterval(interval);
    }
  }, 1000); //calling it every 1 second
};
