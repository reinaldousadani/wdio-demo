module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "18", //Change this to whatever version of node running on your machine
        },
      },
    ],
  ],
};
