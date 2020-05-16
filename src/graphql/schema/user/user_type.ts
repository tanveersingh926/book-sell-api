import { GraphQLObjectType, GraphQLString } from "graphql";
import dateType from "../../helpers/date_types";

const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    soldAt: { type: dateType },
  },
});

export default userType;
