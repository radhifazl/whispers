<template>
  <Transition name="fade">
    <button class="btn-edit" @click="$emit('edit')" v-if="val">
        Change
    </button>
  </Transition>
</template>

<script>
export default {
    name: 'EditButton',
    props: [
        'val'
    ]
}
</script>

<style>
.btn-edit {
    border: none;
    outline: none;
    background: var(--primary-color);
    padding: 0.5rem 2rem;
    color: #FFF;
    transition: 0.3s ease-in-out;
    margin-bottom: -0.5rem;
}

.btn-edit:hover {
    background: var(--darker-primary-color);
}
.fade-enter-active {
    animation: fadeIn 0.2s ease-in-out;
}

.fade-leave-active {
    animation: fadeOut 0.2s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>