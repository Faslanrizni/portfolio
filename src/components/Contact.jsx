import React from 'react';

const ContactForm = () => {
  return (
      <div className="flex flex-col lg:flex-row justify-center items-center w-full min-h-screen bg-100 p-8" id="contact">
        <div className="info text-white-700 max-w-lg text-lg leading-relaxed lg:pr-12 mb-8 lg:mb-0">
          <div className="infoSub flex items-center mb-4">
            <i className="fa fa-map-marker mr-4 text-xl" aria-hidden="true"></i>
            Thalapitiya, Galle, Sri Lanka
          </div>
          <div className="infoSub flex items-center mb-4">
            <i className="fa fa-phone mr-4 text-xl" aria-hidden="true"></i>
            +94 762720321
          </div>
          <div className="infoSub flex items-center mb-4">
            <i className="fa fa-envelope mr-4 text-xl" aria-hidden="true"></i>
            faslan2002rizni@gmail.com
          </div>
        </div>
        <div className="formClass bg-#151030 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-white-800 text-center text-4xl font-semibold uppercase mb-6">Contact Me</h2>
          <form className="contact" action="" method="post">
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="name">Name</label>
              <input type="text" name="name" id="name" className="text-box w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="text-box w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" required />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="message">Message</label>
              <textarea name="message" id="message" className="textarea w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Get in touch" required></textarea>
            </div>
            <div className="text-center">
              <input type="submit" name="submit" className="btn bg-orange-500 text-white px-6 py-2 text-lg font-semibold rounded-lg border border-transparent cursor-pointer transition duration-300 hover:bg-orange-600" value="Send" />
            </div>
          </form>
        </div>
      </div>
  );
}

export default ContactForm;
