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
  { name: 'Docs', href: 'https://docs.flushai.cloud/introduction' },
  // { name: 'Blog', href: '#' },
  { name: 'Discord', href: 'https://discord.com/invite/fzdHj9DeuC' },
  {name: 'Instagram', href: 'https://www.instagram.com/warpvideo.ai/'}, 
  {name: 'Twitter', href: 'https://twitter.com/sakethkotamraju'}, 
  {name: 'Tiktok', href: 'https://www.tiktok.com/@warpvideo.ai'}, 
  {name: 'Github', href: "https://github.com/saketh12/Auto1111SDK"}, 
  { name: 'Email', href: 'mailto:team@flushai.cloud' }
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
        <nav className="flex items-center justify-between p-6 lg:px-24" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className=" p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src="/finalflushlogo.png"
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
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                transform: 'scaleX(-1)',
              }}
            />
          </div>
          <div className="py-20 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-6xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-8xl">
                  Your AI Art Studio.
                </h1>
                <p className="mt-12 text-xl leading-8 text-gray-500">
                  Your end-to-end studio for AI art, all in the cloud.
                </p>
                <div className="mt-12 flex items-center justify-center">
                  <a
                    href="signin"
                    className="rounded-md bg-indigo-600 px-6 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="https://docs.flushai.cloud/introduction" className="text-lg px-10 py-5 font-semibold leading-6 text-gray-300">
                    API Docs <span aria-hidden="true">→</span>
                  </a>
                </div>
                <div className="mt-12 flex items-center justify-center gap-x-4">
                  <a href="https://www.producthunt.com/posts/flush-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-flush&#0045;ai" target="_blank" className="mr-4"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=435490&theme=neutral" /></a>
                  <a href="https://www.producthunt.com/posts/flush-ai?utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_souce=badge-flush&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=435490&theme=neutral&period=weekly&topic_id=44"  /></a>
                  <a href="https://theresanaiforthat.com/ai/flushai/?ref=embed" target="_blank" className="mr-4"><img width="300" src="https://media.theresanaiforthat.com/featured3.png"></img></a>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="dashboard.png"
                    alt="AI Art Studio"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* <div className="mx-20">
          <div className="relative isolate overflow-hidden px-6 py-20 sm:rounded-3xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
              <p className="text-base font-semibold leading-7 text-indigo-600 mb-3">Your Unified Solution</p>
                <p className="text-xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                  Manage and Deploy
                  <br />
                  AI Image Models Easily
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Quit worrying about GPU wrangling. <br/> Start creating now.
                </p>
              </div>
              <img
                src="my_models.png"
                alt="AI Art Studio"
                className="relative bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-1 -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width={2432}
                height={1442}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-gray-300">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >

            </div>
          </div>
        </div> */}

        <div className="mx-20">
          <div className="relative isolate overflow-hidden px-6 py-20 sm:rounded-3xl">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-[-8px] gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
              <p className="text-base font-semibold leading-7 text-indigo-600 mb-3">Ultimate Customizability</p>
                <p className="text-xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                  Create Multimodal Workflows in Minutes
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Access and chain AI image models with other generative AI models, all in one place.
                </p>
              </div>
              <div className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none">
              <SyntaxHighlighter 
              language="python" style={darcula} className="text-left">
                {code}
              </SyntaxHighlighter>
              </div>
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {modelTypes.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-gray-300">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >
              
            </div>
          </div>
        </div>


        {/* Pricing section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:pt-20">
          <p className="text-base font-semibold leading-7 text-indigo-600">Pricing</p>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">
            Pricing plans for everyone
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-500">
          Choose plan as per your needs, cancel anytime.
        </p>
        <div className="mt-10 mx-40"> {/* Scrolling enabled here */}
          <div className="mx-auto max-w-md grid grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'ring-2 ring-indigo-600 ' : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8'
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-indigo-600' : 'text-gray-300',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-500 text-left">{<StyledFeature feature={tier.description} />}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-300">{tier.price[frequency.value]}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-500">{frequency.priceSuffix}</span>
                </p>

                {tier.name !== 'Free' && tier.name !== 'Professional' ? (
                  <div className="flex justify-center mt-8">
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={classNames(
                        tier.mostPopular
                          ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                          : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                        'block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      )}
                    >
                        {`Subscribe to ${tier.name}`}
                    </a>
                  </div>
                ) : null}


                <ul role="list" className="mt-8 text-left space-y-3 text-sm leading-6 text-gray-500">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
      </div>

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
              Your AI Art Studio.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
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
          <div
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <footer className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32">
          <div className="flex justify-center">
            <p className="text-gray-500">© Flush AI</p>
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
