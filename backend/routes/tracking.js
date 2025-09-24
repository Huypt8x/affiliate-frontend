import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const TRACKING_FILE = path.join(process.cwd(), "tracking.json");

router.post("/programs/track/:id", (req, res) => {
  const id = req.params.id;
  let data = { counts: {}, history: [] };

  if (fs.existsSync(TRACKING_FILE)) {
    data = JSON.parse(fs.readFileSync(TRACKING_FILE, "utf-8"));
  }

  // Tăng đếm
  data.counts[id] = (data.counts[id] || 0) + 1;
  data.history.push({ id, timestamp: Date.now() });

  fs.writeFileSync(TRACKING_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true, id, total: data.counts[id] });
});

export default router;
