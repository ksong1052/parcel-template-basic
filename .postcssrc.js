// ESM (ES Module) => Browser환경
// CommonJS => Nodejs에서 사용

// import autoprefixer from 'autoprefixer' => ESM

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}