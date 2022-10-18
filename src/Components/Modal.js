import React from 'react';

export default function Modal({ open, close, setDelItem }) {
    if (!open) return null;

    function buttonFn(del) {
        setDelItem(del);
        close();
    }
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <h2>Remove Item</h2>
                <h3>Are you sure you want to remove this item from your cart?</h3>
                <button onClick={() => buttonFn(true)}>YES</button>
                <button onClick={() => buttonFn(false)}> NO</button>
            </div >
        </>
    )
}

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '50px',
    borderRadius: '10px'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 0

}