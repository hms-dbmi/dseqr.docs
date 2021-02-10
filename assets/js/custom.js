const deployButton = document.getElementById("deploy");
const deployProgress = document.getElementById("deploy-progress");
const deployProgressBar = document.getElementById("deploy-progress-bar");

if (deployButton) {
  deployButton.addEventListener("click", (event) => {
    if (deployButton.hostname !== "drugseqr.com") {
      checkDeployed(handleCheckDeployed);
    }
  });
}

const checkDeployed = (callback) => {
  // check if site is active
  const http = new XMLHttpRequest();
  const url = "https://drugseqr.com";

  http.open("OPTIONS", url);
  http.onreadystatechange = function (event) {
    if (http.readyState === 4) {
      if (http.status === 200) {
        callback(true);
      } else {
        callback(false);
      }
    }
  };
  http.send(null);
};

const handleCheckDeployed = (isDeployed) => {
  if (isDeployed) {
    console.log("OKaY!");
    setDeployed();
  } else {
    console.log("Launching AWS Infrastructure!");
    deployCountdown();
  }
};

const setDeployed = () => {
  deployButton.innerHTML = "Open Dseqr";
  deployButton.href = "https://drugseqr.com";
  deployProgressBar.style.width = "100%";
  deployProgress.style.visibility = "hidden";
  deployButton.classList.remove("btn-primary");
  deployButton.classList.add("btn-warning");
};

const deployCountdown = async () => {
  const url =
    "https://jdy8c3206d.execute-api.us-east-2.amazonaws.com/default/CDKLambdaDockerStack-functionF19B1A04-19ENMIG8VNAYN";
  const http = new XMLHttpRequest();
  http.open("GET", url);
  http.send(null);

  var i = 0;
  var totaltime = 60 * 9;
  const interval = setInterval(function () {
    i += 1;
    var timeleft = totaltime - i;
    var percent = ((totaltime - timeleft) / totaltime) * 100;

    var result = new Date(timeleft * 1000).toISOString().substr(15, 4);
    deployButton.innerHTML = result;
    deployProgressBar.style.width = percent + "%";

    if (timeleft == 0) {
      setDeployed();
      clearInterval(interval);
    }
  }, 1000); //calling it every 1 second
};
