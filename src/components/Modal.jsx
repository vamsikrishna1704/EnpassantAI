import { useState } from 'react';

function Modal({ visible, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleConfirm = async() => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
    try{
        const response = await fetch("/api/postUser",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name: name, emailId: email}),
        });
        const data = response.json();
        if(data){
          console.log(data.insertedId);
        } else {
          console.error("Data posting to DB failed.");
        }
      }catch(e){
          console.error(e);
      }
  };

  if (!visible) return null;

  return (
    <div className="modal-overlay visible" onClick={onClose}>
      <div
        className="modal-content relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
          &times;
        </button>
        {!success ? (
          <>
            <h2 className="text-2xl font-bold mb-2">Pre-Book Enpassant AI</h2>
            <p className="text-gray-400 mb-6">You're one step away. Lock in your 50% launch discount!</p>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-3 px-4"/>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg py-3 px-4"/>
              <button
                onClick={handleConfirm}
                className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105"
              >
                Confirm Pre-Booking
              </button>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center flex-col text-center p-8 rounded-lg">
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="text-gray-300 mt-2">
              Your pre-booking for Enpassant AI is confirmed. We'll notify you on launch day.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;