module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }], // For Expo and Nativewind
      "nativewind/babel", // For Nativewind styles
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./", // Root directory
            "@components": "./components", // Alias for components folder
            "@context": "./context", // Alias for context folder
            "@lib": "./lib", // Alias for lib folder (if applicable)
          },
        },
      ],
    ],
  };
};