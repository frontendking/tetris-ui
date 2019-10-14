<template>
  <div class="TheVideoModal modal fade videoModal" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <iframe width="650" height="400" src="https://www.youtube.com/embed/g1EIFeFF77g" frameborder="0" allow="encrypted-media"></iframe>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheVideoModal'
}
</script>

<style  lang=scss>
.TheVideoModal {
}
</style>
