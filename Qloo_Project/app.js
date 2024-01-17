const express = require('express');
const usersRouter = require('./routes/usersRouter');
const postsRouter = require('./routes/postsRouter');

const app = express();
const port = 3000;

app.use(usersRouter)
app.use(postsRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});