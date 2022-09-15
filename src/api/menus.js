const Menu = require('../model/Menu');

const getMenus = async (req,res)=>{
  const menus = await Menu.find();
  res.json(menus);
}

const createMenu = async (req,res)=>{
  const menu = new Menu({
      starter:req.body.starter,
      mean:req.body.mean,
      dessert:req.body.dessert,
      price:req.body.price,
  })
  await menu.save();
  res.json({msg:'Menu Saved'})
}

const getMenu = async (req,res)=>{
  const menu = await Menu.findById(req.params.id);
  res.json(menu);
}

const editMenu = async (req,res)=>{
  const {id} = req.params;
  const menu = {
      starter:req.body.starter,
      mean:req.body.mean,
      dessert:req.body.dessert,
      price:req.body.price,
  };
  await Menu.findByIdAndUpdate(id,{$set:menu},{new:true});
  res.json({msg:'Menu Updated'})
}

const deleteMenu = async(req,res)=>{
  await Menu.findByIdAndDelete(req.params.id);
  res.json({msg:'Menu Deleted'})
}