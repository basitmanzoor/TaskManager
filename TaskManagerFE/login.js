"use strict";

const login = document.querySelector("#loginForm");

const loginUser = async (task) => {
  const response = await fetch("http://127.0.0.1:3000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();

  localStorage.setItem("token", data.token);
  console.log(localStorage.getItem("token"));
  if (data.status === "success") {
    window.location.replace("index.html");
    alert("User successfully logged in");
  } else {
    alert(data.message);
  }
};

login.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailUser = loginForm.loginEmail.value;
  const passwordUser = loginForm.loginPassword.value;

  const user = {
    email: emailUser,
    password: passwordUser,
  };
  await loginUser(user);
});
