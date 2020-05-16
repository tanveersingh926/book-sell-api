import express from "express";
import graphqlHTTP from "express-graphql";
import { GraphQLSchema } from "graphql";
import expressPlayground from "graphql-playground-middleware-express";
import queryType, { mutationType } from "./src/graphql";
import mongoose from "mongoose";
import user from "./src/model/user";
import book from "./src/model/book";
import category from "./src/model/category";

// Use connect method to connect to the Server
mongoose
  .connect(process.env.MONGO_DB!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database login successfull");
  })
  .catch((err) => {
    console.log(err, "Database login failed");
  });

const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });

// user.findOne().then((user) => {
//   category.findOne().then((cate) => {
//     const newBook = new book({
//       _id: mongoose.Types.ObjectId(),
//       title: "The Great Gatsby",
//       image: "dsfsdf",
//       author: "Tanveer Singh",
//       description: "This book is about the love life a loser person.",
//       condition: "USED",
//       price: 1254,
//       isbn: "21685231H",
//       category: cate?._id,
//       postedBy: user?._id,
//       status: "active",
//       enquiries: [
//         {
//           name: "some string",
//           email: "some string",
//           phone: "some string",
//           message: "some string",
//         },
//       ],
//       subject: "Economics",
//     });
//     newBook.save();
//     // user?._id
//   });
// });

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(4000, () =>
  console.log("Running a GraphQL API server at localhost:4000/graphql")
);
