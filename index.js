const server = require("express")();

const port = Number(process.env.PORT) || 8000;

server.get("/", (req, res) => {
  res.send("localhost listens and obeys");
});

server.listen(port, () =>
  console.log("Server running on http://localhost:8000")
);
