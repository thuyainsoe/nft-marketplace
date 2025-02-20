import { EmailLogo } from "../../../components/Icons";

const SubscribeSection = () => {
  return (
    <div className="w-full main-container py-[40px] lg:py-[80px]">
      <div className="w-full bg-bgsecondary p-[30px] lg:p-[60px] rounded-[20px] flex items-center gap-[30px] lg:gap-[80px]">
        <div className="w-1/2">
          <img
            className="w-full aspect-[425_/_310] object-cover"
            src="/images/subscribe/sub.png"
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-h4 lg:text-h3 font-semibold leading-[100%]">
            Join our weekly digest
          </h3>
          <p className="text-body block !mt-[10px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="!mt-[20px] lg:!mt-[40px] block w-full relative">
            <input
              type="text"
              className="w-full h-[45px] lg:h-[60px] bg-white outline-none rounded-[20px] px-[20px] text-black"
              placeholder="Enter your email here"
            />
            <button className="rounded-[20px] !mt-[10px] lg:!mt-0 relative lg:absolute h-[45px] lg:h-[60px] top-0 right-0 bg-cta w-full lg:w-[211px] flex items-center justify-center gap-[5px]">
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
