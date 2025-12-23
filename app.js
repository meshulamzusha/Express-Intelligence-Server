import express from 'express';
import healthRouter from './src/routes/healthRouter.js';
import usersRouter from './src/routes/usersRouter.js'

const app = express();
const port = 3000;

app.use(express.json())


app.use('/health', healthRouter);
app.use('/users', usersRouter)


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})
