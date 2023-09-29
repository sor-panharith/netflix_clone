"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Input from "@/components/Input";
import { register } from "module";
const page = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className=" relative w-full h-full bg-[url('/assets/hero.jpg')] bg-on-repeat bg-center bg-fixed bg-cover">
      <div className=" bg-black w-full h-full lg:bg-opacity-60">
        <nav className=" px-12 py-5">
          <img src="/assets/netflix.png" alt="logo" className=" h-12" />
        </nav>
        <div className=" flex justify-center">
          <div className="bg-black bg-opacity-50 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className=" text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setUsername(ev.target.value)}
                  id="username"
                  type="username"
                  value={username}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className=" bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Log in" : "Sing up"}
            </button>
            <p className=" text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Aready Have An Account? "}
              <span
                onClick={toggleVariant}
                className=" text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create Account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
