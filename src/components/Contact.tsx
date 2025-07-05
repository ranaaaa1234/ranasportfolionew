import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  const email = "ranaa_safi@hotmail.com";
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_tv1bg08",
          "template_bnfm7ve",
          form.current,
          "Dxftnm7vZ75Rvo-KA"
        )
        .then(
          (result: any) => {
            console.log(result.text);
            setMessage("Message sent succesfully!");
          },
          (error: any) => {
            console.log(error.text);
            setMessage("Error sending message, please try again.");
          }
        );

      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-blue-50 px-4 py-16"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-4xl font-light text-blue-900 mb-5">
          Let's connect
        </h2>
        <p className="text-blue-700 text-lg max-w-2xl">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
      </div>

<div className="flex flex-row gap-20 items-center mb-10"> 

<section className="flex flex-col items-center gap-6 py-10 px-4">
  <div className="w-full max-w-md space-y-4">
    <a
      href={`mailto:${email}`}
      className="flex items-center gap-3 border border-blue-400 text-blue-900 rounded-lg p-4 shadow-sm hover:bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200"
    >
      <Mail className="w-5 h-5" />
      {email}
    </a>

    <a
      href="https://github.com/ranaaaa1234"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 border border-blue-400 text-blue-900 rounded-lg p-4 shadow-sm hover:bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200"
    >
      <Github className="w-5 h-5" />
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/ranna-safi/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 border border-blue-400 text-blue-900 rounded-lg p-4 shadow-sm hover:bg-gradient-to-br from-blue-50 via-purple-100 to-blue-200"
    >
      <Linkedin className="w-5 h-5" />
      LinkedIn
    </a>
  </div>
</section>

      <section className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md border border-blue-100">
        <h4 className="text-blue-900 text-xl font-semibold">
          Send me a message:
        </h4>
        <p className="mb-10 text-blue-400">
          Leave me a message and I’ll get back to you as soon as I can!
        </p>
        {message && <p className="mb-4 text-sm text-green-600">{message}</p>}

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 mb-2"> 


            <div className="flex flex-col w-full mb-4"> 
         <h4 className="mb-2 font-semibold">Email:</h4>
          <input
            type="email"
            name="user_email"
            placeholder="Your@email address"
            required
            className="border border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          </div>

          <div className="flex flex-col w-full"> 
          <h4 className="mb-2 font-semibold">Subject:</h4>
          <input
            type="Subject"
            name="user_email"
            placeholder="Your message subject..."
            required
            className="border border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          /> 

          </div>
          
          </div>
          <h4 className="mb-0 font-semibold">Message:</h4>
          <textarea
            name="message"
            rows={6}
            placeholder="Type your message here..."
            required
            className="border border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>

          <input
            type="submit"
            value="Send Message"
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:opacity-90 cursor-pointer"
          />
        </form>

        </section>
      </div>
    </section>
  );
}

export default Contact;
