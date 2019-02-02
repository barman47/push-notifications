const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = 'BGnblUFVzRArMB580AeaZFFaLcFrnKK4Q90cOGxqVAAHA0TqSjAl5Zr4tsQc8zQqXp8voT86_TdtZdBkpOSBQjg';
const privateVapidKey = 'x6b-AWJLOdE5HQe1QYm_jk-03mM1Tf_WmUrR1qsjtrg';

webPush.setVapidDetails('mailto:nomsouzoanya@yahoo.co.uk', publicVapidKey, privateVapidKey);

// Subscribe Route

app.post('/subscribe', (req, res) => {
    // Get push subscription object
    const subscription = req.body;

    // Send 201 - resource created
    res.status(200).json({});

    // Create Payload
    const payload = JSON.stringify({ title: 'Push test' });

    // Pass object inot sendNotification
    webPush.sendNotification(subscription, payload).catch((err) => console.log(err));
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});