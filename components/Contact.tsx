import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const BLOCKED_DOMAINS = [
  "realquickemail.com",
  "gentlywritten.com",
  "tempmail.com",
  "10minutemail.com",
];

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateEmail = (email: string) => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (domain && BLOCKED_DOMAINS.includes(domain)) {
      return "Please use a Gmail or an official business email address.";
    }

    return null;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSending) return;

    const formData = new FormData(formRef.current);

    const email = String(formData.get("user_email") || "").trim();
    const emailError = validateEmail(email);

    if (emailError) {
      setStatus({ type: "error", message: emailError });
      return;
    }

    setIsSending(true);
    setStatus({ type: null, message: "" });

    try {
      await emailjs.sendForm(
        "service_5viysa2",
        "template_loqcimh",
        formRef.current,
        "ZRO6lpJv1Bnysvqil"
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I’ll get back to you shortly.",
      });

      formRef.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            Let’s build something <span style={styles.italic}>bold.</span>
          </h2>
          <p style={styles.subtitle}>
            Currently accepting new projects for 2026.
          </p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="email@example.com"
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Service Required</label>
            <select name="service" required style={styles.input}>
              <option value="">Select a service</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Full-Stack Development">Full-Stack Development</option>
              <option value="Data Intelligence & Insights">Data Intelligence & Insights</option>
              <option value="AI-Powered Automation">AI-Powered Automation</option>
              
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Project Details</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              style={styles.textarea}
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            style={{
              ...styles.button,
              opacity: isSending ? 0.7 : 1,
              cursor: isSending ? "not-allowed" : "pointer",
            }}
          >
            {isSending ? "SENDING..." : "SEND MESSAGE"}
          </button>

          {status.message && (
            <p
              style={{
                ...styles.status,
                color:
                  status.type === "success" ? "#4BB543" : "#ff3333",
              }}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

// Styles (CRAFTED. aesthetic preserved)
const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "100px 20px",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "800px",
    width: "100%",
  },
  header: {
    marginBottom: "50px",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.1,
  },
  italic: {
    fontFamily: "serif",
    fontStyle: "italic",
    fontWeight: 400,
  },
  subtitle: {
    color: "#a0a0a0",
    marginTop: "15px",
    fontSize: "1.1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#666",
  },
  input: {
    padding: "16px",
    backgroundColor: "#0a0a0a",
    border: "1px solid #222",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "1rem",
    outline: "none",
  },
  textarea: {
    padding: "16px",
    backgroundColor: "#0a0a0a",
    border: "1px solid #222",
    color: "#fff",
    borderRadius: "14px",
    fontSize: "1rem",
    outline: "none",
    resize: "vertical",
  },
  button: {
    padding: "20px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "14px",
    fontWeight: 800,
    letterSpacing: "1px",
    transition: "0.3s ease",
  },
  status: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "0.9rem",
  },
};

export default Contact;