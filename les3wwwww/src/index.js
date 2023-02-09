import ('./main.scss');


import { renderGallery } from './item'
import items from './items'

const galleryElement = document.querySelector('#gallery-container')

items.map(item => galleryElement.appendChild(renderGallery(item)))