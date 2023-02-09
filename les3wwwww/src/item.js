const ITEM_TYPES = {
    image: renderImage,
    audio: renderAudio,
    video: renderVideo
}

function renderImage(item){
    const imgElement = document.createElement('img')
    imgElement.classList.add('gallery-container-item__image')
    imgElement.src = item.src

    return imgElement
}

function renderAudio(item){
    const audioElement = document.createElement('audio')
    audioElement.classList.add('gallery-container-item__audio')
    audioElement.src = item.src
    audioElement.controls = true

    return audioElement

}

function renderVideo(item){
    const videoElement = document.createElement('video')
    videoElement.classList.add('gallery-container-item__video')
    videoElement.src = item.src
    videoElement.controls = true

    return videoElement
}

export function renderGallery(item) {
    const itemElement = document.createElement('div')
    itemElement.classList.add('gallery-container-item')

    const wrapElement = document.createElement('div')
    wrapElement.classList.add('gallery-container-item__source')
   
   
    const renderType = ITEM_TYPES[item.type]
    wrapElement.appendChild(renderType(item))
    
   
    const titleElement = document.createElement('p')
    titleElement.classList.add('gallery-container-item__title')
    titleElement.textContent = item.title

    itemElement.appendChild(wrapElement)
    itemElement.appendChild(titleElement)

    return itemElement
}