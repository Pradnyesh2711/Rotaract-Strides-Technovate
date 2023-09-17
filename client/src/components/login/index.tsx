import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import logo from "assets/img/logo/logo.png";
import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "constants/definitions";
import { useAppDispatch } from "app/store";
import { setUser } from "app/features/UserSlice";
import Card from "components/card";

function Login() {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    mobile: "",
    password: "",
  });

  const mobileRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    console.log(e, fieldName);
    setFormData((prevData) => ({ ...prevData, [fieldName]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { mobile, password } = formData;
    const newErrors = {
      mobile: "",
      password: "",
    };

    if (!mobileRegex.test(mobile)) newErrors.mobile = "Invalid Mobile Number";

    if (!passwordRegex.test(password))
      newErrors.password = "At least 8 characters, 1 uppercase, 1 lowercase";

    setErrors(newErrors);

    if (!newErrors.mobile && !newErrors.password) {
      const formData = {
        mobile: mobile,
        password: password,
      };

      try {
        let res = await axios.post(`${BACKEND_URL}/auth/login`, formData);

        if (res.data?.user) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.user._id);
          const user = res.data.user;
          dispatch(
            setUser({
              email: user.email,
              name: user.name,
              gender: user.gender,
              dob: user.dob,
              city: user.city,
              cords: user?.coords === "" ? [] : user.cords,
              mobile: user.mobile,
              profilePicture:
                user?.profilePicture === "" ? "" : user.profilePicture,
              coverPicture: user.coverPicture === "" ? "" : user.coverPicture,
              about: user?.about === "" ? "" : user.about,
            })
          );
          navigate("/home/user");
        } else setErrors({ mobile: "", password: "Invalid Credentials" });
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  return (
    <div className="flex h-[100vh] flex-col items-center justify-start bg-gray-200 pb-3">
      <div className="mx-auto flex items-center justify-center py-3">
        <img src={logo} width={65} height={65} alt="Logo" />
        <span className="ml-2 text-3xl font-bold dark:text-white">
          {" "}
          Rotaract Strides
        </span>
      </div>
      <Link to="/" className="absolute left-5 top-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
          <span className="text-2xl font-bold ">&lt;</span>
        </div>
      </Link>

      <Card
        extra={
          "items-center flex-col w-[390px]  min-h-[55vh] p-[16px] bg-cover mt-8 pb-8"
        }
      >
        <h2 className="pb-8 pt-3 text-2xl font-bold">Login to your account</h2>
        <form onSubmit={handleSubmit} autoComplete="off" className="w-95p">
          {/* Employee ID */}
          <InputField
            variant="auth"
            extra="mb-5"
            label="Mobile No."
            placeholder="E.g. 1234567890"
            id="mobile"
            type="text"
            maxLength={10}
            value={formData.mobile}
            errorMsg={errors.mobile}
            onChange={(e) => handleFieldChange(e, "mobile")}
            state={errors.mobile ? "error" : ""}
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-5"
            label="Password"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            minLength={8}
            errorMsg={errors.password}
            value={formData.password}
            onChange={(e) => handleFieldChange(e, "password")}
            state={errors.password ? "error" : ""}
          />
          {/* Checkbox */}
          <div className="mb-5 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
          <button
            className="linear mt-4 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 flex justify-center px-2 text-sm">
          By continuing, you agree to Terms And Conditions of Use and Privacy
          Notice
        </p>
      </Card>
    </div>
  );
}

export default Login;
