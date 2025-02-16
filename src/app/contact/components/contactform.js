"use client";
import React from "react";
import { useState } from "react";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can add your API call or email service integration here
  };

  return (
    <div className="bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase text-red-600 mb-4">
            Contact Adama City FC
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with us for inquiries, partnerships, or feedback
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Club Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-sm">
                      Adama City FC Stadium
                      <br />
                      PO Box 1234
                      <br />
                      Adama, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm">
                      info@adamacityfc.com
                      <br />
                      tickets@adamacityfc.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-sm">
                      +251 912 345 678
                      <br />
                      +251 922 334 455
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Club Location"
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.219669739346!2d39.26747031429671!3d8.998838893565492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a7c17989ab%3A0x2a9e76e89b9b3f8e!2sAdama!5e0!3m2!1sen!2set!4v1623937574254!5m2!1sen!2set"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
