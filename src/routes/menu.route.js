const express = require('express');
const router = express.Router();

const menusCtrl = require('../controllers/menu.controller');

router.get('/',menusCtrl.getMenus)
router.post('/',menusCtrl.createMenu)
router.get('/:id',menusCtrl.getMenu)
router.put('/:id',menusCtrl.editMenu)
router.delete('/:id',menusCtrl.deleteMenu)

module.exports = router;