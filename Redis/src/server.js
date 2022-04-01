const app = require("./index");

const connect = require("./configs/db");

app.listen(6800, async function () {
  try {
    await connect();
    console.log("Listening on port 6800");
    
  } catch (err) {

    console.log(err.message);
  }
});
