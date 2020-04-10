const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const videoRoutes = require("./routes/api/videos");

app.use("/api/videos", videoRoutes);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
