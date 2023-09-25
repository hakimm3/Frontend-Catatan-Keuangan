import InputWithouLabel from "../elements/InputWithouLabel/Index"

export default function FormLogin()
{
    return (
        <div>
            <InputWithouLabel type="text" id="username" name="username" placeholder="Username" />
            <InputWithouLabel  type="password" id="password" name="password" placeholder="Password"/>
        </div>
    )
}