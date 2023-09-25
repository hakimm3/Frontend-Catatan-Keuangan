import FormRegister from "../fragments/FormRegister";
import Auth from "../layouts/Auth";

export default function Register(){
    return (
        <Auth title="New here?" 
        greeting="Signing up is easy. It only takes a few steps" 
        buttonText="Sign Up"
        termText="I agree to all Terms & Conditions"
        footerText="Already have an account?">
            <FormRegister />
        </Auth>
    )
}