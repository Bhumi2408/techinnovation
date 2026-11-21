
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
  "subject",
  `New Enquiry from ${formData.get("name")} - Tech Innovation`
);

    // Apni Web3Forms access key yahan add karein
    formData.append("access_key", "7df7c752-b6a5-4ded-bfab-0c286bb211ff");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-[#f8fafc] px-5 py-10 sm:px-8 lg:px-16 xl:px-[6.4%]" id="contactus">
      <div className="mx-auto grid max-w-[1640px] grid-cols-1 items-stretch gap-5 lg:grid-cols-[1fr_1.03fr]">
        {/* Left Image */}
        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[514px]">
          <Image
            src="/contact-form.png"
            alt="CNC industrial machinery"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Contact Form */}
        <div className="flex items-center bg-[#f2f7fb] px-5 py-8 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-7"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              autoComplete="name"
              required
              className="h-[40px] w-full rounded-md border border-[#dce4ec] bg-white px-5 text-base text-[#333] outline-none transition placeholder:text-[#737373] focus:border-[#7bbbc6]"
            />

            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              aria-label="Email Address"
              autoComplete="email"
              required
              className="h-[40px] w-full rounded-md border border-[#dce4ec] bg-white px-5 text-base text-[#333] outline-none transition placeholder:text-[#737373] focus:border-[#7bbbc6]"
            />

            <textarea
              name="message"
              placeholder="Your Message Here"
              aria-label="Your Message"
              required
              rows={6}
              className="min-h-[160px] w-full resize-y rounded-md border border-transparent bg-white px-3 py-3 text-base text-[#333] outline-none transition placeholder:text-[#737373] focus:border-[#7bbbc6] sm:min-h-[214px]"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="min-w-[202px] rounded-[4px] bg-[#7bbbc6] px-8 py-[13px] text-base font-medium text-white transition hover:bg-[#62aab7] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p role="status" className="text-sm text-green-700">
                Your message has been sent successfully!
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}