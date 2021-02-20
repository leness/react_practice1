import Button from "./Button"
import Form from "./Form"
import Input from "./Input"


const HomePage = ({title, greating}) => {
    return (<>
        <h1>{title}</h1>
        <p>{greating}</p>
        {/* <Button name='Button' />
        <Button name='Add' />
        <Button name='Delete' /> */}
        <Form />
        {/* <Input placeholder='name' />
        <Input placeholder='password'/> */}
    </>)
}

export default HomePage;