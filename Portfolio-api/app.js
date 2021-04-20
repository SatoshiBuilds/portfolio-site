const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express();



app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Acesss-Control-Allow-Origin', '*');   //Change later as well
    res.setHeader('Acesss-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Acesss-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: running1')
});


app.post('/api/email', (req, res, next) =>{

    sendGrid.setApiKey('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')
    const msg ={
        to:'michaelbatelka@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message

    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });

        })
        .catch(err => {
            console.log('error: ', err);
            res.status(401).json({
                success: false
            });
        })
        

});


app.listen(3030,'0.0.0.0');

