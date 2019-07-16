var Message = (function () {
    function Message(text) {
        this.messageText = text;
    }
    Message.prototype.showAlert = function () {
        alert(this.messageText);
    };
    return Message;
}());
var text = new Message("hello world");
text.showAlert();
//# sourceMappingURL=app.js.map