import React, { useEffect, useState } from "react";
import "./index.scss";
import BMBookForm from "./Form";
import { Ibook } from "../../../Types/Book_types";
import { DEFAULT_BOOK_ITEM } from "../../../constants/common";
import BMBookList from "./List";
import {
  craeteBook,
  deleteBook,
  editBook,
  getBook,
  getBooks,
} from "../../../Services/book-api";
import { toast } from "react-toastify";
import { APP_MESSAGES } from "../../../constants/messages";
import SweetAlert2 from "react-sweetalert2";

const BMBooksPage = () => {
  const [selectedBook, setSelectedBook] = useState<Ibook>(DEFAULT_BOOK_ITEM);
  const [deleteItem, setDeleteItem] = useState<Ibook | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [books, setBoooks] = useState<Ibook[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getBook()
      .then((response) => {
        setBoooks(response);
        setSelectedBook(DEFAULT_BOOK_ITEM);
      })
      .catch(() => {
        toast.error(APP_MESSAGES.ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEdit = (book: Ibook) => {
    if (!book?.id) return;
    setLoading(true);
    getBooks(book.id)
      .then((response) => {
        setSelectedBook(response);
      })
      .catch(() => {
        toast.error(APP_MESSAGES.ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleaddBook = (formData: Ibook) => {
    setSelectedBook(formData);
    setLoading(true);
    if (!formData.id) {
      craeteBook(formData)
        .then(() => {
          toast.success(APP_MESSAGES.CREATE_BOOK_SUCCESS);
          loadData();
        })
        .catch(() => {
          toast.error(APP_MESSAGES.ERROR);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      editBook(formData)
        .then(() => {
          toast.success(APP_MESSAGES.UPDATE_BOOK_SUCCESS);
          loadData();
        })
        .catch(() => {
          toast.error(APP_MESSAGES.ERROR);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleDelete = (book: Ibook) => {
    setDeleteItem(book);
  };

  const handDeleteComfirm = (confirmed: boolean) => {
    if (confirmed) {
      if (!deleteItem?.id) return;
      setLoading(true);
      deleteBook(deleteItem.id)
        .then(() => {
          toast.success(APP_MESSAGES.DELETE_BOOK_SUCCESS);
          loadData();
        })
        .catch(() => {
          toast.error(APP_MESSAGES.ERROR);
        })
        .finally(() => {
          setDeleteItem(undefined);
          setLoading(false);
        });
    } else {
      setDeleteItem(undefined);
    }
  };

  return (
    <div className="bm-book">
      <div className="title">
        Welcome to My <span>Bookstore!</span>
      </div>
      <div className="sub-title">Oct 19, 2023 | Thursday, 11:00 AM</div>
      <BMBookForm
        loading={loading}
        initValue={selectedBook}
        onSubmitted={handleaddBook}
      />
      <BMBookList
        loading={loading}
        data={books}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <SweetAlert2
        show={deleteItem !== undefined}
        html={`${APP_MESSAGES.CONFIRM_DELETE}<br/><b>${deleteItem?.title} ?</b>`}
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
        showCancelButton
        buttonsStyling={false}
        customClass={{
          confirmButton: "bm-btn",
          cancelButton: "bm-btn bm-btn-secondary",
        }}
        onConfirm={handDeleteComfirm}
      />
    </div>
  );
};
export default BMBooksPage;
