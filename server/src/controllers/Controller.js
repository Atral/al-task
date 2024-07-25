module.exports = {
    async get (req, res) {
        try {
            res.send('TEST')
        } catch (err) {
            console.log(err)
            res.status(400).send({error: 'Error'})
        }
    }
}