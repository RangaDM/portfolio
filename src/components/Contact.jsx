import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { BallCanvas } from "./canvas";
import contactimg from "../assets/contactimg.svg";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_kh62n9h",
        "template_exghuqq",
        {
          from_name: form.name,
          to_name: "Ranga",
          from_email: form.email,
          to_email: "rangamaithreepala@gmail.com",
          message: form.message,
        },
        "QkrJEOU8nuXvwSrUo"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you. Your message has been sent successfully. I'll get back to you soon."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <p className={`${styles.sectionSubText} text-center pb-5`}>
        Get in touch with me
      </p>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] lg:block hidden"
        >
          <div className="flex flex-row flex-wrap justify-center gap-10 overflow-hidden">
            {contactInfo.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <Link to={technology.link} target="_blank">
                  <BallCanvas icon={technology.icon} />
                </Link>
              </div>
            ))}
          </div>
        </motion.div> */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className=" xl:flex-1 xl:h-auto md:h-[550px] h-[350px] lg:block hidden content-center"
        >
          <div className="flex justify-center">
          <img src={contactimg} alt="contact" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
