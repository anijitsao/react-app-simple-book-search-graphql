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

const deleteBookFromDB = async (bookToDelete) => {
  // create the connection
  const client = createConnectionToDB();
  try {
    // select the DB and collection
    const db = selectDB(client, DB_NAME);
    const bookDeleted = await db
      .collection(COLLECTION_BOOKS)
      .deleteOne({ _id: convertToObjectId(bookToDelete._id) });
    return bookDeleted.deletedCount;
  } catch (error) {
    return error.toString();
  } finally {
    await closeConnectionToDB(client);
  }
};

const updateBookToDB = async (bookToUpdate) => {
  console.log("Book to update", bookToUpdate);
  // create the connection
  const client = createConnectionToDB();
  try {
    // select the DB and collection
    const db = selectDB(client, DB_NAME);
    const bookDeleted = await db
      .collection(COLLECTION_BOOKS)
      .updateOne(
        { _id: convertToObjectId(bookToUpdate._id) },
        { $set: { ...bookToUpdate.updateBookData } }
      );
    return bookDeleted.modifiedCount;
  } catch (error) {
    return error.toString();
  } finally {
    await closeConnectionToDB(client);
  }
};

export { findBooksFromDB, addBookToDB, deleteBookFromDB, updateBookToDB };
