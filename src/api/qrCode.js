/**
 * Create and scan qrcodes
 */




const qrCode = {
    addSripts(source = false) {
        if (!source) return false;
        const newScript = document.createElement('script');
        newScript.src = './api/davidshimjs-qrcodejs/qrcode.js';
        document.head.appendChild(newScript);
        return true;
        // <script type="text/javascript" src="qrcode.js"></script>
    },
    generate(url, divId = 'qrcode') {
    /*
     @author: davidshim
    */
        // eslint-disable-next-line no-new
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
    },
    // read() {
    //     const html5QrcodeScanner = new Html5QrcodeScanner(
    //         'reader', {
    //             fps: 10,
    //             qrbox: 250,
    //         },
    //     );

    //     function onScanSuccess(qrCodeMessage) {
    //         // handle on success condition with the decoded message
    //         html5QrcodeScanner.clear();
    //         // ^ this will stop the scanner (video feed) and clear the scan area.
    //     }

    //     function onScanError(errorMessage) {
    //         // handle on error condition, with error message
    //     }

    //     html5QrcodeScanner.render(onScanSuccess, onScanError);
    // },

    scan() {
        /*
        Autor: https://blog.minhazav.dev/about/
        Site: https://blog.minhazav.dev/HTML5-QR-Code-scanning-support-for-local-file-and-default-camera/
        */
       return true;
    },
};

// export default qrCode;