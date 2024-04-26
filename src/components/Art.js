import React from 'react'

const Art = ({ collection }) => {
    return (
        <>
            {collection.map((image) => (
                <div class="image">
                    <div class={'image-title ' + image.position}>{image.title}</div>
                    <img loading='lazy' src={'./portfolio/' + image.name} alt={image.title} />
                </div>
            ))}
        </>
    )
}

export default Art