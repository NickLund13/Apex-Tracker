// I already had this file with this in it but he made a file with this name 
/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/

// this is what he put in the file
module.exports = {
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5000'
      }
    }
  }
}
