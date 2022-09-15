const express = require('express');
const router = express.Router();

const menusCtrl = require('../controllers/menu.controller');
const menusApi = require('../api/menus');

router.get('/api/menus',menusApi.getMenus)
router.post('/api/menus',menusApi.createMenu)
router.get('/api/menus/:id',menusApi.getMenu)
router.put('/api/menus/:id',menusApi.editMenu)
router.delete('/api/menus/:id',menusApi.deleteMenu)

router.get('/menus',menusCtrl.renderMenus)
router.get('/menus/new',menusCtrl.renderFormMenu)
router.get('/menus/edit/:id',menusCtrl.renderEditFormMenu)
router.post('/menus/new',menusCtrl.addNewMenu)
router.delete('/menus/delete/:id',menusCtrl.deleteMenuById)
router.put('/menus/edit/:id',menusCtrl.updateMenu)

module.exports = router;