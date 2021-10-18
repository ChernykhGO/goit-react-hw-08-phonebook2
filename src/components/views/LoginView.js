import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import { TextField, DialogContent, Button } from "@material-ui/core";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Страница логина</h1>
      <DialogContent>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Почта
            <TextField
              autoFocus
              margin="dense"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label>
            Пароль
            <TextField
              autoFocus
              margin="dense"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <Button type="submit">Войти</Button>
        </form>
      </DialogContent>
    </div>
  );
}
