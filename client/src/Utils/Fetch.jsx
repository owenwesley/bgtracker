export async function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    const res = await fetch(`${url}?${queryString}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
        try {
            return await res.json();
        } catch (err) {
            return { error: 'Invalid JSON', ok: res.ok, status: res.status };
        }
    } else {
        const text = await res.text();
        return { error: text, ok: res.ok, status: res.status };
    }
}

export async function postFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    const res = await fetch(`${url}?${queryString}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
        try {
            return await res.json();
        } catch (err) {
            return { error: 'Invalid JSON', ok: res.ok, status: res.status };
        }
    } else {
        const text = await res.text();
        return { error: text, ok: res.ok, status: res.status };
    }
}

export async function putFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    const res = await fetch(`${url}?${queryString}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
        try {
            return await res.json();
        } catch (err) {
            return { error: 'Invalid JSON', ok: res.ok, status: res.status };
        }
    } else {
        const text = await res.text();
        return { error: text, ok: res.ok, status: res.status };
    }
}

export async function patchFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    const res = await fetch(`${url}?${queryString}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
    })
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
        try {
            return await res.json();
        } catch (err) {
            return { error: 'Invalid JSON', ok: res.ok, status: res.status };
        }
    } else {
        const text = await res.text();
        return { error: text, ok: res.ok, status: res.status };
    }
}
