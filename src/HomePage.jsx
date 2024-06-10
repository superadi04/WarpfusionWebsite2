import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ServerIcon,
  ArrowUpTrayIcon,
  ArrowPathIcon,
  DocumentTextIcon,
  LanguageIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import { CheckIcon, } from '@heroicons/react/20/solid'
import { CodeBlock, dracula } from "react-code-blocks";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const navigation = [
  { name: 'Explore', href: '' },
  { name: 'FAQ', href: '' },
]

const tiers = [
  {
    name: 'Free',
    id: 'free',
    href: 'signin',
    price: { monthly: '$0' },
    description: 'For people who want to try out Flush. Includes up to:',
    features: ['25 image generations', '12 upscales', 'API & SDK access', 'Standard Speed'],
    mostPopular: false,
  },
  {
    name: 'Starter',
    id: 'starter',
    href: 'signin',
    price: { monthly: '$6.99' },
    description: 'For people who want a larger amount of images to generate. Buys 1000 credits, which includes up to:',
    features: ['1000 image generations', '500 upscales', 'Permanent Image Urls', 'LLM Prompt Enhancement', 'Access to Civit Checkpoints and Loras', 'API & SDK access', 'Standard Speed', 'Inpainting (Coming soon)', 'Outpainting (Coming soon)', 'Face restoration (Coming soon)'],
    mostPopular: false,
  },
  {
    name: 'Basic',
    id: 'basic',
    href: 'signin',
    price: { monthly: '$12.99' },
    description: 'For creators and developers who need higher volumes. Buys 2000 credits, which includes up to:',
    features: ["2000 image generations", '1000 upscales', 'Permanent Image Urls', 'LLM Prompt Enhancement', 'Access to Civit Checkpoints and Loras', "API & SDK access", "Faster Speed", 'Inpainting (Coming soon)', 'Outpainting (Coming soon)', 'Face restoration (Coming soon)'],
    mostPopular: false,
  },
  {
    name: 'Premium',
    id: 'premium',
    href: 'signin',
    price: { monthly: '$33.99' },
    description: 'For creators and developers who need higher volumes. Buys 10000 credits, which includes up to:',
    features: ["10000 image generations", '5000 upscales', 'Permanent Image Urls', 'LLM Prompt Enhancement', "Access to Civit Checkpoints and Loras", "API & SDK access", "Faster Speed", 'Inpainting (Coming soon)', 'Outpainting (Coming soon)', 'Face restoration (Coming soon)'],
    mostPopular: true,
  }
  // {
  //   name: 'Max',
  //   id: 'max',
  //   href: 'signin',
  //   price: { monthly: '$60' },
  //   description: 'For creators, developers, and professionals who need high volume usage. Includes:',
  //   features: ["Unlimited image generations", 'LLM Prompt Enhancement', "API & SDK access", "Faster Speed"],
  //   mostPopular: false, 
  // }
]

// const tiers = [
//   {
//   name: 'Free',
//   id: 'free',
//   href: 'signin',
//   price: { monthly: '$0' },
//   description: 'For people who want to try out Flush.',
//   features: ['10 image generations', 'API & SDK access', 'Standard Speed'],
//   mostPopular: false,
// },
// {
//   name: 'Starter',
//   id: 'starter',
//   href: 'signin',
//   price: { monthly: '$5' },
//   description: 'For people who want a larger amount of images to generate. Buys 500 credits, which includes up to:',
//   features: ['500 image generations', 'LLM Prompt Enhancement', 'API & SDK access', 'Standard Speed'],
//   mostPopular: false,
// },
// {
//   name: 'Premium',
//   id: 'premium',
//   href: 'signin',
//   price: { monthly: '$30' },
//   description: 'For creators and developers who need higher volumes. Buys 3000 credits, which includes up to:',
//   features: ["Dalle-3 Image Generation", "3000 image generations", 'LLM Prompt Enhancement',  "API & SDK access", "Faster Speed"],
//   mostPopular: true,
// },
// {
//   name: 'Max',
//   id: 'max',
//   href: 'signin',
//   price: { monthly: '$60' },
//   description: 'For creators and developers who need huge volumes. Includes:',
//   features: ["Dalle-3 Image Generation", "Unlimited image generations", 'LLM Prompt Enhancement',  "API & SDK access", "Faster Speed"],
//   mostPopular: false,
// },
// ]

