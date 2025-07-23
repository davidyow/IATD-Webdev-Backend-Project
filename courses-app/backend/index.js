import express, { json } from 'express';
import cors from 'cors'; // Import the cors package
import pkg from 'mongoose';
const { connect, connection, Schema, model, Types } = pkg;
import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';
config();

//const express = require('express');
//const cors = require('cors');

const app = express();
const port = process.env.PORT || 5999;
//const port = 5999;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
connect(process.env.MONGODB_URI);

const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define Mongoose schemas and models
const courseSchema = new Schema({
    title: String,
    description: String,
    instructor: String,
    duration: Number,
    category: String
});

const Course = model('Course', courseSchema);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to IATD 2024!');
});

// Retrieve all courses
app.get('/courses', (req, res) => {
    Course.find({})
        .then(courses => {
            res.json(courses);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error retrieving courses');
        });
});

// Retrieve a single course by course_id
app.get('/courses/:courseId', (req, res) => {
    Course.findById(req.params.courseId)
        .then(student => {
            if (!course) {
                return res.status(404).send('Course not found');
            }
            res.json(course);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error retrieving course');
        });
});

// 1. Add a new Course
app.post('/courses', async (req, res) => {
    const newCourse = new Course({
        ...req.body,
    });
    try {
        await newCourse.save();
        console.log('Course created:', newCourse);
        res.status(201).send(newCourse);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Array to store items
//let items = [];

// Route to get all items
//app.get('/items', (req, res) => {
//  res.json(items);
//});

// Route to add a new item
//app.post('/items', (req, res) => {
//  const newItem = req.body.name;
//  items.push(newItem);
//  res.status(201).json({ name: newItem });
//});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});