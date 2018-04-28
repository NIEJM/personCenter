/*
封装思想
 */

(function(window){
	function jquery(el){
		this.init();
	}
	jquery.prototype = {
		init:function(){
			console.log('hello world');
		}
	}

	window.jQuery = jquery;
})(window);

