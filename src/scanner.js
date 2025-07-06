import { Html5Qrcode } from "https://unpkg.com/html5-qrcode?module";

const reader = new Html5Qrcode("reader");
const config = {
  fps: 15,
  qrbox: { width: 300, height: 300 },
  experimentalFeatures: {
    useBarCodeDetectorIfSupported: true
  }
};

Html5Qrcode.getCameras().then(cameras => {
  const cam = cameras.find(c => /back|rear/i.test(c.label)) || cameras[0];
  return reader.start(
    cam.id,
    config,
    (decoded, result) => {
      document.getElementById("result").innerText = `✅ ${decoded}`;
      reader.stop();
    },
    err => {}
  );
});
