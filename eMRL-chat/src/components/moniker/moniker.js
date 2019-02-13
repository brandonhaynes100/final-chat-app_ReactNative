import React from "react";

const Moniker = props => {
    return (
        <>
            <form className='loginForm' onSubmit={props.nameSubmit}>
                <input
                    className='loginInput'
                    name="typedInput"
                    placeholder="What is your name?"
                    onChange={props.nameTracker}
                />
                <p className='loginError'>{props.error}</p>
            </form>
        </>
    );
};

export default Moniker;
