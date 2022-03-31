const app = require("./index");

const connect = require("./config/db");

app.listen(4000, async (req, res) => {
  try {
    await connect();

    console.log("listening to the port 4000");
  } catch (error) {
    console.log(error.message);
  }
});