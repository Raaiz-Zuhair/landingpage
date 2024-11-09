import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="flex justify-center w-full bg-slate-50">
        <div className="w-10/12 my-20">
          <div className=" flex items-center lg:flex-row lg:justify-center flex-col lg:gap-0 gap-14">
            <div className="lg:w-1/2 w-full text-center lg:text-start">
              <h1 className="text-6xl font-semibold text-myblue">
                Next generation digital banking
              </h1>
              <p className="text-lg text-gray-500 my-8">
                Take your fiancial life online. Your Easybank account <br />
                will be a one-stop-shop for spending, saving, <br />
                budgeting, investing, and much more.
              </p>
              <Link href="/">
                <button className="py-3 px-8 bg-green-400 hover:ring hover:ring-mygreen hover:text-myblue rounded-full text-white  text-sm font-semibold">
                  Request Invite
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-[url('/heroimg2.jpg')] bg-cover bg-center w-full h-[600px] rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose easybank */}
      <section className="bg-slate-100 flex justify-center w-full">
        <div className="w-10/12 lg:my-20 my-16">
          <div className="lg:text-start text-center px-6 lg:px-0">
            <h1 className="text-4xl text-myblue">Why choose Easybank?</h1>
            <div className="text-gray-400 lg:my-8 my-4">
              <p>
                We leverage Open Banking to turn your bank account into your
                financial hub.
              </p>
              <p>Control your finances like never before.</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:mt-16 mt-4 space-x-6">
            <div className="flex flex-col lg:items-start items-center lg:mx-0 mx-6">
              <div className="bg-[url('/icon-api.svg')] bg-cover bg-center w-[50px] h-[50px] lg:mb-5 mb-3  "></div>
              <h1 className="text-2xl text-myblue lg:mb-4 mb-3">Online Banking</h1>
              <p className="text-gray-400 lg:text-start text-center lg:mb-0 mb-6">
                Our modern web and mobile applications allow you to keep track
                of your fitness wherever you aree in the world.
              </p>
            </div>
            <div className="flex flex-col lg:items-start items-center lg:mx-0 mx-6">
              <div className="bg-[url('/icon-api.svg')] bg-cover bg-center w-[50px] h-[50px] lg:mb-5 mb-3"></div>
              <h1 className="text-2xl text-myblue lg:mb-4 mb-3">Simple Budgeting</h1>
              <p className="text-gray-400 lg:text-start text-center lg:mb-0 mb-6">
                See exactly where your money goes each month. Receive
                notifications when you're close hitting your limits
              </p>
            </div>
            <div className="flex flex-col lg:items-start items-center lg:mx-0 mx-6">
              <div className="bg-[url('/icon-api.svg')] bg-cover bg-center w-[50px] h-[50px] lg:mb-5 mb-3  "></div>
              <h1 className="text-2xl text-myblue lg:mb-4 mb-3">Fast Onboarding</h1>
              <p className="text-gray-400 lg:text-start text-center lg:mb-0 mb-6">
                We don't do branches. Open your account in minutes online and
                start talking control of your finances right away.
              </p>
            </div>
            <div className="flex flex-col lg:items-start items-center lg:mx-0 mx-6">
              <div className="bg-[url('/icon-api.svg')] bg-cover bg-center w-[50px] h-[50px] lg:mb-5 mb-3  "></div>
              <h1 className="text-2xl text-myblue lg:mb-4 mb-3">Open API</h1>
              <p className="text-gray-400 lg:text-start text-center lg:mb-0 mb-6">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Article */}
      <section className="bg-slate-50 flex justify-center w-full">
        <div className="w-10/12 lg:my-20 my-12">
          <h1 className="text-4xl text-myblue lg:text-start text-center">Latest Article</h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:mt-12 mt-6 lg:gap-7 gap-10">
            <div className="rounded-lg bg-white lg:mx-0 mx-5 group">
              <div className="bg-[url('/image-currency.jpg')] rounded-t-md bg-cover bg-center w-full h-[220px]"></div>
              <div className="lg:p-5 p-7">
                <small className="text-gray-400">By Claris Robinson</small>
                <Link href="/">
                <h2 className="text-xl text-myblue font-medium my-2 group-hover:text-green-500">
                  Receive money in any currency with no fees
                </h2>
                </Link>
                <p className="text-myblue">
                  The World is getting smaller and we're becoming more mobile.
                  So why should you be forced to only receive money in a
                  single...
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white lg:mx-0 mx-5 group">
              <div className="bg-[url('/image-restaurant.jpg')] rounded-t-md bg-cover bg-center w-full h-[220px]"></div>
              <div className="lg:p-5 p-7">
                <small className="text-gray-400">By Wilson Hutton</small>
                <Link href="/">
                <h2 className="text-xl text-myblue font-medium my-2 group-hover:text-green-500">
                  Treat yourself without worrying about money
                </h2>
                </Link>
                <p className="text-myblue">
                  Our simple budgeting feature allows you to seperate our your
                  spending and set realistic limits each momnth. That means
                  you...
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white lg:mx-0 mx-5 group">
              <div className="bg-[url('/image-plane.jpg')] rounded-t-md bg-cover bg-center w-full h-[220px]"></div>
              <div className="lg:p-5 p-7">
                <small className="text-gray-400">By Wilson Hutton</small>
                <Link href="/">
                <h2 className="text-xl text-myblue font-medium my-2 group-hover:text-green-500">
                  Take your Easybank card wherever you go
                </h2>
                </Link>
                <p className="text-myblue">
                  We want you to enjoy your travels. This is why we don't charge
                  any fees on purches while you're abroad. We'll even show
                  you...
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white lg:mx-0 mx-5 group">
              <div className="bg-[url('/image-confetti.jpg')] rounded-t-md bg-cover bg-center w-full h-[220px]"></div>
              <div className="lg:p-5 p-7">
                <small className="text-gray-400">By Claris Robinson</small>
                <Link href="/">
                <h2 className="text-xl text-myblue font-medium my-2 group-hover:text-green-500">
                  Our invite -only Beta accounts are now live!
                </h2>
                </Link>
                <p className="text-myblue">
                  After a lot of hard work by the whole team, we're excited to
                  launch our closed beta. It's easy to request an invite through
                  the site...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
