const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

module.exports = function (app) {
    // 1. CORS ni yoqish
    app.use(cors());

    // 2. Helmet ni to'g'ri sozlash (agar yoqmoqchi bo'lsangiz)
    // Agar rasm chiqmayotgan bo'lsa, crossOriginResourcePolicy ni false yoki cross-origin qilish kerak
    app.use(helmet({
        crossOriginResourcePolicy: false, 
    }));

    app.use(express.json());

    // 3. Static fayllar uchun maxsus sarlavha qo'shish
    const staticOptions = {
        setHeaders: (res) => {
            res.set('Cross-Origin-Resource-Policy', 'cross-origin');
        }
    };

    app.use(express.static('public', staticOptions));
    app.use(express.static('uploads', staticOptions));
    app.use('/uploads', express.static(path.join(process.cwd(), 'uploads'), staticOptions));
    app.use('/caruselImg', express.static(path.join(__dirname, '../caruselImg'), staticOptions));

    app.set('view engine', 'ejs');
};
