"use client";
import { BaseSyntheticEvent, useState } from "react";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  async function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "a5764052-961a-4470-bfa0-02275cfe2ced");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setLoading(false);
      toast.success("Message sent successfully");
    }
    setData({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <div className="contact relative w-11/12 sm:w-9/12 pt-36 sm:pt-48 text-white flex flex-col gap-10">
      <Toaster position="top-right" />
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Contact.
      </h1>
      <div className="inputs w-full md:w-2/3 flex flex-col gap-10">
        <p className="">
          Get in touch or shoot me an email directly on raufnx@gmail.com
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <input
            type="text"
            name="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className=" w-full bg-transparent rounded-md border border-slate-800 py-3 pl-7 placeholder:text-gray-400 outline-none"
            placeholder="Name"
          />
          <input
            type="Email"
            name="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className=" w-full bg-transparent rounded-md border border-slate-800 py-3 pl-7 placeholder:text-gray-400 outline-none"
            placeholder="Email"
          />
          <textarea
            name="msg"
            id=""
            rows={5}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            placeholder="Message"
            className=" w-full bg-transparent rounded-md border border-slate-800 py-3 pl-7 placeholder:text-gray-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-fit flex px-8 py-4 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] outline-none"
          >
            {loading ? "Loading..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
