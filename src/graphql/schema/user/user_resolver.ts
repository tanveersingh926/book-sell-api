import { GraphQLList, GraphQLInt } from "graphql";
import fakeDatabase from "../../../utils/database";
import userType from "./user_type";

const userResolver = {
  type: new GraphQLList(userType),
  // `args` describes the arguments that the `user` query accepts
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, { id }: { id?: number }) => {
    return id !== null && id !== undefined
      ? [fakeDatabase[id]]
      : [...fakeDatabase];
  },
};
export default userResolver;
