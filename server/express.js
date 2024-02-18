const express = require('express')

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })) // to support URL-encoded bodies

// Routes
app.use('/api', require("./routes/Api.routes"));

// Start server
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})