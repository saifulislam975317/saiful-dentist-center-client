import React from "react";

const Contact = () => {
  return (
    <div className="text-center mt-10 ">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-secondary">Contact us</h1>
        <h1 className="text-4xl ">Stay connected with us</h1>
      </div>
      <input
        type="text"
        placeholder="Enter your name"
        className="input input-bordered mb-2 w-1/4 "
      />
      <br />
      <input
        type="text"
        placeholder="Enter your email"
        className="input mb-2 input-bordered w-1/4 "
      />
      <br />
      <textarea
        style={{ resize: "none" }}
        className="textarea w-1/4 h-4/5 textarea-bordered"
        placeholder="your message..."
      ></textarea>

      <div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </div>
  );
};

export default Contact;
