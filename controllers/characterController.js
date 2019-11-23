const fetch = require('node-fetch');
const bodyParser = require('body-parser');
//const https = require('https')
//var url2 =localhost:3001;
var url='https://apiparcial.herokuapp.com/characters';                                                                                                                                                

var data={};
data.getAll=()=>{
    fetch(url, { method: 'GET'})
    .then((res) => {
     return res.json()
    })
    .then((json) => {
        return JSON.stringify(json);
    });
};
data.getOne=()=>{
    fetch(url.concat(`/${req.body.alias}`) , { method: 'GET'})
    .then((res) => {
     return res.json()
    })
    .then((json) => {
        console.log(json);
    })
};
data.registro=()=>{
    fetch(url , { method: 'POST'})
    .then((res) => {
     return res.json()
    })
    .then((json) => {
        console.log(json);
    })
};
data.update=()=>{
    fetch(url.concat(`/${req.body.alias}`) , { method: 'PUT'})
    .then((res) => {
     return res.json()
    })
    .then((json) => {
        console.log(json);
    })
};
data.delete=()=>{
    fetch(url.concat(`/${req.body.alias}`) , { method: 'DELETE'})
    .then((res) => {
     return res.json()
    })
    .then((json) => {
        console.log(json);
    })
};
data.getAll();
module.exports=data;


