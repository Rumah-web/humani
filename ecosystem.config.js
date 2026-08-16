module.exports = {
  apps: [
    {
      name: "humani-dev",
      script: "node_modules/next/dist/bin/next",
      args: "dev -p 3500",
      watch: false,
      env: {
        NODE_ENV: "development",
      }
    },
    {
      name: "humani-prod",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3500",
      watch: false,
      env: {
        NODE_ENV: "production",
      }
    }
  ]
};
