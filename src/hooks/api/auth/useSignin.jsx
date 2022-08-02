import useAsync from "../../useAsync"
import * as service from "../../../services/authService"

export default function useSignin() {
  const { loading, act, error } = useAsync(service.signin, false);

  return {
    loadingSignin: loading,
    sucessSignin: act,
    signinError: error,
  };
}
