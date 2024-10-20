"use client";

import { useState } from "react";

export default function Form() {
  const [result, setResult] = useState("send");
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setResult("sending....");
    const formData = new FormData(event.target);

    const access_key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (access_key) {
      formData.append("access_key", access_key);
    } else {
      console.error("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not defined");
      setResult("error: access key is missing");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("message sent successfully");
      setTimeout(() => {
        setResult("send");
        setSending(false);
      }, 5000);
      event.target.reset();
    } else {
      console.log("Error: ", data);
      setSending(false);
      setResult(data.message);
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-xl mb-4 tracking-normal">
        Send a message
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="name*"
          required
          className="border-none mb-2 py-1 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="email*"
          required
          className="border-none mb-2 py-1 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="message*"
          required
          className="border-none mb-2 py-1 focus:outline-none h-48 resize-none"
        ></textarea>

        <button
          type="submit"
          className={`flex max-w-fit py-1 items-center transition-all  ${
            sending
              ? "hover:underline-none disabled text-neutral-600 dark:text-neutral-400 hover:cursor-auto"
              : "hover:underline hover:cursor-pointer"
          }`}
        >
          {result}
        </button>
      </form>
      {/* <span>{result}</span> */}
    </div>
  );
}
