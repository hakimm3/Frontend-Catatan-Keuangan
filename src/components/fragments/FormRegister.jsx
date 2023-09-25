import InputWithouLabel from "../elements/InputWithouLabel/Index";

export default function FormRegister() 
{
    return (
        <div>
            <InputWithouLabel type="text" name="name" id="name" placeholder="Full Name" />
            <InputWithouLabel type="email" name="email" id="email" placeholder="Email" />
            <InputWithouLabel type="password" name="password" id="password" placeholder="Password" />
            <InputWithouLabel type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" />
        </div>
    )
}