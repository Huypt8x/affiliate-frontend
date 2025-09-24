// Giả lập DB lưu tracking (trong thực tế bạn sẽ dùng database)
let clickData = {};

export const trackProgram = (req, res) => {
  const { id } = req.params;
  clickData[id] = (clickData[id] || 0) + 1;
  console.log(`📊 Program ${id} clicked ${clickData[id]} times`);
  res.json({ success: true, id, totalClicks: clickData[id] });
};

export const getTrending = (req, res) => {
  // Lấy top 10 theo số click nhiều nhất
  const trending = Object.entries(clickData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([id, clicks]) => ({ id, clicks }));
  res.json(trending);
};

export const getWeekly = (req, res) => {
  // Tạm trả về trending (nếu bạn muốn weekly thật có thể thêm logic reset click mỗi tuần)
  const weekly = Object.entries(clickData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([id, clicks]) => ({ id, clicks }));
  res.json(weekly);
};
