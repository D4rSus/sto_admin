import {createStore} from 'vuex'

const orderinfo = createStore({
    state() {
        return {
            cols: [
                {title: 'ID', name: 'id'},
                {title: 'Фамилия', name: 'surname'},
                {title: 'Имя', name: 'name'},
                {title: 'Отчество', name: 'dad_name'},
                {title: 'Телефон', name: 'phone'},
                {title: 'Модель авто', name: 'car'},
                {title: 'Услуга', name: 'services'},
                {title: 'Действия', name: 'for_action'}
            ],
            rows: JSON.parse(window.localStorage.getItem('rows')) || []
        }
    },
    mutations: {
        addRow(state, row) {
            state.rows.push({
                surname: row.surname,
                name: row.name,
                dad_name: row.dad_name,
                phone: row.phone,
                car: row.car,
                services: row.services,
                for_action: row.for_action,
                id: (Math.max.apply(null, [0, ...state.rows.map(({id}) => id)])) + 1
            })
            window.localStorage.setItem('rows', JSON.stringify(state.rows))
        },
        removeRow(state, id) {
            state.rows.splice(state.rows.findIndex(({id: prodId}) => id === prodId), 1)
            window.localStorage.setItem('rows', JSON.stringify(state.rows))
        }
    },
    actions: {
        removeRow({commit}, id) {
            commit('removeRow', id)
        }
    }
})

export default orderinfo