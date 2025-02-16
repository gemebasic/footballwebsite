import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const sponsors = [
    { id: 1, logo: "/sponsor1.jpeg", name: "Sponsor 1" },
    { id: 2, logo: "/sponsor2.jpeg", name: "Sponsor 2" },
    { id: 3, logo: "/sponsor3.jpeg", name: "Sponsor 3" },
    { id: 4, logo: "/sponsor4.png", name: "Sponsor 4" },
  ];

  const socialMediaLinks = [
    { id: 1, icon: "/facebook.jpeg", url: "https://facebook.com" },
    { id: 2, icon: "/twitter.png", url: "https://twitter.com" },
    { id: 3, icon: "/instagram.jpeg", url: "https://instagram.com" },
    { id: 4, icon: "/youtube.jpeg", url: "https://youtube.com" },
  ];

  const footerLinks = [
    { id: 1, text: "About Us", url: "/about" },
    { id: 2, text: "Contact Us", url: "/contact" },
    { id: 3, text: "Privacy Policy", url: "/privacy" },
    { id: 4, text: "Terms & Conditions", url: "/terms" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Sponsor/Partnership Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-center mb-4">
            Our Sponsors & Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex items-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialMediaLinks.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.icon}
                alt={social.url}
                width={24}
                height={24}
                className="hover:opacity-75 transition-opacity"
              />
            </Link>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Adama City Football Club. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
