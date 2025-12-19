import React from 'react';
import { Target, Clock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- ADD THIS IMPORT
// File: src/components/LearningPathCard.js

// ... other imports

const LearningPathCard = ({
title,
description,
duration,
outcome,
courses,
linkSlug, // <--- FIX 1: Accepts the necessary prop for routing
}) => {
   return (
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transition duration-300 transform hover:shadow-academy-accent/30 border border-gray-700 h-full flex flex-col justify-between">
         <div className="flex items-center space-x-3 mb-4">
            <Target className="w-8 h-8 text-academy-accent" />
            <h3 className="text-2xl font-bold text-white">{title}</h3>
         </div>

         <p className="text-gray-400 mb-6 flex-grow">{description}</p>

         <div className="space-y-3 mb-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
               <Clock className="w-4 h-4 text-academy-accent" />
               <span>**Duration:** {duration}</span>
            </div>
            <div className="flex items-center space-x-2">
               <GraduationCap className="w-4 h-4 text-academy-accent" />
               <span>**Outcome:** {outcome}</span>
            </div>
            <div className="text-gray-500 pt-2">
               **Includes:** {courses} courses
            </div>
         </div>

         <Link
            to={`/courses/${linkSlug}`}
            className="block w-full text-center py-2 mt-4 text-base font-semibold rounded-lg bg-academy-accent text-gray-900 hover:bg-opacity-90 transition duration-300"
         >
       View Full Roadmap          
         </Link>{' '}
      </div>
   );
};

export default LearningPathCard;

// import React from 'react';
// // Corrected Imports:
// import { Target, Clock, GraduationCap } from 'lucide-react';
// import { Link } from 'react-router-dom'; // <--- We need this for navigation!

// const LearningPathCard = ({
//    title,
//    description,
//    //duration,
//    outcome,
//    courses,
//    linkSlug, // <--- FIX 1: This is the missing prop that caused the 'is not defined' error!
// }) => {
//    return (
//       <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transition duration-300 transform hover:shadow-academy-accent/30 border border-gray-700 h-full flex flex-col justify-between">
//          <div className="flex items-center space-x-3 mb-4">
//              <Target className="w-8 h-8 text-academy-accent" />{' '}
//             <h3 className="text-2xl font-bold text-white">{title}</h3>
//          </div>
//          <p className="text-gray-400 mb-6 flex-grow">{description}</p>
//          <div className="space-y-3 mb-6 text-sm text-gray-300">
//            {' '}
//             <div className="flex items-center space-x-2">
//                <Clock className="w-4 h-4 text-academy-accent" />
//                {/* <span>**Duration:** {duraton}</span>{' '} */}
//             </div>{' '}
//             <div className="flex items-center space-x-2">
//                <GraduationCap className="w-4 h-4 text-academy-accent" />
//                <span>**Outcome:** {outcome}</span>{' '}
//             </div>{' '}
//             <div className="text-gray-500 pt-2">
//                **Includes:** {courses} courses{' '}
//             </div>
//          </div>
//          {/* FIX 2: Replaced <a> tag with Link component and used the linkSlug prop */}
//          <Link
//             to={`/courses/${linkSlug}`}
//             className="block w-full text-center py-2 mt-4 text-base font-semibold rounded-lg bg-academy-accent text-gray-900 hover:bg-opacity-90 transition duration-300"
//          >
//             View Full Roadmap
//          </Link>{' '}
//       </div>
//    );
// };

// export default LearningPathCard;

// import React from 'react';
// import { Target, Clock, GraduationCap } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const LearningPathCard = ({
// title,
// description,
// duration,
// outcome,
// courses,
// linkSlug, // <--- FIX 1: Accepts the necessary prop for routing
// }) => {
// return (
//    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transition duration-300 transform hover:shadow-academy-accent/30 border border-gray-700 h-full flex flex-col justify-between">
//    <div className="flex items-center space-x-3 mb-4">
//    <Target className="w-8 h-8 text-academy-accent" />
//    <h3 className="text-2xl font-bold text-white">{title}</h3>
//    </div>
//    <p className="text-gray-400 mb-6 flex-grow">{description}</p>
//    {/* --- FIX 2: Replaced Markdown (**) with <strong> tag for bolding --- */}
//    <div className="space-y-3 mb-6 text-sm text-gray-300">
//    {/* 1. Duration (now correctly bolded) */}
//    <div className="flex items-center space-x-2">
//    <Clock className="w-4 h-4 text-academy-accent" />
//    <span><strong className="font-semibold">Duration:</strong> {duration}</span>
//    </div>

//    {/* 2. Outcome (now correctly bolded) */}
//    <div className="flex items-center space-x-2">
//    <GraduationCap className="w-4 h-4 text-academy-accent" />
//    <span><strong className="font-semibold">Outcome:</strong> {outcome}</span>
//    </div>

//    {/* 3. Courses Included (now correctly bolded) */}
//    <div className="text-gray-500 pt-2">
//    <strong className="font-semibold">Includes:</strong> {courses} courses
//    </div>
//    </div>
//    {/* --- END Styling Fix --- */}
//
//    {/* FIX 3: Uses Link component for correct routing */}
//    <Link
//    to={`/courses/${linkSlug}`}
//    className="block w-full text-center py-2 mt-4 text-base font-semibold rounded-lg bg-academy-accent text-gray-900 hover:bg-opacity-90 transition duration-300"
//    >
//    View Full Roadmap
//    </Link>
//    </div>
// );
// };
 //export default LearningPathCard;
// import React from 'react';
// import { Target, Clock, GraduationCap } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const LearningPathCard = ({
//    title,
//    description,
//    duration,
//    outcome,
//    courses,
//    linkSlug, // Ensures routing works
// }) => {
//    return (
//       <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transition duration-300 transform hover:shadow-academy-accent/30 border border-gray-700 h-full flex flex-col justify-between">
//            {/* --- FIX 1: Correct Title Icon (Colored Dot) --- */}   
//               
//          <div className="flex items-center space-x-3 mb-4">
//        {/* This div creates the small orange circle */}           {' '}
//             <div className="w-2.5 h-2.5 bg-academy-accent rounded-full mr-1"></div>
//        <h3 className="text-2xl font-bold text-white">{title}</h3>   
//                  
//          </div>
//            
//          <p className="text-gray-400 mb-6 flex-grow">{description}</p>         
//          {/* --- FIX 2: Correct Styling for Bold Text (Using <strong>) --- */} 
//           
//          <div className="space-y-3 mb-6 text-sm text-gray-300">
//                   {' '}
//             {/* 1. Duration: Uses <strong> instead of ** to make text bold */} 
//                {' '}
//             <div className="flex items-center space-x-2">
//              <Clock className="w-4 h-4 text-academy-accent" />       
//                 
//                <span>
//                   <strong className="font-semibold">Duration:</strong>{' '}
//                   {duration}
//                </span>
//                     {' '}
//             </div>
//                   {' '}
//             {/* 2. Outcome: Uses <strong> instead of ** to make text bold */}   
//              {' '}
//             <div className="flex items-center space-x-2">
//              
//                <GraduationCap className="w-4 h-4 text-academy-accent" />       
//                 
//                <span>
//                   <strong className="font-semibold">Outcome:</strong> {outcome}
//                </span>
//                     {' '}
//             </div>
//                   {' '}
//             {/* 3. Courses Included: Uses <strong> instead of ** to make text bold */}
//                  {' '}
//             <div className="text-gray-500 pt-2">
//              <strong className="font-semibold">Includes:</strong>{' '}
//                {courses} courses            {' '}
//             </div>
//                
//          </div>
//             {/* Link component for correct routing */}         
//          <Link
//             to={`/courses/${linkSlug}`}
//             className="block w-full text-center py-2 mt-4 text-base font-semibold rounded-lg bg-academy-accent text-gray-900 hover:bg-opacity-90 transition duration-300"
//          >
//        View Full Roadmap          
//          </Link>{' '}
//       </div>
//    );
// };

// export default LearningPathCard;
