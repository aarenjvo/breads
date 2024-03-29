const router = require('express').Router()
const Bread = require('../models/bread')


// GET retrieve all the bread
router.get('/', async (req, res) => {
    try {
        const bread = await Bread.find()
        res.render('index', {
            breads: bread
        })
    } catch (error) {
        console.log('error:', error)
        res.json({ message: 'error getting bread' })
    }
})

// Render New page
router.get('/new', (req, res) => {
    res.render('new')
})

// GET retrieve bread by index
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('show', {
        bread
    })
})

router.get('/:index/edit', (req, res) => {
    const { index } = req.params
    res.render('edit', {
        bread: Bread[index],
        index
    })
})

// CREATE
router.post('/', async (req, res) => {
    if (!req.body.image) req.body.image = undefined
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    await Bread.create(req.body)
    res.redirect('/bread')
})

// UPDATE w/ PUT bread
router.put('/:index', (req, res) => {
    const { index } = req.params
    if (!req.body.image) req.body.image = 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg'
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[index] = req.body
    res.redirect(`/bread/${index}`)
})

// DELETE bread
router.delete('/:index', (req, res) => {
    const { index } = req.params
    Bread.splice(index, 1)
    res.redirect('/bread')
})

module.exports = router