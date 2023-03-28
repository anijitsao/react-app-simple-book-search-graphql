// npm dependencies
import { useMutation } from "@apollo/client";
import { useState } from "react";

// css
import "../../css/modals.css";

// local dependencies
import { allGraphQLQueries } from "../AllGraphQLQueries";
import Loading from "../Loading";
import Notification from "../Notification";

export default function AddItemModal(props) {
  const [itemDetails, setItemDetails] = useState({
    bookName: "",
    published: "",
  });

  // extract necessary gql query
  const ALL_GRAPHQL_QUERIES = allGraphQLQueries();

  // graphql operations
  const [addBook, { data, loading, error }] = useMutation(
    ALL_GRAPHQL_QUERIES.ADD_BOOKS_MUTATION
  );

  console.log("data ", data, " erroor", error, " and loading ", loading);

  // event handlers
  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setItemDetails({ ...itemDetails, [id]: value });
  };

  const onClickHandler = (e) => {
    console.log("Item Details", itemDetails);
    if (itemDetails.bookName) {
      addBook({ variables: { bookName: itemDetails.bookName } });
      setItemDetails({ ...itemDetails, bookName: "", published: "" });
    }
  };

  return (
    <section className="basic-modal-container padding-1rem">
      {data && (
        <Notification
          notificationMessage={"Data saved successfully"}
          notificationType={"success"}
        />
      )}
      <div className="title-text title-text-bordered">{props.modalTitle}</div>
      <i
        className="fa-solid fa-xmark icon close-icon"
        onClick={props.addItemHandler}
        title="Close"
      ></i>
      <article className="basic-modal-details">
        <label className="result-metadata result-metadata-title">
          Book Name
        </label>
        <input
          type="text"
          id="bookName"
          value={itemDetails.bookName}
          onChange={onChangeHandler}
        />
        <label className="result-metadata result-metadata-title">
          Published Year
        </label>
        <input
          type="text"
          id="published"
          value={itemDetails.published}
          onChange={onChangeHandler}
        />
      </article>
      <button onClick={onClickHandler}>{props.modalButtonText}</button>
      {loading && <Loading />}
    </section>
  );
}
