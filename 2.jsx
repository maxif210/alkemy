import React from "react";
import axios from "axios";

const isValidPassword = (value) => {
  const pattern = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
  );
  if (password.length > 6 && password.match(pattern)) {
    return true;
  } else {
    return false;
  }
};

const isValidEmail = (value) => {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
};

const LoginForm = () => {
  const [invalidForm, setInvalidForm] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (e) => {
    if (isValidEmail(e.target.value)) {
      setEmail(e.target.value);
    } else {
      return;
    }

    if (isValidPassword(e.target.value)) {
      setPassword(e.target.value);
    } else {
      return;
    }

    setInvalidForm(false);
  };

  const sendRequest = async () => {
    const states = {"email": email,"password": password};
      const request = await axios.post('http://challenge-react.alkemy.org/', states );
      return request;
  };

  return (
    <form>
      <input type="email" onChange={handleChange} value={email} />
      <input type="password" onChange={handleChange} value={password} />
      <button disabled={invalidForm} onClick={sendRequest}>
        Enviar
      </button>
    </form>
  );
};
export { LoginForm, isValidEmail, isValidPassword };
