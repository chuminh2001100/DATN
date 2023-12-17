
const getHome = (req, res) =>{
    res.render('home');
}

const getAcb = (req, res) =>{
    res.render('acb');
}

module.exports = {
    getHome, getAcb
}