const Url = require('../models/url')

const getHome = async (req, res) => {
    try {
        const prevUrls = await Url.find().sort({ createdAt: -1 }).limit(5)
        console.log('urls fetched successfully')
        res.render('main', { prevUrls })
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Error fetching URLs')
    }
}

const addNewUrl = async (req, res) => {
    const newUrl = new Url(req.body)
    try {
        newUrl.shorturl = `http://localhost:3000/${newUrl.alias}`
        await newUrl.save()
        console.log('new url saved')
        res.redirect('/')
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Error Saving Data')
    }
}

const shorturlHandling = async (req, res) => {
    const alias_ = req.params.alias
    try {
        const url = await Url.findOne({ alias: alias_ })
        if (url) {
            res.redirect(url.longurl)
            console.log("redirection Done")
        }
        else {
            console.log("No URL found for alias:", alias_);
            return res.status(404).render('404');
        }
    }
    catch (err) {
        console.log(err)
        res.render('404')
    }
}

const deleteUrl = async (req, res) => {
    const { id } = req.params
    try {
        await Url.findByIdAndDelete(id)
        console.log('url deleted')
        res.redirect('/')
    }
    catch (err) {
        console.log(err)
        res.status(500).send('unexpected error')
    }
}


module.exports = {
    getHome,
    addNewUrl,
    shorturlHandling,
    deleteUrl
}