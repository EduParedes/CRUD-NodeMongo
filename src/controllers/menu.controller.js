const Menu = require('../model/Menu');
const fs = require('fs');
const path = require('path');

const renderMenus = async (req,res)=>{
    const menus = await Menu.find();
    console.log(menus);
    res.render('menus/menus',{
        title:'Menus Delivery',
        menus:menus.map(menu=>menu.toJSON())})
}

const renderFormMenu = (req,res)=>{
    res.render('menus/form-menu',{title:'New Menu'})
}

const renderEditFormMenu = async (req,res)=>{
    const menu = await Menu.findById(req.params.id).lean();
    res.render('menus/edit-menu',{
        title:'Edit Menu',
        menu})
}

const addNewMenu = async (req,res)=>{
    const publicPath = path.join(__dirname,'../public')
    const menu = {
        starter:req.body.starter,
        main:req.body.main,
        dessert:req.body.dessert,
        image:{
            data: fs.readFileSync(path.join(publicPath, '/uploads/' + req.file.filename)),
            contentType: req.file.mimetype
        },
        price:req.body.price
    }
    const newMenu = new Menu(menu);
    await newMenu.save();
    req.flash('success_msg','New menu added successfully')
    res.redirect('/menus')
}

const deleteMenuById = async (req,res)=>{
    const id = req.params.id;
    await Menu.findByIdAndDelete(id);
    req.flash('success_msg','Menu deleted successfully')
    res.redirect('/menus');
}

const updateMenu = async (req,res)=>{
    const {id} = req.params;
    await Menu.findByIdAndUpdate(id,req.body);
    req.flash('success_msg','Menu updated successfully')
    res.redirect('/menus');
}

const searchMenu = async (req,res)=>{
    const {value,type_menu} = req.body;
    if (type_menu === 'starter'){
        const menus = await Menu.find({"starter":{"$regex":`${value}`,"$options":"i"}})
        res.render('menus/menus',{
            title:'Menus Delivery',
            menus:menus.map(menu=>menu.toJSON())
        })
    }
    if (type_menu === 'main'){
        const menus = await Menu.find({"main":{"$regex":`${value}`,"$options":"i"}})
        res.render('menus/menus',{
            title:'Menus Delivery',
            menus:menus.map(menu=>menu.toJSON())
        })
    }
    if (type_menu === 'dessert'){
        const menus = await Menu.find({"dessert":{"$regex":`${value}`,"$options":"i"}})
        res.render('menus/menus',{
            title:'Menus Delivery',
            menus:menus.map(menu=>menu.toJSON())
        })
    } 
}

module.exports = {
    renderMenus,
    renderFormMenu,
    addNewMenu,
    deleteMenuById,
    renderEditFormMenu,
    updateMenu,
    searchMenu
}