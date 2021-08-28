<<<<<<< HEAD
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
      console.log("SW Registered!");
      console.log(registration);
    }).catch(error => {
      console.log("SW Registration Failed!");
      console.log(error);
    });
  }
  
=======
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Registration Failed!");
    console.log(error);
  });
}
>>>>>>> 841685f30a45a6737d656f0bcccbb3a47cb0f8db
