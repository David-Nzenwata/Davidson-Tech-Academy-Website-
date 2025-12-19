import React from 'react';
import TestimonialCard from './TestimonialCard';

// Dummy data for testimonials
const TESTIMONIALS = [
   {
      id: 1,
      quote: 'The Python course structure is unmatched. I went from zero coding knowledge to landing a Junior Developer role in just 4 months!',
      name: 'Sarah Chen',
      title: 'Software Developer, Tech Corp',
   },
   {
      id: 2,
      quote: 'Lifetime Access is the best investment I ever made. The content is constantly updated, keeping me ahead of industry trends.',
      name: 'Michael Davis',
      title: 'Data Analyst',
   },
   {
      id: 3,
      quote: 'The project-based learning prepared me far better than any university course. Highly recommend the React and Next.js program.',
      name: 'Aisha Hassan',
      title: 'Full-Stack Engineer',
   },
];

const TestimonialsSection = () => {
   return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-academy-bg">
         <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <h2 className="text-4xl font-extrabold text-white text-center mb-4">
               Why Students{' '}
               <span className="text-academy-accent">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
               Hear directly from our successful graduates and see the results
               for yourself.
            </p>

            {/* Testimonial Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {TESTIMONIALS.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} {...testimonial} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default TestimonialsSection;
