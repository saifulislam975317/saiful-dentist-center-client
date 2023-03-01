import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const handleSendMessage = () => {
    if (!email && !textMessage) {
      return;
    }
    toast.success("your message has been sent successfully.");
  };
  return (
    <div className="text-center mt-10 ">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-secondary">Contact us</h1>
        <h1 className="text-4xl ">Stay connected with us</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          className="input mb-2 input-bordered w-1/4 "
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          onBlur={(e) => setEmail(e.target.value)}
          required
          className="input mb-2 input-bordered w-1/4 "
        />
        <br />
        <textarea
          style={{ resize: "none" }}
          required
          onBlur={(e) => setTextMessage(e.target.value)}
          className="textarea w-1/4 h-4/5 textarea-bordered"
          placeholder="your message..."
        ></textarea>

        <div>
          <input
            onClick={handleSendMessage}
            type="submit"
            value="send message"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
