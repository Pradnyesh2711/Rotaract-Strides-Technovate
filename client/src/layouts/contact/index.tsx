import React from 'react';

const ContactUs= () => {

    return <div>
  
    <div className="contact-container bg-opacity-70 bg-cover bg-center bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-semibold text-gray-900">Contact Us</h1>
          <p className="text-brown text-lg font-normal mb-8">
            We'd love to hear from you. Please fill out the form below or use the contact information provided.
          </p>

          <form className="mt-8">
        <div className="mb-8">
          <label htmlFor="name" className="block text-gray-900 mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded text-base" required />
        </div>

        <div className="mb-8">
          <label htmlFor="email" className="block text-gray-900 mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded text-base" required />
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-gray-900 mb-2">Message</label>
          <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded text-base" required></textarea>
        </div>

        <div className="mb-8">
          <label htmlFor="userType" className="block text-gray-900 mb-2">Are you a:</label>
          <select id="userType" name="userType" className="w-full p-2 border border-gray-300 rounded text-base" required>
            <option value="community">Community Member</option>
            <option value="user">Individual User</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer text-base">Submit</button>
      </form>

        </div>
        
        <div className="md:w-1/2 p-6">
          <div className="contact-info">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
            <p className="text-base text-gray-700">Email: example@email.com</p>
            <p className="text-base text-gray-700">Phone: +1 123-456-7890</p>
            <p className="text-base text-gray-700">Address: 123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  

    </div>;
  };
  
  export default ContactUs;