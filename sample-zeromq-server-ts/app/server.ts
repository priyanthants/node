import App from "./src/App";
import Publisher from "./src/Publisher";


const app = new App();
const publisher=new Publisher();

app.listen(3000);
publisher.bind(3001);


