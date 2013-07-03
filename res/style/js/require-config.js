require.config({
	baseUrl:'/res/style/js',
	paths:{
		jquery      : 'libs/jquery'
	},
	shim: {
        jquery :{
            exports : '$'
        }
	}
});