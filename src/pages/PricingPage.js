import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

// Pricing data structure
const PRICING_TIERS = [
   {
      name: 'Basic Access',
      price: '$49',
      unit: 'per month',
      features: [
         { text: 'Access to 5 Courses', available: true },
         { text: 'Video Lectures & Quizzes', available: true },
         { text: 'Certificate of Completion', available: true },
         { text: 'Community Forum Access', available: false },
         { text: '1-on-1 Mentor Support', available: false },
         { text: 'Lifetime Course Updates', available: false },
      ],
      cta: 'Start 7-Day Free Trial',
      highlight: false,
   },
   {
      name: 'Premium Path',
      price: '$99',
      unit: 'per month',
      features: [
         { text: 'Access to ALL Courses (18+)', available: true },
         { text: 'Video Lectures & Quizzes', available: true },
         { text: 'Certificate of Completion', available: true },
         { text: 'Community Forum Access', available: true },
         { text: '1-on-1 Mentor Support', available: true },
         { text: 'Lifetime Course Updates', available: false },
      ],
      cta: 'Go Premium Now',
      highlight: true,
   },
   {
      name: 'Lifetime Mastery',
      price: '$699',
      unit: 'one-time',
      features: [
         { text: 'Access to ALL Courses (18+)', available: true },
         { text: 'Video Lectures & Quizzes', available: true },
         { text: 'Certificate of Completion', available: true },
         { text: 'Community Forum Access', available: true },
         { text: '1-on-1 Mentor Support (Priority)', available: true },
         { text: 'Lifetime Course Updates & New Content', available: true },
      ],
      cta: 'Get Lifetime Access',
      highlight: false,
   },
];

const PricingPage = () => {
   return (
      <div className="bg-academy-bg min-h-screen pt-20">
         <header className="py-16 text-center">
            <h1 className="text-5xl font-extrabold text-white mb-3">
               Simple, Transparent{' '}
               <span className="text-academy-accent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto px-4">
               Choose the plan that fits your learning pace and career
               ambitions. No hidden fees, cancel anytime.
            </p>
         </header>

         {/* Pricing Card Grid */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {PRICING_TIERS.map((tier, index) => (
                  <div
                     key={index}
                     className={`p-8 rounded-xl shadow-2xl transition duration-300 transform border ${
                        tier.highlight
                           ? 'bg-gray-700 border-academy-accent scale-[1.02]'
                           : 'bg-gray-800 border-gray-700'
                     } flex flex-col`}
                  >
                     <h2 className="text-3xl font-bold mb-2 text-white">
                        {tier.name}
                     </h2>
                     <p className="text-gray-400 mb-6 flex-grow">
                        {tier.name === 'Lifetime Mastery'
                           ? 'Best value for long-term learners.'
                           : 'Monthly recurring payment.'}
                     </p>

                     <div className="mb-8">
                        <span className="text-6xl font-extrabold text-academy-accent">
                           {tier.price.split('$')[1]}
                        </span>
                        <span className="text-xl text-white ml-2">
                           / {tier.unit}
                        </span>
                     </div>

                     <ul className="space-y-4 mb-10">
                        {tier.features.map((feature, i) => (
                           <li key={i} className="flex items-center space-x-3">
                              {feature.available ? (
                                 <Check className="w-5 h-5 text-green-400" />
                              ) : (
                                 <X className="w-5 h-5 text-red-400" />
                              )}
                              <span
                                 className={
                                    feature.available
                                       ? 'text-gray-300'
                                       : 'text-gray-500 line-through'
                                 }
                              >
                                 {feature.text}
                              </span>
                           </li>
                        ))}
                     </ul>

                     <a
                        href="/enroll"
                        className={`flex items-center justify-center w-full py-3 text-lg font-bold rounded-lg transition duration-300 mt-auto ${
                           tier.highlight
                              ? 'bg-academy-accent text-gray-900 hover:bg-opacity-90'
                              : 'bg-gray-600 text-white hover:bg-gray-500'
                        }`}
                     >
                        {tier.cta} <ArrowRight className="w-5 h-5 ml-2" />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default PricingPage;
