module.exports = {
  apps: [
    {
      name: "humani-dev",
      script: "npm",
      args: "run dev",
      watch: false,
      env: {
        NODE_ENV: "development",
      }
    },
    {
      name: "humani-prod",
      script: "npm",
      args: "run start",
      watch: false,
      env: {
        NODE_ENV: "production",
      }
    }
  ]
};
