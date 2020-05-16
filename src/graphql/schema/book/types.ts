import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
} from "graphql";

export const enquiryType = new GraphQLObjectType({
  name: "Enquiries",
  fields: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    message: { type: GraphQLString },
  },
});

export const bookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
    condition: { type: GraphQLString },
    price: { type: GraphQLInt },
    isbn: { type: GraphQLString },
    category: { type: GraphQLString },
    postedBy: { type: GraphQLString },
    status: { type: GraphQLString },
    enquiries: {
      type: new GraphQLList(enquiryType),
    },
    subject: { type: GraphQLString },
  },
});

export const bookInput = new GraphQLInputObjectType({
  name: "BookInput",
  fields: {
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
    condition: { type: GraphQLString },
    price: { type: GraphQLInt },
    isbn: { type: GraphQLString },
    category: { type: GraphQLString },
    status: { type: GraphQLString },
    subject: { type: GraphQLString },
  },
});
