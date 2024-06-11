import { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { createClient } from '@supabase/supabase-js'
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const supabase = createClient('https://rrvjkmdsixuiuqktlxcg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydmprbWRzaXh1aXVxa3RseGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NDMxNjcsImV4cCI6MjAwNzExOTE2N30.Vo6_mO9gTwO_XqP9EDFh7LD5qHDGgIa50T8qsjI3wBk')

const faqs = [
  {
    question: "How do I become an affiliate?",
    answer:
      "Go sign up for the affiliate program at https://warpvideo.tolt.io/login. You must create a unique link that is your unique affiliate link. Then, join our discord server at https://discord.com/invite/QHwrUGDk3Q and you can ask any questions about the program/how to grow your affiliate marketing!",
  },
  {
    question: "How does the affiliate program work?",
    answer:
      "All Affiliates receive a lifetime commission of 20% on the revenue they generate from their link. This means that, if anyone clicks on your Affiliate link and subscribes for Warpvideo (within 60 days of subscribing), you will receive 20% of all the money that they pay forever. Some of our affiliates have received hundreds to thousands of dollars doing this!",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription by clicking the Cancel Subscription button on the Pricing Page. It will appear in the same place as the original Subscribe button. We offer a 100% money back guarantee, no questions asked. If you want a refund, please email team@warpvideo.ai and you will receive a refund!",
  },
  {
    question: "What is motion brush?",
    answer:
      "Motion brush is a specific version of Image to Video that will run Image to Video over the specific part of the Image that highlight with the brush. If you want only an arm or leg to move, simply highlight it with the Motion Brush, type in a prompt, and watch the magic happen!",
  },
  {
    question: "What if I want to try out WarpVideo without buying a full plan?",
    answer:
      "We currently offer all of our services for free in the free plan! You can generate with Video to Video (up to 2 seconds), Image to Video, Motion Brush, and Morph all in the free plan.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ({ apiKey, curPlan }) {

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-5xl divide-y divide-white/10">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-xl font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-4 pr-12 text-left">
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
