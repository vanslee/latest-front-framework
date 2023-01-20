module.exports = {
  /**
   * 打包时，文件没有用到不会帮你打包
   */
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}