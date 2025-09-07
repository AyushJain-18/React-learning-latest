import react, { useState, useEffect } from "react";

const MyUseState = () => {
    const [name, setName] = useState("");

    const updateName = () => {
        setName("Ayush Jain")
    }

    useEffect(() => {
        setTimeout(() => {
            updateName();
        }, 2000);
    }, [])

    return (
        <p aria-live="polite"> Your State using SetState is {name} </p>
    )
}

export default MyUseState;