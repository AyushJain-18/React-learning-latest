import React, { useReducer } from "react";

const MyUseReducer = () => {
    enum UserOperation {
        UPDATE_NAME = "UPDATE_NAME",
        UPDATE_EMAIL = "UPDATE_EMAIL",
        UPDATE_COUNTRY = "UPDATE_COUNTRY",
        UPDATE_IS_TERMS_ACCEPTED = "UPDATE_IS_TERMS_ACCEPTED",
        UPDATE_GENDER = "UPDATE_GENDER",
        UPDATE_BIO = "UPDATE_BIO",

    }
    type UserProperty = {
        name: string;
        email: string;
        country: string;
        gender: "male" | "female";
        bio: string;
        isTermsAccepted: boolean
    }
    const initialState: Readonly<UserProperty> = {
        name: "",
        email: "",
        country: "",
        gender: "male",
        bio: "",
        isTermsAccepted: false
    }

    const reducer = (state: UserProperty, action): UserProperty => {
        switch (action.type) {
            case UserOperation.UPDATE_NAME:
                return { ...state, name: action.payload }
            case UserOperation.UPDATE_EMAIL:
                return { ...state, email: action.payload }
            case UserOperation.UPDATE_COUNTRY:
                return { ...state, country: action.payload }
            case UserOperation.UPDATE_GENDER:
                return { ...state, gender: action.payload }
            case UserOperation.UPDATE_BIO:
                return { ...state, bio: action.payload }
            case UserOperation.UPDATE_IS_TERMS_ACCEPTED:
                return { ...state, isTermsAccepted: action.payload }
            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const OnFormSubmit = (event) => {
        console.log('Form value is via controlled component', state);

        console.log("event", event);

        const formData = new FormData(event.target);
        const enteries = Object.fromEntries(formData.entries())
        if (!enteries && typeof enteries === 'object') {
            for (const [key, value] of Object.entries(enteries)) {
                console.log(`Form field is ${key} and its value is ${value}`)
            }
        }
    }

    const onFormvalueChange = (event) => {
        const value = event.type === "checkbox" ? event.target.checked : event.target.value
        dispatch({ type: event.target.name, payload: value })
    }

    return (
        <>
            <header> <h2>Enter User details</h2>
            </header>
            <main>
                <form onSubmit={OnFormSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name"
                        name={UserOperation.UPDATE_NAME}
                        value={state.name}
                        onChange={onFormvalueChange} />

                    <label htmlFor="Email">Email</label>
                    <input type="text"
                        id="Email"
                        name={UserOperation.UPDATE_EMAIL}
                        value={state.email}
                        onChange={onFormvalueChange} />

                    <label htmlFor={UserOperation.UPDATE_COUNTRY}>Select your country:</label>
                    <select name="country"
                        id="country"
                        value={state.country}
                        onChange={onFormvalueChange}>
                        <option value="India">India</option>
                        <option value="US">US</option>
                        <option value="China">China</option>
                        <option value="Russia">Russia</option>
                    </select>

                    <label htmlFor="Terms">Please accept terms</label>
                    <input name={UserOperation.UPDATE_IS_TERMS_ACCEPTED}
                        type="checkbox"
                        id="Terms"
                        checked={state.isTermsAccepted}
                        onChange={onFormvalueChange} />

                    <fieldset>
                        <legend>Chose your gender</legend>
                        <input type="radio" name={UserOperation.UPDATE_GENDER} id="for-male" value="male" onChange={onFormvalueChange} />
                        <label htmlFor="for-male">Male</label>
                        <input type="radio" name={UserOperation.UPDATE_GENDER} id="for-femla" value="female" onChange={onFormvalueChange} />
                        <label htmlFor="for-female">Female</label>
                    </fieldset>
                    <label htmlFor="bio"></label>
                    <textarea name={UserOperation.UPDATE_BIO} id="bio" onChange={onFormvalueChange} value={state.bio} />
                </form>
            </main>

            <section>
                <p>Enter form details are</p>
                {Object.entries(state).map(ele => { console.log(ele); return null })}
            </section>

            <footer>
                <h2>this is footer</h2>
            </footer>
        </>
    )
}

export default MyUseReducer;