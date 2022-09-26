const CLOUDINARY_URL = 'https://res.cloudinary.com/lukaszrados/image/upload/'

export function buildImageUrl(photoPath, resizeOptions = '') {
  const resizeParams = resizeOptions ? `${resizeOptions}/` : ''
  return `${CLOUDINARY_URL}${resizeParams}${photoPath}`
}

export default {
  buildImageUrl,
}
