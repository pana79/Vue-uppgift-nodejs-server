const router = require('express').Router()
const Product = require('../models/product')

//Post request -create a new product
router.post('/products', async(req, res) => {
    try {
        let product = new Product()
        product.name = req.body.name
        product.short = req.body.short
        product.desc = req.body.desc
        product.price = req.body.price
        product.image = req.body.image

        await product.save()
        
        res.json({
            success:true,
            message: "Successfully saved"
        })
    }catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})
//GET request -get all products
router.get("/products", async (req, res) => {
    try {
        let products = await Product.find()
        res.json({
            success:true,
            products: products
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})

//GET request -get a single product.


module.exports = router;