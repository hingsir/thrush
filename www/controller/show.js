var show = function() {
	return this;
};
var conf = {
	'index' : function(){
		var data = {},
			self = this;
		this.setData(data);
		this.listen(function(data){
			self.cssLink = ['show'];
			return self.render('show', data);
		});
	},
	'pc' : function(){
		var data = {'pc_show' : '/pc_show'},
			self = this;
		this.setData(data);
		this.listen(function(data){
			data.banner = data.pc_show.slice(-5);
			console.log(data)
			self.cssLink = ['pc'];
			return self.render('pc', data);
		});
	},
	'pc_add' : function(){
		var data = {},
			self = this;
		this.setData(data);
		this.listen(function(data){
			self.cssLink = ['pc_add'];
			return self.render('pc_add', data);
		});
	},
	'pm' : function(){
		var data = {},
			self = this;
		this.setData(data);
		this.listen(function(data){
			self.cssLink = ['pc_add'];
			return self.render('pm', data);
		});
	},
	'pmList' : function(){
		var data = {'pm' : '/pm'},
			self = this;
		this.setData(data);
		this.listen(function(data){
			self.cssLink = ['pc_list'];
			return self.render('pmList', data);
		});
	},
	'insert' : function(){
		var data = {'date' : '/insert'};
		this.ajaxTo(data);
	},
	'insertPm' : function(){
		var data = {'date' : '/insertPm'};
		this.ajaxTo(data);
	}
};
exports.__create = controller.__create(show, conf);