'use strict';

const express = require('express');
const axios = require('axios');

const app = express();

module.exports = function(app) {
    app.get('/', async function(req, res) {
        try {
            // const apiKey = 'YOUR_API_KEY';
            // const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=CityName&appid=${apiKey}`;
            const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
            const response = await axios.get(apiUrl);
        
            const todoData = {
                userId: response.data.userId,
                id: response.data.id,
                title: response.data.title,
                completed: response.data.completed,
              };
          
              // Display the information on a basic web page
              res.render('pages/', { todoData });
              
          } catch (error) {
            console.error('Error fetching data:', error.message);
            res.status(500).send('Internal Server Error');
          }
    });
};