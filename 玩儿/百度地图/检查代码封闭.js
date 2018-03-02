 $.ajax({
		                    url: 'http://api.map.baidu.com/geoconv/v1/?coords=' + longitude + ',' + latitude + '&from=1&to=5&ak=boe84rn5cwlIycusIqMlC32ukPfu0to7',
		                    timeout: 4000,
		                    type: "get",
		                    dataType: "jsonp",
		                    jsonp: "callback",
		                    async: false,
		                    success: function (data) {
		                        var point = new BMap.Point(data.result[0].x, data.result[0].y);
		                        var bounds = circle.getBounds();
		                        if (bounds.containsPoint(point)) {

		                          
		                            
		                        }
		                        else {
		                            
		                        }
		                    },
		                    complete: function (XMLHttpRequest, status) {
		                        clearTimeout(timeout);
		                        if (status == "timeout") {
		                            $(".mask").css("display", "none");
		                            $(".share_title").html("请求超时");
		                            $(".share_ranking").html("请求超时，请重试");
		                            $(".share_page").css("display", "block");
		                        }
		                    }
		                });