"use client";
import Button from "@/components/Button";
import ImageNext from "@/components/Image";
import Text from "@/components/Text";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "About", href: "#" },
  { name: "Help Center & Community", href: "#" },
];

const card = [
  {
    label: "1. Click Capture",
    desc: "Once you install the Chrome extension, fire it up, and click “Capture”.",
  },
  {
    label: "2. Perform Your Actions",
    desc: "Once capturing, Wizardshot carefully monitors what you do to understand how to document it.",
  },
  {
    label: "3. ✅ Done. Article Written",
    desc: "Wizardshot carefully crafts the perfect article based off your actions recorded. Just click “Done” and we’ll write up the article in a second.",
  },
];

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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
                    className="h-auto sm:w-auto w-full"
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
                className="text-lg leading-8 text-gray-600 font-bold underline underline-offset-4"
              />
              <Text
                label="INCLUDING A KB INTEGRATION"
                className="text-lg leading-8 text-gray-600"
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
    </div>
  );
}
