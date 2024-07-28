const wiki = require('wikipedia')

module.exports = {
    async getPageData (req, res) {
        try {
            const page = await wiki.page(req.body.searchUrl.split('/').pop());
            if(!page.fullurl.toLowerCase() === req.body.searchUrl.toLowerCase()) throw('URL not found.')

            const summary = await page.summary();
            const content = await page.content();

            const containsWordBankruptcy = content.toLowerCase().includes('bankruptcy');
            const containsWordFraud = content.toLowerCase().includes('fraud');

            const bankruptcyInfo = content.split('Bankruptcy').pop().split('\n\n')[0].replace('=', '');

            res.send({isBankrupt: containsWordBankruptcy, committedFraud: containsWordFraud, bankruptcyInfo: bankruptcyInfo});

        } catch (err) {
            console.log(err)
            res.status(400).send({error: 'Error'})
        }
    }
}