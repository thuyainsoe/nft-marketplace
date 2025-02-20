import { EmailLogo } from "../../../components/Icons";

const SubscribeSection = () => {
  return (
    <div className="w-full main-container py-[80px]">
      <div className="w-full bg-bgsecondary p-[60px] rounded-[20px] flex items-center gap-[80px]">
        <div className="w-1/2">
          <img
            className="w-full aspect-[425_/_310] object-cover"
            src="/images/subscribe/sub.png"
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-h3 font-semibold">Join our weekly digest</h3>
          <p className="text-body block mt-[10px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="!mt-[40px] h-[60px] block w-full relative">
            <input
              type="text"
              className="w-full h-full bg-white outline-none rounded-[20px] px-[20px] text-black"
              placeholder="Enter your email here"
            />
            <button className="rounded-[20px] absolute h-full top-0 right-0 bg-cta w-[211px] flex items-center justify-center gap-[5px]">
              <EmailLogo />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
