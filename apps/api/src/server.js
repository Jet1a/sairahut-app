const express = require('express');
const path = require('path');
const cors = require('cors');

const userRouter = require('./routes/users.route');
const adminRouter = require('./admin/routes/admin.route');
const logEvents = require('./admin/middlewares/logEvents');
const { connectDB } = require('./utils/mongodb.utils');
const { PORT } = require('./config');

const app = express();

// MIDDLEWARES
app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logEvents);

app.use('/users', userRouter);
app.use('/admin', adminRouter);

app.listen(PORT, async () => {
  await connectDB().then(() => {
    console.log(`Server is running on PORT:${PORT}`);
  });
});
