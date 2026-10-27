"use client";

import React, { useEffect, useState } from "react";
import { contactPageStyles as s } from "@/public/dummyStyles";
import emailjs from "@emailjs/browser";
import { Boxes } from "../components/ui/background-boxes";
import { toast } from "sonner";
import { email, gmailComposeUrl } from "@/lib/utils";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const publicKey = "shPAIcfWXqEoYpCQb";
    if (publicKey) emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const serviceId = "service_a0wuqri";
    const templateId = "template_ud12fmu";

    try {
      if (!serviceId || !templateId) {
        throw new Error("EmailJS service or template ID not configure");
      }

      await emailjs.send(serviceId, templateId, templateParams);

      setFormData({ name: "", email: "", subject: "", message: "" });
      setFocused(null);

      toast.success("Message sent - thank you!");
    } catch (error) {
      console.error("Emailjs error:", error);
      toast.error("Failed to send message. PLease try again later");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getLabelClass = (fieldName: string) => {
    const baseClass = s.formLabelBase;
    const focusedClass =
      focused === fieldName || formData[fieldName as keyof typeof formData]
        ? s.formLabelFocused
        : s.formLabelUnfocused;

    return `${baseClass} ${focusedClass}`;
  };
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.formOuterContainer}>
          <div className={s.backgroundOverlay} />
          <Boxes />

          <div className={s.headerContainer}>
            <h1 className={s.headerTitle}>Get in Touch</h1>
            <p className={s.headerSubtitle}>
              Have a project in mind or just want to say hi? I&apos;d love to
              hear form you.
            </p>
          </div>
          <div className={s.contactMethodsGrid}>
            <a
              href={gmailComposeUrl}
              aria-label={`Compose email to ${email} in Gmail`}
              target="_blank"
              rel="noopener noreferrer"
              className={s.contactCard}
            >
              <div className={s.contactIconContainer}>
                <svg
                  className={s.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className={s.contactLabel}>Email</p>
                <p className={s.contactValue}>follow.timothy@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/timothy-mbachu/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.contactCard}
            >
              <div className={s.contactIconContainer}>
                <svg
                  className={s.contactIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className={s.contactLabel}>LinkedIn</p>
                <p className={s.contactValue}>Timothy Mbachu</p>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className={s.formContainer}>
            <div className={s.formGrid}>
              {/* Name Field */}
              <div className={s.formFieldContainer}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={s.formInput}
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="name" className={getLabelClass("name")}>
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className={s.formFieldContainer}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={s.formInput}
                  placeholder="john@example.com"
                  required
                />
                <label htmlFor="email" className={getLabelClass("email")}>
                  Email
                </label>
              </div>

              {/* Subject Field */}
              <div className={`${s.formFieldContainer} md:col-span-2`}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={s.formInput}
                  placeholder="Project Collaboration"
                  required
                />
                <label htmlFor="subject" className={getLabelClass("subject")}>
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className={`${s.formFieldContainer} md:col-span-2`}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={6}
                  className={s.formTextarea}
                  placeholder="Tell me about your project..."
                  required
                />
                <label htmlFor="message" className={getLabelClass("message")}>
                  Message
                </label>
              </div>
            </div>

            <div className={s.submitButtonContainer}>
              <button
                type="submit"
                className={s.submitButton}
                disabled={sending}
                aria-busy={sending}
              >
                <span className={s.submitButtonText}>
                  {sending ? "Sending..." : "Send Message"}
                  <svg
                    className={s.submitButtonIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
