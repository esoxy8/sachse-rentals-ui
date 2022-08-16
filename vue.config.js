const { defineConfig } = require('@vue/cli-service')
module.exports =
    // {
    // configureWebpack: {
    //     plugins: [
    //       new MyAwesomeWebpackPlugin()
    //     ]
    //   }
    // },
    defineConfig({
        transpileDependencies: [
            'vuetify'
        ],
    })