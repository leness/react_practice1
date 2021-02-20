import Button from "./Button"
import Input from "./Input"

const Form = () => {
    return (
        <form>
        <Input label="login" placeholder="login"/>
            <Input label="password" placeholder="password" />
            <Button name='submit'/>
        </form>
    )
}

export default Form;