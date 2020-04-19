const sleep = (time) => {
    console.log('sleep start');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time)
    })
};

sleep(3000).then(value => {
   console.log('sleep end')
});
