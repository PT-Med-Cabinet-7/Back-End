const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const productsRouter = require("../strains/strains-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/products", authenticate, productsRouter);

// Worked on Insomnia
server.get("/", (req, res) => {
  res.json({ message: "Server is UP!" });
});

module.exports = server;
