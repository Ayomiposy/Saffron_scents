import { EmailJSResponseStatus } from "@emailjs/browser";
import Nav from "./component/nav";
import Waitlist from "./component/waitlist";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react";
import SEO from "./component/seo";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result);
          if (result.status === 200) {
            setTimeout(() => {
              setIsSubmitted(true);
            }, 1000);
          }
        },
        (error) => {
          console.log(error.text);
          console.log(error);
        },
      );
  };

  return (
    <div className="bg-background min-h-screen w-full overflow-x-hidden">
      <SEO
        title="Saffron Scents - Crafted in scent. Defined by Elegance"
        description="Discover Saffron Scents, where fragrance meets elegance. Crafted with passion, our scents are designed to captivate your senses and elevate your style. Join our waitlist for exclusive access to our upcoming collection."
      />
      <Nav />

      <main className="flex flex-col gap-8 items-center justify-center w-full">
        <div>
          <Waitlist />
          <p className="text-center mt-10 text-italianno italic text-2xl text-black">
            Crafted in scent. Defined by Elegance
          </p>
        </div>
        <button className="bg-[#D9B6A0] text-black py-2 px-4 rounded-2xl mt-10 mb-14 mx-auto block font-carves text-3xl md:text-5xl shadow-sm">
          C0MING S00N
        </button>
        {/* Image is here */}
        <img
          src="/images/hero-img.png"
          alt="Hero image"
          className="max-w-[799px] w-full h-auto object-cover mx-auto"
        />
      </main>

      {/* waitlist form */}
      <div className="bg-[#D9B6A0]" id="waitlist">
        <h2 className="text-center text-italianno text-5xl text-primary pt-15">
          Join our waitlist
        </h2>
        {isSubmitted ? (
          <p className="text-center text-primary py-20  text-5xl">
            Thank you for signing up! We'll be in touch soon.
          </p>
        ) : (
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col px-4 md:px-8 py-20 gap-5 mt-5 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl text-primary">Sign up Form</h3>
            <div className="text-primary bg-background px-4 py-2 w-2/5 text-2xl shadow-md">
              Get early access
            </div>
            {/* Email input */}
            <label htmlFor="email_address" className="text-primary">
              Email Address
            </label>
            <input
              type="email"
              name="email_address"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-xl border border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {/* Name Input */}
            <label htmlFor="full_name" className="text-primary">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              required
              placeholder="Enter your full name"
              className="px-4 py-2 rounded-xl border border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-primary text-white w-3/5 px-6 py-2 mt-6 rounded-xl text-lg font-medium hover:text-secondary cursor-pointer"
            >
              Sign up
            </button>
          </form>
        )}
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
