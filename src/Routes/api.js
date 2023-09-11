const express = require('express');
const router = express.Router();

const {
  create,
  read,
  deleteItem,
  update,
} = require('../Controllers/blogController');

const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');


router.get('/blog/create', create); 
router.get('/blog/read', read); 
router.get('/blog/delete', deleteItem);
router.get('/blog/update', update); 


router.get('/comments/create', commentController.create);
router.get('/comments/read', commentController.read);
router.get('/comments/delete', commentController.deleteItem);
router.get('/comments/update', commentController.update);


router.get('/messages/create', messageController.create);
router.get('/messages/read', messageController.read);
router.get('/messages/delete', messageController.deleteItem);
router.get('/messages/update', messageController.update);

router.get('/portfolios/create', portfolioController.create);
router.get('/portfolios/read', portfolioController.read);
router.get('/portfolios/delete', portfolioController.deleteItem);
router.get('/portfolios/update', portfolioController.update);


router.get('/products/create', productController.create);
router.get('/products/read', productController.read);
router.get('/products/delete', productController.deleteItem);
router.get('/products/update', productController.update);

module.exports = router;
