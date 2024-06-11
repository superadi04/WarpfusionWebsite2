import Masonry from 'react-masonry-css';
import { useState, useRef, Fragment, useEffect, useCallback} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'
import { isMobile } from 'react-device-detect';
// import { AtSymbolIcon, CodeBracketIcon, LinkIcon, PhotoIcon } from '@heroicons/react/20/solid'
// import { XCircleIcon } from '@heroicons/react/20/solid'

const supabase = createClient('https://zylqiknjgpjzjhylylnw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bHFpa25qZ3BqempoeWx5bG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MTEwMzMsImV4cCI6MjAyMTE4NzAzM30.ua5KcEvaU-2lkp_kHx1rOM4MFekUAZ7Ozd-fTrnMs7g')

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Creation({ imageSrc, creationName, description, tag }) {
  return (
      <div className="">
        <a
          href="video-to-video"
        >
          <div
            key={imageSrc}
            className="group relative flex flex-col overflow-hidden rounded-lg"
          >
            <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 h-48">
              <img
                src={imageSrc}
                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4 bg-[#131313]">
              <h3 className="text-sm font-medium text-gray-300 text-left">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {creationName}
                  <p
                    className={classNames(
                      'text-right rounded-md whitespace-nowrap px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                    )}
                  >
                    {tag}
                  </p>
                </div>
              </h3>
              <p className="text-xs text-left text-gray-500">
                {description}
              </p>
            </div>
          </div>
        </a>
    </div>
  );
}

function VideoPlaceholder({hoverText, id }) {
  const videoRef = useRef(null);
  const truncatedText = hoverText.length > 100 ? hoverText.substring(0, 100) + '...' : hoverText;
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  const handleClick = () => {
    navigate(`/video/${id}`);
  };

  return (
    <div onClick={handleClick} className="group cursor-pointer relative py-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div role="status" class="flex items-center justify-center h-60 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-900">
          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
        </svg>
          <span class="sr-only">Loading...</span>
      </div>
      <div
        className="absolute inset-0 flex items-end text-left opacity-0 group-hover:opacity-100 px-4 py-2"
        style={{ transition: 'opacity 0.1s ease-in-out' }}
      >
        <span className="text-gray-100 text-sm pb-2">{truncatedText}</span>
      </div>
    </div>
  );
}

function VideoComponent({ src, hoverText, id, seed }) {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust visibility threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleClick = event => {
    event.preventDefault();
    // navigate(`/video/${id}`);
  };

  return (
    <div onClick={handleClick} className="group cursor-pointer relative" ref={videoRef}>
      {loading && (
       <div className="absolute inset-0 flex items-center justify-center">
       <div className="spinner"></div>
     </div>
      )}
      {isVisible && (
        <video
          src={src}
          className="rounded-md mb-5 opacity-100 transition-opacity duration-100 ease-in-out w-full max-w-full"
          muted
          loop
          playsInline
          loading="lazy"
          preload="metadata"
          onCanPlayThrough={() => setLoading(false)}
          onClick={handleClick}
        >
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-100 ease-in-out"></div>
    </div>
  );
}

function VideoComponentMobile({ src, hoverText, id }) {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/video/${id}`);
  };

  const handleLoadedData = () => {
    setLoading(false);
  };

  return (
    <div onClick={handleClick} className="group relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="spinner"></div>
        </div>
      )}
      <video
        ref={videoRef}
        className="rounded-md mb-5 opacity-100 transition-opacity duration-100 ease-in-out w-full max-w-full"
        loop
        muted
        playsInline
        autoPlay
        onLoadedData={handleLoadedData}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-100 ease-in-out"></div>
    </div>
  );
}

function RecentCreations({ setSeed, setStyle, setPrompt, setUrl, data2 }) {
  const [data, setData] = useState([...data2].reverse());
  console.log(data)
  console.log("sdkfjsdflkjsdf menal")

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item, index) => (
          <div key={index} className="column">
            {!isMobile ? (
              <VideoComponent src={item.urls[0]} hoverText={item.prompt} id={item.inference_id} seed={item.seed} style={item.style} />
            ) : (
              <VideoComponentMobile src={item.urls[0]} hoverText={item.prompt} id={item.inference_id} seed={item.seed} style={item.style} />
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default function MyVideos({ setSeed, setStyle, setPrompt, setUrl, credits, setCredits }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Start with `true` to show loading spinner initially

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        // navigate('/signup');
        return;
      }
      console.log("Fetching data for user ID:", userId);
      const { data: data2, error: error5 } = await supabase.from('inferences').select('*').eq('user_id', userId);
      console.log("data 2", data2, error5)

      if (error5) {
        console.error('Error fetching inferences:', error5);
      } else {
        console.log(data2)
        setData(data2 ?? []);
      }

      const { data: userDetails, error: userDetailsError } = await supabase
        .from('user_details')
        .select('*')
        .eq('id', userId);

      if (userDetailsError) {
        console.error('Error fetching user details:', userDetailsError);
      } else if (userDetails && userDetails[0]) {
        setCredits(userDetails[0].credits);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 0px)' }}>
      <h2 className="text-3xl mt-24 font-semibold tracking-tight text-gray-300 text-left">My Videos</h2>
      <div className="mt-8">

          <RecentCreations data2={data} setSeed={setSeed} setStyle={setStyle} setPrompt={setPrompt} setUrl={setUrl} />
      </div>
    </div>
  );
}
  