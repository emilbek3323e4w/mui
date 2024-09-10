export const apiUrl = 'https://api.themoviedb.org/3/'
export const lang = 'language=ru-Ru'
export const apiKey = 'api_key=4fc6ccd59551cad4b41de59ca37b26ef'
export  const originalPath = 'https://image.tmdb.org/t/p/original/'
export  const smallPath = 'https://image.tmdb.org/t/p/w500/'


export const handleGenerateApi = (endpoint) => {
    return  `${apiUrl}${endpoint}?${apiKey}&${lang}`
}

export const handleSearchApi = (endpoint, query) => {
    if(query) {
        return  `${apiUrl}${endpoint}?${apiKey}&${lang}&query=${query}`
    } else {
        return `${apiUrl}${endpoint}?${lang}`
    }
}

export const handleShortDescription = (str) => {
    if (str.length > 100){
        return str.slice(0, 100) + '...'
    }else {
        return str
    }
}

