import { FaShoppingCart, FaUserEdit } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisiblePass } from "../../rtk/slices/PassToggle";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";
import Swal from "sweetalert2";
import Nophoto from "../Photo/Nophoto.png";
import signup from "../Photo/signup.jpeg";
import "./Sign.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setloading] = useState(false);

  const [validation, setValidation] = useState(false);

  let validationcondition = validation ? "was-validated" : "novalidate";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          Swal.fire(error.message, "error");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      Swal.fire("Great!", "Your Account Created", "success");
      navigate("/signin");
      setloading(false);
    } catch (error) {
      setloading(false);
      Swal.fire(error.message, "error");
    }
  };

  const togglepass = useSelector((state) => state.PassToggle.visiblePass);
  let condition = togglepass ? "text" : "password";

  const dispatch = useDispatch();

  let Handlepass = () => {
    dispatch(toggleVisiblePass());
  };

  // const ref = useRef();
  // useEffect(() => {
  //   ref.current.focus();
  // }, []);

  return (
    <section>
      <div className="signup-page">
        {loading ? (
          <div className="product-action-overlay">
            <button type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>
        ) : (
          <>
            <div className="photo">
              <img src={signup} alt={Nophoto} className="img-fluid" />
            </div>
            <div className="form">
              <div>
                <Link to="/">E-Commerce</Link>
              </div>
              <div>
                <h1>Sign Up</h1>
              </div>
              <form className={validationcondition} onSubmit={handleSubmit}>
                <label
                  htmlFor="validationCustom01"
                  className="mb-3 text-secondary form-label"
                >
                  Full Name
                </label>
                <div className="name">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    id="validationCustom01"
                    value={username}
                    required
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <span>
                    <FaUserEdit />
                  </span>
                  <div className="invalid-feedback">
                    Please provide a valid Name.
                  </div>
                </div>
                <label
                  htmlFor="validationCustom02"
                  className="form-label my-3 text-secondary"
                >
                  Email
                </label>
                <div className="email">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="validationCustom02"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <span>
                    <FiMail />
                  </span>
                  <div className="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </div>

                <label
                  htmlFor="validationCustom03"
                  className="form-label my-3 text-secondary"
                >
                  password
                </label>
                <div className="password">
                  <input
                    type={condition}
                    className="form-control"
                    placeholder="password"
                    id="validationCustom03"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  {togglepass ? (
                    <span>
                      <FaEye
                        className="eye-icon"
                        onClick={() => {
                          Handlepass();
                        }}
                      />
                    </span>
                  ) : (
                    <span>
                      <FaRegEyeSlash
                        className="eye-icon"
                        onClick={() => {
                          Handlepass();
                        }}
                      />
                    </span>
                  )}
                  <div className="invalid-feedback">
                    Please provide a valid password.
                  </div>
                </div>

                <div className="terms-privacy">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    I agree to the <span className="text-primary">Terms</span>{" "}
                    and <span className="text-primary">Privacy.</span>{" "}
                  </label>
                  <div className="invalid-feedback">
                    You must agree before SignUp.
                  </div>
                </div>

                <div className="signin-button">
                  <input
                    type="submit"
                    value={"Sign Up"}
                    onClick={() => {
                      setValidation(true);
                    }}
                  />
                </div>
                <div className="member">
                  <span className="mt-3 text-secondary">
                    Already a member ?{" "}
                  </span>
                  <Link to="/signin">Sign in</Link>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default SignUp;
