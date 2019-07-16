var Message = (function () {
    function Message(text) {
        this.messageText = text;
        console.log('test');
    }
    Message.prototype.showAlert = function () {
        throw new Error('memem');
    };
    return Message;
}());
var text = new Message("hello world");
text.showAlert();
var year = [1, true];
//# sourceMappingURL=app.js.map