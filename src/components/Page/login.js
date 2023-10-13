"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();

  // console.log(session);

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col md:flex-row ">
        <div className="text-center lg:text-left hidden md:block">
          <Image
            className="max-w-screen-sm"
            src="/image/login.png"
            width={200}
            height={200}
            layout="responsive"
            alt="Login Image"
          />
        </div>
        <div className="card flex-shrink-0  w-full md:max-w-sm  shadow-2xl bg-base-100 ">
          <h3 className="text-center mt-4 font-medium">Login</h3>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <Link
                href="/signup"
                className="text-sm mt-2 text-blue-500 hover:underline"
              >
                Dont&apos;t have a account Register
              </Link>
            </div>
          </form>

          <div className="card-body pt-0">
            <div className="form-control">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="btn btn-outline btn-primary"
              >
                Login with Google
              </button>
            </div>
            <div className="form-control">
              <button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "http://localhost:3000/",
                  })
                }
                className="btn btn-outline btn-primary"
              >
                Login with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
