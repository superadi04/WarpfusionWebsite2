import { Fragment, useEffect, useRef  } from 'react'
import { Disclosure, Menu, Transition, RadioGroup } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import InferenceHistory from './InferenceHistory'
import Playground from "./Playground"
import VideotoVideo from './VideotoVideo'
import { useNavigate } from 'react-router-dom';
import APIKeys from './APIKeys'
import { useLocation } from 'react-router-dom';
import MyModels from "./MyModels"
import ModelDetails from './ModelDetails'
import Pricing from './Pricing'
import { Progress } from '@mantine/core';
import FinetuneModal from './CreateNewModel'
import { createClient } from '@supabase/supabase-js'
import TexttoVideo from "./TexttoVideo"
import Morph from "./Morph"
import FAQ from "./FAQ"
import MyVideos from './MyVideos'
import ImageToVideo from './ImageToVideo'
import MotionBrush from './MotionBrush'
import VideoCard from './VideoCard'

const supabase = createClient('https://zylqiknjgpjzjhylylnw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bHFpa25qZ3BqempoeWx5bG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MTEwMzMsImV4cCI6MjAyMTE4NzAzM30.ua5KcEvaU-2lkp_kHx1rOM4MFekUAZ7Ozd-fTrnMs7g')

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProgressBox({ plan, credits, maxCredits }) {
  return (
    <div className="overflow-hidden">
      <div className="py-2 w-36">
        <p className="text-sm text-left font-semibold leading-6 text-gray-300">{plan} Plan</p>
        {
          plan === "max" ?
            <p className="text-gray-300" style={{ fontSize: "10px", textAlign: "left" }}>Unlimited Credits</p>
          :
            <>
              <Progress value={100 * ((maxCredits - credits) / maxCredits)} fontS color="violet" />
              <div>
                <p className="text-gray-300 -mt-1" style={{ fontSize: "10px", textAlign: "left", display: "inline-block", width: "100%" }}>{maxCredits - credits}/{maxCredits} credits</p>
              </div>
            </>
        }
      </div>
    </div>
  )
}

const classNames2 = (current) => {
  return current
    ? 'text-white rounded-md px-3 py-2 text-sm font-medium'
    : 'text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium';
};

