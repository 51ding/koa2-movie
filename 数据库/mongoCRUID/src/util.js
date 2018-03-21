var fs = require("fs")
var path=require("path");

module.exports = {
	requireModel(dirPath) {
		return new Promise((resolve, reject) => {
			fs.readdir(dirPath, (err, files) => {
				if(err) return reject(err);
				files.forEach((item) => {
					console.log(path.join(dirPath, item));
					require(path.join(dirPath, item))
				});
				resolve();
			})
		})
	}
}