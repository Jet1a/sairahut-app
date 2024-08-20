const express = require('express');
const path = require('path');
const cors = require('cors');

const userRouter = require('./routes/users.route');
const authRouter = require('./routes/auth.route');
const logEvents = require('./middlewares/logEvents');
const { connectDB } = require('./utils/mongodb.utils');
const { PORT } = require('./config');
 
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logEvents);

app.use('/users', userRouter);
app.use('/auth', authRouter)

app.listen(PORT, async () => {
  await connectDB().then(() => {
    console.log(`Server is running on PORT:${PORT}`);
  });
});
