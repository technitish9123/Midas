const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;
const myRoutes = require('./src/routes.js');
app.use('/api', myRoutes);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
