import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "/styles/Profile.module.css";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [valid, setValid] = useState({
    email: true,
    password: true,
    repeat: true,
  });

  console.log(Object.keys(valid));

  function handleSubmit(e) {
    e.preventDefault();

    let currentStatus = {};

    Object.keys(valid).forEach((item) => {
      if (item === "") {
        currentStatus = { ...currentStatus, item: false };
      }
    });

    console.log(currentStatus);

    // if (email === "" && password === "") {
    //   setValid({ email: false, password: false });
    // } else if (password === "") {
    //   setValid({ ...valid, password: false });
    // } else if (email === "") {
    //   setValid({ ...valid, email: false });
    // } else {
    //   setValid({ email: true, password: true });
    // }
  }
  return (
    <>
      <Head>
        <title>Signup | EntertainHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main className={styles.loginContainer}>
        <svg
          className={styles.logo}
          width="33"
          height="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
        <form
          action="GET"
          className={`${styles.formContainer} bg-primary-600`}
          onSubmit={handleSubmit}
        >
          <h1 className={`${styles.fsHeading} fw-light`}>Sign Up</h1>
          <div className={styles.inputFieldContainer}>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setValid({ email: true, password: true })}
              className={`${styles.inputField} | ${styles.fsInput} ${
                !valid && styles.errorField
              } bg-primary-600 text-neutral-100 fw-light`}
              placeholder="Email address"
            />
            {!valid.email && (
              <span
                className={` ${styles.errorMessage} ${styles.fsError} text-accent fw-light`}
              >
                Invalid email ID
              </span>
            )}
          </div>
          <div className={styles.inputFieldContainer}>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setValid({ email: true, password: true })}
              className={`${styles.inputField}  | ${styles.fsInput} ${
                !valid.password && styles.errorField
              } bg-primary-600 text-neutral-100 fw-light`}
              placeholder="Password"
            />
            {!valid.email && (
              <span
                className={` ${styles.errorMessage} ${styles.fsError} text-accent fw-light`}
              >
                Invalid email ID
              </span>
            )}
          </div>
          <div className={styles.inputFieldContainer}>
            <input
              type="password"
              name="password-repeat"
              id="password-repeat"
              value={repeat}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setValid({ email: true, password: true })}
              className={`${styles.inputField}  | ${styles.fsInput} ${
                !valid.password && styles.errorField
              } bg-primary-600 text-neutral-100 fw-light`}
              placeholder="Repeat password"
            />
            {!valid.email && (
              <span
                className={` ${styles.errorMessage} ${styles.fsError} text-accent fw-light`}
              >
                Invalid email ID
              </span>
            )}
          </div>
          <button
            type="submit"
            className={`${styles.submitButton} | ${styles.fsInput} fw-light`}
          >
            Create an account
          </button>
          <p className={`${styles.fsInput} ${styles.para} fw-light`}>
            Already have an account?{" "}
            <Link href="/login" className="text-accent">
              Login
            </Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default SignUp;
