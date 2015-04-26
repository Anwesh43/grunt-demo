module.exports = function(grunt){
	grunt.registerTask('default','hello world',function(){
		console.log('hello i am new to grunt');
	});
	grunt.registerTask('hello','to see params',function(name){
		console.log('hello '+name);
	});
};
