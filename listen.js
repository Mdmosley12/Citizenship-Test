const app = require("./app/index");

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
