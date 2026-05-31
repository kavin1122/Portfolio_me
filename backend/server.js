import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const profile = {
  name: "Kavin R",
  role: "Full Stack Developer",
  location: "Rasipuram, Tamil Nadu, India",
  email: "kavincs2006@gmail.com",
  phone: "+91 97914 01290",
  github: "https://github.com/kavin1122",
  linkedin: "https://www.linkedin.com/"
};

const projects = [
  {
    title: "Placement Insights Dashboard",
    stack: ["React.js", "JavaScript", "MongoDB"],
    impact: "Data-driven placement decisions"
  },
  {
    title: "Task Assignment Board",
    stack: ["React.js", "Node.js", "MongoDB"],
    impact: "Organized team workflow"
  }
];

app.get("/", (req, res) => {
  res.json({ message: "Kavin Portfolio Backend Running" });
});

app.get("/api/profile", (req, res) => {
  res.json(profile);
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New contact message:", { name, email, message });
  res.json({ success: true, message: "Message received successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
