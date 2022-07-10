require('dotenv').config();
const { app } = require('.');

const hostname = "localhost";
const port = 4000;

app.listen(process.env.PORT || port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});