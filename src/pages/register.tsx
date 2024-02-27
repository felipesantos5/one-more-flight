import { useState } from "react";
import bgRegister from "../assets/registerbackground.svg";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Eye, EyeOff } from "lucide-react";
import googleIcon from "../assets/googleIcon.svg";
import appleIcon from "../assets/appleIcon.svg";
import { Link } from "react-router-dom";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="m-auto max-w-7xl">
      <div className="flex">
        <img src={bgRegister} alt="" className="w-1/2" />
        <section className="bg-loginCard px-32 flex flex-col justify-center">
          <div className="flex flex-col mb-12">
            <p className="text-subtitle">Welcome to One more flight</p>
            <h2 className="font-bold text-3xl text-title">Create account</h2>
          </div>
          <form className="flex flex-col gap-6">
            <section className="flex gap-7">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="">First name</label>
                  <input type="text" className="border border-gray3 rounded-md p-3 h-12 focus:outline-none text-sm" placeholder="example@email.com" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">E-mail</label>
                  <input type="email" className="border border-gray3 rounded-md p-3 h-12 focus:outline-none text-sm" placeholder="example@email.com" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Password</label>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`flex-1 border border-gray3 rounded-md p-3 h-12 focus:outline-none placeholder:text-sm  ${showPassword && "text-sm"}`}
                      placeholder="Password"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                      {showPassword ? <EyeOff size="20px" color="#A4A4A4" /> : <Eye size="20px" color="#A4A4A4" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Last Name</label>
                  <input type="text" className="border border-gray3 rounded-md p-3 h-12 focus:outline-none text-sm" placeholder="example@email.com" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Date of birth (MM/DD/YY)</label>
                  <input type="date" className="border border-gray3 rounded-md p-3 h-12 focus:outline-none text-sm" placeholder="example@email.com" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Password</label>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`flex-1 border border-gray3 rounded-md p-3 h-12 focus:outline-none placeholder:text-sm  ${showPassword && "text-sm"}`}
                      placeholder="Password"
                      required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                      {showPassword ? <EyeOff size="20px" color="#A4A4A4" /> : <Eye size="20px" color="#A4A4A4" />}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex flex-col gap-4 text-sm text-gray1 font-medium">
              <div className="flex items-center gap-2">
                <Checkbox.Root className="shadow-blackA4  flex w-5 h-5 appearance-none items-center justify-center rounded-sm border border-gray3">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label>Remember me.</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox.Root className="shadow-blackA4  flex w-5 h-5 appearance-none items-center justify-center rounded-sm outline-none border border-gray3">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label>
                  I agree to all the <span className="text-blue-500 cursor-pointer">Terms</span> and <span className="text-blue-500 cursor-pointer">Privacy policy</span>
                </label>
              </div>
            </div>

            <button className="bg-orange-500 text-white font-bold py-3 rounded-md focus:bg-orange-500/50">Login now</button>

            <div className="flex flex-col gap-2 mb-6">
              <button className="border border-gray3 bg-lightgray py-3 text-gray2 font-bold rounded-md flex  justify-center gap-4">
                <img src={googleIcon} alt="" /> Continue with Google
              </button>
              <button className="border border-gray3 bg-lightestgray py-3 text-gray2 font-bold rounded-md flex justify-center items-center gap-4">
                <img src={appleIcon} alt="" /> Continue with Apple
              </button>
            </div>
          </form>
          <p className="text-center text-gray1">
            Already have an account?{" "}
            <Link className="text-blue-500 font-semibold" to={"/login"}>
              Log In
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};
