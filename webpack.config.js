const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

module.exports = {
  resolve: {
    alias: {
      "@cloudinary/core": require.resolve("@cloudinary/core/dist/cloudinary-core.min.js"), 
    },
  },
  ...config,
};