const basic = [{
    type: "input",
    component: 'DwInput',
    name: "单行文本",
    icon: "icon-input",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: "",
        placeholder: "",
        customClass: '',
        disabled: false,
        readonly: false,
        showPassword: false,
        required: false,
        requiredMessage: '',
        isPattern: false,
        pattern: '',
        patternMessage: '',
        isType: false,
        type: '',
        typeMessage: ''
    }
},
{
    type: "textarea",
    component: 'DwTextarea',
    name: "多行文本",
    icon: "icon-textarea",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: "",
        placeholder: "",
        customClass: '',
        disabled: false,
        readonly: false,
        required: false,
        requiredMessage: '',
        isPattern: false,
        pattern: '',
        patternMessage: ''
    }
},
{
    type: "number",
    component: 'DwNumber',
    name: "计数器",
    icon: "icon-number",
    options: {
        width: "",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: 0,
        min: 1,
        max: 99,
        step: 1,
        customClass: '',
        controlsPosition: "default",
        disabled: false,
        required: false,
        requiredMessage: ''
    }
},
{
    type: "radio",
    component: 'DwRadio',
    name: "单选框组",
    icon: "icon-radio",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        inline: true,
        customClass: "",
        defaultValue: "",
        disabled: false,
        required: false,
        isStatic: true,
        requiredMessage: "",
        options: [{
            label: "选项 1",
            value: "option 1"
        },
        {
            label: "选项 2",
            value: "option 2"
        },
        {
            label: "选项 3",
            value: "option 3"
        }
        ]
    }
},
{
    type: "checkbox",
    component: 'DwCheckbox',
    name: "多选框组",
    icon: "icon-checkbox",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        inline: true,
        customClass: "",
        disabled: false,
        required: false,
        isStatic: true,
        defaultValue: [],
        requiredMessage: "",
        options: [{
            label: "选项 1",
            value: "option 1"
        },
        {
            label: "选项 2",
            value: "option 2"
        },
        {
            label: "选项 3",
            value: "option 3"
        }
        ]
    }
},
{
    type: "time",
    component: 'DwTime',
    name: "时间选择器",
    icon: "icon-time",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        format: "HH:mm:ss",
        placeholder: "",
        customClass: "",
        disabled: false,
        editable: true,
        clearable: true,
        isArrowControl: true,
        defaultValue: "",
        startPlaceholder: "",
        rangeSeparator: '-',
        endPlaceholder: "",
        isRange: false,
        required: false,
        requiredMessage: ""
    }
},
{
    type: "date",
    component: 'DwDate',
    name: "日期选择器",
    icon: "icon-date",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        showType: "date",
        format: "yyyy-MM-dd",
        defaultValue: "",
        placeholder: "",
        customClass: "",
        startPlaceholder: "",
        rangeSeparator: "-",
        endPlaceholder: "",
        editable: true,
        isRange: false,
        clearable: true,
        disabled: false,
        required: false,
        requiredMessage: ""
    }
},
{
    type: "rate",
    component: 'DwRate',
    name: "评分",
    icon: "icon-rate",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: 0,
        customClass: "",
        max: 5,
        isAllowhalf: false,
        disabled: false,
        showScore: false,
        required: false,
        requiredMessage: ""
    }
},
{
    type: "color",
    component: 'DwColor',
    name: "颜色选择器",
    icon: "icon-color",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: null,
        customClass: "",
        disabled: false,
        showAlpha: false,
        required: false,
        requiredMessage: "",
    },
},
{
    type: "select",
    component: 'DwSelect',
    name: "下拉选择器",
    icon: "icon-select",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: null,
        placeholder: "",
        customClass: "",
        isStatic: true,
        multiple: false,
        disabled: false,
        filterable: true,
        clearable: true,
        required: false,
        requiredMessage: "",
        options: [{
            label: "选项 1",
            value: "option 1"
        },
        {
            label: "选项 2",
            value: "option 2"
        },
        {
            label: "选项 3",
            value: "option 3"
        }
        ]
    }
},
{
    type: "switch",
    component: 'DwSwitch',
    name: "开关",
    icon: "icon-switch",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: false,
        isColor: false,
        activeColor: "#409EFF",
        inactiveColor: "#C0CCDA",
        activeText: "开启",
        inactiveText: "关闭",
        isText: false,
        customClass: "",
        disabled: false,
        required: false,
        requiredMessage: ""
    }
},
{
    type: "slider",
    component: 'DwSlider',
    name: "滑块",
    icon: "icon-slider",
    options: {
        width: "100%",
        isLabelWidth: false,
        min: 0,
        max: 100,
        step: 1,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: 0,
        placeholder: "",
        customClass: "",
        disabled: false,
        required: false,
        requiredMessage: ""
    }
},
{
    type: "text",
    component: 'DwText',
    name: "文字",
    icon: "icon-text",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: "这是一段文字...",
        customClass: ""
    }
},
{
    type: "html",
    component: 'DwHtml',
    name: "HTML",
    icon: "icon-html",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        defaultValue: `<span style="color: #409eff;">
	这是HTML...
</span>`,
        customClass: "",
    },
}
]

const advance = [{
    type: "blank",
    component: 'DwBlank',
    name: "自定义区域",
    icon: "icon-blank",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        defaultValue: '',
        hideLabel: false,
        customClass: ''
    }
},
{
    type: "cascader",
    component: 'DwCascader',
    name: "级联选择器",
    icon: "icon-cascader",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        customClass: '',
        expandTrigger: 'click',
        disabled: false,
        clearable: true,
        filterable: true,
        multiple: false,
        collapseTags: false,
        showAllLevels: true,
        checkStrictly: false,
        placeholder: '',
        defaultValue: null,
        required: false,
        requiredMessage: '',
        isStatic: true,
        emitPath: false,
        separator: '/',
        remoteOption: '',
        props: {
            value: "value",
            label: "label",
            children: "children"
        },
    }
},
{
    type: "editor",
    component: 'DwEditor',
    name: "富文本编辑器",
    icon: "icon-editor",
    options: {
        width: "100%",
        isLabelWidth: false,
        labelWidth: 100,
        hideLabel: false,
        customClass: '',
        required: false,
        defaultValue: '',
        requiredMessage: '',
        disabled: false
    }
}
]

const layout = [{
    type: "grid",
    component: 'DwGrid',
    name: "栅格布局",
    icon: "icon-grid",
    options: {
        customClass: "",
        gutter: 0,
        isFlex: true,
        justify: "start",
        align: "top",
    },
    columns: [{
        span: 12,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        list: [],
    },
    {
        span: 12,
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
        list: [],
    },
    ],
},
{
    type: "divider",
    component: 'DwDivider',
    name: "分割线",
    icon: "icon-divider",
    options: {
        width: "100%",
        customClass: '',
        width: '100%',
        textPosition: 'left'
    }
},
]

export {
    basic,
    advance,
    layout
}