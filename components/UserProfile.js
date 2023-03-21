import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "./TabProvider";
import styles from "/styles/UserProfile.module.css";

const UserProfile = ({ showAccount, setShowAccount }) => {
  const { handleCurrentTab } = useApp();
  return (
    <div className={styles.profileContainer}>
      <Image
        src="/assets/image-avatar.png"
        className={styles.photo}
        width={25}
        height={25}
        alt="profile-picture"
        onClick={setShowAccount}
      />
      {showAccount && (
        <div className={styles.accountContainer}>
          <Link href="/sign-up" onClick={() => handleCurrentTab("sign-up")}>
            Sign-up
          </Link>
          <br />
          <Link href="/login" onClick={() => handleCurrentTab("sign-up")}>
            Login
          </Link>{" "}
        </div>
      )}
    </div>
  );
};

export default UserProfile;