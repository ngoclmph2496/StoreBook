import React from "react";
import { Ibook } from "../../../../Types/Book_types";
import "./index.scss";
import BMCard from "../../../../components/shared/card";

type Props = {
  loading?: boolean;
  data: Ibook[];
  onEdit: (book: Ibook) => void;
  onDelete: (book: Ibook) => void;
};

const BMBookList = ({ loading = false, data, onEdit, onDelete }: Props) => {
  return (
    <BMCard title="Book List" loading={loading}>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th style={{ width: 150 }}>Book Code</th>
              <th>Book Name</th>
              <th style={{ width: 220 }}>Author</th>
              <th style={{ width: 180 }}>Price</th>
              <th style={{ width: 95, textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody id="tData">
            {data?.length ? (
              <>
                {data.map((book) => (
                  <tr key={book.id}>
                    <td>{book.code}</td>
                    <td>
                      <b>{book.title}</b>
                    </td>
                    <td>{book.author}</td>
                    <td>${book.price}</td>
                    <td className="action">
                      <button type="button" onClick={() => onEdit(book)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        type="button"
                        className="delete"
                        onClick={() => onDelete(book)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td colSpan={5}>
                  {loading ? "Loading..." : "No record found."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </BMCard>
  );
};
export default BMBookList;
