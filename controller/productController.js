const productController = {

    product: (req, res) => {
        res.render('./products/comprar');
    },

    productForm: (req, res) => {
        res.render('./products/productForm');
    },

    productEdit:(req, res) => {
        res.render('./products/productEdit');
    }
}

module.exports = productController;