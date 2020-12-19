const btn = document.getElementById('showLocation');
const btn2 = document.getElementById('btn2');


const makeQr = () => {
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        width: 100,
        height: 100,
    });

    function makeCode() {
        const elText = document.getElementById('text');

        if (!elText.value) {
            alert('Input a text');
            elText.focus();
            return;
        }
        qrcode.makeCode(elText.value);
    }
    makeCode();
};

const readQr = () => {
    function onScanSuccess(val) {
        // handle on success condition with the decoded message
        console.log(val);
    }

    function onScanError(errorMessage) {
        // handle on error condition, with error message
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
        'reader', { fps: 10, qrbox: 250 },
);
    html5QrcodeScanner.render(onScanSuccess, onScanError);
};


btn.addEventListener('click', () => {
    makeQr();
});

btn2.addEventListener('click', () => {
    readQr();
});
