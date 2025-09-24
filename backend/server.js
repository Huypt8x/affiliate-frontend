import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import trackingRoutes from "./routes/tracking.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Gắn tracking route
app.use("/api", trackingRoutes);

// ✅ File lưu tracking
const TRACKING_FILE = path.join(process.cwd(), "tracking.json");

// ✅ API GET trending (trả ra top 10 theo số click)
app.get("/api/trending", (req, res) => {
  try {
    if (!fs.existsSync(TRACKING_FILE)) return res.json([]);
    const data = JSON.parse(fs.readFileSync(TRACKING_FILE, "utf-8"));
    const sorted = Object.entries(data)
      .sort((a, b) => b[1] - a[1]) // sắp giảm dần theo số click
      .slice(0, 10)
      .map(([id]) => ({ id }));
    res.json(sorted);
  } catch (err) {
    console.error("Error reading trending:", err);
    res.json([]);
  }
});

// ✅ API GET weekly (dùng dữ liệu click trong 7 ngày gần nhất)
app.get("/api/weekly", (req, res) => {
  try {
    if (!fs.existsSync(TRACKING_FILE)) return res.json([]);
    const data = JSON.parse(fs.readFileSync(TRACKING_FILE, "utf-8"));
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const weeklyCounts = {};

    for (const entry of data.history || []) {
      if (entry.timestamp >= oneWeekAgo) {
        weeklyCounts[entry.id] = (weeklyCounts[entry.id] || 0) + 1;
      }
    }

    const sorted = Object.entries(weeklyCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([id]) => ({ id }));

    res.json(sorted);
  } catch (err) {
    console.error("Error reading weekly:", err);
    res.json([]);
  }
});

// ✅ Cổng server
const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
