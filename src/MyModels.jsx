import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition, Dialog } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FinetuneModal from './CreateNewModel'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const supabase = createClient('https://zylqiknjgpjzjhylylnw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bHFpa25qZ3BqempoeWx5bG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MTEwMzMsImV4cCI6MjAyMTE4NzAzM30.ua5KcEvaU-2lkp_kHx1rOM4MFekUAZ7Ozd-fTrnMs7g')

let data2 = [
]


function PricingModal({ open, setOpen, apiKey }) {
  const [selectedOption, setSelectedOption] = useState('9000');
  const [loadingTier, setLoadingTier] = useState(null);

  const SubscriptionOptions = () => {
    // Define an initial state for the selected option
    // Handle changing the selected option
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <div>
        <div className="flex items-center mb-2 mt-4">
          <input
            type="checkbox"
            value="9000"
            checked={selectedOption === '9000'}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Get 9,000 credits for $9.00/month
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            value="25000"
            checked={selectedOption === '25000'}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Get 25,000 credits for $25.00/month
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            value="70000"
            checked={selectedOption === '70000'}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Get 70,000 credits for $70.00/month
          </label>
        </div>
      </div>
    );
  };

  const SubscriptionOptions2 = () => {
    // Define an initial state for the selected option
    // Handle changing the selected option
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <div>
        {/* <div className="flex items-center mb-2 mt-4">
          <input
            type="checkbox"
            value="5000"
            checked={selectedOption === '5000'}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Get 1,000 credits for Free with our Free Trial!
          </label>
        </div> */}
        <div className="flex items-center mb-2 mt-4">
          <input
            type="checkbox"
            value="0"
            checked={selectedOption === '0'}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Pay $0.01/credit, unlimited
          </label>
        </div>
      </div>
    );
  };

  // const handleSubscribeClick = async (tierId) => {
  //   setLoadingTier(tierId);
  //   try {
  //     console.log("api key", apiKey)
  //     if (apiKey == "") {
  //       setLoadingTier(null);
  //     }
  //     else {
  //       let data = {
  //         priceId: tierId,
  //         "type": "purchase",
  //         "user_id": apiKey,  //"404d5ad4-cefc-4155-bc89-9ad6f14047dc"
  //       }
  //       if (window.tolt_referral) {
  //         data["tolt_id"] = window.tolt_referral
  //       }
  //       const response = await axios.post(
  //         "https://ypaqg548s7.execute-api.us-east-2.amazonaws.com/testing/stripe",
  //         data
  //         // {
  //         //   priceId: tierId,
  //         //   "type": "purchase",
  //         //   "user_id": apiKey,  //"404d5ad4-cefc-4155-bc89-9ad6f14047dc"
  //         //   "tolt_id": window.tolt_referral
  //         // },
  //       );
  //       // console.log("response", response);

  //       // If the response has a URL, redirect to it
  //       if (response.data.url) {
  //         window.location.href = response.data.url;
  //       } else {
  //         // Handle the case where the URL is not present
  //         console.error('No URL returned from the server');
  //       }
  //       setLoadingTier(null);
  //     }
  //   } catch (error) {
  //     console.error('Error creating checkout session:', error);
  //     // Handle error, possibly show a message to the user
  //   }
  // };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#04040c] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-[#04040c] text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-300">
                      Unlock with Subscription
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-md text-gray-500">
                        You must subscribe to unlock this feature, plus additional credits!
                      </p>
                    </div>
                    <SubscriptionOptions />
                    <p className="text-md text-gray-500 mt-4">
                      Not sure if you want to commit? Keep exploring with a credit pack with all features unlocked!
                    </p>
                    <SubscriptionOptions2 />
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                    onClick={() => handleSubscribeClick({'9000': 'starter-warpvideo-monthly', '25000': 'premium-warpvideo-monthly', '70000': 'pro-warpvideo-monthly', '0': 'frame-pack-warpvideo' }[selectedOption])}
                  >
                    Subscribe
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-gray-500 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}


