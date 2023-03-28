import {
    createConnectionToDB,
    closeConnectionToDB,
    selectDB,
    convertToObjectId,
  } from "../helpers/dbHelpers.js";
  
  // all the db related process variables
  const { DB_NAME, COLLECTION_AUTHORS } = process.env;
  
  const findAuthorsFromDB = async () => {
    // create the connection
    const client = createConnectionToDB();
    try {
      // select the DB and collection
      const db = selectDB(client, DB_NAME);
      const booksFound = await db.collection(COLLECTION_AUTHORS).find({}).toArray();
      const res = booksFound || [];
      return res;
    } catch (error) {
      return error.toString();
    } finally {
      await closeConnectionToDB(client);
    }
  };
  
  const addAuthorToDB = async (bookToAdd) => {
    // create the connection
    const client = createConnectionToDB();
    try {
      // select the DB and collection
      const db = selectDB(client, DB_NAME);
      const bookInserted = await db
        .collection(COLLECTION_AUTHORS)
        .insertOne(bookToAdd);
      return { _id: bookInserted.insertedId, ...bookToAdd };
    } catch (error) {
      return error.toString();
    } finally {
      await closeConnectionToDB(client);
    }
  };
  
  const deleteAuthorFromDB = async (bookToDelete) => {
    // create the connection
    const client = createConnectionToDB();
    try {
      // select the DB and collection
      const db = selectDB(client, DB_NAME);
      const bookDeleted = await db
        .collection(COLLECTION_AUTHORS)
        .deleteOne({ _id: convertToObjectId(bookToDelete._id) });
      return bookDeleted.deletedCount;
    } catch (error) {
      return error.toString();
    } finally {
      await closeConnectionToDB(client);
    }
  };
  
  const updateAuthorToDB = async (bookToUpdate) => {
    console.log("Author to update", bookToUpdate);
    // create the connection
    const client = createConnectionToDB();
    try {
      // select the DB and collection
      const db = selectDB(client, DB_NAME);
      const bookDeleted = await db
        .collection(COLLECTION_AUTHORS)
        .updateOne(
          { _id: convertToObjectId(bookToUpdate._id) },
          { $set: { ...bookToUpdate.updateAuthorData } }
        );
      return bookDeleted.modifiedCount;
    } catch (error) {
      return error.toString();
    } finally {
      await closeConnectionToDB(client);
    }
  };
  
  export { findAuthorsFromDB, addAuthorToDB, deleteAuthorFromDB, updateAuthorToDB };
  