<template>
  <div class="mt-2 danger-zone">
    <el-row type="flex" justify="end">
      <p class="danger-zone-text">Danger Area</p>
    </el-row>
    <el-row type="flex" justify="end">
      <el-button plain type="default" @click="resetPoints()">Reset Points</el-button>
      <el-button type="danger" @click="resetGame()">Reset All</el-button>
      <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose">
        <h3>{{ msg[mode] }} <span class="emoji">🤔</span></h3>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <template v-if="mode === 'points'">
            <el-button type="primary" @click="emitEv('resetPoints')">Confirm</el-button>
          </template>
          <template v-else>
            <el-button type="primary" @click="emitEv('resetGame')">Confirm</el-button>
          </template>
        </span>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'UsersButtons',
    data () {
      return {
        dialogVisible: false,
        title: '',
        mode: '',
        msg: {
          game: 'Are you sure you want to delete all data?',
          points: 'Are you sure you want to reset all user points to zero?'
        }
      }
    },
    methods: {
      resetPoints () {
        this.title = 'Reset Points'
        this.mode = 'points'
        this.dialogVisible = true
      },
      resetGame () {
        this.mode = 'game'
        this.title = 'Reset Game'
        this.dialogVisible = true
      },
      emitEv (ev) {
        this.$emit(ev)
      },
      handleClose () {
        this.title = ''
        this.mode = ''
        this.dialogVisible = false
      }
    }
  }
</script>

<style scoped>
  .mt-2 {
    margin-top: 20px;
  }
  .emoji {
    font-size: 50px;
    vertical-align: middle;
  }

  .danger-zone:hover .danger-zone-text {
    color: #444;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  .danger-zone-text {
    transition: all 0.3s ease;
    font-size: 14px;
    color: #ccc
  }
</style>
