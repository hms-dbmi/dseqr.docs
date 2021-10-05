const deployButton = document.getElementById("deploy");
const deployInfo = document.getElementById("deploy-info");
const deployProgress = document.getElementById("deploy-progress");
const deployProgressBar = document.getElementById("deploy-progress-bar");
const deployTime = 60 * 10;

if (deployButton) {
  deployButton.addEventListener("click", (event) => {
    runDeploy();
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

const handleInitDeploy = (isDeployed) => {
  localStorage.setItem("isDeployed", isDeployed);

  // initialize deploy button
  if (isDeployed) {
    setDeployed();
    return;
  }

  // re-initialize timer
  const curStart = Date.now() / 1000;
  let prevStart = parseInt(localStorage.getItem("deployStart")) || false;

  const continueCountdown = prevStart && curStart - prevStart < deployTime;
  localStorage.setItem("isCountdown", continueCountdown);

  if (continueCountdown) {
    deployCountdown(prevStart);
  }
};

// run check on page load
checkDeployed(handleInitDeploy);

const setDeployed = () => {
  localStorage.setItem("isDeployed", true);
  deployButton.innerHTML = "Open Dseqr →";
  deployProgressBar.style.width = "100%";
  deployProgress.style.visibility = "hidden";
  deployButton.classList.remove("btn-primary", "disabled");
  deployButton.classList.add("btn-warning");
  deployInfo.setAttribute("style", "display: none !important");
};

deploy = () => {
  const url =
    "https://ikhx4027h6.execute-api.us-east-2.amazonaws.com/default/DseqrFromLambdaStack-DeployDseqrLambda4EF89A95-1W8SZ4VL5CK6M";
  const http = new XMLHttpRequest();
  http.open("GET", url);
  http.send(null);
};

const deployCountdown = (prevStart) => {
  localStorage.setItem("isCountdown", true);

  const curStart = Date.now() / 1000;
  if (prevStart && curStart - prevStart < deployTime) {
    // re-use previous start
    deployStart = prevStart;
  } else {
    // reset deploy start and use current time
    localStorage.setItem("deployStart", curStart);
    deployStart = curStart;
  }

  var tend = deployStart + deployTime;
  const interval = setInterval(function () {
    tnow = Date.now() / 1000;
    var timeleft = tend - tnow;
    var elapsed = deployTime - timeleft;
    var elapsedPercent = (elapsed / deployTime) * 100;

    var result = new Date(timeleft * 1000).toISOString().substr(15, 4);
    deployButton.innerHTML = "~" + result;
    deployProgressBar.style.width = elapsedPercent + "%";

    if (timeleft <= 0) {
      localStorage.clear();
      setDeployed();
      clearInterval(interval);
    }
  }, 1000); //calling it every 1 second
};

const runDeploy = () => {
  const isDeployed = JSON.parse(localStorage.getItem("isDeployed"));
  const isCountdown = JSON.parse(localStorage.getItem("isCountdown"));
  // deploys dseqr onto aws
  // also resets the destroy timer
  deploy();

  if (isDeployed) {
    setDeployed();
  } else if (!isCountdown) {
    deployCountdown();
  }

  // if already deployed or currently counting down, allow checking if really deployed
  if (isDeployed || isCountdown) {
    window.open("https://dseqr.com");
  }
};
