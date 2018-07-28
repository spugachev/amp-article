import express, { Request, Response } from 'express';

const router = express.Router();
export { router as apiRouter };

const bikes = [
    {
        id: 1,
        img: 'img/01.jpg',
        title: 'Первый велосипед',
        price: '28500',
        available: false
    },
    {
        id: 2,
        img: 'img/02.jpg',
        title: 'Второй велосипед',
        price: '14750',
        available: true
    },
    {
        id: 3,
        img: 'img/03.jpg',
        title: 'Третий велосипед',
        price: '31200',
        available: true
    },
    {
        id: 4,
        img: 'img/04.jpg',
        title: 'Четвёртый велосипед',
        price: '9735',
        available: true
    },
    {
        id: 5,
        img: 'img/05.jpg',
        title: 'Пятый велосипед',
        price: '11690',
        available: false
    },
    {
        id: 6,
        img: 'img/06.jpg',
        title: 'Шестой велосипед',
        price: '28500',
        available: true
    },
    {
        id: 7,
        img: 'img/07.jpg',
        title: 'Седьмой велосипед',
        price: '44100',
        available: true
    },
    {
        id: 8,
        img: 'img/08.jpg',
        title: 'Восьмой велосипед',
        price: '26550',
        available: true
    },
    {
        id: 9,
        img: 'img/09.jpg',
        title: 'Девятый велосипед',
        price: '7300',
        available: false
    },
    {
        id: 10,
        img: 'img/10.jpg',
        title: 'Десятый велосипед',
        price: '19250',
        available: true
    }
];

router.get('/bikes', (req: Request, res: Response) => {
    let query = req.query.q;

    if (query) {
        query = query.toLowerCase();
        const filteredBikes = bikes.filter(bike => bike.title.toLowerCase().indexOf(query) !== -1);
        res.json(filteredBikes);
    } else {
        res.json(bikes);
    }
});