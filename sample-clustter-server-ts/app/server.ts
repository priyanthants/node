import App from "./src/App";
import cluster from 'cluster';
import Cluster from "./src/Cluster"

if (cluster.isMaster) {
    const clusterObj=new Cluster();
    clusterObj.setClusters();
}else{
    const app=new App();
    app.listen();
    //testingMessageFromCluster(process);
}


function testingMessageFromCluster(process:any) {
    //send message to master
    process.send(`sending message from ${process.pid}`);

    //listen the master
    process.on('message', (message:any)=> {
        console.log(`${process.pid} received message ${message}`);
    });
}





