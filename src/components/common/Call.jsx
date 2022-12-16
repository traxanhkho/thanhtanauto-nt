import React, { useState } from 'react';

function Call(props) {
    return (
        <div className='fixed z-10 w-12 h-12 sm:w-auto sm:h-auto sm:px-2 text-center sm:py-1 bottom-8 right-8 shadow-2xl rounded-full sm:rounded-xl bg-c-orange-2 border border-primary '>
            <a href="tel:+8412345678">
                <button className='text-2xl sm:text-xl text-primary font-bold'>
                    <i className="fa fa-phone leading-[48px] sm:leading-none sm:mr-1" aria-hidden="true"></i> <span className='hidden sm:inline'>Gọi ngay</span> 
                </button>
            </a>
        </div>
    );
}

export default Call;