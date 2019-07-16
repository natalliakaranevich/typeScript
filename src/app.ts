class Message {
    messageText: string;

    constructor(text: string) {
        this.messageText = text;

        console.log('test')
    }

    showAlert(): never {
        throw new Error('memem');
    }
}

const text = new Message("hello world");
text.showAlert();

let year: ( number | boolean)[] = [1, true];
