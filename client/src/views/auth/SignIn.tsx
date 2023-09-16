import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import Card from "components/card";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { BACKEND_URL } from "constants/definitions";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch } from "app/store";
import { setMember } from "app/features/MemberSlice";

export default function SignIn() {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const [formData, setFormData] = useState({
    rotaractID: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    rotaractID: "",
    password: "",
  });

  const rotaractIDRegex = /^[A-Z0-9]{8}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    const newValue = fieldName === "rotaractID" ? value.toUpperCase() : value;
    setFormData((prevData) => ({ ...prevData, [fieldName]: newValue }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { rotaractID, password } = formData;
    const newErrors = {
      rotaractID: "",
      password: "",
    };

    if (!rotaractIDRegex.test(rotaractID))
      newErrors.rotaractID = "Invalid Rotaract ID";

    if (!passwordRegex.test(password))
      newErrors.password = "At least 8 characters, 1 uppercase, 1 lowercase";

    setErrors(newErrors);

    if (!newErrors.rotaractID && !newErrors.password) {
      const formData = {
        rotaractID: rotaractID,
        password: password,
      };

      try {
        let res = await axios.post(`${BACKEND_URL}/auth/loginMember`, formData);

        if (res.data?.member) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("type", res.data.member.type);
          localStorage.setItem("id", res.data.member._id);
          const member = res.data.member;
          dispatch(
            setMember({
              rotaractID: member.rotaractID,
              firstname: member.firstname,
              lastname: member.lastname,
              type: member.type,
              club: member.club,
              profilePicture:
                member?.profilePicture === "" ? "" : member?.profilePicture,
            })
          );
          navigate("/admin/dashboard");
        } else setErrors({ rotaractID: "", password: "Invalid Credentials" });
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center">
      {/* Sign in section */}
      <Card
        extra={
          "items-center flex-col w-[370px]  min-h-[55vh] p-[16px] bg-cover mt-8 py-8"
        }
      >
        <form onSubmit={handleSubmit} autoComplete="off" className="w-95p">
          {/* Employee ID */}
          <InputField
            variant="auth"
            extra="mb-5"
            label="Rotaract ID"
            placeholder="E.g. ABCD1234"
            id="rid"
            type="text"
            maxLength={8}
            value={formData.rotaractID}
            errorMsg={errors.rotaractID}
            onChange={(e) => handleFieldChange(e, "rotaractID")}
            state={errors.rotaractID ? "error" : ""}
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
            showPassword={formData.showPassword}
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
      </Card>
    </div>
  );
}
