module.exports = {
    async show(req, res){
        res.json({ ok: true, user: req.userId });
    } 
};