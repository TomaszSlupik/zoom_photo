const photo = document.querySelector('.photo')
const photoZoom = document.querySelector('.photo-zoom')

const zoomPhoto = (e) => {
    const x = e.clientX
    const y = e.clientY

    const photoX = photo.offsetLeft
    const photoY = photo.offsetTop

    const photonewX = (photoX - x) * -1
    const photonewY = (photoY - y) * -1

    photo.style.transformOrigin = `${photonewX}px ${photonewY}px`
    photo.classList.add ('photo-zoom')
}

const resetPhoto = (params) => {
    photo.classList.remove ('photo-zoom')
}

photo.addEventListener('mousemove', zoomPhoto)
photo.addEventListener('mouseout', resetPhoto)






