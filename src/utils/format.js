function formatJson(string) {
  return new Promise((resolve, reject) => {
    try {
      var object = JSON.parse(string)
    } catch (error) {
      return reject('dw-form-making：' + 'This is not a JSON Object')
    }

    if (typeof object === 'object' && !Array.isArray(object)) {
      if (!object.list || !Array.isArray(object.list)) {
        return reject('dw-form-making：' + 'Object is not have list or list is not a array.')
      }

      if (!object.config || typeof object.config !== 'object' || Array.isArray(object.config)) {
        return reject('dw-form-making：' + 'Object is not have config or config is not a object.')
      }

      resolve(object)
    } else {
      reject('dw-form-making：' + 'This is not a Object.')
    }
  })
}

export { formatJson }
