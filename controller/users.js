const { response } = require('express');
const res = response;

const getuser = (req, res) => {
    res.json({ message: 'Hellow World get - controller' });
}
const putuser = (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Hellow World pu - controller', id });
}
const postuser = (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({ message: 'Hellow World post - controller', body });
}
const deleteuser = (req, res) => {
    const { id } = req.params;
    res.json({ message: 'Hellow World delete - controller', id });
}

module.exports = {
    getuser,
    putuser,
    postuser,
    deleteuser
}