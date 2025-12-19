import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
   const [status, setStatus] = useState('');

   // Formspree setup: Replace 'yourformid' with your actual form ID after signing up at Formspree.io
   const FORM_ENDPOINT = 'https://formspree.io/f/manzjloz';

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Prevent submission if a request is already pending
      if (status === 'submitting') return;

      setStatus('submitting');

      const form = e.target;
      const data = new FormData(form);

      try {
         const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: data,
            headers: {
               Accept: 'application/json',
            },
         });

         if (response.ok) {
            setStatus('success');
            form.reset(); // Clear the form fields
            setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
         } else {
            setStatus('error');
         }
      } catch (error) {
         console.error('Submission error:', error);
         setStatus('error');
      }
   };

   const getStatusMessage = () => {
      if (status === 'success') {
         return (
            <div className="bg-green-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2">
               <Send className="w-5 h-5" />
               <p className="font-semibold">
                  Message sent successfully! We'll be in touch soon.
               </p>
            </div>
         );
      }
      if (status === 'error') {
         return (
            <div className="bg-red-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2">
               <p className="font-semibold">
                  An error occurred. Please try again or email us directly.
               </p>
            </div>
         );
      }
      return null;
   };

   return (
      <div className="min-h-screen bg-academy-bg text-white pt-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto py-16">
            <header className="text-center mb-12">
               <h1 className="text-5xl font-extrabold text-white mb-4">
                  Get In Touch
               </h1>
               <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Have questions about a course, pricing, or need technical
                  help? Send us a message!
               </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
               {/* Contact Info (Left Column) */}
               <div className="lg:col-span-1 space-y-8 bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-xl">
                  <h2 className="text-2xl font-bold text-academy-accent mb-4">
                     Contact Information
                  </h2>

                  <div className="space-y-6 text-gray-300">
                     <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 flex-shrink-0 text-indigo-400" />
                        <div>
                           <h4 className="font-semibold text-white">
                              Email Us
                           </h4>
                           <p>support@davidsontech.com</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 flex-shrink-0 text-indigo-400" />
                        <div>
                           <h4 className="font-semibold text-white">Call Us</h4>
                           <p>+1 (555) 123-4567</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 flex-shrink-0 text-indigo-400" />
                        <div>
                           <h4 className="font-semibold text-white">
                              Our Location
                           </h4>
                           <p>123 Tech Park, Silicon Valley, CA 94043</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Contact Form (Right Column) */}
               <div className="lg:col-span-2 bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-xl">
                  <h2 className="text-2xl font-bold text-academy-accent mb-6">
                     Send Us a Message
                  </h2>

                  {getStatusMessage()}

                  <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                     {/* Name */}
                     <div>
                        <label
                           htmlFor="name"
                           className="block text-sm font-medium text-gray-300 mb-2"
                        >
                           Full Name
                        </label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           required
                           className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
                           placeholder="Your full name"
                        />
                     </div>

                     {/* Email */}
                     <div>
                        <label
                           htmlFor="email"
                           className="block text-sm font-medium text-gray-300 mb-2"
                        >
                           Email Address
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           required
                           className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
                           placeholder="your.email@example.com"
                        />
                     </div>

                     {/* Subject */}
                     <div>
                        <label
                           htmlFor="subject"
                           className="block text-sm font-medium text-gray-300 mb-2"
                        >
                           Subject
                        </label>
                        <input
                           type="text"
                           id="subject"
                           name="subject"
                           required
                           className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
                           placeholder="Question about the DevOps course"
                        />
                     </div>

                     {/* Message */}
                     <div>
                        <label
                           htmlFor="message"
                           className="block text-sm font-medium text-gray-300 mb-2"
                        >
                           Your Message
                        </label>
                        <textarea
                           id="message"
                           name="message"
                           rows="5"
                           required
                           className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
                           placeholder="I'd like to ask..."
                        ></textarea>
                     </div>

                     <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full inline-flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg text-gray-900 bg-academy-accent hover:bg-opacity-90 transition duration-300 shadow-lg shadow-academy-accent/50 disabled:opacity-50"
                     >
                        {status === 'submitting'
                           ? 'Sending...'
                           : 'Send Message'}
                        <Send className="w-5 h-5 ml-2" />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactPage;

// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// // Define the colors used across the theme for consistency
// const colors = {
//    accent: 'orange-600',
//    background: 'gray-900',
//    card: 'gray-800',
//    text: 'gray-300',
//    heading: 'orange-500',
// };

// const ContactPage = () => {
//    // Initial status is 'idle' - explicitly not 'success' or 'error'
//    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

//    // Formspree setup: Replace 'xwpzqjaq' with your actual form ID after signing up at Formspree.io
//    // Note: The user provided this ID previously, so we're keeping it.
//    const FORM_ENDPOINT = 'https://formspree.io/f/xwpzqjaq';

//    const handleSubmit = async (e) => {
//       e.preventDefault();

//       // Prevent submission if a request is already pending or successful
//       if (status === 'submitting' || status === 'success') return;

//       setStatus('submitting');

//       const form = e.target;
//       const data = new FormData(form);

//       try {
//          const response = await fetch(FORM_ENDPOINT, {
//             method: 'POST',
//             body: data,
//             headers: {
//                Accept: 'application/json',
//             },
//          });

//          if (response.ok) {
//             setStatus('success');
//             form.reset(); // Clear the form fields
//             // The success message stays until the user navigates away or refreshes
//          } else {
//             setStatus('error');
//          }
//       } catch (error) {
//          console.error('Submission error:', error);
//          setStatus('error');
//       }
//    };

//    const getStatusMessage = () => {
//       if (status === 'success') {
//          return (
//             <div className="bg-green-500/20 text-green-400 p-4 rounded-lg flex items-center justify-center">
//                <span className="font-semibold text-lg">
//                   Success! Your message has been sent. Thank you!
//                </span>
//             </div>
//          );
//       }
//       if (status === 'error') {
//          return (
//             <div className="bg-red-500/20 text-red-400 p-4 rounded-lg flex items-center justify-center">
//                <span className="font-semibold text-lg">
//                   An error occurred. Please try again later.
//                </span>
//             </div>
//          );
//       }
//       return null;
//    };

//    // Helper function to reset the form status
//    const resetStatus = () => {
//       setStatus('idle');
//    };

//    return (
//       <div className={`min-h-screen bg-${colors.background} pt-24`}>
//          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="text-center mb-12">
//                <h1
//                   className={`text-5xl font-extrabold text-${colors.heading} sm:text-6xl tracking-tight mb-4`}
//                >
//                   Get in Touch
//                </h1>
//                <p className={`text-xl text-${colors.text} max-w-2xl mx-auto`}>
//                   We're here to answer any questions about our courses, learning
//                   paths, or services.
//                </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                {/* Contact Information Cards */}
//                <div className="lg:col-span-1 space-y-6">
//                   {/* Email Card */}
//                   <div
//                      className={`p-6 rounded-xl bg-${colors.card} shadow-2xl`}
//                   >
//                      <Mail className={`w-8 h-8 text-${colors.accent} mb-4`} />
//                      <h3 className="text-xl font-semibold text-white mb-2">
//                         Email Us
//                      </h3>
//                      <p className={`text-${colors.text}`}>
//                         <a
//                            href="mailto:contact@davidsontechacademy.com"
//                            className={`hover:text-${colors.accent} transition`}
//                         >
//                            contact@davidsontechacademy.com
//                         </a>
//                      </p>
//                   </div>
//                   {/* Phone Card */}
//                   <div
//                      className={`p-6 rounded-xl bg-${colors.card} shadow-2xl`}
//                   >
//                      <Phone className={`w-8 h-8 text-${colors.accent} mb-4`} />
//                      <h3 className="text-xl font-semibold text-white mb-2">
//                         Call Us
//                      </h3>
//                      <p className={`text-${colors.text}`}>+1 (555) 123-4567</p>
//                      <p className={`text-sm text-gray-500 mt-1`}>
//                         Mon - Fri, 9am - 5pm EST
//                      </p>
//                   </div>
//                   {/* Address Card */}
//                   <div
//                      className={`p-6 rounded-xl bg-${colors.card} shadow-2xl`}
//                   >
//                      <MapPin className={`w-8 h-8 text-${colors.accent} mb-4`} />
//                      <h3 className="text-xl font-semibold text-white mb-2">
//                         Our Location
//                      </h3>
//                      <p className={`text-${colors.text}`}>
//                         123 Tech Avenue, Suite 400
//                      </p>
//                      <p className={`text-${colors.text}`}>
//                         Silicon Valley, CA 94000
//                      </p>
//                   </div>
//                </div>

