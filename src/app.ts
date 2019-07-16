class Message {
    messageText: string;

    constructor(text: string) {
        this.messageText = text;
    }

    showAlert() {
        alert(this.messageText);
    }
}

let text = new Message("hello world");
text.showAlert();