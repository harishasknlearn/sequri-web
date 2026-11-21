"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface ConsultationFormProps {
  defaultService?: string;
}

export function ConsultationForm({ defaultService = "Managed Security Services" }: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-navy">
          Consultation Request Received
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Thank you, <span className="font-semibold text-navy">{form.name}</span>. Our
          security advisory team will reach out to{" "}
          <span className="font-semibold text-navy">{form.email}</span> to schedule your
          discovery call.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div>
        <h3 className="font-display text-xl font-bold text-navy">
          Schedule a Free Consultation
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Tell us about your security goals and our experts will prepare a tailored plan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="consult-name" className="block text-sm font-medium text-slate-700">
            Full Name *
          </label>
          <input
            id="consult-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Doe"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label htmlFor="consult-company" className="block text-sm font-medium text-slate-700">
            Company / Organization *
          </label>
          <input
            id="consult-company"
            type="text"
            required
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Acme Corp"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="consult-phone" className="block text-sm font-medium text-slate-700">
            Phone Number *
          </label>
          <input
            id="consult-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 91333 32822"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label htmlFor="consult-email" className="block text-sm font-medium text-slate-700">
            Company Email *
          </label>
          <input
            id="consult-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="consult-service" className="block text-sm font-medium text-slate-700">
          How Can We Help You?
        </label>
        <select
          id="consult-service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-navy focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        >
          <option value="Managed Security Services">Managed Security Services (24/7 SOC)</option>
          <option value="Security Testing & VAPT">Security Testing & VAPT</option>
          <option value="Compliance Verification & ISO 27001">Compliance Verification & ISO 27001</option>
          <option value="Security Architecture">Security Architecture Design & Implementation</option>
          <option value="Incident Response & Forensics">Security Incident Response & Forensics</option>
          <option value="Network Decontamination">Network Decontamination (NDaS)</option>
          <option value="Secure SDLC">Secure Software Development (DevSecOps)</option>
          <option value="Cybersecurity Training">Cybersecurity Training (CSP)</option>
        </select>
      </div>

      <div>
        <label htmlFor="consult-message" className="block text-sm font-medium text-slate-700">
          Project Scope / Message
        </label>
        <textarea
          id="consult-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Briefly describe your infrastructure, compliance targets, or security challenges..."
          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Request Free Consultation
      </button>
    </form>
  );
}
