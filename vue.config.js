module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                // 'router':'@/router', 不用起别名
            }
        }
    },
    devServer: {
        // host: '192.168.1.103'
    }
}