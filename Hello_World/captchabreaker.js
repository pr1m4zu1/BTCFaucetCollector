$("#feedButton").click();
console.log("test");
var ifrm = document.getElementByID("adcopy-puzzle-image").firstChild;
var iframeWin = ifrm.contentWindow;
var iframeDoc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
iframeDoc.getElementById("playTxt").click();
iframeDoc.getElementByID("adcopy-page-return").click();
var captchaCanvas = iframeDoc.getElementByID("playIcn")
var captchaAnswerString = OCRAD(captchaCanvas);
console.log(captchaAnswerString);
