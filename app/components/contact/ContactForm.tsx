"use client";

import { useRef, useState } from "react";

type ContactField = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

type ContactFormContent = {
  title: string;
  recipientEmail: string;
  successMessage: string;
  fields: ContactField[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

type FormValues = Record<string, string> & {
  message: string;
};

type FormErrors = Partial<Record<string, string>>;

type ContactFormProps = {
  content: ContactFormContent;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?:\+?\d[\d\s-]{7,18})$/;

function getInitialValues(fields: ContactField[]) {
  return fields.reduce<FormValues>(
    (values, field) => ({
      ...values,
      [field.name]: "",
    }),
    { message: "" },
  );
}

function encodeMailBody(values: FormValues, fields: ContactField[]) {
  const fieldLines = fields.map((field) => `${field.label}: ${values[field.name].trim()}`);

  return [
    "Hello DSR Design and Engineering Solutions,",
    "",
    "I would like to enquire about your services.",
    "",
    ...fieldLines,
    "",
    `Message: ${values.message.trim()}`,
    "",
    "Regards,",
    values.name?.trim() || "Website visitor",
  ].join("\n");
}

export function ContactForm({ content }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(() => getInitialValues(content.fields));
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function updateValue(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  }

  function validate() {
    const nextErrors: FormErrors = {};

    content.fields.forEach((field) => {
      const value = values[field.name]?.trim() ?? "";

      if (!value) {
        nextErrors[field.name] = `${field.label} is required.`;
        return;
      }

      if (field.name === "name" && (value.length < 2 || value.length > 80)) {
        nextErrors[field.name] = "Enter a valid name.";
      }

      if (field.type === "email" && !emailPattern.test(value)) {
        nextErrors[field.name] = "Enter a valid email address.";
      }

      if (field.type === "tel" && !phonePattern.test(value)) {
        nextErrors[field.name] = "Enter a valid phone number.";
      }
    });

    if (!values.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Please add a little more detail.";
    }

    return nextErrors;
  }

  function focusFirstError(nextErrors: FormErrors) {
    const firstFieldName = Object.keys(nextErrors)[0];
    const field = formRef.current?.querySelector<HTMLElement>(`[name="${firstFieldName}"]`);
    field?.focus();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    const subject = `Website enquiry from ${values.name.trim()}`;
    const body = encodeMailBody(values, content.fields);
    window.location.href = `mailto:${content.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <h2>{content.title}</h2>
      <div className="contact-form-grid">
        {content.fields.map((field) => (
          <label key={field.name}>
            <span>{field.label} *</span>
            <input
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              value={values[field.name] ?? ""}
              onChange={(event) => updateValue(field.name, event.target.value)}
            />
            {errors[field.name] ? (
              <small className="contact-field-error" id={`${field.name}-error`}>
                {errors[field.name]}
              </small>
            ) : null}
          </label>
        ))}
      </div>
      <label>
        <span>{content.messageLabel} *</span>
        <textarea
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          name="message"
          placeholder={content.messagePlaceholder}
          rows={4}
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
        />
        {errors.message ? (
          <small className="contact-field-error" id="message-error">
            {errors.message}
          </small>
        ) : null}
      </label>
      <button type="submit">{content.submitLabel}</button>
      {submitted ? (
        <p className="contact-form-success" role="status">
          {content.successMessage}
        </p>
      ) : null}
    </form>
  );
}
