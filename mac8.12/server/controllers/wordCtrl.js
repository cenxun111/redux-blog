const Words = require("../models/wordModel");
const wordCtrl = {
    createNewWord: async(req,res) => {
        const newWord = new Words(req.body);
        try{
            const savedWord = await newWord.save();
            res.status(200).json(savedWord);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getUserWords: async(req,res)=> {
        const username = req.params.username;
        try{
            const useswords = await Words.find(
                {username}).sort({"createdAt": -1}
            );
            res.status(200).json(useswords)
        }catch (err) {
            return res.status(500).json(err);
        }
    },

    deleteWord:async(req,res) => {
        try{
            const word = await Words.findOneAndDelete({_id:req.params.id})
            res.json({
                msg:'DEleted'
            })
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
};

module.exports = wordCtrl