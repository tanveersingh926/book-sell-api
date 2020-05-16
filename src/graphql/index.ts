import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";
import userResolver from "./schema/user/user_resolver";
import userType from "./schema/user/user_type";
import fakeDatabase from "../utils/database";

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
  },
});

// Define the mutation type
export const mutationType = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
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
