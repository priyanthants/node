import express from 'express';
import cluster from 'cluster';

class Cluster {
    public numWorkers: Number;
    constructor() {
        this.numWorkers = require('os').cpus().length;
        console.log(`Master cluster setting up ${this.numWorkers} workers...`);
    }



    public setClusters() {
        for (let i = 0; i < this.numWorkers; i++) {
            let worker = cluster.fork();

            //this.testingMessageFromMaster(worker);
        }

        cluster.on('online', function (worker) {
            console.log(`Worker  ${worker.process.pid}  is online`);
        });
    
        cluster.on('exit', function (worker, code, signal) {
            console.log(`Worker {$worker.process.pid}  died with code:  ${code}  and signal: ${signal}`);
            console.log('Starting a new worker');
            cluster.fork();
        });
    }


    public testingMessageFromMaster(worker:any) {
        //listern the worker
        worker.on('message', (message:any)=> {
            console.log(`master receive  ${message}`);
        });

        //send msg to worker
        worker.send(`sending message from master`);
    }
}

export default Cluster;