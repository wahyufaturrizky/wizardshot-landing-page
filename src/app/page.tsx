"use client";
import Button from "@/components/Button";
import ImageNext from "@/components/Image";
import Text from "@/components/Text";
import { card, free, navigation, question } from "@/utils/mock";
import { CloseOutlined, MenuOutlined, UpOutlined } from "@ant-design/icons";
import { Dialog, Disclosure } from "@headlessui/react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <ImageNext
                src="/logo.svg"
                width={112.87}
                priority
                height={20}
                alt="logo-klikyou"
                className="h-[20px] w-auto"
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
              <MenuOutlined />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-end lg:gap-2">
            <Text label="Login" className="text-sm font-light leading-6 text-gray-900 mb-2" />

            <div className="flex flex-col items-center gap-1">
              <Text
                label="100% free, forever 🤑"
                className="text-sm font-light leading-6 text-gray-900"
              />

              <Button
                className="py-2 px-4 rounded-md bg-[#18181C] text-white flex items-center gap-2"
                type="button"
                label="Install Wizardshot"
                icon={
                  <ImageNext
                    src="/chrome.svg"
                    width={19.19}
                    priority
                    height={19.19}
                    alt="logo-klikyou"
                    className="h-auto w-auto"
                  />
                }
              />
            </div>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <ImageNext
                  src="/logo.svg"
                  width={112.87}
                  priority
                  height={20}
                  alt="logo-klikyou"
                  className="h-[20px] w-auto"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <CloseOutlined />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pb-6 sm:pt-6 pt-6 lg:pt-56 lg:pb-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Magic Wand for Instant Documentation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Turn ANY process into a simple step-by step Guide
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                className="py-2 px-4 rounded-md bg-[#18181C] text-white flex items-center gap-2"
                type="button"
                label="Install Wizardshot →"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <ImageNext
              src="/play.png"
              width={596.75}
              priority
              height={596.75}
              alt="logo-klikyou"
              className="h-auto w-full object-cover bg-gradient"
            />
          </div>

          <div className="text-center mt-10">
            <Text
              label="Say Goodbye To Writing Docs, and Hello To Wizardshot Doing it for YOU."
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            />

            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10">
              {card.map((item, index) => (
                <div className="space-y-4" key={item.label}>
                  <ImageNext
                    src={`/img-${index + 1}.png`}
                    width={297}
                    priority
                    height={234}
                    alt="logo-klikyou"
                    className="sm:h-[234px] h-auto sm:w-auto w-full sm:object-contain object-center"
                  />

                  <div>
                    <Text
                      label={item.label}
                      className="font-normal text-left tracking-tight text-gray-900"
                    />
                    <Text
                      label={item.desc}
                      className="text-xs text-left font-light tracking-tight text-gray-900"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Text
                label="+32 MORE FEATURES"
                className="text-lg text-gray-600 font-bold underline underline-offset-4"
              />
              <Text label="INCLUDING A KB INTEGRATION" className="text-lg text-gray-600" />
            </div>
          </div>

          <div className="flex justify-between items-center mt-10 bg-free-gradient">
            {free.map((item) => (
              <div key={item.lead} className="flex items-center gap-1">
                <Text
                  label={item.lead}
                  className="sm:text-2xl text-md text-gray-600 font-medium underline underline-offset-4"
                />
                <div className="flex flex-col">
                  <Text
                    label={item.desc1}
                    className="sm:text-xs text-[6px] text-gray-600 font-light"
                  />
                  <Text
                    label={item.desc2}
                    className="sm:text-xs text-[6px] text-gray-600 font-light"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border border-black border-8 py-4 rounded-md mt-6">
            <div className="text-center">
              <Text label="Create A Detailed Tutorial" className="sm:text-4xl text-2xl font-bold" />
              <Text label="in Less than 3 clicks" className="sm:text-4xl text-2xl font-bold" />
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <Button
                  className="sm:py-6 py-4 sm:text-3xl text-xl sm:px-12 px-4 rounded-md bg-[#18181C] text-white flex items-center gap-2"
                  type="button"
                  label="Install Wizardshot"
                  icon={
                    <ImageNext
                      src="/chrome.svg"
                      width={19.19}
                      priority
                      height={19.19}
                      alt="logo-klikyou"
                      className="h-auto w-auto"
                    />
                  }
                />
              </div>

              <div className="mt-4">
                <Text
                  label="“Has helped us write help docs 100x faster”"
                  className="sm:text-2xl text-base font-medium"
                />
                <Text label="– Dany River, Cartier Informatie" className="text-xl font-light" />
                <Text label="⭐ ⭐ ⭐ ⭐ ⭐" className="sm:text-xl text-xs font-light" />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Text label="common questions" className="sm:text-4xl text-2xl font-bold text-center" />

            <div className="mx-auto w-full rounded-2xl bg-white mt-10">
              {question.map((item) => (
                <Disclosure key={item.title}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-gray-500/10 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                        <span>{item.title}</span>
                        <UpOutlined
                          className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                        {item.desc}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>

            <div className="flex sm:flex-row flex-col justify-between items-center mt-6">
              <Text label="Curious to learn more? " className=" font-bold text-center" />

              <Button
                className="py-2 px-4 rounded-lg bg-[#03132E] text-white"
                type="button"
                label="Visit Help & Community Center"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <footer className="px-10">
        <div className="flex justify-end">
          <Text
            label="100% free, forever 🤑"
            className="text-sm font-light leading-6 text-gray-900"
          />
        </div>
        <div className="p-6 bg-black rounded-lg">
          <div className="flex sm:flex-row flex-col justify-between sm:items-center items-end">
            <div>
              <Text label="Create Tutorials in 3 Clicks." className="font-medium text-white" />

              <Text
                label="With WizardShot, You Click Capture, And We’ll Capture What’s Happening on Your Screen And Turn It Into A Tutorial."
                className="font-thin text-white"
              />
            </div>

            <Text label="Try Wizardshot →" className="font-medium text-white mt-6 sm:mt-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div className="flex flex-col items-start space-y-4">
            <ImageNext
              src="/logo.svg"
              width={245}
              priority
              height={43}
              alt="logo-klikyou"
              className="h-[43px] w-auto"
            />

            <Text
              label="Turn complex process into a simple step-by step Guide"
              className="font-medium"
            />

            <div className="flex flex-col">
              <div className="flex items-center border-black border-4">
                <div className="flex flex-col items-center p-2">
                  <Text label="12" className="font-bold text" />
                  <Text label="YEARS" className="font-bold text" />
                </div>

                <div className="flex flex-col items-center border-l-4 border-black p-2">
                  <Text label="BUILD BY" className="font-bold text" />
                  <ImageNext
                    src="/vektor.svg"
                    width={20}
                    priority
                    height={20}
                    alt="logo-klikyou"
                    className="h-[20px] w-auto"
                  />
                  <Text label="HELPJUICE" className="font-bold text" />
                </div>
              </div>

              <div>
                <Text
                  label="#1 Rated Knowledge Base Software"
                  className="font-bold text-[8px] border border-black border-4 p-2 text-center"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <Text label="Learn more" className="font-medium" />

              <Text label="Wizardshot" className="font-light" />
              <Text label="Community Page" className="font-light" />
              <Text label="Help Center" className="font-light" />
              <Text label="Security Information" className="font-light" />
            </div>

            <div>
              <Text label="Company" className="font-medium" />

              <Text label="About Us" className="font-light" />
              <Text label="Status Page" className="font-light" />
            </div>
          </div>

          <div className="flex flex-col sm:items-end items-start space-y-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <Text label="📞 +1 (833) 387 3877" className="font-light" />
              <Text label="✉️ success@wizardshot.com" className="font-light" />
            </div>

            <div className="flex items-center gap-2">
              <ImageNext
                src="/ic_baseline-tiktok.svg"
                width={38}
                priority
                height={36.29}
                alt="logo-klikyou"
                className="h-[36.29px] w-auto"
              />

              <ImageNext
                src="/ri_instagram-fill.svg"
                width={38}
                priority
                height={36.29}
                alt="logo-klikyou"
                className="h-[36.29px] w-auto"
              />
            </div>

            <div className="flex items-center gap-2">
              <Text label="Sign Up" className="font-medium" />
              <Text label="Log in" className="font-medium" />
            </div>
          </div>
        </div>

        <div className="my-6 space-y-6">
          <div className="sm:hidden text-center">
            <Text label="📞 +1 (833) 387 3877" className="font-light" />
            <Text label="✉️ success@wizardshot.com" className="font-light" />
          </div>
          <Text
            label="© 2024 Wizardshot – All rights reserved."
            className="font-light sm:text-base text-xs text-center text-[#98A2B3]"
          />
        </div>
      </footer>
    </div>
  );
}
