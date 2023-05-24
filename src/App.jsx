import QRCode from "qrcode";
import { useState } from "react";


function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

const generateQRcode = () => {
  QRCode.toDataURL(url, {
    width: 800,
    margin: 2,
    color: {
      dark: "#335383"
    } 
  }, (err, url) => {
    if (err) return console.error(err);
    console.log(url);
    setQrcode(url);
  });
};

  return (

    <div className="app">
    <div class="video-wrapper">

</div>
      <div className="qr-container">
        <div className="glass">
        <h1>QR Code Generator</h1>
        <input
          type="text"
          placeholder="e.g. https://google.com"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
        />
        <button type="button" onClick={generateQRcode}>Generate</button>
           
           
     <div className="img-container">
            {qrcode && <>
              <img src={qrcode}/>
              <a href={qrcode} download="qrcode.png">Download</a>
              </>} 
</div>
        </div>
      </div>
    </div>
  );
}

export default App;
