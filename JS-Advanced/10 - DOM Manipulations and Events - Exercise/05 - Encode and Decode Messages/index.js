function encodeAndDecodeMessages() {
    const buttons = Array.from(document.getElementsByTagName('button'));

    buttons[0].addEventListener('click', encodeMessage);
    buttons[1].addEventListener('click', decodeMessage);

    function encodeMessage(e) {
        // console.log(e.target.parentElement.parentElement.children[1].children[1]);
        let decodeTextArea = e.target.parentElement.parentElement.children[1].children[1];
        let textarea = e.target.parentElement.children[1];
        let encodedMessage = [];

        for (let i = 0; i < textarea.value.length; i++) {
            const charCode = textarea.value.charCodeAt(i);
            encodedMessage.push(String.fromCharCode(charCode + 1));
        };

        decodeTextArea.value = encodedMessage.join('');
        textarea.value = '';
    };

    function decodeMessage(e) {
        let textarea = e.target.parentElement.children[1];
        let decodedMessage = [];

        for (let i = 0; i < textarea.value.length; i++) {
            const charCode = textarea.value.charCodeAt(i);
            decodedMessage.push(String.fromCharCode(charCode - 1));
        };

        textarea.value = decodedMessage.join('');
    };
};