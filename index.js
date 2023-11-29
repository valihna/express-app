const app = require("./app");
const PORT = 6001;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${PORT}`);
  }
});
