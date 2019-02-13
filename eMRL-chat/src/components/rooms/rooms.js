import React from "react";

let currentRooms = ['general', 'sports', 'coding', 'fashion'];

const Rooms = props => {
    return (
        <>
            <h2 className='roomTitle'>Rooms</h2>
            <div className="buttonGroup">
                {Object.keys(currentRooms).map((room, idx) => {
                    return (
                        <button key={currentRooms[idx]} value={currentRooms[idx]} onClick={props.updateRooms}>
                            {currentRooms[idx]}
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default Rooms;