const app = require("./app/index");

const PORT = process.env.APP_PORT;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
