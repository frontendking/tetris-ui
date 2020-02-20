<template>
  <div class="BaseInputFileUpload col-sm-10" style="padding-top: 10px;">
    <div id="assignment-details-edit-2230-files">
      <div class="nested-fields row" style="background-color: #e0e0e0; border: 0.5px solid #999999;">
        <div class="col-sm-1" style="padding-right: 2px; padding-bottom: 3px;">
          <i class="fa fa-file-o"></i>
        </div>
        <div class="col-sm-9">
          <input class="col-sm-9" style="padding: 3px 0; font-size: 12px;" type="file" name="student_assignment[attachments_attributes][1571209184499][attachment]" id="student_assignment_attachments_attributes_1571209184499_attachment">
        </div>
        <div class="col-sm-2 text-right">
          <input value="false" type="hidden" name="student_assignment[attachments_attributes][1571209184499][_destroy]" id="student_assignment_attachments_attributes_1571209184499__destroy">
          <a style="color: black !important" class="remove_fields dynamic" href="#">
            <i class="fa fa-times-circle"></i>&nbsp;
          </a>
        </div>
      </div>
    </div>
    <a
      class="btn btn-sm btn-default bg-white add_fields"
      style="margin: 5px 0 0 -15px;"
      href="#"
    >
      <span>파일 업로드</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseInputFileUpload'
}
</script>

<style lang=scss>
.BaseInputFileUpload {
}
</style>
