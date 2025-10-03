import express from "express";
import axios from "axios";

const app = express();
const port = 3200;
const law = ["Your legal peace of mind starts here.", "Trusted advice. Proven results.", "You deserve clear answers and confident representation.",
"Guiding clients through complex legal issues—every step of the way.", "Legal strategy backed by results.",
"Every case is personal. Every client matters.", "We listen. We advise. We advocate.",
"You're not just a case number—you’re our priority.", "Don’t wait for your rights to be compromised—get legal help now.",
"Justice. Clarity. Results.", "Law with purpose.", "Your case. Our commitment.", "Where expertise meets integrity—your legal solution starts here.","Trusted legal guidance for permits, licenses, and authorizations.",
"Your roadmap through complex regulatory systems.","Licensing shouldn’t be a legal maze. We’ll guide you through.","Don’t let paperwork delay your progress—book a consultation today.",
"We help you move forward—legally and confidently.","Permits approved. Problems avoided."
]



app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get("/", (req,res) => {
const random = law[Math.floor(Math.random() * law.length)];
    res.render('index', { 
        currentPage: 'home',
        quotes: random,
     });
})

app.get("/features", (req,res) => {
    res.render('features', { currentPage: 'features' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { currentPage: 'contact' });
});

app.listen(port, () => {
    console.log(`Port ${port} is active`);
});