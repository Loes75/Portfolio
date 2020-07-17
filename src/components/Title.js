import React, { Fragment } from 'react'

export default function Title({title}) {
    return (
        <Fragment>
            <h2 className="title">{title}</h2>
        </Fragment>
    )
}
