const defaultJson = {
  list: [],
  config: {
    labelWidth: 100,
    labelPosition: 'right',
    size: 'small',
    customClass: '',
    hideError: false,
    hideAsterisk: false,
  },
}

const cascaderOption = [
  {
    label: '元素分类',
    value: 'element_cate',
    children: [
      {
        label: '基础字段',
        value: 'static',
        children: [
          {
            label: '单行文本',
            value: 'input',
          },
          {
            label: '多行文本',
            value: 'textarea',
          },
          {
            label: '计数器',
            value: 'number',
          },
          {
            label: '单选框组',
            value: 'radio',
          },
          {
            label: '多选框组',
            value: 'checkbox',
          },
          {
            label: '时间选择器',
            value: 'time',
          },
          {
            label: '日期选择器',
            value: 'date',
          },
          {
            label: '评分',
            value: 'rate',
          },
          {
            label: '颜色选择器',
            value: 'color',
          },
          {
            label: '下拉选择器',
            value: 'select',
          },
          {
            label: '开关',
            value: 'switch',
          },
          {
            label: '滑块',
            value: 'slider',
          },
          {
            label: '文字',
            value: 'text',
          },
          {
            label: 'HTML',
            value: 'html',
          },
        ],
      },
      {
        label: '高级字段',
        value: 'advance',
        children: [
          {
            label: '自定义区域',
            value: 'blank',
          },
          {
            label: '级联选择器',
            value: 'cascader',
          },
          {
            label: '富文本编辑器',
            value: 'editor',
          },
        ],
      },
      {
        label: '布局字段',
        value: 'layout',
        children: [
          {
            label: '栅格',
            value: 'grid',
          },
          {
            label: '分割线',
            value: 'divider',
          },
        ],
      },
    ],
  },
  {
    label: '按钮视图',
    value: 'button_view',
    children: [
      {
        label: '按钮',
        value: 'button',
        children: [
          {
            label: '导入',
            value: 'import',
          },
          {
            label: '清空',
            value: 'clear',
          },
          {
            label: '预览',
            value: 'preview',
          },
          {
            label: '生成JSON',
            value: 'json',
          },
          {
            label: '生成代码',
            value: 'code',
          },
        ],
      },
      {
        label: '视图',
        value: 'view',
      },
    ],
  },
  {
    label: '相关属性',
    value: 'property',
    children: [
      {
        label: '字段属性',
        value: 'field',
      },
      {
        label: '表单属性',
        value: 'form',
      },
    ],
  },
]

const consoleFont =
  '\n\n' +
  `██████╗ ██╗    ██╗                               
██╔══██╗██║    ██║                               
██║  ██║██║ █╗ ██║                               
██║  ██║██║███╗██║                               
██████╔╝╚███╔███╔╝                               
╚═════╝  ╚══╝╚══╝                                
                                                 
███████╗ ██████╗ ██████╗ ███╗   ███╗             
██╔════╝██╔═══██╗██╔══██╗████╗ ████║             
█████╗  ██║   ██║██████╔╝██╔████╔██║             
██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║             
██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║             
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝             
                                                 
███╗   ███╗ █████╗ ██╗  ██╗██╗███╗   ██╗ ██████╗ 
████╗ ████║██╔══██╗██║ ██╔╝██║████╗  ██║██╔════╝ 
██╔████╔██║███████║█████╔╝ ██║██╔██╗ ██║██║  ███╗
██║╚██╔╝██║██╔══██║██╔═██╗ ██║██║╚██╗██║██║   ██║
██║ ╚═╝ ██║██║  ██║██║  ██╗██║██║ ╚████║╚██████╔╝
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝` +
  '\n\n' +
  'Release 1.10.2 Powered by dongwei.'

export { defaultJson, consoleFont, cascaderOption }
