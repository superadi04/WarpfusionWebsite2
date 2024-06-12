import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const supabase = createClient('https://zylqiknjgpjzjhylylnw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bHFpa25qZ3BqempoeWx5bG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MTEwMzMsImV4cCI6MjAyMTE4NzAzM30.ua5KcEvaU-2lkp_kHx1rOM4MFekUAZ7Ozd-fTrnMs7g')


const frequencies = [
  { value: 'weekly', label: 'Weekly', priceSuffix: '/week' },
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
]

let map_vals = {
  "free-nothing": ["free"],
  "starter-warpvideo": ["starter-warpvideo-weekly", "starter-warpvideo-monthly"],
  "premium-warpvideo": ["premium-warpvideo-weekly", "premium-warpvideo-monthly"],
  "pro-warpvideo": ["pro-warpvideo-weekly", "pro-warpvideo-monthly"],
}

const tiers = [
  {
    name: 'Free Trial',
    id: 'free-nothing',
    href: '#',
    price: { weekly: '$0', monthly: '$0' },
    description: 'Provides 200 free credits for users to try warpvideo, includes:',
    features: {
      "weekly": ['200 free credits', 'Up to 1 video-to-video generations', 'Limited Styles', 'Max 2 seconds input video', '1 Morph Generation', '1 Motion Brush Generation', '1 Text to Video Generation', 'Watermarked videos'],
      "monthly": ['200 free credits', 'Up to 1 video-to-video generations', 'Limited Styles', 'Max 2 seconds input video', '1 Morph Generation', '1 Motion Brush Generation', '1 Text to Video Generation', 'Watermarked videos']
    },
    mostPopular: false,
  },
  {
    name: 'Starter',
    id: 'starter-warpvideo',
    href: '#',
    price: { weekly: '$5.99', monthly: '$9.00' },
    description: 'For users who want to try the capabilities of WarpVideo on smaller videos/number of credits',
    features: {
      "weekly": ['5000 credits per week', 'Email notifications when videos are finished', 'All Styles', 'Faster speeds', 'Video-to-Video', 'No Limit on input video length', 'Text-to-Video', 'Motion Brush', 'Image-to-Video', 'Morph', 'No watermark'],
      "monthly": ['9000 credits per month', 'Email notifications when videos are finished', 'All Styles', 'Faster speeds', 'Video-to-Video', 'No Limit on input video length', 'Text-to-Video', 'Motion Brush', 'Image-to-Video', 'Morph', 'No watermark']
    },
    mostPopular: false,
  },
  {
    name: 'Premium',
    id: 'premium-warpvideo',
    href: '#',
    price: { weekly: '$9.99', monthly: '$25.00' },
    description: 'For more advanced users, wanting the capabilities of WarpVideo with a much larger number of credits.',
    features: {
      "weekly": [
        'All the features in Starter',
        '10000 credits per week',
        'Faster speeds',

      ],
      "monthly": [
        'All the features in Starter',
        '25000 credits per month',
        'Faster speeds',
      ],
    },
    mostPopular: true,
  },
  {
    name: 'Pro',
    id: 'pro-warpvideo',
    href: '#',
    price: { weekly: '$29.99', monthly: '$70' },
    description: 'For creators needing the full editing potential of WarpVideo',
    features: {
      "weekly": [
        '30000 credits per week',
        'All Premium Features',
        'Dedicated support',
        'Billed Monthly'
      ],
      "monthly": [
        '70000 credits per month',
        'All Premium Features',
        'Dedicated support',
        'Billed Monthly'
      ]

    },
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {

  const [apiKey, setApiKey] = useState("");
  const [curPlan, setCurPlan] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const { data: userData, error } = await supabase.auth.getSession();
      if (!userData.session) {
        console.log("here")
        console.log('User is not signed in!', data);
      } else if (error) {
        console.log('Error getting session:', error.message);
      }
      else {
        setApiKey(userData.session.user.id);
      }
      const { data: userData2 } = await supabase.auth.getUser();
      const { data: userDetails } = await supabase
        .from('user_details')
        .select("*")
        .eq('id', userData.session.user.id ?? '');

      if (userDetails && userDetails[0]) {
        let p = userDetails[0]['plan']
        // const capitalizedStr = p.charAt(0).toUpperCase() + p.slice(1);
        setCurPlan(p);
      }
    };

    checkSession();
    // setApiKey("404d5ad4-cefc-4155-bc89-9ad6f14047dc")
    // setCurPlan("free")
  }, []);

  // const [frequency, setFrequency] = useState(frequencies[0])
  const [frequency, setFrequency] = useState(frequencies[1])
  const [loadingTier, setLoadingTier] = useState(null); // New state for tracking loading
  // const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  // const [curPlan, setCurPlan] = useState("free");
  const navigate = useNavigate();

  const [toltId, setToltId] = useState("");
  useEffect(() => {
    // Assuming window.tolt_referral is already set by the time this component mounts
    const toltReferralId = window.tolt_referral;

    // If you need to check if window.tolt_referral is not undefined
    if (typeof toltReferralId !== 'undefined') {
      setToltId(toltReferralId);
    }
  }, []); // The empty array ensures this effect runs once after the initial render

  const handleSubscribeClick = async (tierId) => {
    setLoadingTier(tierId);
    try {
      if (apiKey == "") {
        setLoadingTier(null);
      }
      else if (tierId == "free-nothing") {
        setLoadingTier(null);
        return;
      }
      else if (tierId == "frame-pack-warpvideo") {
        let data = {
          priceId: "frame-pack-warpvideo",  //tierId,
          "type": "purchase",
          "user_id": apiKey,  //"404d5ad4-cefc-4155-bc89-9ad6f14047dc"
        }
        if (window.tolt_referral) {
          data["tolt_id"] = window.tolt_referral
        }
        const response = await axios.post(
          "https://ypaqg548s7.execute-api.us-east-2.amazonaws.com/testing/stripe",
          data
        );
        // If the response has a URL, redirect to it
        if (response.data.url) {
          window.location.href = response.data.url;
        } else {
          // Handle the case where the URL is not present
          console.error('No URL returned from the server');
        }
        setLoadingTier(null);
      }
      else {
        let converter = {
          "starter-warpvideo": "starter-warpvideo-monthly",
          "premium-warpvideo": "premium-warpvideo-monthly",
          "pro-warpvideo": "pro-warpvideo-monthly"
        }
        let tierVal = tierId;
        if (frequency.value == "monthly") {
          tierVal = converter[tierVal];
        }
        else{
          tierVal = tierVal + "-weekly"
        }
        let data = {
          priceId: tierVal,  //tierId,
          "type": "purchase",
          "user_id": apiKey,  //"404d5ad4-cefc-4155-bc89-9ad6f14047dc"
        }
        if (window.tolt_referral) {
          data["tolt_id"] = window.tolt_referral
        }
        const response = await axios.post(
          "https://ypaqg548s7.execute-api.us-east-2.amazonaws.com/testing/stripe",
          data
        );
        // If the response has a URL, redirect to it
        if (response.data.url) {
          window.location.href = response.data.url;
        } else {
          // Handle the case where the URL is not present
          console.error('No URL returned from the server');
        }
        setLoadingTier(null);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      // Handle error, possibly show a message to the user
    }
  };

  const handleCancelSubscription = async (tierId) => {
    setLoadingTier(tierId);
    try {
      if (apiKey == "") {
        setLoadingTier(null);
      }
      else if (tierId == "free-nothing") {
        setLoadingTier(null);
        return;
      }
      else {
        let data = {
          "type": "cancel",
          "user_id": apiKey,  //"404d5ad4-cefc-4155-bc89-9ad6f14047dc"
        }
        const response = await axios.post(
          "https://ypaqg548s7.execute-api.us-east-2.amazonaws.com/testing/stripe",
          data
        );
        window.location.reload();
        // setLoadingTier(null);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      // Handle error, possibly show a message to the user
    }
  };

  return (
    <div className="overflow-y-auto pb-5" style={{ maxHeight: 'calc(100vh - 0px)' }}>
      <div className="mx-auto max-w-7xl">
        <h2 className="mt-10 text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">
          Plans and Pricing
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-400">
        Whether your content creation needs are large or small, we're here to help you scale.
        </p>
        <div className="flex justify-center mt-4">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        {curPlan !== 'free' && <div className="text-center text-gray-500 text-sm mb-6">
          If you want a refund, please contact us at <a href="mailto:team@warpvideo.ai" className="text-indigo-600 hover:underline">team@warpvideo.ai</a>
        </div>}
        {<div className="text-center text-gray-500 text-sm mb-5 mt-5">
          100% Money Back Guarantee
        </div>}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/[.07] ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.value === 'weekly' ? '/week' : '/month'}</span>
              </p>

              {map_vals[tier.id].includes(curPlan) ? (
                tier.id === "free-nothing" ?
                  <div className="text tracking-tight text-white">
                    Current Plan
                  </div>
                  :
                  (curPlan.includes("monthly") && frequency.value === "monthly") || (!curPlan.includes("monthly") && frequency.value === "weekly") ? 
                  <button
                    onClick={() => handleCancelSubscription(tier.id)}
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-500',
                      'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    )}
                  >
                    {loadingTier === tier.id ? (
                      <CircularProgress size={20} /> // Replace with your actual loading icon component
                    ) : (
                      `Cancel Subscription`
                    )}
                  </button>
                  : 
                  <button
                    onClick={() => handleSubscribeClick(tier.id)}
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-500',
                      'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    )}
                  >
                    {loadingTier === tier.id ? (
                      <CircularProgress size={20} /> // Replace with your actual loading icon component
                    ) : (
                      `Subscribe to ${tier.name}`
                    )}
                  </button>
              ) : (
                tier.id !== "free-nothing" && (
                  <button
                    onClick={() => handleSubscribeClick(tier.id)}
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-500',
                      'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    )}
                  >
                    {loadingTier === tier.id ? (
                      <CircularProgress size={20} /> // Replace with your actual loading icon component
                    ) : (
                      `Subscribe to ${tier.name}`
                    )}
                  </button>
                )
              )}
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features[frequency.value].map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-left">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='ring-1 ring-[#3b3b3b] rounded-3xl p-8 mt-10 mb-20'>
          <div className="text-center text-gray-300 text-3xl  font-bold">
            Credit Pack
          </div>
          <div className="text-center text-gray-400 text-md mt-5">
            Not sure if you want to commit? Keep exploring with a credit pack!
          </div>
          <div className="text-center text-gray-400 text-md mt-5">
            Each credit is <span className="text-indigo-600">$0.01</span>.
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              onClick={() => handleSubscribeClick("frame-pack-warpvideo")}
              className={classNames(
                'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500',
                'block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              )}
            >
              {loadingTier === "frame-pack-warpvideo" ? (
                <CircularProgress size={20} /> // Replace with your actual loading icon component
              ) : (
                `Buy Credits`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
