// import React from 'react';
// import { Clock, Star, Users } from 'lucide-react';
// //import { Link } from 'react-router-dom';
// //import { Clock, Star, Users } from 'lucide-react';

// const CourseCard = ({
//    title,
//    description,
//    duration,
//    rating,
//    students,
//    slug,
// }) => {
//    return (
//       <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-700">
//          <div className="w-12 h-12 bg-academy-accent/20 rounded-lg flex items-center justify-center mb-4">
//             <Users className="w-6 h-6 text-academy-accent" />
//          </div>

//          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

//          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
//             {description}
//          </p>

//          <div className="flex justify-between items-center text-gray-500 text-xs mb-4">
//             <div className="flex items-center space-x-1">
//                <Clock className="w-4 h-4" />
//                <span>{duration}</span>
//             </div>
//             <div className="flex items-center space-x-1">
//                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                <span>
//                   {rating} ({students} students)
//                </span>
//             </div>
//          </div>

//          <a
//             href={`/CoursesWithSlugs/${slug}`}
//             className="block w-full text-center py-2 mt-4 text-sm font-semibold rounded-lg border border-academy-accent text-academy-accent hover:bg-academy-accent hover:text-gray-900 transition duration-300"
//          >
//             View Details
//          </a>
//       </div>
//    );
// };

// export default CourseCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, Users } from 'lucide-react';

const CourseCard = ({
   title,
   description,
   duration,
   rating,
   students,
   slug,
}) => {
   // build absolute path; using Link prevents a full page reload in SPA
   const linkTo = `/courses/${encodeURIComponent(slug)}`;

   return (
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-700">
         <div className="w-12 h-12 bg-academy-accent/20 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-academy-accent" />
         </div>

         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

         <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {description}
         </p>

         <div className="flex justify-between items-center text-gray-500 text-xs mb-4">
            <div className="flex items-center space-x-1">
               <Clock className="w-4 h-4" />
               <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
               <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
               <span>
                  {rating} ({students} students)
               </span>
            </div>
         </div>

         <Link
            to={linkTo}
            aria-label={`View details for ${title}`}
            className="block w-full text-center py-2 mt-4 text-sm font-semibold rounded-lg border border-academy-accent text-academy-accent hover:bg-academy-accent hover:text-gray-900 transition duration-300"
         >
            View Details
         </Link>
      </div>
   );
};

export default CourseCard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Clock, Star, Users } from 'lucide-react';

// const CourseCard = ({
//    title,
//    description,
//    duration,
//    rating,
//    students,
//    slug, // This must be the exact key from sampleCourses (e.g., 'data-science-python')
// }) => {
//    // CRITICAL FIX: Removed encodeURIComponent. The slug must be passed clean
//    // to match the URL parameter and the course data key.
//    const linkTo = `/courses/${slug}`;

//    return (
//       <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-700">
//          <div className="w-12 h-12 bg-academy-accent/20 rounded-lg flex items-center justify-center mb-4">
//             <Users className="w-6 h-6 text-academy-accent" />
//          </div>

//          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

//          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
//             {description}
//          </p>

//          <div className="flex justify-between items-center text-gray-500 text-xs mb-4">
//             <div className="flex items-center space-x-1">
//                <Clock className="w-4 h-4" />
//                <span>{duration}</span>
//             </div>
//             <div className="flex items-center space-x-1">
//                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                <span>
//                   {rating} ({students} students)
//                </span>
//             </div>
//          </div>

//          <Link
//             to={linkTo}
//             aria-label={`View details for ${title}`}
//             className="block w-full text-center py-2 mt-4 text-sm font-semibold rounded-lg border border-academy-accent text-academy-accent hover:bg-academy-accent hover:text-gray-900 transition duration-300"
//          >
//             View Details
//          </Link>
//       </div>
//    );
// };

// export default CourseCard;