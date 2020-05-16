import { GraphQLString } from "graphql";
import Book from "../../../model/book";
import { bookInput } from "./types";
import user from "../../../model/user";
import category from "../../../model/category";
import mongoose from "mongoose";

const bookMutation = {
  type: GraphQLString,
  args: {
    book: {
      type: bookInput,
    },
  },
  resolve: (_, { book }: any, context) => {
    // console.log(book);
    user
      .findOne()
      .then((user) => {
        return category.findOne().then((cate) => {
          const newBook = new Book({
            _id: mongoose.Types.ObjectId(),
            title: book.title,
            image: book.image,
            author: book.author,
            description: book.description,
            condition: book.condition,
            price: book.price,
            isbn: book.isbn,
            category: cate?._id,
            postedBy: user?._id,
            status: book.status,
            subject: book.subject,
          });
          return newBook.save();
        });
      })
      .then((book) => {
        console.log(book);
      });
    return "A new book created";
  },
};

export default bookMutation;
