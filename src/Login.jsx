import { signIn } from "@junobuild/core";
// import { Button } from "./Details/Button";

export const Login = () => {
  //TODO: STEP_2_AUTH_SIGN_IN
  return (
    <button className="btn" onClick={signIn}>
      Connect Wallet
    </button>
  );
};
