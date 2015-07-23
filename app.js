var unziper;
var a;
function extension () {
	var version = 0.1;
}
extension.prototype.appendText = function(appendedText) {
	jQuery('#js-repo-pjax-container > div.file-navigation > div:nth-child(1) > div > span > span > div > code')[0].innerHTML += appendedText;
};
extension.prototype.replaceText = function(replacedText) {
	jQuery('#js-repo-pjax-container > div.file-navigation > div:nth-child(1) > div > span > span > div > code')[0].innerHTML = replacedText;
};
extension.prototype.insertText = function(myText) {
	var myDiv;
	jQuery('#js-repo-pjax-container > div.file-navigation')//[0]
	.prepend(
		(myDiv = document.createElement("div"), myDiv.innerHTML="<div class=\"select-menu left\"><span class=\"btn btn-sm\"><span class=\"\" style=\"font-weight: normal;\"><div><code>"+myText+"</code></div></span></span></div>", myDiv
		));
};
extension.prototype.getZipLink = function() {
	return window.location.href + "/archive/master.zip";
};
extension.prototype.countLines = function() {
	this.insertText("getting...");
	jQuery.ajax({
		url: "https://ankin.info/filegetter/linecounter/?url=" + this.getZipLink(),
		context: document.body
	}).done(function (data) {
		data = JSON.parse(data);
		// this.replaceText(data["sloc"]);
		extension.prototype.replaceText(data["sloc"]);
		extension.prototype.appendText(" LOC");

	})
};

var myExtension = new extension();
myExtension.countLines();
