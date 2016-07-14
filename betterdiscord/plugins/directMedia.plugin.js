//META{"name":"directMedia"}*//

var directMedia = function () {};

directMedia.prototype.checklinks = function() {
	$(".message").each(function() {
		var message = $(this)

		message.find($("a")).each(function() {
			var link = $(this);
	        var href = link.attr("href");
	        if(href == undefined) { return true; };
			href = href.replace("http:", "https:")

			var embed = false
			$(".embed-thumbnail-image").each(function() {
				var img = $(this);
				var href2 = img.attr("href");
		        if(href2 == undefined) { return true; };
				href2 = href2.replace("http:", "https:");

				if (href == href2) {
					embed = true
				}
			})

			if (!embed && link.text() != "" && (href.endsWith(".png") || href.endsWith(".jpg") || href.endsWith(".gif"))) {
				var html = $(
					'<div class="embed embed-image custom">' +
						'<a class="embed-thumbnail embed-thumbnail-image" href="' + href + '" target="_blank" rel="noreferrer">' +
							'<span class="image">' +
								'<img class="image" src="' + href + '" href="' + href + '">' +
								(href.endsWith(".gif") ? '<span class="image-gif"></span>' : '') +
							'</span>' +
						'</a>' +
					'</div>'
				)

				message.find(".accessory").append(html);
			}
		})
	})
}

directMedia.prototype.onMessage = function () {
	this.checklinks()
};

directMedia.prototype.start = function () {
	this.checklinks();
};

directMedia.prototype.onSwitch = function () {
	this.checklinks();
};

directMedia.prototype.load = function () {};

directMedia.prototype.unload = function () {};

directMedia.prototype.stop = function () {};

directMedia.prototype.observer = function (e) {};

directMedia.prototype.getSettingsPanel = function () {
    return "";
};

directMedia.prototype.getName = function () {
    return "Direct Media";
};

directMedia.prototype.getDescription = function () {
    return "Tries to convert most direct media links to embedded pictures.";
};

directMedia.prototype.getVersion = function () {
    return "0.1.0";
};

directMedia.prototype.getAuthor = function () {
    return "samfun123";
};