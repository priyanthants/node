const app = require('express')();

app.listen(3000, (err) => {
    if (err) {
        return console.log(err)
    }
    return console.log(`server is listening on 3000`)
})