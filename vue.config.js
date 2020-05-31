module.exports = {
    configureWebpack: {
        resolve: {
            extensions:[],
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
                // 'router':'@/router', 不用起别名
            }
        }
    }
}