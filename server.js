const express = require("express");
const app = express();
const PORT = process.env.PORT || 3004;

// Adding two numbers with GET
app.get('/addTwoNumbers', (req, res) => {
    const { num1, num2 } = req.query;

    const result = parseFloat(num1) + parseFloat(num2);
    const response = {
        result: result,
        message: "yay that worked!",
        statuscode: 200
    };
    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
