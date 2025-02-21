import {
  FormEmailLogo,
  FormPasswordLogo,
  FormUserNameLogo,
} from "../../components/Icons";

const items = [
  { id: 1, label: "Username", logo: <FormUserNameLogo />, type: "text" },
  { id: 2, label: "Email Address", logo: <FormEmailLogo />, type: "email" },
  { id: 3, label: "Password", logo: <FormPasswordLogo />, type: "password" },
  {
    id: 4,
    label: "Confirm Password",
    logo: <FormPasswordLogo />,
    type: "password",
  },
];

const SignUp = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch gap-[20px] md:gap-[40px] lg:gap-[60px] h-auto ">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <img
          className="w-full aspect-[372_/_232] md:aspect-[397_/_530] lg:aspect-[610_/_642] object-cover"
          src="/images/walletconnect/coverImg.png"
          alt=""
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2  flex flex-col items-center  md:items-start justify-center gap-[10px] py-[30px] md:py-0 px-[15px] sm:px-[30px] md:px-0">
        <h2 className="text-h3 lg:text-h2 font-semibold">Create account</h2>
        <div className="text-[18px] lg:text-[22px] max-w-[70%] text-center md:text-left">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </div>
        <div className="!mt-[30px] flex flex-col md:items-start gap-[15px] ">
          {items.map((item) => (
            <div
              key={item.id}
              className="h-[46px] w-[330px] bg-white rounded-[20px] overflow-hidden relative"
            >
              <input
                className="w-full h-full outline-none text-black placeholder:text-black pl-[50px] pr-[20px]"
                placeholder={item.label}
                type={item.type}
              />
              <div className="absolute left-[20px] top-1/2 translate-y-[-50%]">
                {item.logo}
              </div>
            </div>
          ))}
        </div>
        <button
          className="h-[46px] w-[330px] bg-cta rounded-[20px] 
        cursor-pointer relative !mt-[15px] text-center !font-semibold"
        >
          Create account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
