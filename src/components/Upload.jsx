import React, { useState, useEffect } from 'react';
import axios from "axios";
import QRCode from 'qrcode';
import '../App.css'
import { Link } from 'react-router-dom';
// import "./Verify.css"

const Upload = () => {
  const [file, setFile] = useState(null);  // State to hold the file
  const [fileUrl, setFileUrl] = useState("");  // State to hold the URL of the uploaded file
  const [qrCodeUrl, setQrCodeUrl] = useState("");  // State to hold the URL of the generated QR code
  const [account, setAccount] = useState(""); // State to hold the MetaMask account used for upload
  const [uploading, setUploading] = useState(false); // State to track uploading state

  useEffect(() => {
    if (fileUrl) {
      // Generate QR code when the fileUrl state updates
      QRCode.toDataURL(fileUrl)
        .then(url => {
          setQrCodeUrl(url);  // Set the QR code URL state
        })
        .catch(err => console.error('Error generating QR Code:', err));
    }
  }, [fileUrl]);

  const handleUpload = async () => {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      console.log('MetaMask is not installed');
      return;
    }

    try {
      setUploading(true); // Set uploading state to true
      
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const selectedAccount = accounts[0];
      
      if (!file) {
        console.log('No file selected');
        return;
      }

      const fileData = new FormData();
      fileData.append("file", file);  // Append file to FormData object
      const responseData = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",  // API endpoint for uploading to IPFS
        headers: {
          'pinata_api_key': import.meta.env.VITE_PINATA_API_KEY,  // API key for Pinata
          'pinata_secret_api_key': import.meta.env.VITE_PINATA_SECRET_KEY,  // Secret API key for Pinata
          'Content-Type': 'multipart/form-data',
        },
        data: fileData,
      });

      const ipfsHash = responseData.data.IpfsHash;
      const uploadedFileUrl = "https://gateway.pinata.cloud/ipfs/" + ipfsHash;
      setFileUrl(uploadedFileUrl);  // Update the file URL state with the new URL
      setAccount(selectedAccount); // Set the MetaMask account used for upload

      // Show MetaMask confirmation dialog
      
      
      console.log('Transaction successful');
    } catch (err) {
      console.error("Error uploading file:", err);
    } finally {
      setUploading(false); // Set uploading state to false after upload completes or fails
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-200 p-1">
      <div className="w-[60vw] h-[80vh] p-5 mx-auto mt-10 upload rounded-lg flex flex-col justify-center">
        <h1 className="w-full h-[15%] text-4xl font-semibold text-black">
          Upload files to PINATA
        </h1>

        <div className="w-full h-[85%] flex flex-col items-center justify-evenly">
          <div className="w-full p-4 border border-black rounded-lg flex flex-col items-center justify-between relative ">
            <input
              type="file"
              className="input-field rounded-md w-24"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <br /> 
            <div className="form-group">
              <button onClick={handleUpload} className="submit-button rounded px-3 py-1 text-orange-600 bg-zinc-200" disabled={uploading}>
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
            {fileUrl && (
          <div className='w-full flex flex-col items-center justify-center gap-4 mt-4'>
            <Link
              to={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button text-2xl text-zinc-900 hover:text-blue-500 underline decoration-solid"
            >
              Access your file here
            </Link>
            {account && <p className="text-xl w-fit font-medium text-white">Uploaded : {account}</p>}
            <img src={qrCodeUrl} alt="QR Code" className="qr-code-img" />
          </div>
        )}
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default Upload;
