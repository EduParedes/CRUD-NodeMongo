const Menu = require('../model/Menu');
const {uploadImage,deleteImage} = require('../cloudinary');
const fs = require('fs-extra');

const renderMenus = async (req,res)=>{
    const menus = await Menu.find();
    console.log(menus)
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
    const newMenu = new Menu(req.body);
    
    if (req.files?.image){
        const result = await uploadImage(req.files.image.tempFilePath);
        newMenu.image = {
            public_id:result.public_id,
            secure_url:result.secure_url
        }
    }
    
    await fs.unlink(req.files.image.tempFilePath)
    await newMenu.save();

    req.flash('success_msg','New menu added successfully')
    res.redirect('/menus')
}

const deleteMenuById = async (req,res)=>{
    const id = req.params.id;
    const menu = await Menu.findByIdAndDelete(id);
    await deleteImage(menu.image.public_id)
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