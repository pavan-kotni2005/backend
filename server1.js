import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Login endpoint
app.post('/login', (req, res) => {
    db.collection('login').findOne({ Email: req.body.Email })
        .then((result) => {
            if (result) {
                if (result.Password === req.body.Password) {
                    res.json({ message: 'Login successful' });
                } else {
                    res.json({ error: 'Incorrect password' });
                }
            } else {
                res.json({ error: 'User not found' });
            }
        })
        .catch((e) => {
            console.error(e);
            res.status(500).json({ error: 'An error occurred during login' });
        });
});

// Signup endpoint
app.post('/signup', (req, res) => {
    const { Name, Email, Password, Confirmpassword } = req.body;
    

    db.collection('login').findOne({ Email })
        .then((existingUser) => {
            if (existingUser) {
                return res.status(400).json({ error: 'This email is already in use.' });
            }
            
            return db.collection('login').insertOne({ Email, Password, Name, Confirmpassword });
        })
        .then(() => {
            res.json({ message: 'Registration successful!' });
        })
        .catch((e) => {
            console.error(e);
            res.status(500).json({ error: 'An error occurred during registration.' });
        });
});
app.post('/resetpassword',(req,res)=>{
    
})
// Connect to database and start server
connectToDB(() => {
    app.listen(2000, () => {
        console.log('Server running at http://localhost:2000');
    });
});