// const tiers = [
//     {
//     name: 'Free',
//     id: 'free',
//     href: 'signin',
//     price: { monthly: '$0' },
//     description: 'For people who want to try out Flush.',
//     features: ['10 image generations', '2 upscales', 'API & SDK access', 'Standard Speed'],
//     mostPopular: false,
//   },
//   {
//     name: 'Starter',
//     id: 'starter-new',
//     href: 'signin',
//     price: { monthly: '$8' },
//     description: 'For people who want a larger amount of images to generate. Buys 500 credits, which includes up to:',
//     features: ['400 image generations', '80 upscales', 'LLM Prompt Enhancement', 'API & SDK access', 'Standard Speed'],
//     mostPopular: false,
//   },
//   {
//     name: 'Basic',
//     id: 'basic-new',
//     href: 'signin',
//     price: { monthly: '$15' },
//     description: 'For hobbyists, who want to try out image generation. Buys 1000 credits, which includes up to:',
//     features: ["1000 image generations",  "200 upscales", 'LLM Prompt Enhancement', "API & SDK access", "Faster Speed"],
//     mostPopular: false,
//   },
//   {
//     name: 'Premium',
//     id: 'premium',
//     href: 'signin',
//     price: { monthly: '$30' },
//     description: 'For creators and developers who need higher volumes. Buys 3000 credits, which includes up to:',
//     features: ["Dalle-3 Image Generation", "3000 image generations", "600 upscales", 'LLM Prompt Enhancement',  "API & SDK access", "Faster Speed"],
//     mostPopular: true,
//   },
// ]

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const primaryFeatures = [
  {
    name: 'Interactive Playground.',
    description: 'Rapidly run & experiment with any of your hosted stable diffusion models.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Seamless Versatility.',
    description: 'Import models from Civitai or safetensors files in a matter of seconds.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Model Finetuning.',
    description: 'Get a personalized AI model with DreamBooth. All you need is 4 pictures.',
    icon: ArrowPathIcon,
  },
]

