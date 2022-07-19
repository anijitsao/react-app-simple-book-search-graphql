import {
  createConnectionToDB,
  closeConnectionToDB,
  selectDB,
  convertToObjectId,
} from "../helpers/dbHelpers.js";

// all the db related process variables
const { DB_NAME, COLLECTION_BOOKS } = process.env;

const findBooksFromDB = async () => {
  // create the connection
  const client = createConnectionToDB();
  try {
    // select the DB and collection
    const db = selectDB(client, DB_NAME);
    const booksFound = await db.collection(COLLECTION_BOOKS).find({}).toArray();
    const res = booksFound || [];
    return res;
  } catch (error) {
    return error.toString();
  } finally {
    await closeConnectionToDB(client);
  }
};

const addBookToDB = async (bookToAdd) => {
  // create the connection
  const client = createConnectionToDB();
  try {
    // select the DB and collection
    const db = selectDB(client, DB_NAME);
    const bookInserted = await db
      .collection(COLLECTION_BOOKS)
      .insertOne(bookToAdd);
    return { _id: bookInserted.insertedId, ...bookToAdd };
  } catch (error) {
    return error.toString();
  } finally {
    await closeConnectionToDB(client);
  }
};

export { findBooksFromDB, addBookToDB };
