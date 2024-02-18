const express = require('express')

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })) // to support URL-encoded bodies

// Routes
const apiRoutes = require("./routes/Api.routes");
app.use(apiRoutes.routerPrefix, apiRoutes.router);

// Start server
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})