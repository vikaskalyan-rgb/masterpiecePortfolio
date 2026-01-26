"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    from_name: '',
    phone_number: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    } else if (formData.from_name.trim().length < 2) {
      newErrors.from_name = 'Name must be at least 2 characters';
    }
    
    // Phone validation
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone_number.trim())) {
      newErrors.phone_number = 'Please enter a valid phone number';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendSMS = async (formData) => {
    const message = `
New Contact Form Submission:
Name: ${formData.from_name}
Phone: ${formData.phone_number}
Email: ${formData.email}
Message: ${formData.message}
    `.trim();

    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
          formData: {
            name: formData.from_name,
            phone: formData.phone_number,
            email: formData.email,
            message: formData.message
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('SMS sent:', data);
      return data;
    } catch (error) {
      console.error('Error sending SMS:', error);
      // Don't throw - we still want to show success even if SMS fails
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    const serviceId = "service_ar2xtif";
    const templateId = "template_8b2v7x8";
    const userId = "7N-FOg9odRYsFzSla";

    try {
      // Trim all form data before sending
      const trimmedData = {
        from_name: formData.from_name.trim(),
        phone_number: formData.phone_number.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "Kalyan",
          from_name: trimmedData.from_name,
          phone_number: trimmedData.phone_number,
          email: trimmedData.email,
          message: trimmedData.message,
        },
        userId
      );
      
      // Try to send SMS, but don't fail if it doesn't work
      await sendSMS(trimmedData);
      
      setEmailSubmitted(true);
      setFormData({
        from_name: '',
        phone_number: '',
        email: '',
        message: '',
      });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email or SMS:", error);
      alert("There was an error sending your message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-px bg-amber-700"></div>
            <span className="text-amber-700 uppercase tracking-widest text-sm font-light">
              Get In Touch
            </span>
            <div className="w-12 h-px bg-amber-700"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-stone-900">
            Let's <span className="text-amber-800 font-normal">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-stone-700 text-lg leading-relaxed">
                We're here to help and always excited to connect! Whether you have a question, feedback, or simply want to discuss a potential project, feel free to reach out to us.
              </p>
              <p className="text-stone-600 leading-relaxed">
                We value every conversation and strive to respond promptly. Your thoughts and ideas are important to us. We look forward to hearing from you soon and working together to bring your vision to life!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Primary Contact */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-stone-900 mb-2">Primary Contact</h3>
                    <p className="text-stone-800 font-medium">N Kalyan</p>
                    <div className="mt-2 space-y-1">
                      <a href="tel:7304420600" className="flex items-center text-stone-600 hover:text-amber-800 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        7304420600
                      </a>
                      <a href="tel:9994445388" className="flex items-center text-stone-600 hover:text-amber-800 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        9994445388
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Factory Location */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-stone-900 mb-2">Factory Address</h3>
                    <p className="text-stone-800 font-medium">MasterPiece Interiors</p>
                    <p className="text-stone-600 mt-1">
                      Noothanjeri Road, Madambakkam<br />
                      Chennai, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-stone-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal text-stone-900 mb-2">Business Hours</h3>
                    <p className="text-stone-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-stone-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-stone-200">
              {emailSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-stone-900 mb-3">Message Sent Successfully!</h3>
                  <p className="text-stone-600 mb-6">
                    Thank you for reaching out. We'll get back to you very shortly.
                  </p>
                  <button
                    onClick={() => setEmailSubmitted(false)}
                    className="text-amber-800 hover:text-amber-900 font-light underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  {/* Name Field */}
                  <div>
                    <label 
                      htmlFor="from_name" 
                      className="block text-stone-800 text-sm font-light uppercase tracking-wider mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      name="from_name"
                      type="text"
                      id="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-stone-50 border rounded-lg text-stone-900 focus:outline-none transition-all duration-300 ${
                        errors.from_name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                          : 'border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-100'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.from_name && (
                      <p className="mt-1 text-sm text-red-600">{errors.from_name}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label 
                      htmlFor="phone_number" 
                      className="block text-stone-800 text-sm font-light uppercase tracking-wider mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      name="phone_number"
                      type="tel"
                      id="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-stone-50 border rounded-lg text-stone-900 focus:outline-none transition-all duration-300 ${
                        errors.phone_number 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                          : 'border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-100'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone_number && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone_number}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-stone-800 text-sm font-light uppercase tracking-wider mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-stone-50 border rounded-lg text-stone-900 focus:outline-none transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                          : 'border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-100'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-stone-800 text-sm font-light uppercase tracking-wider mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-stone-50 border rounded-lg text-stone-900 focus:outline-none transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                          : 'border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-100'
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 font-light tracking-wide flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-amber-950 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </form>
              )}
            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-amber-700/20 rounded-br-3xl pointer-events-none"></div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent"></div>
    </section>
  );
};

export default EmailSection;