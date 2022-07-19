// local dependencies
import { MongoClient, ObjectId } from "../libs/mongoClient.js";

const createConnectionToDB = () => {
  const client = new MongoClient(process.env.URI_TO_CONNECT_MONGODB);
  return client;
};

const closeConnectionToDB = async (client) => {
  await client.close();
};

const selectDB = (client, DB_NAME) => {
  return client.db(DB_NAME);
};

const convertToObjectId = (strId) => ObjectId(strId);

export {
  createConnectionToDB,
  closeConnectionToDB,
  selectDB,
  convertToObjectId,
};
