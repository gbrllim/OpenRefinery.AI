import { signIn } from "@junobuild/core";
import { Button } from "./Button";

export const Login = () => {
  //TODO: STEP_2_AUTH_SIGN_IN
  // signIn();
  return <Button onClick={signIn}>Sign in</Button>;
};
