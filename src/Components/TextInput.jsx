import React from 'react'

const TextInput = (props) => {

    const { type = 'text', placeholder = 'input text', label, defaultValue, disabled, onEnter, icon, center, error, handleChange } = props
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onEnter()
        }
    }

    return (
        <div className="inline-block">
            {label && <span className="font-bold pl-3 text-neutral-500 text-left mb-1">{label}</span>}
            <input
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={defaultValue}
                disabled={disabled}
                className={`pr-3 py-3 w-full rounded-lg text-sm text-neutral-500 font-normal transition-all focus:outline-none duration-200 ${center ? 'text-center' : 'text-left'} border border-gray-500
                    } ${disabled ? `bg-gray-100 opacity-50 cursor-not-allowed` : ''} ${icon ? 'pl-11' : 'pl-3'}`}
            />
            {error && <span className="text-system-error font-medium text-left mt-1 text-xs">{error}</span>}
        </div >
    )
}

export default TextInput
