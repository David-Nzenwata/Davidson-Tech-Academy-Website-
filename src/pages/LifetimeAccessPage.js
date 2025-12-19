// import React from 'react';
// import { Award, Zap, Code, Users, Check, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const LIFETIME_BENEFITS = [
//    {
//       icon: Award,
//       title: 'All Future Courses Included',
//       description:
//'Access every new course, update, and learning path Davidson Tech Academy releases, forever.',
//    },
//    {
//       icon: Zap,
//       title: 'Priority 1-on-1 Mentor Support',
//       description:
//'Skip the queue and get direct, personalized guidance from senior developers for all your projects.',
//    },
//    {
//       icon: Code,
//       title: 'Downloadable Project Assets',
//       description:
//'Download all project source code, workbooks, and cheat sheets for offline use and reference.',
//    },
//    {
//       icon: Users,
//       title: 'Exclusive Mastermind Community',
//       description:
//'Join a private, high-level chat group with career advisors and top graduates for networking and job opportunities.',
//    },
// ];

// const LifetimeAccessPage = () => {
//    return (
//       <div className="bg-academy-bg min-h-screen pt-20">
//<header className="py-16 text-center">
//   <h1 className="text-5xl font-extrabold text-white mb-3">
//      The <span className="text-academy-accent">Lifetime Mastery</span>{' '}
//      Program
//   </h1>
//   <p className="text-xl text-gray-400 max-w-4xl mx-auto px-4">
//      Stop paying monthly. Invest once and gain permanent, unlimited
//      access to everything Davidson Tech Academy has to offer, forever.
//   </p>
//</header>

//{/* Price Banner and CTA */}
//<div className="bg-gray-900 border-y border-gray-700 py-10">
//   <div className="max-w-4xl mx-auto text-center px-4">
//      <h2 className="text-3xl font-bold text-white mb-4">
//         One Investment. Unlimited Career Growth.
//      </h2>
//      <div className="flex items-center justify-center space-x-4 mb-6">
//         <span className="text-7xl font-extrabold text-academy-accent">
// $699
//         </span>
//         <span className="text-xl text-gray-400">
// one-time payment
//         </span>
//      </div>
//      <Link
//         to="/pricing"
//         className="inline-flex items-center py-3 px-10 text-xl font-bold rounded-xl text-gray-900 bg-academy-accent hover:bg-opacity-90 transition duration-300 shadow-2xl shadow-academy-accent/50"
//      >
//         Secure My Lifetime Access Now{' '}
//         <ArrowRight className="w-6 h-6 ml-3" />
//      </Link>
//      <p className="text-gray-500 text-sm mt-3">
//         Saves you thousands compared to monthly subscriptions.
//      </p>
//   </div>
//</div>

//{/* Benefits Grid */}
//<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//   <h2 className="text-4xl font-extrabold text-white text-center mb-12">
//      Exclusive Lifetime Benefits
//   </h2>
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//      {LIFETIME_BENEFITS.map((benefit, index) => (
//         <div
// key={index}
// className="bg-gray-800 p-8 rounded-xl border border-gray-700 flex space-x-6"
//         >
// <div className="flex-shrink-0">
//    <benefit.icon className="w-10 h-10 text-academy-accent" />
// </div>
// <div>
//    <h3 className="text-xl font-bold text-white mb-2">
//       {benefit.title}
//    </h3>
//    <p className="text-gray-400">{benefit.description}</p>
// </div>
//         </div>
//      ))}
//   </div>
//</section>
//       </div>
//    );
// };

// export default LifetimeAccessPage;

import React from 'react';
// 1. Import useSearchParams for reading the course ID from the URL
import { useSearchParams } from 'react-router-dom';
import { Award, Zap, Code, Users, Check, ArrowRight } from 'lucide-react';

const LIFETIME_BENEFITS = [
   {
      icon: Award,
      title: 'All Future Courses Included',
      description:
         'Access every new course, update, and learning path Davidson Tech Academy releases, forever.',
   },
   {
      icon: Zap,
      title: 'Priority 1-on-1 Mentor Support',
      description:
         'Skip the queue and get direct, personalized guidance from senior developers for all your projects.',
   },
   {
      icon: Code,
      title: 'Downloadable Project Assets',
      description:
         'Download all project source code, workbooks, and cheat sheets for offline use and reference.',
   },
   {
      icon: Users,
      title: 'Exclusive Mastermind Community',
      description:
         'Join a private, high-level chat group with career advisors and top graduates for networking and job opportunities.',
   },
];

