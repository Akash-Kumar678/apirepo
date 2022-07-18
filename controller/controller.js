require('dotenv').config()
const fetch = require('node-fetch')
//base url and apikey should be environment variable

const search = async (req,res)=>{
    const userQuery = req.params.userQuery
     const url  = `${process.env.BASE_URL}everything?q=${userQuery}&apiKey=${process.env.API_KEY}`
    const response = await fetch(url)
    const json = await response.json()
    const data = json.articles.map(item=>item)
     res.send(data)
 }

 const topHeadlines = async (req,res)=>{
    const url  = `${process.env.BASE_URL}top-headlines?country=in&apiKey=${process.env.API_KEY}`
     const response = await fetch(url)
     const json = await response.json()
     const data = json.articles.map(item=>item)
     res.send(data)
  }

const bbc = async (req,res)=>{
   const url  = `${process.env.BASE_URL}top-headlines?sources=bbc-news&apiKey=${process.env.API_KEY}`
   const response = await fetch(url)
   const json = await response.json()
   const data = json.articles.map(item=>item)
    res.send(data)
}


const category = async (req,res)=>{
    const categoryName = req.params.categoryName
     const url  = `${process.env.BASE_URL}top-headlines?ln=en&category=${categoryName}&apiKey=${process.env.API_KEY}`
    const response = await fetch(url)
    const json = await response.json()
    const data = json.articles.map(item=>item)
    res.send(data)
 }

 module.exports = {bbc, search , category , topHeadlines}