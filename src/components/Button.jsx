const Button = ({ name }) => {
    const hendleClick = () => {
        alert(`You clicked on button ${name}`);
    };

    return (
        <button onClick={hendleClick}>{name}</button>
    );
}

export default Button;