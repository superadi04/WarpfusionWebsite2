import { useState, useRef, Fragment, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu, Transition, Listbox } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import {
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { Tab } from '@headlessui/react'
import { createClient } from '@supabase/supabase-js'
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import Masonry from 'react-masonry-css';
import { isMobile } from 'react-device-detect';

// const supabase = createClient('https://bzazcqjsevbcwebcujhw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6YXpjcWpzZXZiY3dlYmN1amh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MDA0NDcsImV4cCI6MjAxMzE3NjQ0N30.X-cbMNi41JjibVkfxi_gHTBUtdgDsBpgrEmFArF5cUA')

const supabase = createClient('https://rrvjkmdsixuiuqktlxcg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydmprbWRzaXh1aXVxa3RseGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NDMxNjcsImV4cCI6MjAwNzExOTE2N30.Vo6_mO9gTwO_XqP9EDFh7LD5qHDGgIa50T8qsjI3wBk')

// const supabase = createClient('https://rrvjkmdsixuiuqktlxcg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydmprbWRzaXh1aXVxa3RseGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NDMxNjcsImV4cCI6MjAwNzExOTE2N30.Vo6_mO9gTwO_XqP9EDFh7LD5qHDGgIa50T8qsjI3wBk')

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


let data2 = [
  // {
  //   "status": "Finished",
  //   "inference_id": "explore_videos",
  //   "prompt": "(ninja:1.3), claws, mask, bandana, dynamic pose, battle, shadow fight, (simple:0.2), pastel palette, illustration, intricate details, Figma, drrrible, Artstation, (smooth gradient), (light shadows), vibrant colors, high contrast",
  //   "style": "Studio Ghibli",
  //   "seed": 2144793638,
  //   "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_34.mp4"]
  // },
  {
    "status": "Finished",
    "inference_id": "explore_videos_1",
    "prompt": "michelangelo sculpture, muscular, man, contra pose, broken torso, vivid, marble veins, studio light, high quality, sokkel armor, shell shaded, concept art, glowing white eyes, god",
    "style": "Marble",
    "seed": 1065951602,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_23.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_2",
    "prompt": "white marble statue, cracked, fractural, fragments, rope, glowing red eyes, chained, Alberto Seveso, realistic, photorealistic, masterpiece, best quality, muscular",
    "style": "Marble",
    "seed": 1149294716,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_24.mp4"]
  },
  // {
  //   "status": "Finished",
  //   "inference_id": "explore_videos",
  //   "prompt": "wu kong, league of legends, futuristic, soldier, helmet, mechanical limbs, armor plates, weapons, armed, battle, Wu Kong",
  //   "style": "Studio Ghibli",
  //   "seed": 9059351,
  //   "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_25.mp4"]
  // },
  {
    "status": "Finished",
    "inference_id": "explore_videos_3",
    "prompt": "necromancer, hooded, black assassin, glowing red eyes, armor, realistic, undead, skeletons, 3d render, dark, dungeon, diablo, scary, horror",
    "style": "Mecha",
    "seed": 4219702030,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_26.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_4",
    "prompt": "white marble statue, cracked, fractural, fragments, chained, Alberto Seveso, realistic, photorealistic, masterpiece, best quality, muscular, dark background, king, with a crown",
    "style": "Marble",
    "seed": 3947275629,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_28.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_5",
    "prompt": "statue made of marble, renaissance, white marble skin, bodybuilder, veins, shredded, giant, in the stage, shirtless, from behind, facing away from viewer, muscular",
    "style": "Marble",
    "seed": 4058167450,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_30.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_6",
    "prompt": "made of marble, renaissance, white marble skin, bodybuilder, veins, shredded, giant, in the stage, shirtless",
    "style": "Marble",
    "seed": 1230818659,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_31.mp4"]
  }, 
  {
    "status": "Finished",
    "inference_id": "explore_videos_7",
    "prompt": "cinematic closeup Sub-Zero squaring off in the Netherrealm, their powers of fire and ice crackling, ready for a legendary battle, extreme details, volumetric lighting, cinematic scene, full focus, 16k, UHD, HDR",
    "style": "Studio Ghibli",
    "seed": 836124052,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_66.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_8",
    "prompt": "cinematic closeup, fiery, their powers of fire and power crackling, ready for a legendary battle, extreme details, volumetric lighting, cinematic scene, full focus, 16k, UHD, HDR",
    "style": "Studio Ghibli",
    "seed": 3989607322,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_63.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_9",
    "prompt": "Greek god, godly, godlike, playing basketball, palace like court, playing inside golden palace, golden and white marble, Greek uniform on,",
    "style": "Marble",
    "seed": 3989607322,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_62.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_10",
    "prompt": "Greek god, godly, godlike, playing basketball, palace like court, playing inside golden palace, golden and white marble, Greek uniform on,",
    "style": "Marble",
    "seed": 1473327661,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_52.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_11",
    "prompt": "Greek god, godly, godlike, playing basketball, palace like court, playing inside golden palace, golden and white marble, Greek uniform on,",
    "style": "Marble",
    "seed": 140156448,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_47.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_12",
    "prompt": "subzero, fighting ufc, cold, ice, mortal kombat like, subzero from mortal kombat, ufc ice octagon, icy texture subzero hidden identity with mask,",
    "style": "Studio Ghibli",
    "seed": 2692503862,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_46.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_13",
    "prompt": "white, man, with, sun,fire, orange, armor, mwhelan, red hot, structure, orange fire, glowing",
    "style": "Studio Ghibli",
    "seed": 417539809,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_42.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_14",
    "prompt": "Prince of persia, jake gyllenhaal, muscular, sword on back, armor, desert, facing away from viewer, ancient morocco, high detail, hd",
    "style": "Studio Ghibli",
    "seed": 2141714314,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_41.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_15",
    "prompt": "Glowing red eyes, monster, muscular, dark scaly skin, necromancer, armored, dark, diablo",
    "style": "Studio Ghibli",
    "seed": 2960705882,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_40.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_16",
    "prompt": "deadpool with mask on, in front, black, full face mask, superhero, full body, armor, two swords on back, from behind, facing towards viewer, on a basketball court",
    "style": "Studio Ghibli",
    "seed": 2793999102,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_36.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_17",
    "prompt": "basketball player lego style, realistic,",
    "style": "Lego",
    "seed": 692281019,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_176.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_18",
    "prompt": "basketball player lego style, realistic,",
    "style": "Lego",
    "seed": 1313313,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_179.mp4"]
  },
  {
    "status": "Finished",
    "inference_id": "explore_videos_19",
    "prompt": "basketball player lego style, realistic,",
    "style": "Lego",
    "seed": 12341313,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_180.mp4"]
  }, 
  {
    "status": "Finished",
    "inference_id": "explore_videos_20",
    "prompt": "soccer player lego style, realistic,",
    "style": "Lego",
    "seed": 12341313,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/abc7a237e654886ced44fd27baccc4d2f043e9d1ed68e69761ab4a1257d15999/video_1.mp4"]
  }, 
  {
    "status": "Finished",
    "inference_id": "explore_videos_21",
    "prompt": "morph",
    "style": "morph",
    "seed": 12341313,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_79.mp4"]
  }, 
  {
    "status": "Finished",
    "inference_id": "explore_videos_22",
    "prompt": "morph",
    "style": "morph",
    "seed": 12341313,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_75.mp4"]
  }, 
  {
    "status": "Finished",
    "inference_id": "explore_videos_23",
    "prompt": "morph",
    "style": "morph",
    "seed": 12341313,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_51.mp4"]
  }, 
  {
    "status": "Finished",
    "inference_id": "explore_videos_24",
    "prompt": "morph",
    "style": "morph",
    "seed": 12341313,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_43.mp4"]
  }, 
  {
    "status": "Finished",
    "inference_id": "explore_videos_25",
    "prompt": "morph",
    "style": "morph",
    "seed": 12341313,
    "urls": ["https://flush-user-images.s3.amazonaws.com/warpvideo/64f200c23684ccf24db8dc615c14848b29f085f191fadb7b8f811bdbd37d92f0/video_67.mp4"]
  }, 
]

function VideoPlaceholder({ hoverText, id, seed, style, setSeed, setStyle, setPrompt, setUrl }) {
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
    // setPrompt(hoverText);
    // setUrl(null);
    // setSeed(seed);
    // setStyle(style)
    navigate(`/video/${id}`);
  };

  return (
    <div onClick={handleClick} className="group cursor-pointer relative py-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div role="status" class="flex items-center justify-center h-60 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-900">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
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
    navigate(`/video/${id}`);
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


function RecentCreations({ }) {
  const [data, setData] = useState([...data2].reverse());

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
export default function InferenceHistory({ activeTab }) {
  const [tabs, setTabs] = useState([
    { name: 'Text-to-Image', href: '#', current: true },
    { name: 'Image-to-Image', href: '#', current: false },
  ]);

  const [currentTab, setCurrentTab] = useState("Text-to-Image");

  function ModelTypeTabs() {
    const handleTabClick = (selectedTab) => {
      setTabs(tabs.map(tab => ({
        ...tab,
        current: tab.name === selectedTab.name
      })));
    };

    const handleTabChange = useCallback((tab) => {
      handleTabClick(tab);
      setCurrentTab(tab.name);  // Note this change too
    }, [handleTabClick]);

    return (
      <div className='bg-[#1F1F1F]'>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => handleTabChange(tab)}
                className={classNames(
                  tab.current ? 'text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                  'rounded-md px-1 py-2 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto' style={{ maxHeight: 'calc(100vh - 0px)' }}>
        <h2 className="text-3xl mt-5 font-semibold tracking-tight text-gray-300 text-left">
          Explore
        </h2>
        <div className="mt-8 ">
          <RecentCreations/>
        </div>
      </div>
    </>
  )
}