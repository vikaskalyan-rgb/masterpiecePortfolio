"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    phone_number: '',
    email: '',
    message: '',
    reply_to: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendSMS = async (formData) => {
    // Create a formatted message with all form details
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
                // You can include the form data if needed on the server side
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
        throw error;
    }
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    // Your EmailJS credentials
    const serviceId = "service_ar2xtif";
    const templateId = "template_8b2v7x8";
    const userId = "7N-FOg9odRYsFzSla";

    try {
      // Send email
      const emailResult = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "Kalyan",
          from_name: formData.from_name,
          phone_number: formData.phone_number,
          email: formData.email,
          message: formData.message,
        },
        userId
      );
      
      console.log("Email sent successfully:", emailResult.text);

      // Send SMS
      await sendSMS(formData);
      console.log("SMS sent successfully");

      setEmailSubmitted(true);
      
      // Clear form
      setFormData({
        from_name: '',
        phone_number: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error("Error sending email or SMS:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-2 md:gap-4 relative"
    >
      <div className="bg-[radial-gradient( from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-black my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-black">
          Were here to help and always excited to connect! Whether you have a question, feedback, or simply want to discuss a potential project, feel free to reach out to us. We value every conversation and strive to respond promptly. Your thoughts and ideas are important to us. Please dont hesitate to contact us through the form on the right or use the details below. We look forward to hearing from you soon and working together to bring your vision to life!
        </p>

        <div className="mt-6">
          <h3 className="font-bold text-xl text-black">Contact Details:</h3>
          <p className="text-black"><strong>N Kalyan</strong></p>
          <p className="text-black"><strong>Phone:</strong> 7304420600 | 9994445388</p>
          <p className="text-black"><strong>Masterpiece</strong></p>
          <p className="text-black"><strong>Factory Address:</strong> Noothanjeri Road, Madambakkam</p>
        </div>
      </div>
      <div className="z-10 relative">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email and SMS sent successfully! You will be contacted very shortly.
          </p>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label 
                htmlFor="from_name" 
                className="text-gray-700 block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                name="from_name"
                type="text"
                id="from_name"
                required
                value={formData.from_name}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Please Enter Your Name"
              />
            </div>
           
            <div>
              <label 
                htmlFor="phone_number" 
                className="text-gray-700 block mb-2 text-sm font-medium"
              >
                Phone Number
              </label>
              <input
                name="phone_number"
                type="text"
                id="phone_number"
                required
                value={formData.phone_number}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Please Enter Your Phone Number"
              />
            </div>
           
            <div>
              <label 
                htmlFor="email" 
                className="text-gray-700 block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Please Enter Your Email ID"
              />
            </div>
           
            <div>
              <label 
                htmlFor="message" 
                className="text-gray-700 block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <input
                name="message"
                type="text"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Please Enter your Message"
              />
            </div>
           
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Communication
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;