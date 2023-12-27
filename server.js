const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const server = next({ dev });
const handle = server.getRequestHandler();

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log("DB Connection Successfully");
  });

const port = process.env.PORT || 3000;
server.prepare().then(() => {
  app.get("*", (req, res) => {
    return handle(req, res);
  });
  app.listen(port, () => {
    console.log(`App running on port ${port}....`);
  });
});

// console.log(app.get("env"));
// console.log(process.env);

// const nftSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "A NFT must have a name"],
//     unique: true,
//   },
//   rating: {
//     type: Number,
//     default: 4.5,
//   },
//   price: {
//     type: Number,
//     required: [true, "A NFT must have price"],
//   },
// });

// const testNFT = new NFT({
//   name: "Ragavi NFT",
//   rating: 3.2,
//   price: 567,
// });

// testNFT
//   .save()
//   .then((docNFT) => {
//     console.log(docNFT);
//   })
//   .catch((error) => {
//     console.log("ERROR:", error);
//   });

// const NFT = mongoose.model("NFT", nftSchema);
