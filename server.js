const express = require('express');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static('public'));

app.get("/screenshot", (req, res) => {
  const nightmare = Nightmare({ show: false })

  nightmare
    .goto('http://cnn.com')
    .screenshot()
    .end()
    .then((buf) => res.status(200).send(buf))
})

const listener = app.listen(process.env.PORT, () => console.log('Your app is listening on port ' + listener.address().port))