export default function Dashboard({ pageName, modelID, setModelID, createdAt, setCreatedAt, resolution, setResolution, learningRate, setLearningRate, batchSize, setBatchSize, trainingSteps, setTrainingSteps, model_name, setModelName, base_model, setBaseModel, handleModelDetails, urls, setUrls, products, startingModel, setLastPartOfUrl, url, style, prompt, seed }) {
  const location = useLocation();
  const [navigation, setNavigation] = useState([
    { name: 'Create', href: '/create', current: false },
    { name: 'Explore', href: '/explore', current: false },
    { name: 'Your Videos', href: '/my-videos', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    {name: 'Discord', href: 'https://discord.com/invite/QHwrUGDk3Q', current: false},
    {name: 'FAQ', href: '/faq', current: false}
  ]);

  // console.log(modelID)
  const initialSetupDone = useRef(false);

  useEffect(() => {
    if (!initialSetupDone.current) {
      const currentPath = location.pathname;
      const updatedNavigation = navigation.map(item => ({
        ...item,
        current: item.href === currentPath
      }));
      setNavigation(updatedNavigation);
      initialSetupDone.current = true; // Mark initial setup as done
    }
  }, [location, navigation]); // Keep the dependencies to adhere to React's rules of hooks  

  const [generationsImages, setGenerationsImages] = useState([]);
  const [generationsVideos, setGenerationsVideos] = useState([]);

  const [models, setModels] = useState(products);

  const [isModalOpen, setModalOpen] = useState(false);
  const [plan, setPlan] = useState(null);
  const [credits, setCredits] = useState(null);
  const [maxCredits, setMaxCredits] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [apiKey, setAPIKey] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedImages, setSelectedImages] = useState([]);
  const [num_models, setNumModels] = useState(0);

  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchDataAndCheckAPIKey = async () => {
      const { data: userData } = await supabase.auth.getUser();

      // if (!userData.user) {
      //   navigate('/signin');
      // }

      // setUsername(userData?.user?.email);
      setUsername("saketh.kotamraju@gmail.com")
      const userId =  "404d5ad4-cefc-4155-bc89-9ad6f14047dc"; //userData?.user?.id;

      // // Fetch user details
      // const { data: userDetails } = await supabase
      //   .from('user_details')
      //   .select("*")
      //   .eq('id', userId ?? '');
      // // console.log("data", userDetails)

      // if (userDetails && userDetails[0]) {
      //   let p = userDetails[0]['plan']
      //   const capitalizedStr = p.charAt(0).toUpperCase() + p.slice(1);
      //   setPlan(capitalizedStr);
      //   setCredits(userDetails[0]['credits']);
      //   setMaxCredits(userDetails[0]['max_credits']);
      // }
      setPlan("premium-warpvideo-monthly");
      setCredits(200)
      setMaxCredits(200)
    };

    fetchDataAndCheckAPIKey();  }, []);

  // const [tabs, setTabs] = useState([
  //   { name: 'Images', href: '#', current: true },
  //   // { name: 'Videos', href: '#', current: false },
  // ]);

  const close_stuff = () => {
    setModalOpen(false);
    setSelectedImages([]);
  }

  function grouped_urls(data) {
    const groupUrls = data.reduce((acc, curr) => {
      if (!acc[curr.model_id]) {
        acc[curr.model_id] = [];
      }
      acc[curr.model_id] = acc[curr.model_id].concat(curr.urls);
      return acc;
    }, {});
    return groupUrls;
  }

  function formatTimeStamp(timestamp) {
    const dateObject = new Date(timestamp);

    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = dateObject.toLocaleDateString("en-US", optionsDate);

    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = dateObject.toLocaleTimeString("en-US", optionsTime);

    return formattedDate + ", " + formattedTime;
  }

  const [activeTab, setActiveTab] = useState("Images");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    // Update the current property for each tab
    // const updatedTabs = tabs.map(tab => ({
    //   ...tab,
    //   current: tab.name === tabName
    // }));

    // Set the updated tabs array
    setTabs(updatedTabs);
  };

  const handleClick = (itemName) => {
    const newNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === itemName,
    }));
    setNavigation(newNavigation);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error == null) {
      // console.log("HELLOOOSDFSFS");
      navigate('/');
    }
  };

  return (
    <div className='w-full h-full bg-[#04040c] fixed top-0 left-0'>
      <Disclosure as="nav" className="" style={{ borderBottom: '0.5px solid', borderColor: "#1a202c" }}>
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <a href="https://flushai.cloud/">
                      <img
                        className="h-9 w-auto"
                        src="/warpvideologo.png"
                        alt="Your Company"
                      />
                    </a>

                  </div>
                  <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames2(item.current)}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => handleClick(item.name)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <div className='flex'>
                    <ProgressBox plan={plan} credits={credits} maxCredits={maxCredits} />
                  </div>
                  <div className="hidden md:ml-1 md:flex md:flex-shrink-0 md:items-center">

                    {/* Profile dropdown */}
                    <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 mx-5" aria-hidden="true" />

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative">
                      <Menu.Button className="-m-1.5 flex items-center">
                        <span className="sr-only">Open user menu</span>
                        <span className="hidden lg:flex lg:items-center">
                          <span className="text-sm font-semibold leading-6 text-gray-300" aria-hidden="true">
                            {username}
                          </span>
                          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                         <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* Non-clickable item */}
                        <div className="px-3 py-2 text-xs text-left text-gray-500 border-b border-gray-800">
                          {email}
                        </div>

                        {/* Divider, if you need extra space or visual separation */}
                        {/* This can be omitted if the border-b class on the div above is sufficient for your needs */}

                        {/* Existing clickable item */}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(active ? 'bg-gray-700 cursor-pointer' : '', 'block px-3 py-2 text-sm text-left text-gray-300')}
                              onClick={handleLogout}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <FinetuneModal
        isOpen={isModalOpen}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
        closeModal={() => close_stuff()}
        data={data}
        setData={setData}
        setLoading={setLoading}
        setUrls={setUrls}
        grouped_urls={grouped_urls}
        formatTimeStamp={formatTimeStamp}
        models={models}
        setModels={setCredits}
      />

      <div className='px-6 bg-[#1C1C1C]'>
        {
          pageName !== "Model Details" && pageName !== "API Keys" && pageName !== "Pricing" && (
            <div>
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {/* {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    onClick={() => handleTabClick(tab.name)}
                    className={classNames(
                      tab.current
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                    )}
                    aria-current={tab.current ? 'page' : undefined}
                  >
                    {tab.name}
                  </a>
                ))} */}
              </nav>
            </div>
          )
        }
      </div>

      <div >
        {pageName === 'Video-to-Video' && <VideotoVideo base_models={products} credits={credits} setCredits={setCredits} generationsImages={generationsImages} setGenerationsImages={setGenerationsImages} generationsVideos={generationsVideos} setGenerationsVideos={setGenerationsVideos} activeTab={activeTab} startingModel={startingModel} setLastPartOfUrl={setLastPartOfUrl}/>}
        {pageName === 'Text-to-Video' && <TexttoVideo base_models={products} credits={credits} setCredits={setCredits} generationsImages={generationsImages} setGenerationsImages={setGenerationsImages} generationsVideos={generationsVideos} setGenerationsVideos={setGenerationsVideos} activeTab={activeTab} startingModel={startingModel} setLastPartOfUrl={setLastPartOfUrl}/>}
        {pageName === 'Morph' && <Morph base_models={products} credits={credits} setCredits={setCredits} generationsImages={generationsImages} setGenerationsImages={setGenerationsImages} generationsVideos={generationsVideos} setGenerationsVideos={setGenerationsVideos} activeTab={activeTab} startingModel={startingModel} setLastPartOfUrl={setLastPartOfUrl}/>}
        {pageName === 'ImageToVideo' && <ImageToVideo base_models={products} credits={credits} setCredits={setCredits} generationsImages={generationsImages} setGenerationsImages={setGenerationsImages} generationsVideos={generationsVideos} setGenerationsVideos={setGenerationsVideos} activeTab={activeTab} startingModel={startingModel} setLastPartOfUrl={setLastPartOfUrl}/>}
        {pageName === 'MotionBrush' && <MotionBrush base_models={products} credits={credits} setCredits={setCredits} generationsImages={generationsImages} setGenerationsImages={setGenerationsImages} generationsVideos={generationsVideos} setGenerationsVideos={setGenerationsVideos} activeTab={activeTab} startingModel={startingModel} setLastPartOfUrl={setLastPartOfUrl}/>}
        {pageName === 'Gallery' && <MyVideos />}
        {pageName === 'Explore' && <InferenceHistory activeTab={activeTab} />}
        {pageName === 'Create' && <MyModels handleInformation={handleModelDetails} setProducts={setModels} products={models} activeTab={activeTab} isModalOpen={isModalOpen} setModalOpen={setModalOpen} />}
        {pageName === 'Model Details' && <ModelDetails model_id={modelID} model_name={model_name} created_at={createdAt} resolution={resolution} learning_rate={learningRate} batch_size={batchSize} training_steps={trainingSteps} urls={urls} base_model={base_model} is_gif={false} />}
        {pageName === 'API Keys' && <APIKeys />}
        {pageName === 'Pricing' && <Pricing />}
        {pageName === 'FAQ' && <FAQ />}
        {pageName === 'VideoCard' && <VideoCard seed={seed} style={style} prompt={prompt} url={url} />}
      </div>
    </div>
  )
}
