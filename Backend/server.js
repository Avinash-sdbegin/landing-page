const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const applicationRoutes = require("./routes/applicationRoutes");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const connection = await db.getConnection();
    connection.release();

    res.json({
      success: true,
      message: "Backend + MySQL Connected ✅",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
app.use("/api", applicationRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});