function StyledFeature({ feature }) {
  // Split the feature text at '1000' and '3000'
  const parts = feature.split(/(1000|3000)/);

  return (
    <span>
      {parts.map((part, index) => {
        // Apply bold and purple styling to '1000' and '3000'
        if (part === '1000' || part === '3000') {
          return (
            <span key={index} className="font-bold text-indigo-600">
              {part}
            </span>
          );
        }
        // Render the rest of the text normally
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

const modelTypes = [
  {
    name: 'Language Models.',
    description: 'Access GPT-4, GPT-3.5-Turbo, and Claude for language tasks.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Image Models.',
    description: 'Stable Diffusion XL, Realistic Vision, Anything, DALLE-3, and more.',
    icon: PhotoIcon,
  },
]

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  // { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

function VideoTabs() {
  // Initial tabs array
  const initialTabs = [
    { name: 'Text-to-Video', href: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ac7dea45-431a-4b7f-b73f-50f00c9d5479/transcode=true,width=450/AD_Seed.value_00005.mp4", current: true },
    { name: 'Image-to-Video', href: "https://flush-user-images.s3.us-east-2.amazonaws.com/warpvideo_demo_video.mp4", current: false },
    { name: 'Video-to-Video', href: "https://flush-user-images.s3.amazonaws.com/warpvideo/58ae31b2a688e038ada980a2edcf8848eb04bb947aa7ffe9e65f2c398d0de409/video_31.mp4", current: false },
    { name: 'Morph', href: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/80cc91a7-ad53-4560-8412-3e2d64e9b650/transcode=true,width=450/AD_00001.mp4", current: false },
    { name: 'Face Swap', href: "https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video.webm", current: false },
  ];

  // State to keep track of the current active tab
  const [tabs, setTabs] = useState(initialTabs);

  // Find the current active tab's href
  const currentTab = tabs.find(tab => tab.current)?.href;

  // Function to update the active tab
  function handleTabClick(href) {
    const updatedTabs = tabs.map(tab => ({
      ...tab,
      current: tab.href === href,
    }));
    setTabs(updatedTabs);
  }

  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="bg-black w-1/2 border border-gray-900 rounded-lg">
          <div className="sm:block">
            <nav className="isolate flex divide-gray-200 rounded-lg shadow bg-black" aria-label="Tabs">
              {tabs.map((tab, tabIdx) => (
                <a
                  key={tab.name}
                  onClick={() => handleTabClick(tab.href)}
                  className={`${tab.current ? 'text-white' : 'text-gray-500 hover:text-gray-500'} 
                              ${tabIdx === 0 ? 'rounded-l-lg' : ''} 
                              ${tabIdx === tabs.length - 1 ? 'rounded-r-lg' : ''}
                              cursor-pointer group relative min-w-0 flex-1 overflow-hidden bg-black py-4 px-4 text-center text-sm font-medium hover:bg-gray-900 focus:z-10`}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  <span>{tab.name}</span>
                  <span
                    aria-hidden="true"
                    className={`${tab.current ? 'bg-indigo-500' : 'bg-transparent'} absolute inset-x-0 bottom-0 h-[1px]`}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black w-2/5 mt-10 mx-auto flex justify-center items-center">
        <video key={currentTab} autoPlay loop muted className="w-full rounded-lg" title="AI Image Morph">
          <source src={currentTab} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [frequency, setFrequency] = useState(frequencies[0])

  const handleClick = () => {
    // console.log('Button was clicked');
    // Place your click handling logic here.
  };

  const code = `# Instantiate Our Models
llm = OpenAI(model_name="gpt-4")
diffusion = StableDiffusionXL()
upscaler = RealESRGAN(scale=4)

# Construct Prompt Template
prompt = "10 words about {subject}, separated by commas:"
prompt_template = PromptTemplate(prompt)

# Build Workflow
chain = Chain(
    llm_output = (llm, prompt_template),
    diffusion_output = (diffusion, llm_output),
    _ = (upscaler, "{diffusion_output[0]}")
)

# Run Everything End-to-End
chain.run(subject="urban photography")
`;

  return (
    <div className="w-full overflow-y-auto bg-[#1C1C1C] min-h-screen absolute top-0 left-0">
      {/* Header */}
      <header className="absolute top-0 left-0 inset-x-0 top-3 z-50">
        <nav className="flex items-center justify-between p-3 lg:px-24" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className=" p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src="/warpvideosquare.png"
                alt="AI Art Studio"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-md font-semibold leading-6 text-gray-300">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="signin" className="text-md font-semibold leading-6 text-gray-300">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1C1C1C] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="/finalflushlogo.png"
                  alt="AI Art Studio"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="signin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
          </div>
          <div className="py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-8xl">
                  Magically Make Videos with AI
                </h1>
                <p className="mt-12 text-xl leading-8 text-gray-400">
                Warpvideo is the all-in-one AI video creation platform that streamlines content production from ideation to production.
                </p>
                <div className="mt-12 flex items-center justify-center">
                  <a
                    href="signin"
                    className="rounded-md bg-indigo-600 px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get Started
                  </a>
                  <a href="https://docs.flushai.cloud/introduction" className="text-lg px-10 py-5 font-semibold leading-6 text-gray-300">
                    Join Discord <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <VideoTabs />

        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-5xl font-bold tracking-tight text-gray-300 sm:text-5xl">
              Magically Make Videos with AI
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Get started today for free.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/signin"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="https://docs.flushai.cloud/introduction" className="text-md font-semibold leading-6 text-gray-300">
                API Docs <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32">
          <div className="flex justify-center">
            <p className="text-gray-500">© WarpVideo AI</p>
          </div>
          <div className="flex justify-center mt-3">
              <a href="terms">
                  <p className="text-gray-500 hover:text-gray-400">Terms of Service</p>
              </a>
          </div>
        </footer>
      </div>

    </div>
  )
}
