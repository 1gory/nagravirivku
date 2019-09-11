import express from 'express';
import mailer from '../services/mailer';

const router = express.Router();

router.post('/order', async (req, res, next) => {
  try {
    const ip = req.headers['x-forwarded-for'];
    const phone = req.body.phone;
    const name = req.body.name;
    const filePath = req.body.filePath ? `nagravirovku.ru/${req.body.filePath}` : '';

    mailer('CASPLASE.RU Заявка', { phone, name, filePath});

    res.json({
      status: 'success',
    });
  } catch (e) {
    next(e);
  }
});


export default router;
