<template>
  <a class="link" @click="modalOpen = true">
    Open full screen modal!
  </a>

  <teleport to="body">
    <div v-if="modalOpen"
class="modal">
      <div>
        I'm a modal!
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'ModalButton',
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>

<style lang="scss">
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
}
</style>
