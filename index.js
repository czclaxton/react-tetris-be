require("dotenv").config();
const server = require("express")();
const cors = require("cors");

require("./leaderboard")(server);
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

// Allow cross-origin
server.use(cors());

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 8000;

server.get("/", (req, res) => {
  res.send("up and running");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
