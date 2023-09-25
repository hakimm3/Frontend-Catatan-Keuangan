import FormLogin from "../fragments/FormLogin";
import Auth from "../layouts/Auth";

export default function LoginPage() {
  return (
    <>
      <Auth title="Hello! lets get started"
        greeting="Sign in to continue."
        buttonText="Login" 
        termText="Keep me signed in"
        footerText="Don't have any account?"
        footerLink="/register">
            
        <FormLogin />

      </Auth>
    </>
  );
}
