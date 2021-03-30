import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Fields {
  name: string;
  placeholder: string;
  type: string;
  className?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  fields: Fields[];
  submit: {
    text: string;
    url: string;
    action: (data: any) => void;
  };
  extra: {
    text: string;
    linkText: string;
    linkUrl: string;
  };
}

const AuthForm: React.FC<Props> = ({
  title,
  subtitle,
  fields,
  submit,
  extra,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any, submitData: any) => {
    e.preventDefault();
    submitData.url && router.push(submitData.url);
    submitData.action(formData);
  };

  return (
    <div id="user-auth-form">
      <form className="form">
        <h2 className="form__title">{title}</h2>

        <p className="form__subtitle">{subtitle}</p>

        {fields.map(({ type, ...fieldProps }, index) => (
          <div key={index} className="form__input-container">
            <input
              {...fieldProps}
              className="form__input"
              type={type === "password" ? (showPassword ? "text" : type) : type}
              onChange={(e) => handleChange(e)}
            />
            {type === "password" && (
              <i
                className={`form__input-icon ${
                  !showPassword ? "far fa-eye" : "far fa-eye-slash"
                }`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            )}
          </div>
        ))}

        <div className="form__sign-in-extra">
          <Link href="/forgot-password">
            <a className="form__sign-in-extra-link">Forgot Password?</a>
          </Link>
        </div>

        <button
          className="form__btn btn bg-primary"
          onClick={(e) => handleSubmit(e, submit)}
        >
          {submit.text}
        </button>

        <div className="form__extra">
          <p className="form__extra-text">{extra.text}</p>
          <Link href={extra.linkUrl}>
            <a className="form__extra-link">{extra.linkText}</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
