import Vuex from './vuex'
import {
    getDefaultJson,
    uuid,
    deepClone
} from 'utils/index'

export default new Vuex.Store({
    state: {
        select: {},
        data: getDefaultJson()
    },
    mutations: {
        SET_SELECT(state, select) {
            if (state.select === select) return
            state.select = select
        },
        SET_DATA(state, data) {
            state.data = data
            state.select = state.data.list.length ? state.data.list[0] : {}
        },
        CLONE_ELEMENT(state, {
            index,
            element,
            list
        }) {
            const key = uuid();
            const el = deepClone(element);

            if (el.type === "grid") {
                resetGridKey(el);
            }

            if (el.type === "cascader") {
                el.options.remoteOption = "cascader_option_" + key;
            }

            list.splice(index + 1, 0, Object.assign(el, {
                key,
                model: element.type + "_" + key,
            }))

            state.select = list[index + 1]

            function resetGridKey(element) {
                element.columns.forEach((column) => {
                    column.list.forEach((el) => {
                        var key = uuid();
                        el.key = key;
                        el.model = el.type + "_" + key;
                        if (el.type === "cascader") {
                            el.options.remoteOption = "cascader_option_" + key;
                        }
                        if (el.type === "grid") {
                            resetGridKey(el);
                        }
                    });
                });
            }
        },
        DELETE_ELEMENT(state, {
            list,
            index
        }) {
            if (list.length - 1 === index) {
                state.select = index ? list[index - 1] : {}
            } else {
                state.select = list[index + 1]
            }

            list.splice(index, 1)
        },
        CLEAR_DATA_LIST(state) {
            state.data.list = []
            state.select = {}
        }
    }
})