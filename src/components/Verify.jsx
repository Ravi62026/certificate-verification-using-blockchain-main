import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode';
import "../App.css"


const Verify = () => {
  const [docHash, setDocHash] = useState('');  // State to store the entered document hash
  const [verificationStatus, setVerificationStatus] = useState('');  // State to store verification status
  const [loading, setLoading] = useState(false);  // State to indicate loading status
  const [error, setError] = useState('');  // State to store any error message
  const [qrCodeUrl, setQrCodeUrl] = useState('');  // State to store the URL of the generated QR code

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!docHash) {
      setError('Please enter a document hash.');
      return;
    }
    setLoading(true);
    setError('');
    setVerificationStatus(null);
    verifyDocument(docHash);
  };

  // Verifies document by hash
  const verifyDocument = async (hash) => {
    try {
      const url = `https://gateway.pinata.cloud/ipfs/${hash}`;
      const response = await axios.get(url);
      if (response.status === 200) {
        setVerificationStatus(()=>(<h1 className='text-2xl text-green-700 font-semibold'>Document is Verified</h1>));
        generateQRCode(url);
      } else {
        setVerificationStatus('Document not found on IPFS.');
      }
    } catch (err) {
      setVerificationStatus('Error verifying document. Please check the hash and try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Generates a QR code from a URL
  const generateQRCode = async (url) => {
    try {
      const qrCodeDataURL = await QRCode.toDataURL(url);
      setQrCodeUrl(qrCodeDataURL);
    } catch (err) {
      console.error('Failed to generate QR Code:', err);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 p-1">
        <div className="w-[60vw] min-h-[70vh] p-5 mx-auto mt-10 upload rounded-lg flex flex-col items-center justify-start">
          <h1 className="w-full h-[15%] text-4xl text-center my-2 border-b-2 border-black font-semibold text-white">
            Verification
          </h1>
          <div className="w-full min-h-[40vh] border border-black rounded-lg p-2 my-auto ">
            <form onSubmit={handleSubmit}>
              <div className="form-group p-3 w-full flex flex-col items-center gap-7">
                <input
                  type="text"
                  placeholder="Hash verification"
                  className="w-[80%] p-3 rounded-md "
                  value={docHash}
                  onChange={(e) => setDocHash(e.target.value)}
                />

                <button className="w-[40%] mx-auto border border-zinc-800 p-2 rounded-xl  text-2xl font-medium text-orange-500 bg-zinc-300 hover:bg-blue-500 hover:text-white ">
                  Verify
                </button>
                {loading && <p>Loading...</p>}
                {verificationStatus && <p>{verificationStatus}</p>}
                {error && <p className="error-message">{error}</p>}
                {qrCodeUrl && (
                  <div>
                    <img
                      src={qrCodeUrl}
                      alt="Document QR Code"
                      className="qr-code-img"
                    />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
