const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");
// const checkRememberMe = require("./middleware/checkRememberMe");
const setupSwagger = require('./utils/swagger');
const db = require("./models");
const app = express();

// Middleware Section
app.use(express.json());
// app.use(checkRememberMe);

// Routes
app.use("/api/auth", authRoutes);

// Swagger
setupSwagger(app);

// Sync database
db.sequelize.sync();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
