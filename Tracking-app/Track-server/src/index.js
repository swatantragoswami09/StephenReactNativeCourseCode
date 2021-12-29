require("./models/User");
require("./models/Track");

const express = require("express");

const mangoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const trackRoutes = require("./routes/trackRoutes");

const app = express();
app.use(bodyParser.json());
app.use(authRouter);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://root:root@cluster0.1ygiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
if (!mongoUri) {
  throw new Error(`MongoURi was not supplied: Make sure you watch it`);
}
mangoose.connect(mongoUri, {
  useNewUrlParser: true,
  //   useCreateIndex: true,
});
mangoose.connection.on("connected", () => {
  console.log("connected to mongo instance");
});
mangoose.connection.on("error", (err) => {
  console.error("Error connection to mongo instance", err);
});
app.get("/", requireAuth, (req, res) => {
  res.send(`Your email:${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listing on 3000");
});
