window.addEventListener("load", (event) => {

    Notification.requestPermission()
    .then((result) => {
        if(result == 'granted') {
            const succesfullText = `Hey plantlover, your plant is succesfully uploaded!`;
            const notification = new Notification("Plant Parents update", { body: succesfullText});
        } else {
            console.log('notification denied')
        }
    }) .catch((error) => {
        console.error("An error occurred while requesting permission:", error);
      });

  });