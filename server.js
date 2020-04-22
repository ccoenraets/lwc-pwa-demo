'use strict';

const express = require('express'),
    path = require('path'),
    compression = require('compression'),
    app = express(),
    ENV = process.env.NODE_ENV || 'development',
    HOST = process.env.HOST || 'localhost',
    PORT = process.env.PORT || 3001,

    contacts = [
        { id: 1, firstName: 'Amy', lastName: 'Taylor', phone: '(415) 256-8563' },
        { id: 2, firstName: 'Michael', lastName: 'Jones', phone: '(415) 852-6633' },
        { id: 3, firstName: 'Jennifer', lastName: 'Wu', phone: '(415) 852-1463' },
        { id: 4, firstName: 'Anup', lastName: 'Gupta', phone: '(415) 852-6398' },
        { id: 5, firstName: 'Caroline', lastName: 'Kingsley', phone: '(415) 875-3654' },
        { id: 6, firstName: 'Jonathan', lastName: 'Bradley', phone: '(415) 888-5522' }
    ];

if (ENV === 'production') {
    app.use((req, res, next) => {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(['https://', req.get('Host'), req.url].join(''));
        }
        return next();
    });
}

app.use(compression());
app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('/api/contacts', (req, res) => {
    res.send(contacts);
});

app.listen(PORT, () =>
    console.log(`✅ Server started: http://${HOST}:${PORT}`)
);