import React from 'react'

export default function Model({onClose}) {
  return (
    <>
        <div className='backdrop' onClick={onClose}>
            <dialog className='modal' open>
                <h1>Helooo</h1>
            </dialog>
        </div>
    </>
  )
}
