import { useState, useEffect, useRef, useCallback, Fragment } from 'react'
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { AtSymbolIcon, CodeBracketIcon, LinkIcon, PhotoIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { useLocation, useNavigate } from 'react-router-dom';
import { VideoCameraIcon, CreditCardIcon, BuildingOfficeIcon, UsersIcon } from '@heroicons/react/20/solid'
import { createClient } from '@supabase/supabase-js'
import Masonry from 'react-masonry-css';
import axios from 'axios';

const supabase = createClient('https://zylqiknjgpjzjhylylnw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bHFpa25qZ3BqempoeWx5bG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MTEwMzMsImV4cCI6MjAyMTE4NzAzM30.ua5KcEvaU-2lkp_kHx1rOM4MFekUAZ7Ozd-fTrnMs7g')
const FastSpinner = styled(CircularProgress)(({ theme }) => ({
  '& .MuiCircularProgress-svg': {
    animationDuration: '0.1s',
  },
}));

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Explore', href: '#', current: true },
  { name: 'Playground', href: '#', current: false },
  { name: 'DreamBooth', href: '#', current: false },
  { name: 'Gallery', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]


const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function TextArea({ Title, Rows, value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="comment" className="block text-md text-left font-medium leading-6 text-gray-300">
        {Title}
      </label>
      <div className="mt-3">
        <textarea
          rows={Rows}
          name="comment"
          id="comment"
          value={value} // Control the component using value prop
          onChange={handleChange} // Set up the onChange event handler
          className="bg-[#090911] block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-0.5  ring-inset ring-[#262B31] placeholder:text-gray-400  sm:text-sm sm:leading-6"
          placeholder={`Enter your ${Title.toLowerCase()}`} // Optional placeholder
          style={{ paddingLeft: '8px', paddingright: '8px' }}
        />
      </div>
    </div>
  );
}

const products = [
  {
    id: "3D Cartoon",
    "model_name": "3D Cartoon",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Finished",
    "batch_size": null,
    title: '3D Cartoon',
    price: '3D Cartoon',
    imageSrc: '3D Cartoon.png',
    description: '3D Cartoon',
    link: '3D Cartoon'
  },
  {
    id: "Cartoon Anime",
    "model_name": "Cartoon Anime",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Finished",
    "batch_size": null,
    title: 'Cartoon Anime',
    price: 'Cartoon Anime',
    imageSrc: 'Cartoon Anime.png',
    description: 'Cartoon Anime',
    link: 'Cartoon Anime'
  },
  {
    id: "fusion",
    "model_name": "fusion",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Finished",
    "batch_size": null,
    title: 'fusion',
    price: 'fusion',
    imageSrc: 'fusion.png',
    description: 'fusion',
    link: 'fusion'
  },
  {
    id: "Japan Anime",
    "model_name": "Japan Anime",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Finished",
    "batch_size": null,
    title: 'Japan Anime',
    price: 'Japan Anime',
    imageSrc: 'Japan Anime.png',
    description: 'Japan Anime',
    link: 'Japan Anime'
  },
  {
    id: "realistic",
    "model_name": "realistic",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Finished",
    "batch_size": null,
    title: 'realistic',
    price: 'realistic',
    imageSrc: 'realistic.png',
    description: 'realistic',
    link: 'realistic'
  },
  {
    id: "toonyou",
    "model_name": "toonyou",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "toonyou",
    "batch_size": null,
    title: 'toonyou',
    price: 'toonyou',
    imageSrc: 'toonyou.png',
    description: 'toonyou',
    link: 'toonyou'
  },
  {
    id: "Pixar",
    "model_name": "Pixar",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Pixar",
    "batch_size": null,
    title: 'Pixar',
    price: 'Pixar',
    imageSrc: 'Pixar.png',
    description: 'Pixar',
    link: 'Pixar'
  },
  {
    id: "Paper Art",
    "model_name": "Paper Art",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Paper Art",
    "batch_size": null,
    title: 'Paper Art',
    price: 'Paper Art',
    imageSrc: 'Paper Art.jpeg',
    description: 'Paper Art',
    link: 'Paper Art'
  },
  {
    id: "Clay",
    "model_name": "Clay",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Clay",
    "batch_size": null,
    title: 'Clay',
    price: 'Clay',
    imageSrc: 'Clay.jpeg',
    description: 'Clay',
    link: 'Clay'
  },
  {
    id: "Lego",
    "model_name": "Lego",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Lego",
    "batch_size": null,
    title: 'Lego',
    price: 'Lego',
    imageSrc: 'Lego.png',
    description: 'Lego',
    link: 'Lego'
  },
  {
    id: "Pixel",
    "model_name": "Pixel",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Pixel",
    "batch_size": null,
    title: 'Pixel',
    price: 'Pixel',
    imageSrc: 'Pixel.png',
    description: 'Pixel',
    link: 'Pixel'
  },
  {
    id: "Sketch Anime",
    "model_name": "Sketch Anime",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Sketch Anime",
    "batch_size": null,
    title: 'Sketch Anime',
    price: 'Sketch Anime',
    imageSrc: 'Sketch Anime.jpeg',
    description: 'Sketch Anime',
    link: 'Sketch Anime'
  },
  {
    id: "Anime Lineart",
    "model_name": "Anime Lineart",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Anime Lineart",
    "batch_size": null,
    title: 'Anime Lineart',
    price: 'Anime Lineart',
    imageSrc: 'Anime Lineart.jpeg',
    description: 'Anime Lineart',
    link: 'Anime Lineart'
  },
  {
    id: "Studio Ghibli",
    "model_name": "Studio Ghibli",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Studio Ghibli",
    "batch_size": null,
    title: 'Studio Ghibli',
    price: 'Studio Ghibli',
    imageSrc: 'Studio Ghibli.jpeg',
    description: 'Studio Ghibli',
    link: 'Studio Ghibli'
  },
  {
    id: "Stone",
    "model_name": "Stone",
    "base_model": "",
    "learning_rate": null,
    "resolution": null,
    "training_steps": null,
    "status": "Stone",
    "batch_size": null,
    title: 'Stone',
    price: 'Stone',
    imageSrc: 'Stone.jpeg',
    description: 'Stone',
    link: 'Stone'
  },
]

function Models({ open, setOpen, model, setModel, models, setHeight, setWidth, setSteps }) {
  // Handler for product selection
  const handleSelectProduct = (productTitle) => {
    if (productTitle.id == "stable-diffusion-xl" || productTitle.id == "dreamshaper-xl" || productTitle.id == "juggernaut-xl") {
      setHeight(1024);
      setWidth(1024);
      setSteps(20);
    }
    else {
      setHeight(512);
      setWidth(512);
      setSteps(50);
    }
    setModel(productTitle); // Set the model to the selected product's title
    setOpen(false); // Close the modal
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer"
              onClick={() => handleSelectProduct(product)} // Add onClick event here
            >
              <div className="relative">
                <div className="relative h-48 w-48 overflow-hidden rounded-lg product-item">
                  <img
                    src={product.imageSrc || "/temp.jpeg"}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-x-0 top-0 flex h-48 w-48 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50 hover:opacity-100 transition-opacity duration-200"
                  />
                  <p className="relative text-md font-semibold text-white">{product.model_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WarningModal({ show, setShow, message }) {
  useEffect(() => {
    let timer;
    if (show) {
      timer = setTimeout(() => {
        setShow(false);
      }, 5000); // 5000ms = 5s
    }

    // Cleanup function to clear the timeout when the component is unmounted or if the modal is closed manually before the 5 seconds has elapsed
    return () => clearTimeout(timer);
  }, [show, setShow]);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6 justify-end"
    >
      <div className="flex flex-col items-end space-y-4">
        <Transition
          show={show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-x-full opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-x-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto max-w-lg overflow-hidden rounded-lg bg-[#282828] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
                </div>
                <div style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }} className="ml-3 flex-1 pt-0.5">
                  <p className="text-sm font-small text-gray-300">{message}</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

function ModelsModal({ open, setOpen, model, setModel, models, setHeight, setWidth, setSteps }) {
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
              <Dialog.Panel className="relative transform overflow-hidden bg-[#1f1f1f] rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6 bg-[#1f1f1f]" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-300">
                      Select Style
                    </Dialog.Title>
                    <div className="mt-2">
                      <Models open={open} setOpen={setOpen} model={model} setModel={setModel} models={models} setHeight={setHeight} setWidth={setWidth} setSteps={setSteps} />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

function ModelsAccordion({ model, setModel, models, setHeight, setWidth, setSteps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hs-accordion-group">
      <div className={`hs-accordion ${isOpen ? "active" : ""}`} id="hs-basic-with-title-and-arrow-stretched-heading-one">
        <button
          type="button"  // Add this line
          className="-mb-10 hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
          onClick={() => setIsOpen(true)}
        >
          <h3 className="text-base font-semibold leading-6 text-gray-300">
            Style: {model.model_name}
          </h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e2e8f0" class="w-6 h-6">
            <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>

        </button>

        <ModelsModal open={isOpen} setOpen={setIsOpen} model={model} setModel={setModel} models={models} setHeight={setHeight} setWidth={setWidth} setSteps={setSteps} />
      </div>
    </div>
  );
}


function ImagePlaceholder() {
  return (
    <div className="w-full">
      <div className="relative items-center block p-6 rounded-lg shadow-md bg-indigo-900"> {/* Adjusted background to bg-gray-800 */}
        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"> {/* Corrected class to className */}
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin-fast fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default function VideotoVideo({ base_models, credits, setCredits, generationsImages, setGenerationsImages, generationsVideos, setGenerationsVideos, activeTab, startingModel, setLastPartOfUrl }) {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(deliveryMethods[0])
  const tabs = [
    { name: 'Text-to-Image', href: '#', current: true },
    { name: 'Image-to-Image', href: '#', current: false },
    { name: 'Text-to-Video', href: '#', current: false },
    { name: 'Image-to-Video', href: '#', current: false },
  ]

  const [apiKey, setApiKey] = useState("");
  const [models, setModels] = useState([]);

  const location = useLocation();

  const getLastPartOfUrl = () => {
    const parts = location.pathname.split('/'); // Splits the pathname by '/'
    setLastPartOfUrl((parts[parts.length - 1] === 'playground') ? "" : parts[parts.length - 1]); // Returns the last part
  };

  getLastPartOfUrl()

  useEffect(() => {
    const checkSession = async () => {
      const { data: userData, error } = await supabase.auth.getSession();
      if (!userData.session) {
        // console.log("here")
        // console.log('User is not signed in!', data);
      } else if (error) {
        console.log('Error getting session:', error.message);
      }
      else {
        setApiKey(userData.session.user.id);
      }
      const { data: userData2 } = await supabase.auth.getUser();

      async function fetchData() {
        try {
          const { data: data2, error: error2 } = await supabase
            .from('all_models')
            .select("*")
            .eq('user_id', userData2.user.id ?? '');

          if (error2) throw error2;
          setModels([...products, ...data2]);
        } catch (error) {
        }
      }
      fetchData();
    };

    checkSession();
    setApiKey("404d5ad4-cefc-4155-bc89-9ad6f14047dc")
  }, []);

  const [promptImage, setPromptImage] = useState("masterpiece, realistic");
  const [negativePromptImage, setNegativePromptImage] = useState("ugly, deformed, malformed, lowres, mutant, mutated, disfigured, compressed, noise, artifacts, dithering, simple, watermark, text, font, signage, collage, pixel");
  const [modelTypeImage, setModelTypeImage] = useState("stable-diffusion-xl2");
  const [seedImage, setSeedImage] = useState(null);
  const [numberOfImages, setNumberOfImages] = useState(4);
  const [guidanceScaleImage, setGuidanceScaleImage] = useState(7.5);
  const [heightImage, setHeightImage] = useState(1024);
  const [widthImage, setWidthImage] = useState(1024);
  const [inferenceStepsImage, setInferenceStepsImage] = useState(20);
  const [isVerified, setIsVerified] = useState([]);
  const [isVerifiedVid, setIsVerifiedVid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [chosenModel, setChosenModel] = useState(startingModel)
  const [warningModal, setWarningModalOpen] = useState(true);

  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [displayedVideo, setDisplayedVideo] = useState(null)

  const handleFilesUpload = (files) => {
    const videoFile = Array.from(files).find(file => file.type.startsWith('video/'));
    if (videoFile) {
      const videoUrl = URL.createObjectURL(videoFile);
      // setSelectedVideo(videoUrl);
      setDisplayedVideo(videoUrl)
      setSelectedVideo(videoFile)
    }
  }

  const onFileChange = (e) => {
    handleFilesUpload(e.target.files);
  }

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFilesUpload(files);
  }, []);

  const handleGenerate = (event) => {
    event.preventDefault();
    GenerateVideos();
  }

  async function callVideoGenerationAPI(dataPayload) {
    const API_URL = "https://api.flushai.cloud/web/v1/warpvideo"//"https://ypaqg548s7.execute-api.us-east-2.amazonaws.com/testing/finetune";

    const headers = {
      "Content-Type": "application/json",
    };
    dataPayload['user_id'] = apiKey
    try {
      const response = await fetch(API_URL, {
        method: "POST", // or POST or PUT etc., depending on the API requirement
        headers: headers,
        body: JSON.stringify(dataPayload)
      });
      console.log('response', response)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error.message);
    }
  }

  const createURLs = async (files) => {
    const uploadedImageUrls = [];
    const response = await getPresignedUrls(files); // Call this once outside the loop
    // console.log("response", response);
    if (response) {
      for (let i = 0; i < response.length; i++) {
        await uploadImageToS3(response[i].signedRequest, files[i]); // Use the ith response for the ith file
        uploadedImageUrls.push(response[i].url);
        console.log("pushed image i!")
      }
    }
    return uploadedImageUrls;
    // setUploadedUrls(prev => [...prev, ...uploadedImageUrls]);
  }


  const getPresignedUrls = async (files) => {
    try {
      const data = {
        "user_id": apiKey,
        "mode": "video"
      };
      // console.log("data", data);
      const response = await axios.post("https://api.flushai.cloud/web/v1/helper/create-upload-url", data)
      return response.data['data'];
    } catch (error) {
      console.error("Error fetching presigned URL:", error);
      return null;
    }
  };

  const uploadImageToS3 = async (presignedUrl, file) => {
    try {
      await axios.put(presignedUrl, file, {
        headers: {
          'Content-Type': file.type
        }
      });
    } catch (error) {
      console.error("Error uploading to S3:", error);
    }
  };

  const GenerateVideos = async () => {
    // console.log("GEENRATINGx")
    setLoading(true);
    console.log("API KEY", apiKey)
    try {
      console.log("TRYING TO CREATE URLS");
      let imageUrls = await createURLs([selectedVideo]);
      console.log("IMAGE URLS", imageUrls)
      if (selectedVideo == null) {
        setWarningModalOpen(true)
        setMessage("Please add an input video.")
        setLoading(false)
        return
      } else if (promptImage == "") {
        setWarningModalOpen(true)
        setMessage("Please add a prompt.")
        setLoading(false)
        return
      }
      else if (apiKey == "") {
        setWarningModalOpen(true)
        setMessage("User not logged in")
        setLoading(false)
        return
      }

      const payloadDataBef = {
        "prompt": promptImage,
        "input_video": imageUrls[0],
        "style": chosenModel.id //selectedStyle,
      }
      let payloadData = {};
      Object.entries(payloadDataBef).forEach(([key, value]) => {
        if (value !== null && !Number.isNaN(value)) payloadData[key] = value;
      });

      console.log("PAYLOAD DATA", payloadData)
      const timeOptions = {
        weekday: undefined, // Do not display
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/Chicago',
        timeZoneName: 'short'
      };
      const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
      const result = await callVideoGenerationAPI(payloadData);
      if (result.output == "Request accepted and is being processed") {
        setMessage("You will also receive an email when your video is finished generating"); // Set the state with the appropriate message.
        setLoading(false);
        let urls = result['urls'];
        let temp_gen = {
          'prompt': promptImage,
          'image_urls': urls,
          'time': timeFormatter.format(new Date()).replace(',', ''),
          'num_images': parseInt(1, 10)
        }
        // let credits_temp = credits - result.total_frames;
        // setCredits(credits_temp);
        setGenerationsVideos(generations => [...generations, temp_gen]);
        setIsVerifiedVid(isVerified => [...isVerified, false]);

      } else {
        setMessage(result.message);
        if (result.message == 'Error: out of credits, upgrade for more') {
          setMessage("Error with your generation, invalid video or out of credits, upgrade");
        }
      }
    } catch (error) {
      console.log('ERRROR', error)
      if (apiKey === undefined) {
        setMessage("Error with your generation, please upgrade to access this feature."); // Set the state with the appropriate message.
      } else {
        setMessage("Error with your generation, please upgrade to access this feature."); // Set the state with the appropriate message.
      }
      setShow(true); // Show the modal.
    } finally {
      setLoading2(false);
    }
  };

  async function callAPI(dataPayload, url) {
    const API_URL = url;

    const headers = {
      "Content-Type": "application/json",
    };

    dataPayload['user_id'] = apiKey;
    console.log("data payload", dataPayload)

    try {
      const response = await fetch(API_URL, {
        method: "POST", // or POST or PUT etc., depending on the API requirement
        headers: headers,
        body: JSON.stringify(dataPayload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('output of API');
      return data;

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error.message);
    }
  }

  const VerifiedVideo = ({ imageUrl, altDescription, index }) => {
    const indexRef = useRef(index);

    const changeIndex = (currIndex) => {
      const newArr = [...isVerifiedVid];
      newArr[currIndex] = true;
      setIsVerifiedVid(newArr);
    };

    useEffect(() => {
      let active = true;
      const checkImageAndUpdate = () => {
        if (!active || isVerifiedVid[indexRef.current]) return;

        fetch(imageUrl)
          .then(response => {
            if (!active) return;
            if (response.ok) {
              changeIndex(indexRef.current); // Use the ref's current value
            } else {
              setTimeout(checkImageAndUpdate, 5000);
            }
          })
          .catch(error => {
            if (!active) return;
            setTimeout(checkImageAndUpdate, 5000);
          });
      };
      checkImageAndUpdate();
      return () => {
        active = false;
      };
    }, [imageUrl]);

    if (!isVerifiedVid[index]) {
      return <ImagePlaceholder />; // Render placeholder if the image is not verified.
    }

    // Render actual image if it is verified.
    return (
      <div className='w-full'>
        <video
          src={imageUrl}
          alt={altDescription}
          className="object-cover rounded-lg hover:brightness-50 transition duration-300 cursor-pointer"
          controls
        />
      </div>
    );
  };

  const navigate = useNavigate();

  async function callLLMAPI(dataPayload) {
    const API_URL = "https://api.flushai.cloud/web/v1/helper/prompt-enhancer"
    const headers = {
      "Content-Type": "application/json",
      // "x-api-key": apiKey
    };

    dataPayload['user_id'] = apiKey;

    try {
      const response = await fetch(API_URL, {
        method: "POST", // or POST or PUT etc., depending on the API requirement
        headers: headers,
        body: JSON.stringify(dataPayload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log('output of API', data);
      return data;

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error.message);
    }
  }

  const improvePrompt = async (event) => {
    event.preventDefault();
    // console.log("improving prompt");

    let newMessage = "";
    if (promptImage === "") {
      newMessage = "Please add a prompt for your images.";
    }

    if (newMessage !== "") {
      setShow(false); // Hide the modal.
      setMessage(newMessage); // Set the state with the appropriate message.
      setShow(true); // Show the modal.
    } else {
      setShow(false); // Hide the modal.
      setLoading1(true);
      try {
        let payloadData = {
          "prompt": promptImage
        };
        let result = await callLLMAPI(payloadData);
        let newPrompt = result['output']
        setPromptImage(newPrompt);
        setCredits(credits - 1);
        // setNumImages(num_images - 2);
      }
      catch (error) {
        if (apiKey === undefined) {
          setMessage("Error with your generation, please upgrade to access this feature."); // Set the state with the appropriate message.
        } else {
          setMessage("Error with your generation, please upgrade to access this feature."); // Set the state with the appropriate message.
        }
        setShow(true); // Show the modal.
      } finally {
        setLoading1(false);
      }
    }
  }
  const videotabs = [
    { name: 'Video', href: '#', icon: VideoCameraIcon, current: false },
    { name: 'Text', href: '#', icon: BuildingOfficeIcon, current: false },
    { name: 'Image', href: '#', icon: UsersIcon, current: true },
    { name: 'Morph', href: '#', icon: CreditCardIcon, current: false },
  ]


  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    1000: 2,
    500: 1
  };

  return (
    <div className="">
      <WarningModal show={show} setShow={setShow} message={message} />
      <div className="px-6 pb-24 pt-2 overflow-y-auto h-screen">
        {activeTab === 'Images' && (
          <form className="flex flex-col md:flex-row">
            {/* Order summary */}
            <div className="flex-shrink-0 w-full md:w-[450px] md:pr-5 h-screen md:h-auto overflow-auto">
              <div className="mt-4 rounded-lg overflow-y-auto shadow-sm" style={{ border: '0.5px solid', borderColor: "#262B31" }}>
                <div className="overflow-y-auto overflow-y-auto md:h-[calc(79vh-78px)]"> {/* Adjust height as needed */}
                  <div className='px-5 pt-4'>
                    <p className="block text-md mb-2 text-left font-medium leading-6 text-gray-300">
                      Upload Video
                    </p>
                    <div className="col-span-full mt-3">
                      {selectedVideo ? (
                        <video controls style={{ width: '100%', height: '30vh' }}>
                          <source src={displayedVideo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div
                          className={`mt-1 flex justify-center items-center rounded-lg border ${isDragging ? "bg-gray-500/50" : " bg-[#090911]"} border-dashed border-gray-700/50 px-6 py-7`}
                          onDragOver={onDragOver}
                          onDragLeave={onDragLeave}
                          onDrop={onDrop}
                          style={{ height: '30vh' }}
                        >
                          <div className="text-center">
                            {/* Replace with your icon component */}
                            <VideoCameraIcon className="mx-auto h-20 w-20 text-gray-300" aria-hidden="true" />

                            <div className="mt-4 flex text-md leading-6 text-gray-600 ">
                              <label
                                htmlFor="file-upload"
                                className={`upload-text-bg relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500`}
                              >
                                <span>Upload video</span>
                                <input
                                  ref={fileInputRef}
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={onFileChange}
                                  accept="video/*" // Accept only video files
                                  multiple={false} // Allow only one file to be selected
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">Video files up to 10MB</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='px-5 pt-5'>
                    <div>
                      <TextArea Title={"Prompt"} Rows={4} value={promptImage} setValue={setPromptImage} />
                    </div>
                    {/* <div className="flex justify-end">
                      {loading1 ? (
                        <FastSpinner size={20} />
                      ) : (
                        <button
                          type="button"
                          className="rounded mt-2 bg-[#101213] px-2 py-1 text-xs font-semibold text-gray-300 ring-0.5 ring-[#363636]"
                          onClick={improvePrompt}
                        >
                          Enhance Prompt
                        </button>
                      )}
                    </div> */}
                  </div>


                  <dl className="space-y-6 px-5 py-2 sm:px-5">
                    <div className="pb-4">
                      <ModelsAccordion model={chosenModel} setModel={setChosenModel} models={models} setHeight={setHeightImage} setWidth={setWidthImage} setSteps={setInferenceStepsImage} />
                    </div>
                  </dl>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6" style={{ borderTop: '0.5px solid', borderColor: "#3b3b3b" }}>
                  {loading ? (
                    <FastSpinner size={20} />
                  ) : (
                    <button
                      type="submit"
                      className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      onClick={handleGenerate}
                    >
                      Generate
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className='flex-grow pt-2'>
              <div className="mx-auto rounded-md">
                <div className='' />
                <div className="">
                  <div className="flex w-full flex-col">
                    <div className="mb-20 overflow-y-scroll">

                      {generationsVideos.slice().reverse().map((item, index) => (
                        <div key={index} className="pt-3">
                          <div className="center-content">
                            <Masonry
                              breakpointCols={breakpointColumnsObj}
                              className="my-masonry-grid pl-5 gap-2"
                              columnClassName="my-masonry-grid_column"
                            >
                              {item.image_urls.map((image, imageIndex) => (
                                <div key={imageIndex}>
                                  <VerifiedVideo
                                    key={imageIndex}
                                    imageUrl={image}
                                    altDescription="Description of Image"
                                    index={generationsVideos.length - index - 1}
                                  />
                                </div>
                              ))}
                            </Masonry>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}