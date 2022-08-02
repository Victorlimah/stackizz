import useAsync from "../../useAsync";
import * as service from "../../../services/authService";

export default function useSignup() {
  const { loading, act, error } = useAsync(service.signup, false);

  return {
    loadingSignup: loading,
    sucessSignup: act,
    signupError: error,
  };
}
