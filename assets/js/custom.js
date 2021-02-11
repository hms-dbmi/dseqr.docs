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
  // updates shutdown timer for lambda
  runDeploy();

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
  deployButton.classList.remove("btn-primary", "disabled");
  deployButton.classList.add("btn-warning");
  deployButton.classList.add("btn-warning");
};

runDeploy = () => {
  const url =
    "https://jdy8c3206d.execute-api.us-east-2.amazonaws.com/default/CDKLambdaDockerStack-functionF19B1A04-19ENMIG8VNAYN";
  const http = new XMLHttpRequest();
  http.open("GET", url);
  http.send(null);
};

const deployCountdown = () => {
  // make button clickable so that can check if deployed
  deployButton.href = "https://drugseqr.com";

  tstart = Date.now() / 1000;
  totaltime = 60 * 9;
  var tend = tstart + totaltime;
  const interval = setInterval(function () {
    tnow = Date.now() / 1000;
    var timeleft = tend - tnow;
    var elapsed = totaltime - timeleft;
    var elapsedPercent = (elapsed / totaltime) * 100;

    var result = new Date(timeleft * 1000).toISOString().substr(15, 4);
    deployButton.innerHTML = "~" + result;
    deployProgressBar.style.width = elapsedPercent + "%";

    if (timeleft == 0) {
      setDeployed();
      clearInterval(interval);
    }
  }, 1000); //calling it every 1 second
};
