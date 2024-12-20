console.log("hello world");

const qrCodeRegionId = "reader";
    
const handleScanSuccess = (decodedText) => {
    console.log("Scanned result: " + decodedText);
    alert("Scanned result: " + decodedText);
};

const handleScanError = (error) => {
    console.error("Scan error:", error);
};

const scanner = new Html5QrcodeScanner(qrCodeRegionId, {
    fps: 10,
    qrbox: 250,
}, false);

scanner.render(handleScanSuccess, handleScanError);