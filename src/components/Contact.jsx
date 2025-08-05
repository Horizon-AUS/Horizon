import { BriefcaseIcon, Mail, MapPin, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_ieczo6z";
    const templateId = "template_2cfi5tq";
    const publicKey = "QvdmDvc9WS48_RUbp";

    const templateParams = {
      name: name,
      email: email,
      message: message,
      to: "Horizon",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((err) => {
        console.log("Error sending email: ", err);
      });

    setTimeout(() => {
      toast({
        title: "Message send!",
        description: "Thankyou for your message. We will get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project or and event planned? Reach out to us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BriefcaseIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> ABN</h4>
                  <a
                    href="https://abr.business.gov.au/ABN/View?id=57564563925"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    57 564 563 925
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:horizonbiz52@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    horizonbiz52@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a
                    href="https://www.google.com/maps/place/bendigo+vic+australia/data=!4m2!3m1!1s0x6ad759eb3c77c5e3:0x50579a430a0d940?sa=X&ved=1t:155783&ictx=111"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Bendigo, Vic, Australia
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect with Us</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.instagram.com/horizon.aus/"
                  target="_blank"
                >
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.youtube.com/@Horizon-AUS" target="_blank">
                  <FaYoutube size={24} />
                </a>
                <a href="https://www.tiktok.com/@horizonau6" target="_blank">
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Smith..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johnsmith@gmail.com..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
