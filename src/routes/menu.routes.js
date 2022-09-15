const express = require('express');
const router = express.Router();

const menusCtrl = require('../controllers/menu.controller');

router.get('/api/menus',menusCtrl.getMenus)
router.post('/api/menus',menusCtrl.createMenu)
router.get('/api/menus/:id',menusCtrl.getMenu)
router.put('/api/menus/:id',menusCtrl.editMenu)
router.delete('/api/menus/:id',menusCtrl.deleteMenu)

router.get('/menus',menusCtrl.renderMenus)
router.get('/menus/new',menusCtrl.renderFormMenu)
router.post('/menus/new',menusCtrl.addNewMenu)
router.delete('/menus/delete/:id',menusCtrl.deleteMenuById)

module.exports = router;