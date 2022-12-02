import Image from 'next/image'

export const Footer = () => {
  return (
    <div className="container shadow-md rounded-t-lg bg-white static mx-auto px-10 ">
      <div className="  w-full flex justify-between py-4 xs:py-3">
        <div className="flex">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex font-semibold justify-center rounded-md p-1  hover:bg-black/50"
            alt="Solomon Anomet O'jay"
            href="https://www.instagram.com/solomonojay/"
          >
            <Image
              src="/instaSmall.png"
              className="rounded self-center"
              alt="Friday for Uganda"
              width="30"
              height="30"
              unoptimized
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="flex font-semibold justify-center rounded-md p-1  hover:bg-black/50"
            alt="Fridays For Future Uganda"
            href="https://twitter.com/Fridays4FutureU"
          >
            <Image
              src="/FridayUganda.png"
              className="rounded-full self-center"
              alt="Friday for Uganda"
              width="30"
              height="30"
              unoptimized
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className=" flex font-semibold justify-center rounded-md p-1  hover:bg-black/50"
            alt="Earth Volunteers"
            href="https://earthvolunteers.org/"
          >
            <Image
              src="/earTh.jpg"
              className="rounded-full self-center"
              alt="Friday for Uganda"
              width="30"
              height="30"
              unoptimized
            />
          </a>
        </div>

        <a
          target="_blank"
          rel="noreferrer"
          className="flex font-semibold justify-center rounded-md py-1"
          href="http://hestamp.me/"
        >
          <div className="flex items-center justify-center p-1  hover:bg-black/50 rounded">
            <h5 className="mr-1">Made by</h5>
            <Image
              className="w-7 mr-1 self-center"
              src="/meLogo.png"
              alt="Friday for Uganda"
              width="30"
              height="30"
              unoptimized
            />
          </div>
        </a>
      </div>
    </div>
  )
}
