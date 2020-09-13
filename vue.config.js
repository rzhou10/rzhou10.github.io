module.exports = {
	publicPath: '/',
	chainWebpack: config => {
		config.module.rule('pdf')
			.test(/\.(pdf)(\?.*)?$/)
			.use('file-loader')
				.loader('file-loader')
				.options({
					name: 'pdf/[name].[ext]'
				})
		}
}
  