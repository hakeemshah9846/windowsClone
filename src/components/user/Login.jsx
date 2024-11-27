import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ toggleLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  localStorage.setItem("name", name);

  async function Login(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setTimeout(() => {
        navigate(`/${name}`);
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log("error : ", error);
      setError("Failed to log in. Please try again later.");
      setTimeout(() => {
        setError("");
      }, 2000);
      setLoading(false);
    }
  }

  return (
    <>
      {
        loading && (
            <div className="fixed inset-0 flex items-center justify-center z-50 top-36">
                <div className="inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent h-8 w-8">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
      }
    </>
  );
}

export default Login;
