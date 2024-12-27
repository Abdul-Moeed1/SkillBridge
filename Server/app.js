const express = require("express");
const cors = require('cors');
const User = require("./models/user.js");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
require("./db/conn");
const port = process.env.PORT || 3000;

const app = express();

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // If you need to allow cookies
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Server");
});

app.get("/mentors", async (req, res) => {
    const data = await User.find({ "role": "mentor" });
    console.log(data);
    res.send(data)

});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let client;
    console.log(email, password);

    try {
        client = await User.findOne({ email });
        console.log(client);

        if (!client) {
            res.status(401).send("Inncorrect Credentials");
        }
        else if (client.password !== password) {
            res.status(401).send("Inncorrect Credentials");
        } else {
            let name = client.name;
            const token = jwt.sign({ email }, "Thissmysecretkeyforjsonwebtokenthatisverysecure", { expiresIn: "10m" });
            console.log(token);
            res.cookie("jwt", token,
                {
                    httpOnly: true,  // Prevent client-side access to the cookie
                    secure: false,
                    maxAge: 10 * 60 * 1000,
                }
            ),
                // res.json({ token });
            res.status(200).send("Login Susessful");
        }
    } catch (error) {
        res.status(401).send("Inncorrect Credentials");
    }
})

app.post("/user", async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        const data = await user.save();
        console.log(data);


        res.send("Request successful");
    } catch (error) {
        if (error.code === 11000) {
            console.log(error);
            res.status(409);
            res.json({ "email": "duplicate" });
        } else {
            console.log(error);
            res.status(400);
            res.send("Cant create user");
        }
    }

})

app.listen(port, () => {
    console.log(`Listining at port no ${port}`);

})