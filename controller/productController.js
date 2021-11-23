const productController = {

    product: (req, res) => {
        res.render('./products/comprar');
    },

    productForm: (req, res) => {
        res.render('./products/productForm');
    },

    productEdit:(req, res) => {
        res.render('./products/productEdit');
    },

    productList:(req, res) => {
        res.render('./products/productList');
    }
}

module.exports = productController;