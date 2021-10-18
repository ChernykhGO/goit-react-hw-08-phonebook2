import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import { TextField, DialogContent, Button } from "@material-ui/core";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    // console.log(name);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Страница регистрации</h1>
      <DialogContent>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Имя
            <TextField
              autoFocus
              margin="dense"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

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
              id="pass"
              autoFocus
              margin="dense"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <Button type="submit">Зарегистрироваться</Button>
        </form>
      </DialogContent>
    </div>
  );
}
