import APP from "express";
import connectDB from "./dbConnection";
import configureExpressApp from "./config";
import applyRoutes from "./routes";

const app = new APP();
configureExpressApp(app)
// require("./config")(app);

const PORT = 3005;

const startServer = () => {
  Promise.all([connectDB()])
    .then(() => {
      app.listen(PORT);
      console.log(`Server started on Port ${PORT}`);
      applyRoutes(app);
    })
    .catch((error) => console.error(`Unable to start the server`, error));
};

startServer();
