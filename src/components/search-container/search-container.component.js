// @vue/component
export default {
    data: function () {
        return {
            isIE11: false,
            priceFrom: null,
            toggleState: false,
            priceState: false,
            squareState: false,
            cities: [
                { text: 'Москва', value: '111' },
                { text: 'Санкт-Петербург', value: '112' },
                { text: 'Екатеринбург', value: '113' }
            ],
            types: [
                { text: 'Купить', value: '1' },
                { text: 'Продать', value: '2' },
                { text: 'Снять', value: '3' },
                { text: 'Сдать', value: '4' }
            ],
            estates: [
                { text: 'Офис', value: '1' },
                { text: 'Квартира', value: '2' },
                { text: 'Дом', value: '3' }
            ],
            currency: [
                { text: '₽', value: '643' },
                { text: '$', value: '840' },
                { text: '€', value: '978' }
            ],
        };
    },

    props: {
    },

    mounted () {
        this.isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        console.log('this.isIE11', this.isIE11);
    },

    computed: {
    },

    watch: {
    },

    methods: {
        showSquare () {
            this.squareState = true;
        },
        showPrice () {
            this.priceState = true;
        },
        toggle (value) {
            this.toggleState = value;
        },
        checkForm () {
            // validation && REST or shomething...
        }
    }
};
