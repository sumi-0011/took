module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
    '^@components/(.*)': '<rootDir>/components/$1',
    '^@screens/(.*)': '<rootDir>/screens/$1',
    '^@images/(.*)': '<rootDir>/images/$1',
    '^@common/(.*)': '<rootDir>/common/$1',
    '^@navigations/(.*)': '<rootDir>/navigations/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|@react-native-community/cameraroll|react-native-camera|react-native-maps|react-native-geolocation-service)/)',
  ],
};
