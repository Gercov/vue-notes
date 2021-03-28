<template>
    <div class="container">
        <div class="container__input">
            <h2>Создайте свою заметку</h2>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Введите заголовок*" aria-label="Recipient's username" aria-describedby="button-addon2"
                    v-model="header"
                    @keyup.enter='addNote'
                >
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Введите основной текст" aria-label="Recipient's username" aria-describedby="button-addon2"
                    v-model="main"
                    @keyup.enter='addNote'
                >
            </div>
        </div>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2"
            @click='addNote'
        >
            Добавить
        </button>
    </div>
</template>

<script>

export default {
    name: "Input",
    data() {
        return {
            header: '',
            main: '',
        }
    },
    methods: {
        addNote() {
            if(this.header.trim() == "") {
                this.err('Введите заголовок')
                return
            }
            this.$emit('addNote', {
                header: this.header,
                main: this.main,
                date: new Intl.DateTimeFormat('ru-Ru', {day: 'numeric', year: 'numeric', month: 'short'}).format()
            })
            this.header = ""
            this.main = ""
        },
        err(text) {
            this.$message.error(text);
        } 
    },
}
</script>

<style scoped>

</style>