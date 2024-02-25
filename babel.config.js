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
                        context: "./src/context",
                        screens: "./src/screens",
                        stack: "./src/stack",
                        testData: "./src/testData",
                        theme: "./src/theme",
                        domain: "./src/domain"
                    },
                },
            ],
        ],
    }
};
