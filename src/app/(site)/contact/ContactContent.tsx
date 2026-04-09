"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Contact.module.scss";
import Turnstile from "react-turnstile";

interface FormData {
    businessEmail: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    location: string;
    jobTitle: string;
    companyName: string;
    companyHQ: string;
    areaOfInterest: string;
    enquiry: string;
    marketingConsent: boolean;
    captchaConfirmed: boolean;
}

const locations = [
    "United Arab Emirates", "Saudi Arabia", "Kuwait", "Bahrain", "Qatar", "Oman",
    "United Kingdom", "United States", "Singapore", "India", "Other"
];

const areasOfInterest = [
    "Direct Portfolio Investment",
    "Structured Co-Investment",
    "Institutional Capital Partnerships",
    "Investment Structuring",
    "Capital Governance",
    "General Enquiry"
];

export default function ContactContent() {
    const [formData, setFormData] = useState<FormData>({
        businessEmail: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        location: "",
        jobTitle: "",
        companyName: "",
        companyHQ: "",
        areaOfInterest: "",
        enquiry: "",
        marketingConsent: false,
        captchaConfirmed: false,
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? target.checked : value,
        }));
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        if (!formData.businessEmail) newErrors.businessEmail = "Business email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail))
            newErrors.businessEmail = "Please enter a valid email address.";
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.lastName) newErrors.lastName = "Last name is required.";
        if (!formData.location) newErrors.location = "Please select your location.";
        if (!formData.jobTitle) newErrors.jobTitle = "Job title is required.";
        if (!formData.companyName) newErrors.companyName = "Company name is required.";
        if (!formData.companyHQ) newErrors.companyHQ = "Please select your company HQ.";
        if (!formData.areaOfInterest) newErrors.areaOfInterest = "Please select an area of interest.";
        if (!formData.enquiry) newErrors.enquiry = "Please describe your enquiry.";
        if (!formData.captchaConfirmed) newErrors.captchaConfirmed = "Please confirm the CAPTCHA.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        setErrors({});

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setShowSuccess(true);
            } else {
                setErrors((prev) => ({
                    ...prev,
                    enquiry: result.error || "Something went wrong. Please try again or contact support directly.",
                }));
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setErrors((prev) => ({
                ...prev,
                enquiry: "Could not connect to the server. Please check your internet connection.",
            }));
        } finally {
            setSubmitting(false);
        }
    };

    const [isNarrow, setIsNarrow] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsNarrow(window.innerWidth < 380);
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeSuccess = () => {
        setShowSuccess(false);
        setFormData({
            businessEmail: "", phoneNumber: "", firstName: "", lastName: "",
            location: "", jobTitle: "", companyName: "", companyHQ: "",
            areaOfInterest: "", enquiry: "", marketingConsent: false, captchaConfirmed: false,
        });
        setErrors({});
    };

    return (
        <>
            <div className={styles.contactPage}>
                <div className="container">
                    {/* Breadcrumb */}
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Contact Us</span>
                    </nav>

                    {/* Two-column layout */}
                    <div className={styles.twoColumnGrid}>

                        {/* ── Left Dark Panel ── */}
                        <aside className={styles.leftPanel}>
                            <h1 className={styles.leftHeadline}>
                                Capital starts with a conversation.
                            </h1>
                            <p className={styles.leftDescription}>
                                We&apos;re here to work with serious capital allocators, institutional partners, and qualified investors, operating independently and without conflict.
                            </p>
                            <p className={styles.leftDescription}>
                                Use this form to share a few details. We will match you with the right advisor and respond within one to two working days.
                            </p>
                            <p className={styles.leftCta}>
                                Get in touch today, and let&apos;s structure the right conversation.
                            </p>

                            <div className={styles.leftDivider} />

                            <div className={styles.leftContactGroup}>
                                <p className={styles.leftContactTitle}>Careers</p>
                                <p className={styles.leftContactBody}>
                                    For employment enquiries, please email{" "}
                                    <a href="mailto:careers@gv.ventures">careers@gv.ventures</a>.
                                </p>
                            </div>

                            <div className={styles.leftContactGroup}>
                                <p className={styles.leftContactTitle}>Support</p>
                                <p className={styles.leftContactBody}>
                                    For general platform questions and support, please email{" "}
                                    <a href="mailto:support@gv.ventures">support@gv.ventures</a>.
                                </p>
                            </div>

                            <div className={styles.leftContactGroup}>
                                <p className={styles.leftContactTitle}>Compliance</p>
                                <p className={styles.leftContactBody}>
                                    For compliance and governance enquiries, please contact{" "}
                                    <a href="mailto:compliance@gv.ventures">compliance@gv.ventures</a>.
                                </p>
                            </div>
                        </aside>

                        {/* ── Right Form Panel ── */}
                        <section className={styles.rightPanel}>
                            <p className={styles.formEyebrow}>
                                For new enquiries and institutional partnership enquiries only.
                            </p>

                            <form
                                className={styles.form}
                                onSubmit={handleSubmit}
                                noValidate
                                id="contact-form"
                            >
                                {/* Row 1: Business email + Phone */}
                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label} htmlFor="businessEmail">
                                            Business email<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            id="businessEmail"
                                            name="businessEmail"
                                            type="email"
                                            className={styles.input}
                                            value={formData.businessEmail}
                                            onChange={handleChange}
                                            autoComplete="email"
                                        />
                                        {errors.businessEmail && (
                                            <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                                {errors.businessEmail}
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label} htmlFor="phoneNumber">
                                            Phone number
                                        </label>
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="tel"
                                            className={styles.input}
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            autoComplete="tel"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: First name + Last name */}
                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label} htmlFor="firstName">
                                            First name<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            className={styles.input}
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            autoComplete="given-name"
                                        />
                                        {errors.firstName && (
                                            <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                                {errors.firstName}
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label} htmlFor="lastName">
                                            Last name<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            className={styles.input}
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            autoComplete="family-name"
                                        />
                                        {errors.lastName && (
                                            <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                                {errors.lastName}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Row 3: Location (full width) */}
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="location">
                                        Where are you located?<span className={styles.required}>*</span>
                                    </label>
                                    <select
                                        id="location"
                                        name="location"
                                        className={styles.select}
                                        value={formData.location}
                                        onChange={handleChange}
                                    >
                                        <option value="">Please Select</option>
                                        {locations.map((loc) => (
                                            <option key={loc} value={loc}>{loc}</option>
                                        ))}
                                    </select>
                                    {errors.location && (
                                        <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                            {errors.location}
                                        </span>
                                    )}
                                </div>

                                {/* Row 4: Job title + Company name */}
                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label} htmlFor="jobTitle">
                                            Job title<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            id="jobTitle"
                                            name="jobTitle"
                                            type="text"
                                            className={styles.input}
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            autoComplete="organization-title"
                                        />
                                        {errors.jobTitle && (
                                            <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                                {errors.jobTitle}
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label} htmlFor="companyName">
                                            Company name<span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            id="companyName"
                                            name="companyName"
                                            type="text"
                                            className={styles.input}
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            autoComplete="organization"
                                        />
                                        {errors.companyName && (
                                            <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                                {errors.companyName}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Row 5: Company HQ (full width) */}
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="companyHQ">
                                        Where is your company headquartered?<span className={styles.required}>*</span>
                                    </label>
                                    <select
                                        id="companyHQ"
                                        name="companyHQ"
                                        className={styles.select}
                                        value={formData.companyHQ}
                                        onChange={handleChange}
                                    >
                                        <option value="">Please Select</option>
                                        {locations.map((loc) => (
                                            <option key={loc} value={loc}>{loc}</option>
                                        ))}
                                    </select>
                                    {errors.companyHQ && (
                                        <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                            {errors.companyHQ}
                                        </span>
                                    )}
                                </div>

                                {/* Row 6: Area of interest (full width) */}
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="areaOfInterest">
                                        What is your main area of interest?<span className={styles.required}>*</span>
                                    </label>
                                    <select
                                        id="areaOfInterest"
                                        name="areaOfInterest"
                                        className={styles.select}
                                        value={formData.areaOfInterest}
                                        onChange={handleChange}
                                    >
                                        <option value="">Please Select</option>
                                        {areasOfInterest.map((area) => (
                                            <option key={area} value={area}>{area}</option>
                                        ))}
                                    </select>
                                    {errors.areaOfInterest && (
                                        <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                            {errors.areaOfInterest}
                                        </span>
                                    )}
                                </div>

                                {/* Row 7: Enquiry textarea (full width) */}
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label} htmlFor="enquiry">
                                        Brief description of your enquiry<span className={styles.required}>*</span>
                                    </label>
                                    <textarea
                                        id="enquiry"
                                        name="enquiry"
                                        className={styles.textarea}
                                        value={formData.enquiry}
                                        onChange={handleChange}
                                        rows={5}
                                    />
                                    {errors.enquiry && (
                                        <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "0.2rem" }}>
                                            {errors.enquiry}
                                        </span>
                                    )}
                                </div>

                                {/* Marketing consent checkbox */}
                                <div className={styles.checkboxGroup}>
                                    <input
                                        id="marketingConsent"
                                        name="marketingConsent"
                                        type="checkbox"
                                        className={styles.checkbox}
                                        checked={formData.marketingConsent}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="marketingConsent" className={styles.checkboxLabel}>
                                        Yes, I agree to receive GrowValley communications. I can unsubscribe or update my choices at any time.
                                    </label>
                                </div>

                                {/* Legal text */}
                                <p className={styles.legalText}>
                                    By clicking submit, I agree that GrowValley may contact me regarding my request and related services featured on this page, and that my personal information will be stored and processed in accordance with GrowValley&apos;s{" "}
                                    <Link href="/privacy-policy">Privacy Notice</Link>.
                                </p>

                                {/* real Cloudflare Turnstile */}
                                <div className={styles.captchaWrapper}>
                                    <Turnstile
                                        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                                        size={isNarrow ? "compact" : "normal"}
                                        onVerify={(token) => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                captchaConfirmed: token as any,
                                            }));
                                            if (errors.captchaConfirmed) {
                                                setErrors((prev) => ({ ...prev, captchaConfirmed: undefined }));
                                            }
                                        }}
                                    />
                                </div>
                                {errors.captchaConfirmed && (
                                    <span style={{ fontSize: "0.78rem", color: "#c0392b", marginTop: "-0.75rem", display: "block" }}>
                                        {errors.captchaConfirmed}
                                    </span>
                                )}

                                {/* Submit button */}
                                <div>
                                    <button
                                        type="submit"
                                        id="contact-submit"
                                        className={styles.submitBtn}
                                        disabled={submitting}
                                    >
                                        {submitting ? "Submitting…" : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>

            {/* ─── Success Modal ─── */}
            {showSuccess && (
                <div className={styles.successOverlay} role="dialog" aria-modal="true" aria-labelledby="success-title">
                    <div className={styles.successCard}>
                        <div className={styles.successIcon}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h2 className={styles.successTitle} id="success-title">Enquiry Received</h2>
                        <div className={styles.successDetails}>
                            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                            <p><strong>Email:</strong> {formData.businessEmail}</p>
                            {formData.phoneNumber && (
                                <p><strong>Phone:</strong> {formData.phoneNumber}</p>
                            )}
                            <p><strong>Company:</strong> {formData.companyName}</p>
                            <p><strong>Role:</strong> {formData.jobTitle}</p>
                            <p><strong>Location:</strong> {formData.location}</p>
                            <p><strong>Area of Interest:</strong> {formData.areaOfInterest}</p>
                        </div>
                        <p className={styles.successNote}>
                            Thank you for reaching out. A member of the GrowValley team will be in contact within one to two working days.
                        </p>
                        <button id="success-close" className={styles.successClose} onClick={closeSuccess}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
