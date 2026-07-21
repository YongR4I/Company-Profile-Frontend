"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get("firstName")?.toString().trim() || "";
  const lastName = formData.get("lastName")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  // Basic validation
  if (!firstName || !email || !message) {
    return {
      status: "error",
      message: "Please fill in First Name, Email, and Message fields.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (STRAPI_TOKEN) {
      headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
    }

    const res = await fetch(`${API_URL}/contact-submissions`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          firstName,
          lastName,
          email,
          phone,
          message,
        },
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.warn("Contact form submission error:", errData);
      return {
        status: "error",
        message: "Failed to send your message. Please try again later.",
      };
    }

    return {
      status: "success",
      message: "Your message has been sent! We'll get back to you shortly.",
    };
  } catch (err) {
    console.warn("Contact form network error:", err);
    return {
      status: "error",
      message: "A network error occurred. Please check your connection and try again.",
    };
  }
}
