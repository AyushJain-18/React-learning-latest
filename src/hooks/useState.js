import react, {useState, useEffect} from "react";

const MyUseState =()=> {
    const [name, setName] = useState("");

    const updateName =()=>{
        setName("Ayush Jain")
    }

    useEffect(() => {
        setTimeout(() => {
            updateName();
        }, 2000);
    }, [])

    return (
        <>
        Your State using SetState is {name}
        </>
    )
}

export default MyUseState;