export async function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    const res = await fetch(`${url}?${queryString}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    return await res.json()
}

export async function postFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    const res = await fetch(`${url}?${queryString}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    return await res.json()
}

export async function putFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    const res = await fetch(`${url}?${queryString}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
    return await res.json()
}

export async function patchFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    const res = await fetch(`${url}?${queryString}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
    })
    return await res.json()
}
