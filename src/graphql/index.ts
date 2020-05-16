import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";
import userResolver from "./schema/user/user_resolver";
import userType from "./schema/user/user_type";
import booksQuery from "./schema/book/bookQuery";
import fakeDatabase from "../utils/database";
import bookMutation from "./schema/book/bookMutation";

const categoriesType = {
  type: new GraphQLList(GraphQLString),
  resolve: () => ["asdsdsd", "sfss"],
};

// Define the Query type
const queryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: userResolver,
    categories: categoriesType,
    books: booksQuery,
  },
});

// Define the mutation type
export const mutationType = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    addBook: bookMutation,
    setCategory: {
      type: userType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: (_, { name }, context) => fakeDatabase[0],
    },
  },
});

export default queryType;