const LifetimeAccessPage = () => {
   const [searchParams] = useSearchParams(); // 2. Retrieve the course ID (e.g., 'ethical-hacking') passed from the Course Detail Page
   const courseId = searchParams.get('course');

   const handlePayment = () => {
      // --- THIS IS WHERE YOU INTEGRATE THE PAYMENT GATEWAY (Item 1) ---
      console.log('Initiating lifetime payment for course:', courseId); // In a real app, this function would: // 1. Contact your backend server (Node/Express, Python/Flask, etc.) // 2. Send the courseId and price (699) to the server. // 3. The server would create a Stripe Checkout Session or PayPal Order. // 4. The user is redirected to the external payment page.
      alert(
         `Payment flow initiated for Lifetime Access to Course ID: ${courseId}. (Next step: Stripe/PayPal Integration)`
      );
   };

   return (
      <div className="bg-academy-bg min-h-screen pt-20">
         <header className="py-16 text-center">
                 {' '}
            <h1 className="text-5xl font-extrabold text-white mb-3">
               The <span className="text-academy-accent">Lifetime Mastery</span>{' '}
               Program{' '}
            </h1>
             {' '}
            <p className="text-xl text-gray-400 max-w-4xl mx-auto px-4">
               Stop paying monthly. Invest once and gain permanent, unlimited  
                  access to everything Davidson Tech Academy has to offer,
               forever.{' '}
            </p>
             {' '}
            {/* Optionally display which course is being purchased for clarity */}
             {' '}
            {courseId && (
               <p className="text-lg text-gray-300 mt-4">
                    You are securing lifetime access to the{' '}
                  <strong className="text-academy-accent capitalize">
                     {courseId.replace(/-/g, ' ')}{' '}
                  </strong>{' '}
                    learning path.    
               </p>
            )}
         </header>
         {/* Price Banner and CTA */}         
         <div className="bg-gray-900 border-y border-gray-700 py-10">
             {' '}
            <div className="max-w-4xl mx-auto text-center px-4">
               <h2 className="text-3xl font-bold text-white mb-4">
                    One Investment. Unlimited Career Growth.          
               </h2>
               <div className="flex items-center justify-center space-x-4 mb-6">
                  {' '}
                   {' '}
                  <span className="text-7xl font-extrabold text-academy-accent">
                     $699   {' '}
                  </span>{' '}
                  <span className="text-xl text-gray-400">
                     one-time payment {' '}
                  </span>
               </div>
               {/* Replaced Link with Button and onClick handler */}     
               <button
                  onClick={handlePayment}
                  className="inline-flex items-center py-3 px-10 text-xl font-bold rounded-xl text-gray-900 bg-academy-accent hover:bg-opacity-90 transition duration-300 shadow-2xl shadow-academy-accent/50"
               >
                    Secure My Lifetime Access Now      {' '}
                  <ArrowRight className="w-6 h-6 ml-3" />    
               </button>{' '}
               <p className="text-gray-500 text-sm mt-3">
                    Saves you thousands compared to monthly subscriptions.      
               </p>
                    {' '}
            </div>
         </div>
         {/* Benefits Grid */}         
         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
             {' '}
            <h2 className="text-4xl font-extrabold text-white text-center mb-12">
               Exclusive Lifetime Benefits{' '}
            </h2>
             {' '}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {LIFETIME_BENEFITS.map((benefit, index) => (
                  <div
                     key={index}
                     className="bg-gray-800 p-8 rounded-xl border border-gray-700 flex space-x-6"
                  >
                     <div className="flex-shrink-0">
                        {' '}
                        <benefit.icon className="w-10 h-10 text-academy-accent" />
                     </div>
                     <div>
                        {' '}
                        <h3 className="text-xl font-bold text-white mb-2">
                           {benefit.title}{' '}
                        </h3>
                        <p className="text-gray-400">{benefit.description}</p> 
                         
                     </div>{' '}
                  </div>
               ))}
                    {' '}
            </div>
         </section>{' '}
      </div>
   );
};

export default LifetimeAccessPage;
