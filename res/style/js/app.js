require(['jquery', 'views/rootView'],
	function($, rootView){
		$(function(){
			rootView.b();
			$('button').click(function(){
				alert(rootView.a);
			});
		});
	}
);