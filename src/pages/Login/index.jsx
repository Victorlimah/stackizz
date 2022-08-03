import * as S from "./styles";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logotipo.png";
import developer from "../../assets/developer.png";
import background from "../../assets/animated-background.gif";

import { signin } from "../../services/authService";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      const response = await signin(email, password);
      localStorage.setItem("token", response.token);
      navigate("/timeline");
    } catch (e) {
      setError("Usuário ou senha inválida");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container background={background}>
      <S.Left>
        <S.Developer src={developer} />
      </S.Left>

      <S.Right>
        <S.Logo src={logo} />

        <S.Form onSubmit={handleSubmit(onSubmit)} error={error}>
          {error && <S.Error>{error}</S.Error>}
          <S.Input
            name="email"
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.message}
          <S.Input
            name="password"
            placeholder="Senha"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && errors.password.message}
          <S.Button type="submit">
            {loading ? "Carregando..." : "Entrar"}
          </S.Button>

          <S.Register onClick={() => navigate("/signup")}>
            Não tem uma conta? Se cadastre
          </S.Register>
        </S.Form>
      </S.Right>
    </S.Container>
  );
}
