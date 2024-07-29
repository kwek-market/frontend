import { emailValidator } from "@/helpers";
import React, { useState } from "react";
import styles from "./Footer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { subscribeToNewsletter } from "@/store/newsletter/newsletter.actions";
import { RootState } from "@/store/rootReducer";

const Component = function () {    
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!emailValidator(email) || email === "") {
      import("antd").then(({ message }) => {
        message.error("Invalid email");
      });
      return;
    }
    console.log(email);
    dispatch(subscribeToNewsletter(email, user.token));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <input
        type="email"
        placeholder="Enter your email address..."
        className={styles.form_input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={`btn bg-primary ${styles.btn}`}>Subscribe</button>
    </form>
  );
};

export default Component;
