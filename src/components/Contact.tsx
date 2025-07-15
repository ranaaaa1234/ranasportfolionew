import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, OctagonAlert, MailCheck } from "lucide-react";
import { useForm } from "react-hook-form";

function Contact() {
  const email = "ranaa_safi@hotmail.com";
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const [messageText, setMessageText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });

  const sendEmail = async () => {
    if (!form.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_tv1bg08",
        "template_bnfm7ve",
        form.current,
        "Dxftnm7vZ75Rvo-KA"
      );
      setMessage("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setMessage("Error sending message, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-blue-50 px-4 py-16"
    >
      <div className="flex flex-col items-center text-center md:mb-10">
        <h2 className="xs:text-3xl sm:text-4xl font-light text-blue-900 mb-5">
          Let's connect
        </h2>
        <p className="text-blue-700 xs:text-md sm:text-lg max-w-2xl">
          Open to new ideas, projects, and collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-10 xs:justify-center lg:items-start lg:mt-10 lg:mb-10 w-full max-w-6xl">
        <section className="flex flex-col items-center gap-6 py-10 px-4 lg:px-2">
          <div className="w-full lg:max-w-sm max-w-md space-y-4">
            <p className="text-blue-700 xs:text-md sm:text-lg xs:text-center lg:max-w-sm lg:text-left mb-10">
              Here is how you can reach me. Whether you have a question, job
              opportunity or just want to say hello, feel free to contact me.
            </p>

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

        <div className="flex justify-center items-center px-4">
          <section className="w-full max-w-xl justify-center bg-white p-8 rounded-lg shadow-md border border-blue-100">
            <div className="flex flex-row gap-3">
              <h4 className="text-blue-900 xs:text-lg sm:text-xl font-semibold">
                Send me a message:
              </h4>
              {message && (
                <p className="text-sm text-green-600 flex flex-row gap-1 items-center">
                  <MailCheck className="w-4 h-4" />
                  {message}
                </p>
              )}
            </div>
            <p className="mb-5 text-blue-400 text-md">
              Leave me a message and I’ll get back to you as soon as I can!
            </p>
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="flex flex-col gap-2"
            >
              <div className="flex xs:flex-col xl:flex-row gap-2 mb-2">
                <div className="flex flex-col w-full mb-4">
                  <h4 className="mb-2 font-semibold text-blue-900">Email:</h4>
                  <input
                    type="email"
                    placeholder="your@email.domain"
                    {...register("user_email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="border border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />

                  {errors.user_email?.message &&
                    typeof errors.user_email.message === "string" && (
                      <p className="text-red-500 text-sm mt-1 flex flex-row items-center gap-1">
                        <OctagonAlert className="w-4 h-4 text-red-500" />
                        {errors.user_email.message}
                      </p>
                    )}
                </div>

                <div className="flex flex-col w-full mb-4">
                  <h4 className="mb-2 font-semibold text-blue-900">Subject:</h4>
                  <input
                    type="text"
                    placeholder="Type your subject here..."
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="border border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />

                  {errors.subject?.message &&
                    typeof errors.subject.message === "string" && (
                      <p className="text-red-500 text-sm mt-1 items-center flex flex-row gap-1">
                        <OctagonAlert className="w-4 h-4 text-red-500" />

                        {errors.subject.message}
                      </p>
                    )}
                </div>
              </div>

              <h4 className="mb-0 font-semibold text-blue-900">Message:</h4>
              <textarea
                rows={6}
                placeholder="Type your message here..."
                {...register("message", {
                  required: "Enter your message",
                  minLength: {
                    value: 10,
                    message: "Provide a more detailed message",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Please keep your message under 1000 characters",
                  },
                })}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="border border-blue-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <div className="flex flex-row justify-between">
                <p className=" text-sm text-blue-400">Max 1000 characters</p>

                <div className="text-xs text-blue-400">
                  {messageText.length} / 1000
                </div>
              </div>
              {errors.message?.message &&
                typeof errors.message.message === "string" && (
                  <p className="text-red-500 text-sm mt-1 items-center flex flex-row gap-1">
                    <OctagonAlert className="w-4 h-4 text-red-500" />
                    {errors.message.message}
                  </p>
                )}
              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg transition-opacity ${
                  isLoading
                    ? "bg-blue-900 text-white opacity-90 cursor-not-allowed"
                    : "bg-blue-900 text-white hover:opacity-90"
                }`}
              >
                {isLoading && (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {isLoading ? "Sending..." : "Send message"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;
