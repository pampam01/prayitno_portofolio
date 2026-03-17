import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fox } from "../models";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  // functions
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    await emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Prayitno",
          from_email: form.email,
          to_email: "emailhpwiko@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        //TODO: show success message
        showAlert({
          show: true,
          text: "Message sent successfully",
          type: "success",
        });
        //TODO: hide an alert

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(err);
        showAlert({ show: true, text: "Something went wrong", type: "danger" });
        //TODO: show error message
      });
  };
  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  return (
    <>
      <Navbar />
      <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Contact Me</h1>

          <form
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
          >
            <label className="text-black-500 font-semibold">
              Nama
              <input
                type="text"
                name="name"
                className="input"
                placeholder="nama anda "
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="example@.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Pesan
              <textarea
                type="text"
                name="message"
                rows={4}
                className="input"
                placeholder="bagaimana saya bisa membantu mu ?..."
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type="submit"
              className="btn"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Mengirim....." : "Terkirim"}
            </button>
          </form>
        </div>
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] ">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />} />
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
