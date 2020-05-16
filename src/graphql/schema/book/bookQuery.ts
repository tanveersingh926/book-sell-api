import { GraphQLList, GraphQLString } from "graphql";
import Book from "../../../model/book";
import { bookType } from "./types";

const bookResolver = {
  type: new GraphQLList(bookType),
  // `args` describes the arguments that the `user` query accepts
  args: {
    _id: { type: GraphQLString },
  },
  resolve: (_, { _id }: { _id?: string }) => {
    return _id !== null && _id !== undefined
      ? Book.findById(_id)
          .exec()
          .then((book) => {
            return [book];
          })
      : Book.find();
  },
};

export default bookResolver;
