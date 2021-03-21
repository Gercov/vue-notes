<template>
    <div class="container">
        <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ head }}</h5>
                <small class="text-muted">{{ date }}</small>
                <button type="button" class="btn-close" aria-label="Close"
                    @click="$emit('delete')"
                ></button>
            </div>
            <p class="mb-1">{{ maintext }}</p>
        </a>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ['head', 'maintext', 'date']
}
</script>

<style scoped>
    .text-muted {
        margin-left: auto;
    }

    .btn-close {
        margin-left: 20px;
    }
</style>