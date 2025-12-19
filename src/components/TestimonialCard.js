import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, name, title }) => {
   return (
      // Card container: Dark background, light padding, subtle hover effect
      <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-xl border border-gray-700 h-full flex flex-col justify-between">
         {/* Quote Icon */}
         <Quote className="w-8 h-8 text-academy-accent/50 mb-4" />

         {/* Testimonial Text */}
         <p className="text-white text-lg italic mb-6 flex-grow">"{quote}"</p>

         {/* Author Details */}
         <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-academy-accent font-bold text-lg">{name}</p>
            <p className="text-gray-400 text-sm">{title}</p>
         </div>
      </div>
   );
};

export default TestimonialCard;
