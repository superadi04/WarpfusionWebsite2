/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

const supabase = createClient('https://zylqiknjgpjzjhylylnw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bHFpa25qZ3BqempoeWx5bG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MTEwMzMsImV4cCI6MjAyMTE4NzAzM30.ua5KcEvaU-2lkp_kHx1rOM4MFekUAZ7Ozd-fTrnMs7g')

export default function AppSumo({}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [warningModal, setWarningModalOpen] = useState(false);
  const [checkModal, setCheckModalOpen] = useState(false);
  const [message, setMessage] = useState("");

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

  const isValidEmail = (email) => {
    // Regular expression for validating email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  async function handleEmailSignUp(event) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setMessage("Make sure you are using a proper email.");
      setWarningModalOpen(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Make sure the passwords are identical.");
      setWarningModalOpen(true);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "https://warpvideo.ai/create",
      },
    })

    console.log(error)

    if (error == null) {
      navigate('/create')
    }
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
            <div className="pointer-events-auto max-w-lg overflow-hidden rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
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

  function CheckModal({ show, setShow, message }) {
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
            <div className="pointer-events-auto max-w-lg overflow-hidden rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
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

  return (
    <>
      <div className="top-0 left-0 fixed w-full flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-no-repeat bg-center bg-[url('/login_background.jpeg')]">
      <WarningModal show={warningModal} setShow={setWarningModalOpen} message={message} />
      <CheckModal show={checkModal} setShow={setCheckModalOpen} message={"Check your email to continue to WarpVideo."} />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] mx-10">
          <div className="bg-[#171717] pb-8 shadow rounded-lg px-12">
          <form className="space-y-6" action="#" method="POST">
            <div className='pt-8'>
              <img
                className="mx-auto h-16 w-auto"
                src="warpvideosquare.png"
                alt="Your Company"
              />
              <div className="relative pb-7 mx-20">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-600" />
                </div>
              </div>
              <img
                className="mx-auto h-10 w-auto"
                src="APPSUMOIMAGE.png"
                alt="Your Company"
              />

              <label htmlFor="email" className="block text-sm pt-5 text-left font-medium leading-6 text-white mt-5">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Confirm Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  AppSumo Code
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={handleEmailSignUp}
              >
                Sign Up
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}