function LogInModal({ open, setOpen }) {
  const [selectedOption, setSelectedOption] = useState('9000');
  const [loadingTier, setLoadingTier] = useState(null);

  async function handleGoogleLogin(event) {
    event.preventDefault();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
        redirectTo: "https://warpvideo.ai/create" //"http://localhost:5173/create" //"http://localhost:5173/"//'https://warpvideo.ai/create'
      },
    })
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#04040c] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-[#04040c] text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-300">
                      Sign up for free
                    </Dialog.Title>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:mx-4">
                  <a
                    href="#"
                    onClick={handleGoogleLogin}
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#34A853] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 -2 20 20">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <span className="text-sm font-semibold leading-6">Google</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

function VideotoVideoCreation({ imageSrc, creationName, description, tag, plan, setOpen, demoVideoLink, setPricingModalOpen, credits }) {
  // const additionalClasses =  ''; //plan === 'free' ? 'bg-[#0b0b0b] opacity-50' : '';
  const additionalClasses = credits < 200 ? 'bg-[#0b0b0b] opacity-50' : '';
  const navigate = useNavigate();

  function handleClick(e) {
    // if (!loggedIn) {
    //   e.preventDefault();
    //   setPricingModalOpen(true)
    // }
    if (credits < 200) {
      e.preventDefault();
      setOpen(true);
    }
    navigate('/video-to-video')
  }

  return (
    <div className={`relative z-10 flex flex-row ${additionalClasses} h-32`}> {/* Added h-64 for fixed height */}
      <a href="/video-to-video" onClick={handleClick} className='h-full w-full'> {/* Changed to h-full w-full to fill the parent */}
        <div key={imageSrc} className="group flex flex-row overflow-hidden rounded-lg relative w-full h-full">
          {/* Text Container */}
          <div className={`flex flex-col space-y-2 p-4 bg-[#131313] w-1/2 h-full ${additionalClasses}`}>
            <h3 className="text-md font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
                {credits < 200 && (
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                )}
              </div>
            </h3>
            <p className="text-sm text-left text-gray-500">
              {description}
            </p>
          </div>
          {/* Video Container */}
          <div className="w-1/2 h-full" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              muted
              preload="auto"
              playsInline
              title="AI Video Free Tool"
              className={`h-full w-full object-cover object-center ${additionalClasses}`}
              src={demoVideoLink}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </a>
    </div>
  );
}


function TexttoVideoCreation({ imageSrc, creationName, description, tag, plan, setOpen}) {
  // Determine additional classes based on the plan
  const additionalClasses = plan === 'free' ? 'bg-[#0b0b0b] opacity-50' : '';
  // console.log(plan);

  function handleClick(e) {
    if (plan === 'free') {
      e.preventDefault();
      setOpen(true);
      // console.log('Free plans cannot access this feature');
    }
  }

  return (
    <div className={`relative z-10`}>
      {/* Lock Icon Container */}
      {/* <a href="/video-to-video"> */}
      <a href="/deforum" onClick={handleClick}>
        <div
          key={imageSrc}
          className="group flex flex-col overflow-hidden rounded-lg relative"
        >
          <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-50 h-36" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              muted
              title="AI Video Free Tool"
              playsInline
              className={`h-full w-full object-cover object-center sm:h-full sm:w-full ${additionalClasses}`}
              src="https://flush-user-images.s3.us-east-2.amazonaws.com/202403142246.mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={`flex flex-1 flex-col space-y-2 p-4 bg-[#131313] ${additionalClasses}`}>
            <h3 className="text-sm font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
                {plan == "free" &&
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                }
              </div>
            </h3>
            <p className="text-xs text-left text-gray-500">
              {description}
            </p>
          </div>
        </div>
        {/* <div
          key={imageSrc}
          className="group flex flex-col overflow-hidden rounded-lg relative"
        >
          <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-50 h-48" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`h-full w-full object-cover object-center sm:h-full sm:w-full`}
              src="https://flush-user-images.s3.us-east-2.amazonaws.com/202403142246.mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={`flex flex-1 flex-col space-y-2 p-4 bg-[#131313]`}>
            <h3 className="text-sm font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
              </div>
            </h3>
            <p className="text-xs text-left text-gray-500">
              {description}
            </p>
          </div>
        </div> */}
      </a>
    </div>
  );
}

