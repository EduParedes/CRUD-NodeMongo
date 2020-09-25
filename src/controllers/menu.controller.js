const Menu = require('../model/Menu')
const menusCtrl = {};

menusCtrl.getMenus = async (req,res)=>{
    const menus = await Menu.find();
    res.json(menus);
}

menusCtrl.createMenu = async (req,res)=>{
    const menu = new Menu({
        sideDish:req.body.sideDish,
        starter:req.body.starter,
        starterDet:req.body.starterDet,
        mean:req.body.mean,
        meanDet:req.body.meanDet,
        dessert:req.body.dessert,
        dessertDet:req.body.dessertDet,
        price:req.body.price,
    })
    await menu.save();
    res.json({status:'Menu Saved'})
}

menusCtrl.getMenu = async (req,res)=>{
    const menu = await Menu.findById(req.params.id);
    res.json(menu);
}

menusCtrl.editMenu = async (req,res)=>{
    const {id} = req.params;
    const menu = {
        sideDish:req.body.sideDish,
        starter:req.body.starter,
        starterDet:req.body.starterDet,
        mean:req.body.mean,
        meanDet:req.body.meanDet,
        dessert:req.body.dessert,
        dessertDet:req.body.dessertDet,
        price:req.body.price,
    };
    await Menu.findByIdAndUpdate(id,{$set:menu},{new:true});
    res.json({
        status:'Menu Updated'
    })
}

menusCtrl.deleteMenu = async(req,res)=>{
    await Menu.findByIdAndDelete(req.params.id);
    res.json({status:'Menu Deleted'})
}

module.exports = menusCtrl;