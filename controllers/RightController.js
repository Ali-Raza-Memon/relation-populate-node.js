const Right = require('../models/rightModels');

module.exports = {


    create : async (req,res) =>{

        const right = await Right.create({
            
            staff_id:req.body.staff_id,
            right:req.body.right
        });

        const rightDate = await right.save();

        return res.send(rightData);
    }


}
