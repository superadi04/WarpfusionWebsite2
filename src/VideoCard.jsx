import { Fragment, useState, useEffect, useCallback, useRef } from 'react'
import { CheckIcon, ChevronUpDownIcon, PhotoIcon, UserCircleIcon, FolderIcon, ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { Slider } from "@material-tailwind/react";
import { useParams, useNavigate } from 'react-router-dom';

export default function VideoCard({ prompt, style, seed, url, fetchData }) {
    useEffect(() => {
          const fetchVideo = async () => {
              try {
                  await fetchData(); 
              } catch (error) {
                  console.error('Failed to fetch video URL:', error);
              }
          };
          const intervalId = setInterval(fetchVideo, 5000); 
          return () => clearInterval(intervalId); 
    }, []); 

    return (
        <div className="grid md:grid-cols-2 h-screen">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center" style={{ maxHeight: '90vh', paddingTop: '100px' }}>
                {url ? (
                    <video key={url} autoPlay loop muted playsInline controls style={{ maxHeight: '100%', maxWidth: '100%' }}>
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div className="flex justify-center items-center w-96 h-96 bg-indigo-950 rounded-lg">
                        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                        </div>
                    </div>
                )}
            </div>
            <div className="pt-6 md:pt-36 mx-10 text-left">
                <div className='text-indigo-600 text-4xl font-bold'>Prompt</div>
                <div className="bg-[#161616] py-2 px-4 max-w-lg rounded-md mt-3">
                    <p className="text-gray-300 text-2xl">{prompt}</p>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col mr-0 md:mr-8">
                        <div className="text-indigo-600 text-lg pt-4">Seed</div>
                        <p className="text-gray-300 text-lg">{seed}</p>
                    </div>
                    <div className="flex flex-col mb-10">
                        <div className="text-indigo-600 text-lg pt-4">Style</div>
                        <p className="text-gray-300 text-lg">{style}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState } from 'react';

// export default function VideoCard({ prompt, style, seed, url, fetchData }) {
//     const [videoAvailable, setVideoAvailable] = useState(false);

//     // Check video availability at the URL
//     useEffect(() => {
//         const checkVideo = async () => {
//             if (url) {
//                 try {
//                     const response = await fetch(url, { method: 'HEAD' });
//                     if (response.ok) {
//                         setVideoAvailable(true);
//                     } else {
//                         setVideoAvailable(false);
//                     }
//                 } catch (error) {
//                     console.error('Failed to check video URL:', error);
//                 }
//             }
//         };

//         const intervalId = setInterval(checkVideo, 5000); // Set up the interval for checking every 5 seconds

//         checkVideo(); // Initial check

//         return () => clearInterval(intervalId); // Cleanup on component unmount
//     }, [url]); // Dependency on the URL, checks if the URL updates

//     return (
//         <div className="grid md:grid-cols-2 h-screen">
//             <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center" style={{ maxHeight: '90vh', paddingTop: '100px' }}>
//                 {url ? (
//                     <video key={url} autoPlay loop muted playsInline controls style={{ maxHeight: '100%', maxWidth: '100%' }}>
//                         <source src={url} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <div className="flex justify-center items-center w-96 h-96 bg-indigo-950 rounded-lg">
//                         <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                     </div>
//                 )}
//             </div>
//             <div className="pt-6 md:pt-36 mx-10 text-left">
//                 <div className='text-indigo-600 text-4xl font-bold'>Prompt</div>
//                 <div className="bg-[#161616] py-2 px-4 max-w-lg rounded-md mt-3">
//                     <p className="text-gray-300 text-2xl">{prompt}</p>
//                 </div>
//                 <div className="flex flex-col md:flex-row">
//                     <div className="flex flex-col mr-0 md:mr-8">
//                         <div className="text-indigo-600 text-lg pt-4">Seed</div>
//                         <p className="text-gray-300 text-lg">{seed}</p>
//                     </div>
//                     <div className="flex flex-col mb-10">
//                         <div className="text-indigo-600 text-lg pt-4">Style</div>
//                         <p className="text-gray-300 text-lg">{style}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useEffect, useState, useRef } from 'react';

// export default function VideoCard({ prompt, style, seed, url, fetchData }) {
//     const [videoAvailable, setVideoAvailable] = useState(false);

//     // Check video availability at the URL
//     useEffect(() => {
//         const checkVideo = async () => {
//             if (url) {
//                 try {
//                     const response = await fetch(url, { method: 'HEAD' });
//                     if (response.ok) {
//                         setVideoAvailable(true);
//                     } else {
//                         setVideoAvailable(false);
//                     }
//                 } catch (error) {
//                     console.error('Failed to check video URL:', error);
//                     setVideoAvailable(false);
//                 }
//             }
//         };

//         const intervalId = setInterval(checkVideo, 5000); // Set up the interval for checking every 5 seconds

//         checkVideo(); // Initial check

//         return () => clearInterval(intervalId); // Cleanup on component unmount
//     }, [url]); // Dependency on the URL, checks if the URL updates

//     return (
//         <div className="grid md:grid-cols-2 h-screen">
//             <div className="flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center" style={{ maxHeight: '90vh', paddingTop: '100px' }}>
//                 {videoAvailable ? (
//                     <video key={url} autoPlay loop muted playsInline controls style={{ maxHeight: '100%', maxWidth: '100%' }}>
//                         <source src={url} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 ) : (
//                     <div className="flex justify-center items-center w-96 h-96 bg-indigo-950 rounded-lg">
//                         <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                     </div>
//                 )}
//             </div>
//             <div className="pt-6 md:pt-36 mx-10 text-left">
//                 <div className='text-indigo-600 text-4xl font-bold'>Prompt</div>
//                 <div className="bg-[#161616] py-2 px-4 max-w-lg rounded-md mt-3">
//                     <p className="text-gray-300 text-2xl">{prompt}</p>
//                 </div>
//                 <div className="flex flex-col md:flex-row">
//                     <div className="flex flex-col mr-0 md:mr-8">
//                         <div className="text-indigo-600 text-lg pt-4">Seed</div>
//                         <p className="text-gray-300 text-lg">{seed}</p>
//                     </div>
//                     <div className="flex flex-col mb-10">
//                         <div className="text-indigo-600 text-lg pt-4">Style</div>
//                         <p className="text-gray-300 text-lg">{style}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }