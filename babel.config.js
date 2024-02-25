module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            asserts: "./src/assets",
            components: "./src/components",
            state: "./src/state",
            screens: "./src/screens",
            stack: "./src/stack",
            testData: "./src/testData",
            theme: "./src/theme",
            domain: "./src/domain",
          },
        },
      ],
    ],
  };
};
