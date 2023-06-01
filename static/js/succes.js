window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    Notification.requestPermission().then((result) => {
        console.log(result);

        if(result == 'granted') {
            const succesfullText = `Hey plantlover, your plant is succesfully uploaded!`;
            const notification = new Notification("Plant Parents update", { body: succesfullText});
        } else {
            console.log('notification denied')
        }
    })
  });