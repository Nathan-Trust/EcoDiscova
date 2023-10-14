import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdSettings, MdLinkedCamera } from "react-icons/md";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../utils/firebase";
import { db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";
import { MdImage } from "react-icons/md";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import BouncingLoader from "../Components/BouncingLoader";
import { AiOutlineUser } from "react-icons/ai";
import user from "../assets/user_1144760.png";
import { useMyContext } from '../contexts/useContext';

export default function Avatar() {
  const {
    displayName,
    storageRef,
  } = useMyContext();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [file, setFile] = useState(null);
  const [showAddImage, setShowAddImage] = useState(false);
  const navigate = useNavigate();
  const [animateImage, setAnimateImage] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const [imageDataUrl, setImageDataUrl] = useState(user);
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  useEffect(() => {
    if (file !== null) {
      setShowAddImage(true);
    }
  }, [file]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFile(selectedFile); // Set the selected File object
        setImageDataUrl(event.target.result); // Set the data URL for display
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const handleSkip = async (e) => {
    setLoading(true);
    // setShowLightEffect(true); // Trigger the light effect
    setAnimateImage(true); // Trigger the image animation
    setContentVisible(false); // Hide the content
    e.preventDefault();
    // const file = e.target[0].files[0];
    // const file = e.target[0].files[0];
    // file = "";
    try {
      await uploadBytesResumable(storageRef, user).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile of user for only authentication
            await updateProfile(currentUser, {
              displayName,
              photoURL: downloadURL,
            });

            //create user on firestore(users collection)
            //"users"stands for collection name

            await setDoc(doc(db, "users", currentUser.uid), {
              uid: currentUser.uid,
              displayName,
              email: currentUser.email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", currentUser.uid), {});
            navigate("/dashboard");
          } catch (err) {
            console.log(err);
            setError(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setError(true);
      setLoading(false);
      setErr(err);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    setAnimateImage(true); // Trigger the image animation
    setContentVisible(false); // Hide the content
    e.preventDefault();
    // const file = e.target[0].files[0];
    try {
      //Create user

      //Create a unique image name
      /* const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`); */

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile of user for only authentication
            await updateProfile(currentUser, {
              displayName,
              photoURL: downloadURL,
            });

            //create user on firestore(users collection)
            //"users"stands for collection name

            await setDoc(doc(db, "users", currentUser.uid), {
              uid: currentUser.uid,
              displayName,
              email: currentUser.email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", currentUser.uid), {});
            // setTimeout(() => {
            navigate("/dashboard");
            // }, 1000);
          } catch (err) {
            console.log(err);
            setError(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setError(true);
      setLoading(false);
      setErr(err);
    }
  };



  return (
    <div
      className="flex items-center justify-center dark:bg-[#191628] bg-gray-400 h-screen"
      style={{ margin: "0px", padding: "0px" }}
    >

      {contentVisible && (
        <div className=" dark:bg-[#2a2442] bg-white dark:text-[#d4d3d9] p-4 rounded-md">
          <div className="flex justify-end">
            <p className="text-gray-500 cursor-pointer" onClick={handleSkip}>
              Skip
            </p>
          </div>
          <div className={`flex justify-center`}>
            <img
              src={imageDataUrl}
              alt="avatar"
              className="rounded-full w-[100px] h-[100px]"
            />
          </div>
          <h3 className="text-center mt-4 text-xl">
            {`Welcome ${displayName}`}
          </h3>
          <div className="w-[350px]">
            <p>We're happy to have you join the cravens</p>
            <p>
              But for we all to know your identity we'll love you to add an
              avatar to proceed{" "}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="file"
              className=" cursor-pointer flex items-center gap-2 dark:text-white mt-2"
            >
              <MdImage className="text-2xl" /> <span>Add an avatar</span>
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <div className="flex justify-end">
              {showAddImage && <button type="submit">Add Image </button>}
            </div>
          </form>
        </div>
      )}

      {animateImage && (
        <div className="flex items-center justify-center flex-col gap-10">
          <div>
            <img
              src={imageDataUrl}
              alt="avatar"
              className="rounded-full w-[200px] h-[200px]"
            />
          </div>
          <div>
            {loading && (
              <div className="dark:text-white">
                <BouncingLoader />
              </div>
            )}
          </div>
        </div>
      )}

      <div className="fixed right-4 bottom-4">
        <button
          type="button"
          style={{  borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl text-white"
          onClick={() => setThemeSettings(true)}
        >
          <MdSettings />
        </button>
      </div>
    </div>
  );
}