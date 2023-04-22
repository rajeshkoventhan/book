
const hotals = require( '../models/hotal')

export const createhotal = async(req,res)=>{

    const newhotal = new hotals(req.body)
    try{
     const savehotal = await newhotal.save()
     res.json(savehotal)   
     }
     catch(err){
        res.json(err)
    }
}




      
 
      


module.exports = router ;