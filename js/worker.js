function startWorker() {
    i = i + 1;
    postMessage(i);
    setTimeout("locationLive()",10000);
}

startWorker();