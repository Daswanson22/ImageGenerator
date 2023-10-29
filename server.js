const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const os = require('os');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Local server path: http:://${os.hostname}:${PORT}`)
    console.log(`Server is running on port ${PORT}`);
});

app.use('/openai', require('./routes/openAIRoutes'));
// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static("public"));
