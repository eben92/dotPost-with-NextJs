import mongoose from "mongoose";

const connection = {};

// check if we do have a connection alread set to the database
// if we do we return else

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

export default dbConnect;
