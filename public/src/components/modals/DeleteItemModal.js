// npm dependencies
import { useMutation } from "@apollo/client";
import { useState } from "react";

// css
import "../../css/modals.css";

// local dependencies
import { allGraphQLQueries } from "../AllGraphQLQueries";
import Notification from "../Notification";

export default function DeleteItemModal(props) {
  // extract necessary gql query
  const ALL_GRAPHQL_QUERIES = allGraphQLQueries();

  // graphql operations
  const [deleteBook, { data, loading, error }] = useMutation(
    ALL_GRAPHQL_QUERIES.DELETE_BOOK_MUTATION
  );

  console.log("data ", data, " erroor", error, " and loading ", loading);

  // event handlers
  const onClickHandler = () => {
    deleteBook({ variables: { bookId: props.itemToDelete._id } });
    props.deleteItemHandler();
  };

  return (
    <section className="basic-modal-container delete-modal-container padding-1rem">
      {data && (
        <Notification
          notificationMessage={"Data deleted successfully"}
          notificationType={"success"}
        />
      )}
      <div className="title-text title-text-bordered">{props.modalTitle}</div>
      <i
        className="fa-solid fa-xmark icon close-icon"
        onClick={props.deleteItemHandler}
      ></i>
      <article className="basic-modal-details">
        Do you want to delete the book {props?.itemToDelete?.name}?
      </article>
      <button onClick={onClickHandler}>{props.modalButtonText}</button>
    </section>
  );
}
