const User = require('../model/user')

const addUser = async (req,res,next) => {
    try{
    const name = req.body.name;
    const email = req.body.email;

    const data = await User.create( {name: name, email: email})
    res.status(201).json({newUserDetail: data})
    } catch(err){
        res.status(500).json({
            error: err
        })
}


const getUser = async (req,res,next) => {
    try{
    const users = await User.findAll();
    res.status(200).json({allUsers: users})
    } catch(error){
        res.status(500).json({error: error})
    }
}

const deleteUser = async (req,res) => {
    try{
    if(req.params.id == 'undefined'){
        return res.status(500).json({err: 'id is missing'})
    }
    const uId = req.params.id;
    await User.destroy({where: {ide: uId}});
    res.sendStatus(200);
    }catch(error){
        res.status(500).json(error)

    }
}
}

module.exports ={
    addUser,
    getUser,
    deleteUser
}