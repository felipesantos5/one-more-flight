import { useState } from "react";
import bgLogin from "../assets/loginBackground.svg";
import googleIcon from "../assets/googleIcon.svg";
import appleIcon from "../assets/appleIcon.svg";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="m-auto max-w-7xl">
      <div className="flex">
        <img src={bgLogin} alt="" className="w-1/2" />
        <section className="bg-loginCard px-32 flex flex-col justify-center">
          <div className="flex flex-col mb-12">
            <p className="text-subtitle">Welcome back</p>
            <h2 className="font-bold text-3xl text-title">Login to your account</h2>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="">E-mail</label>
              <input type="email" className="border border-gray3 rounded-md p-3 h-12 focus:outline-none text-sm bg-loginCard" placeholder="example@email.com" required />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Password</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`flex-1 border border-gray3 rounded-md p-3 h-12 focus:outline-none placeholder:text-sm bg-loginCard ${showPassword && "text-sm"}`}
                  placeholder="Password"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                  {showPassword ? <EyeOff size="20px" color="#A4A4A4" /> : <Eye size="20px" color="#A4A4A4" />}
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox.Root className="shadow-blackA4  flex w-5 h-5 appearance-none items-center justify-center rounded-sm border border-gray3">
                  <Checkbox.Indicator>
                    <CheckIcon />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label className="font-medium text-gray1 text-sm">Remember me.</label>
              </div>
              <p className="font-medium text-gray1 text-sm">Forgot password?</p>
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
            Don't have an account?{" "}
            <Link className="font-bold" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};
