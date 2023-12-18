
const getHome = (req, res) =>{
    res.render('home');
}

const getAcb = (req, res) =>{
    res.render('acb');
}

const getSearch = (req, res) =>{
    console.log(req.query);
    res.render('search');
}

module.exports = {
    getHome, getAcb, getSearch
}