// JSON-server with simple auth system

const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const jsonServer = require("hai-server").haijsServer;
const jwt = require("jsonwebtoken");

const USERS_DB_PATH = path.resolve(__dirname, "users.json");
const DB_PATH = path.resolve(__dirname, "db.json");

const server = jsonServer.create();
const router = jsonServer.router(DB_PATH);

const userDb = JSON.parse(fs.readFileSync(USERS_DB_PATH, "UTF-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "TopSecret_1337";
const ACCESS_EXPIRES_IN = "1h";
const REFRESH_EXPIRES_IN = "1d";

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: ACCESS_EXPIRES_IN });
}

function createRefreshToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: REFRESH_EXPIRES_IN });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

function isAuthenticated({ username, password }) {
  return (
    userDb.users.find(
      (user) => user.username === username && user.password === password
    ) ?? false
  );
}

function prepareUser(user) {
  const prepared = { ...user };
  delete prepared["password"];

  return prepared;
}

server.post("/auth/register", (req, res) => {
  const { username, password } = req.body;
  if (isAuthenticated({ username, password })) {
    const status = 401;
    const message = "Username and Password already exist";
    res.status(status).json({ status, message });
    return;
  }

  const lastUserId = userDb.users[userDb.users.length - 1]?.id ?? 0;
  const newUser = {
    id: lastUserId + 1,
    username: username,
    password: password,
  };

  userDb.users.push(newUser);
  fs.writeFileSync(USERS_DB_PATH, JSON.stringify(userDb), (err, result) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
  });

  const access_token = createToken({ username, password });
  const refresh_token = createRefreshToken({ username, password });
  const user = prepareUser(newUser);

  res.status(200).json({ access_token, refresh_token, ...user });
});

server.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  const possibleUser = isAuthenticated({ username, password });
  if (possibleUser === false) {
    const status = 401;
    const message = "Incorrect username or password";
    res.status(status).json({ status, message });
    return;
  }

  const access_token = createToken({ username, password });
  const refresh_token = createRefreshToken({ username, password });
  const user = prepareUser(possibleUser);

  res.status(200).json({ access_token, refresh_token, ...user });
});

server.post("/auth/refresh", (req, res) => {
  const refresh_token = req.body.refresh_token;
  if (!refresh_token) {
    const status = 401;
    const message = "Refresh token not provided";
    res.status(status).json({ status, message });
    return;
  }

  try {
    const decoded = jwt.verify(refresh_token, SECRET_KEY);
    const { username, password } = decoded;
    if (!isAuthenticated({ username, password })) {
      const status = 401;
      const message = "Invalid refresh token";
      res.status(status).json({ status, message });
      return;
    }

    const access_token = createToken({ username, password });
    const refresh_token = createRefreshToken({ username, password });
    res.status(200).json({ access_token, refresh_token });
  } catch (err) {
    const status = 401;
    const message = "Error in refresh token";
    res.status(status).json({ status, message });
  }
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }

  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(" ")[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = "Access token not provided";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Error access_token is revoked";
    res.status(status).json({ status, message });
  }
});

server.use(router);
server.listen(8000, () => {
  console.log("Run Auth API Server on port 8000");
});
