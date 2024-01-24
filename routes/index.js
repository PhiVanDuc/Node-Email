const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/email_form', emailController.email_form);

router.post('/email_form', emailController.handle_send_email);

router.get('/track/:id', emailController.handle_load_image);

router.get('/email_history', emailController.email_history);

router.get('/email_detail/:id', emailController.email_detail);

module.exports = router;
