const deployButton = document.getElementById("deploy");
const deployProgress = document.getElementById("deploy-progress");
const deployProgressBar = document.getElementById("deploy-progress-bar");

if (deployButton) {
  deployButton.addEventListener("click", (event) => {
    if (deployButton.hostname !== "dseqr.com") {
      checkDeployed(handleCheckDeployed);
    }
  });
}

const checkDeployed = (callback) => {
  // check if site is active
  const http = new XMLHttpRequest();
  const url = "https://dseqr.com";

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
    console.log("Infrastructure is Live!");
    setDeployed();
  } else {
    console.log("Launching AWS Infrastructure!");
    deployCountdown();
  }
};

const setDeployed = () => {
  deployButton.innerHTML = "Open Dseqr →";
  deployButton.href = "https://dseqr.com";
  deployProgressBar.style.width = "100%";
  deployProgress.style.visibility = "hidden";
  deployButton.classList.remove("btn-primary", "disabled");
  deployButton.classList.add("btn-warning");
  deployButton.classList.add("btn-warning");
};

runDeploy = () => {
  const url =
    "https://ikhx4027h6.execute-api.us-east-2.amazonaws.com/default/DseqrFromLambdaStack-DeployDseqrLambda4EF89A95-1W8SZ4VL5CK6M";
  const http = new XMLHttpRequest();
  http.open("GET", url);
  http.send(null);
};

const totaltime = 60 * 9;

const deployCountdown = () => {
  // make button clickable so that can check if deployed
  deployButton.href = "https://dseqr.com";

  let tstart;
  const curStart = Date.now() / 1000;
  let prevStart = parseInt(localStorage.getItem("deployStart"));

  if (prevStart && curStart - prevStart < totaltime) {
    // re-use previous start
    tstart = prevStart;
  } else {
    // reset deploy start and use current time
    localStorage.setItem("deployStart", curStart);
    tstart = curStart;
  }

  var tend = tstart + totaltime;
  const interval = setInterval(function () {
    tnow = Date.now() / 1000;
    var timeleft = tend - tnow;
    var elapsed = totaltime - timeleft;
    var elapsedPercent = (elapsed / totaltime) * 100;

    var result = new Date(timeleft * 1000).toISOString().substr(15, 4);
    deployButton.innerHTML = "~" + result;
    deployProgressBar.style.width = elapsedPercent + "%";

    if (timeleft <= 0) {
      setDeployed();
      clearInterval(interval);
    }
  }, 1000); //calling it every 1 second
};
