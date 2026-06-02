import express from 'express';
import cors from 'cors';
import router from '../routes/items.ts';

const app = express();

app.use((req, _, next) => {
    console.log(`Päring tuli: ${req.method} ${req.url}`);
    next();
});

app.use(cors());
app.use(express.json());

app.use('/api/items', router);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server töötab pordil ${PORT}`));