function InfiniteZoom({ imageSrc, creationName, description, tag, plan }) {
  // Determine additional classes based on the plan
  // console.log(plan);

  // function handleClick(e) {
  //   if (plan === 'free') {
  //     e.preventDefault();
  //     console.log('Free plans cannot access this feature');
  //   }
  // }

  return (
    <div className={`relative z-10`}>
      {/* Lock Icon Container */}
      {/* <a href="/video-to-video"> */}
      <a href="/infinite-zoom">
        <div
          key={imageSrc}
          className="group flex flex-col overflow-hidden rounded-lg relative"
        >
          <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-50 h-36" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              muted
              title="AI Video Free Tool"
              playsInline
              className={`h-full w-full object-cover object-center sm:h-full sm:w-full`}
              src="https://flush-user-images.s3.us-east-2.amazonaws.com/202403142355.mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={`flex flex-1 flex-col space-y-2 p-4 bg-[#131313]`}>
            <h3 className="text-sm font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
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

function ImagetoVideoCreation({ imageSrc, creationName, description, tag, plan, setOpen, demoVideoLink, setPricingModalOpen, credits }) {
  const additionalClasses = credits < 200 ? 'bg-[#0b0b0b] opacity-50' : '';
  const navigate = useNavigate();

  function handleClick(e) {
    console.log("HSDFDSJAFLSDFJASDFASD")
    // if (!loggedIn) {
    //   e.preventDefault();
    //   setPricingModalOpen(true)
    // }
    if (credits < 200) {
      e.preventDefault();
      setOpen(true);
    }
  }

  return (
    <div className={`relative z-10 flex flex-row ${additionalClasses} h-32`}> {/* Added h-64 for fixed height */}
      <a href="/image-to-video" onClick={handleClick} className='h-full w-full'> {/* Changed to h-full w-full to fill the parent */}
        <div key={imageSrc} className="group flex flex-row overflow-hidden rounded-lg relative w-full h-full">
          {/* Text Container */}
          <div className={`flex flex-col space-y-2 p-4 bg-[#131313] w-1/2 h-full ${additionalClasses}`}>
            <h3 className="text-md font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
                {credits < 200 && (
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                )}
              </div>
            </h3>
            <p className="text-sm text-left text-gray-500">
              {description}
            </p>
          </div>
          {/* Video Container */}
          <div className="w-1/2 h-full" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              preload="auto"
              title="AI Video Free Tool"
              muted
              playsInline
              className={`h-full w-full object-cover object-center ${additionalClasses}`}
              src={demoVideoLink}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </a>
    </div>
  );
}



function FaceSwapVideoCreation({ imageSrc, creationName, description, tag, plan, setOpen, demoVideoLink }) {
  const additionalClasses = plan === 'free' ? 'bg-[#0b0b0b] opacity-50' : '';

  function handleClick(e) {
    if (plan === 'free') {
      e.preventDefault();
      setOpen(true);
    }
  }

  return (
    <div className={`relative z-10 flex flex-row h-28`}> {/* Added h-64 for fixed height */}
      <a href="/face-swap" className='h-full w-full'> {/* Changed to h-full w-full to fill the parent */}
        <div key={imageSrc} className="group flex flex-row overflow-hidden rounded-lg relative w-full h-full">
          {/* Text Container */}
          <div className={`flex flex-col space-y-2 p-4 bg-[#131313] w-1/2 h-full`}>
            <h3 className="text-sm font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
                {/* {plan == "free" && (
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                )} */}
              </div>
            </h3>
            <p className="text-xs text-left text-gray-500">
              {description}
            </p>
          </div>
          {/* Video Container */}
          <div className="w-1/2 h-full" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              muted
              title="AI Video Free Tool"
              playsInline
              className={`h-full w-full object-cover object-center`}
              src={demoVideoLink}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </a>
    </div>
  );
}


function MorphCreation({ imageSrc, creationName, description, tag, plan, setOpen, demoVideoLink, setPricingModalOpen, credits}) {
  // const additionalClasses = plan === 'free' ? 'bg-[#0b0b0b] opacity-50' : '';
  const additionalClasses = credits < 200 ? 'bg-[#0b0b0b] opacity-50' : '';
  const navigate = useNavigate();

  function handleClick(e) {
    // if (!loggedIn) {
    //   e.preventDefault();
    //   setPricingModalOpen(true)
    // }
    if (credits < 200) {
      e.preventDefault();
      setOpen(true);
    }
    navigate('/morph')
  }

  return (
    <div className={`relative z-10 flex flex-row ${additionalClasses} h-32`}> {/* Added h-64 for fixed height */}
      <a onClick={handleClick} className='h-full w-full'> {/* Changed to h-full w-full to fill the parent */}
        <div key={imageSrc} className="group flex flex-row overflow-hidden rounded-lg relative w-full h-full">
          {/* Text Container */}
          <div className={`flex flex-col space-y-2 p-4 bg-[#131313] w-1/2 h-full`}>
            <h3 className="text-md font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
                {credits < 200 && (
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                )}
              </div>
            </h3>
            <p className="text-sm text-left text-gray-500">
              {description}
            </p>
          </div>
          {/* Video Container */}
          <div className="w-1/2 h-full" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              muted
              title="AI Video Free Tool"
              playsInline
              preload="auto"
              className={`h-full w-full object-cover object-center`}
              src={demoVideoLink}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </a>
    </div>
  );
}


function Text2VideoCreation({ imageSrc, creationName, description, tag, plan, setOpen, demoVideoLink, setPricingModalOpen, credits}) {
  // const additionalClasses = plan === 'free' ? 'bg-[#0b0b0b] opacity-50' : '';
  const additionalClasses = credits < 200 ? 'bg-[#0b0b0b] opacity-50' : '';
  const navigate = useNavigate();

  function handleClick(e) {
    // if (!loggedIn) {
    //   e.preventDefault();
    //   setPricingModalOpen(true)
    // }
    if (credits < 200) {
      e.preventDefault();
      setOpen(true);
    }
    navigate("/text-to-video")
  }

  return (
    <div className={`relative z-10 flex flex-row ${additionalClasses}  h-32`}> {/* Added h-64 for fixed height */}
      <a onClick={handleClick} className='h-full w-full'> {/* Changed to h-full w-full to fill the parent */}
        <div key={imageSrc} className="group flex flex-row overflow-hidden rounded-lg relative w-full h-full">
          {/* Text Container */}
          <div className={`flex flex-col space-y-2 p-4 bg-[#131313] w-1/2 h-full`}>
            <h3 className="text-md font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
                {credits < 200 && (
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                )}
              </div>
            </h3>
            <p className="text-sm text-left text-gray-500">
              {description}
            </p>
          </div>
          {/* Video Container */}
          <div className="w-1/2 h-full" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              muted
              title="AI Video Free Tool"
              playsInline
              preload='auto'
              className={`h-full w-full object-cover object-center`}
              src={demoVideoLink}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </a>
    </div>
  );
}

function VideoPlaceholder({ hoverText, id }) {
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

  const handleClick = event => {
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
        muted
        title="AI Video Free Tool"
        onLoadedData={handleLoadedData}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
        title="AI Video Free Tool"
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


function RecentCreations({ setSeed, setStyle, setPrompt, setUrl }) {
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

function MotionBrush({ imageSrc, creationName, description, tag, plan, setOpen, demoVideoLink, credits }) {
  // const additionalClasses = plan === 'free' ? 'bg-[#0b0b0b] opacity-50' : '';
  const additionalClasses = credits < 200 ? 'bg-[#0b0b0b] opacity-50' : '';

  function handleClick(e) {
    // if (!loggedIn) {
    //   e.preventDefault();
    //   setPricingModalOpen(true)
    // }
    if (credits < 200) {
      e.preventDefault();
      setOpen(true);
    }
  }

  return (
    <div className={`relative z-10 flex flex-row ${additionalClasses}  h-32`}> {/* Added h-64 for fixed height */}
      <a href="/motion-brush" onClick={handleClick} className='h-full w-full'> {/* Changed to h-full w-full to fill the parent */}
        <div key={imageSrc} className="group flex flex-row overflow-hidden rounded-lg relative w-full h-full">
          {/* Text Container */}
          <div className={`flex flex-col space-y-2 p-4 bg-[#131313] w-1/2 h-full`}>
            <h3 className="text-md font-medium text-gray-300 text-left">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span aria-hidden="true" className="absolute inset-0" />
                {creationName}
                {credits < 200 && (
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                )}
              </div>
            </h3>
            <p className="text-sm text-left text-gray-500">
              {description}
            </p>
          </div>
          {/* Video Container */}
          <div className="w-1/2 h-full" style={{ transition: 'opacity 0.1s ease-in-out' }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`h-full w-full object-cover object-center`}
              src={demoVideoLink}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </a>
    </div>
  );
}


export default function MyModels({ handleInformation, isModalOpen, setModalOpen, activeTab, products, setProducts }) {
  const [open, setOpen] = useState(false);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  return (
    <>
       <div className='mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto'>
        <h2 className="text-3xl mt-5 font-semibold tracking-tight text-gray-300 text-left">
          Get Started
        </h2>
        <LogInModal open={pricingModalOpen} setOpen={setPricingModalOpen}/>
        {/* <PricingModal open={open} setOpen={setOpen} apiKey={apiKey} /> */}
        <div className="mt-6 grid sm:grid-cols-1 gap-y-4 sm:gap-x-4 lg:grid-cols-4 md:grid-cols-2 xl:gap-x-4">
          <VideotoVideoCreation  creationName={"Video-to-Video"} description={"Transform an existing video into any style"} tag={"Popular"} setOpen={setOpen} demoVideoLink={"video_to_video.mp4"} setPricingModalOpen={setPricingModalOpen}/>
          <ImagetoVideoCreation creationName={"Image-to-Video"} description={"Create a mesmerizing video from an image"} tag={"Popular"} setOpen={setOpen} demoVideoLink={"image_to_video.mp4"} setPricingModalOpen={setPricingModalOpen}/>
          <MorphCreation creationName={"Morph"} description={"Create an immersive video with 4 images"} tag={"Popular"} setOpen={setOpen} demoVideoLink={"morph.mp4"} setPricingModalOpen={setPricingModalOpen} />
          {/* <TexttoVideoCreation creationName={"Deforum"} description={"Create immersive videos with Deforum with a text prompt"} tag={"Popular"} plan={plan} setOpen={setOpen} /> */}
          {/* <Text2VideoCreation  creationName={"Text to Video"} description={"Create hyperrealistic videos with text"} tag={"Popular"} setOpen={setOpen} demoVideoLink={"text_to_video.mp4"} setPricingModalOpen={setPricingModalOpen} /> */}
          <MotionBrush creationName={"Motion Brush"} description={"Make parts of your photo move"} tag={"Popular"} setOpen={setOpen} demoVideoLink={"motion_brush.mp4"} />
        </div>
        <h2 className="text-3xl mt-7 font-semibold tracking-tight text-gray-300 text-left">
          Discover
        </h2>
        {/* <div className="mt-8 ">
          <RecentCreations setSeed={setSeed} setStyle={setStyle} setPrompt={setPrompt} setUrl={setUrl}/>
        </div>  */}
      </div>
    </>
  )
}
