/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import { AuthCon } from "../Providers/AuthProv";
import { useContext } from "react";


const SignIn = () => {


    const { signin } = useContext(AuthCon);

    const hansignin = (e) => {
        e.preventDefault();
        const form = e.target;
    
        const email = form.email.value;
        const pass = form.password.value;
    
        signin(email, pass)
          .then((result) => {
            console.log(result.user);
             const crt = result.user?.metadata?.lastSignInTime;
             const user = { email,lastAt:crt };
             fetch("https://coffee-store-server-chi-three.vercel.app/user", {
               method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => { 
                console.log(data);
                if (data.matchedCount) {
                  Swal.fire("Good job!", "Signup successfully", "success");
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign In</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={hansignin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
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
                  <button className="btn btn-primary">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
};

export default SignIn;