function slotFn(array = [], string = '') {
  array.forEach(element => {
    string += `
      <template slot="${element.model}" slot-scope="scope">
        <!-- ${element.name} -->
        <!-- v-model="scope.model.${element.model}" -->
      </template>
`
  })
  return string
}

function optionFn(array = [], string = '{') {
  array.forEach(element => {
    string += `
        ${element}: [],`
  })
  return string + (!array.length ? '}' : `
      },`)
}

function template(slots, option, imgUpload, json) {
  return `<template>
  <div>
    <generate-form
      ref="generateForm"
      :data="jsonData"
      :value="editData"
      :remote-option="remoteOption"${imgUpload ? `
      @editor-upload-image="editorUploadImage"` : ''}
    >${slots.length ? `${slotFn(slots)}    ` : ''}</generate-form>

    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <el-button @click="handleReset">重置</el-button>
  </div>
</template>

<script>
export default {
  name: 'GenerateForm',
  data() {
    return {
      jsonData: ${json},
      editData: {},
      remoteOption: ${optionFn(option)}
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.generateForm
        .getData()
        .then(res => {
          alert('submit!')
          console.log(res)
        })
        .catch(() => {
          alert('error submit!!')
        })
    },

    handleReset() {
      this.$refs.generateForm.reset()
    },
    ${imgUpload ? `
    editorUploadImage({ model, blobInfo, success, failure }) {
      // success(图片地址) / failure(失败说明) 可异步调用
      // success('http://xxx.xxx.xxx/xxx/image-url.png')
      // failure('上传失败')
      success('data:image/jpeg;base64,' + blobInfo.base64())
    },` : ''}
  },
}
</script>`}

export default function (json) {
  const slots = []
  const option = []
  var imgUpload = false

  getSlot(json.list)

  return template(slots, option, imgUpload, JSON.stringify(json))

  function getSlot(list) {
    list.forEach(element => {
      const {
        name,
        model,
        type,
        options: { remoteOption },
      } = element

      if (type === 'blank') {
        slots.push({
          name,
          model,
        })
      }

      if (type === 'cascader') {
        option.push(remoteOption)
      }

      if (type === 'editor') {
        imgUpload = true
      }

      if (type === 'grid') {
        element.columns.forEach(column => {
          if (column.list.length) {
            getSlot(column.list)
          }
        })
      }
    })
  }
}
