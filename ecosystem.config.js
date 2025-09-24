module.exports = {
  apps: [
    {
      name: "affiliate-backend",
      cwd: "./backend",        // thư mục backend
      script: "server.js",     // file chạy backend
      watch: false,            // không cần watch trong production
      env: {
        NODE_ENV: "production",
        PORT: 4000
      }
    },
    {
      name: "affiliate-frontend",
      cwd: "./frontend",       // thư mục frontend
      script: "npx",
      args: "serve -s dist -l 5173", // serve folder dist bằng "serve"
      watch: false,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
