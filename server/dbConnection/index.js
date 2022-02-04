import mongoose from "mongoose";

const DB_CONNECTION_URL = `mongodb+srv://obomheire:Secret%40123@cluster0.ztwoi.mongodb.net/whatsappclone_personal_db?retryWrites=true&w=majority`;

const connectDB = () => {
  console.log("DB trying to connect on " + new Date());

  const options = {
    keepAlive: 1,
    maxPoolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return mongoose.connect(DB_CONNECTION_URL, options);
};
export default connectDB;