//                {/* Contact Form */}
//                <div className="lg:col-span-2 p-8 rounded-xl bg-gray-800 shadow-2xl">
//                   <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
//                      Send a Message
//                   </h2>
//                   {getStatusMessage()}
//                   {/* Only show the form if the status is not 'success' */}
//                   {(status !== 'success' || status === 'error') && (
//                      <form onSubmit={handleSubmit} className="space-y-6">
//                         <div>
//                            <label
//                               htmlFor="name"
//                               className={`block text-sm font-medium text-${colors.text} mb-2`}
//                            >
//                               Your Name
//                            </label>
//                            <input
//                               type="text"
//                               id="name"
//                               name="name"
//                               required
//                               className={`w-full px-4 py-3 bg-${colors.card} border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-${colors.accent} transition duration-150`}
//                               placeholder="John Doe"
//                            />
//                         </div>

//                         <div>
//                            <label
//                               htmlFor="email"
//                               className={`block text-sm font-medium text-${colors.text} mb-2`}
//                            >
//                               Email Address
//                            </label>
//                            <input
//                               type="email"
//                               id="email"
//                               name="_replyto" // Formspree uses _replyto for the sender's email
//                               required
//                               className={`w-full px-4 py-3 bg-${colors.card} border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-${colors.accent} transition duration-150`}
//                               placeholder="your.email@example.com"
//                            />
//                         </div>

//                         <div>
//                            <label
//                               htmlFor="message"
//                               className={`block text-sm font-medium text-${colors.text} mb-2`}
//                            >
//                               Your Message
//                            </label>
//                            <textarea
//                               id="message"
//                               name="message"
//                               rows="5"
//                               required
//                               className={`w-full px-4 py-3 bg-${colors.card} border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-${colors.accent} transition duration-150`}
//                               placeholder="I'd like to ask..."
//                            ></textarea>
//                         </div>

//                         <button
//                            type="submit"
//                            disabled={status === 'submitting'}
//                            className={`w-full inline-flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg text-gray-900 bg-${colors.accent} hover:bg-opacity-90 transition duration-300 shadow-lg shadow-${colors.accent}/50 disabled:opacity-50`}
//                         >
//                            {status === 'submitting'
//                               ? 'Sending...'
//                               : 'Send Message'}
//                            <Send className="w-5 h-5 ml-2" />
//                         </button>
//                         {status === 'error' && (
//                            <button
//                               type="button"
//                               onClick={resetStatus}
//                               className={`w-full text-center py-2 text-sm text-${colors.accent} hover:text-white transition`}
//                            >
//                               Try again
//                            </button>
//                         )}
//                      </form>
//                   )}
//                   {status === 'success' && (
//                      <button
//                         type="button"
//                         onClick={resetStatus}
//                         className={`w-full text-center py-2 text-sm text-gray-400 hover:text-white transition mt-4`}
//                      >
//                         Send another message
//                      </button>
//                   )}
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default ContactPage;
