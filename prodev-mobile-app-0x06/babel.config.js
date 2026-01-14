module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
//     plugins: ["nativewind/babel"],
//   };
// };

// Your Babel config is incorrect: "nativewind/babel" must be a plugin, not a preset. then restart the development server. npx react-native start --reset-cache
