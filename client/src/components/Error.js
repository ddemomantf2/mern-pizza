import React from 'react'

export default function Error({error}) {
    return (
    <div><div className="alert alert-error" role="alert">
        {error}
        </div>
    </div>
    )
}