// npm dependencies
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";

// local dependencies
import { allGraphQLQueries } from "./AllGraphQLQueries";
import ShowResults from "./ShowResults";
import AddItemModal from "./modals/AddItemModal";
import DeleteItemModal from "./modals/DeleteItemModal";
import EditItemModal from "./modals/EditItemModal";
import Loading from "./Loading";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");
  const [addItem, setAddItem] = useState(false);
  const [deleteItem, setDeleteItem] = useState({
    showDeleteItemModal: false,
    itemToDelete: null,
  });
  const [editItem, setEditItem] = useState({
    showEditItemModal: false,
    itemToEdit: null,
  });

  // extract necessary gql queries
  const ALL_GRAPHQL_QUERIES = allGraphQLQueries();
  const FIND_BOOKS_QUERY = ALL_GRAPHQL_QUERIES.FIND_BOOKS_QUERY;

  // query graphql server
  const [findBooks, { loading, error, data }] = useLazyQuery(FIND_BOOKS_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  console.log("loading", loading, " and error ", error, " and data ", data);

  const onClickHandler = () => {
    console.log("search text: ", searchText);
    findBooks();
  };

  return (
    <section className="padding-1rem align-center search-container">
      <div className="title-text">Search Books</div>
      <input
        type="text"
        placeholder="Enter book name to search"
        className="padding-1rem"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={onClickHandler}>Search</button>
      {loading && <Loading />}
      {data && (
        <ShowResults
          results={data.findBooks}
          resultTitle={"Books"}
          addItemHandler={() => setAddItem(true)}
          deleteItemHandler={(ele) =>
            setDeleteItem({
              ...deleteItem,
              showDeleteItemModal: true,
              itemToDelete: ele,
            })
          }
          editItemHandler={(ele) =>
            setEditItem({
              ...editItem,
              showEditItemModal: true,
              itemToEdit: ele,
            })
          }
        />
      )}
      {addItem && (
        <AddItemModal
          modalTitle={"Add Book"}
          modalButtonText={"Save"}
          addItemHandler={() => setAddItem(false)}
        />
      )}
      {editItem.showEditItemModal && (
        <EditItemModal
          modalTitle={"Edit Book"}
          modalButtonText={"Save"}
          itemToEdit={editItem.itemToEdit}
          editItemHandler={() =>
            setEditItem({
              ...editItem,
              showEditItemModal: false,
              itemToEdit: null,
            })
          }
        />
      )}
      {deleteItem.showDeleteItemModal && (
        <DeleteItemModal
          modalTitle={"Delete Book"}
          modalButtonText={"Confirm"}
          itemToDelete={deleteItem.itemToDelete}
          deleteItemHandler={() =>
            setDeleteItem({
              ...deleteItem,
              showDeleteItemModal: false,
              itemToDelete: null,
            })
          }
        />
      )}
    </section>
  );
}
