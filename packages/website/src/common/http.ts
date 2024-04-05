const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3105' : ''

const methods = ['get', 'post', 'put', 'delete'] as const
type Method = typeof methods[number]
type Fetch = <T = any>(
  url: string,
  options?: Omit<RequestInit, 'body'> & { params?: Record<string | number, any>, body?: any }
) => Promise<T>

export const http = new Proxy({} as Record<Method, Fetch>, {
  get(target, p) {
    return async (url: string, options?: Parameters<Fetch>[1]) => {
      try {
        const { params = {}, headers = {}, body, ...rest } = options ?? {}
        const searchParams = new URLSearchParams(params).toString()
        let _url = url.startsWith('http') ? url : `${BASE_URL}${url}`
        if (searchParams) _url += `?${searchParams}`
        const _body = typeof body === 'object'
          ? body instanceof FormData
            ? body
            : JSON.stringify(body)
          : body
        const res = await fetch(_url, {
          method: String(p).toUpperCase(),
          headers: body instanceof FormData ? headers : {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: _body,
          ...rest,
        })

        if (!res.ok) return Promise.reject(res)
        let _res: any = ''
        try {
          _res = await res.json()
        } catch (error) {
          _res = await res.text()
        }
        return _res.data ?? _res
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})