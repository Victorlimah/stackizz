import * as S from "./styles";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logotipo.png";
import developer from "../../assets/developer.png";
import background from "../../assets/animated-background.gif";

import { signup } from "../../services/authService";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ name, email, password }) => {
    setLoading(true);
    try {
      await signup(name, email, password);
      navigate("/signin");
    } catch (e) {
      setError("Erro ao cadastrar usuário");
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
            name="name"
            type="text"
            placeholder="Nome"
            {...register("name", { required: true })}
          />
          {errors.name && errors.name.message}
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
            {loading ? "Carregando..." : "Cadastrar"}
          </S.Button>

          <S.Register onClick={() => navigate("/signin")}>
            Já tem uma conta? Faça seu login
          </S.Register>
        </S.Form>
      </S.Right>
    </S.Container>
  );
}
