export const types = {}

export const example = () => {
  return {
    request: {
      url: '/test',
      method: 'get'
    },
    success: (res) => {
      const example = res.data.example || {}
      return { data: example, error: null }
    },
    error: (err) => {
      const result = {
        data: {
          example: ''
        },
        error: {
          name: types.SERVER_ERROR
        }
      }
      if (err.status === 401) {
        result.error = { name: types.EXAMPLE_NOT_AUTH }
      } else if (err.status === 404) {
        result.error = { name: types.EXAMPLE_NOT_FOUND }
      }
      return result
    }
  }
}