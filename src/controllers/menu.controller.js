const Menu = require('../model/Menu')

// Application UI
const renderMenus = async (req,res)=>{
    const menus = await Menu.find();
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
    console.log(newMenu);
    await newMenu.save();
    console.log("New menu added")
    res.redirect('/menus')
}

const deleteMenuById = async (req,res)=>{
    const id = req.params.id;
    await Menu.findByIdAndDelete(id);
    res.redirect('/menus');
}

const updateMenu = async (req,res)=>{
    const {id} = req.params;
    await Menu.findByIdAndUpdate(id,req.body);
    res.redirect('/menus');
}

module.exports = {
    getMenus,
    getMenu,
    createMenu,
    editMenu,
    deleteMenu,
    renderMenus,
    renderFormMenu,
    addNewMenu,
    deleteMenuById,
    renderEditFormMenu,
    updateMenu
}