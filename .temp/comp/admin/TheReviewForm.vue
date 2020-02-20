<template>
  <div id="review-form" class="TheReviewForm nav-section modal fade" aria-hidden="true" >
    <div class="ibox modal-dialog">
      <div class="ibox-content modal-content">
        <div class="modal-header assignment-modal-header reviews-pop-header">
          <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <p class="close-modal" data-dismiss="modal"></p>
          <h3 class="modal-title title" id="myModalLabel">
            수강 후기 작성
          </h3>
          <strong class="reviw-index">
            # 1회차 - 1주차
          </strong>
          <p>이번 수업은 어땠나요? 수업을 통해 얻은 것과 느낀점을 수강 후기로 남겨보세요.</p>
          <hr>
        </div>
        <div class="review-area fold-area reviews-pop-content">
          <form class="new_review" id="new_review" action="/learns/reviews?step=2094" accept-charset="UTF-8"
                method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token"
                                                                                value="daC4KzWuFqYxRXzeXRT4pXkQC3Erhy2jS89xmOcKBlV8Tb13zKY5W6NH23p0vdAYnebWQVPf5fEr1gxiOwDdjQ==">
            <ul class="review-list">
              <li>
                <div class="review-grade review-form">
                  <strong class="col-title">
                    별점평가
                    <span class="necessary-content">*</span>
                  </strong>
                  <span class="stars">


    <i class="fa fa-star" data-star="1.0"></i>
    <i class="fa fa-star" data-star="2.0"></i>
    <i class="fa fa-star" data-star="3.0"></i>
    <i class="fa fa-star-o" data-star="4.0"></i>
    <i class="fa fa-star-o" data-star="5.0"></i>
</span>

                  <strong id="rating_score">3.0</strong>
                  <input type="hidden" value="3.0" name="review[rating]" id="review_rating">
                </div>
                <div class="review-post review-form">
                  <strong class="col-title">
                    작성하기
                    <span class="necessary-content">*</span>
                  </strong>
                  <div class="col-content">
                    <textarea rows="3" class="form-control" require="true" placeholder="수강 후기를 작성해 주세요 (30자 이상)"
                              name="review[comment]" id="review_comment"></textarea>
                    <p>
                      지금까지 내가 쓴 수강후기 글자 수
                      <span id="content_length" class="necessary-content">0</span>/30
                    </p>
                  </div>
                </div>
                <div class="review-url review-form">
                  <strong class="col-title">SNS url</strong>
                  <div class="col-content">
                    <input class="form-control" placeholder="https://" type="text" name="review[url]" id="review_url">
                    <p>블로그, 카페 및 SNS에 수강후기(공부일기)를 작성하셨나요? URL을 남겨주세요.</p>
                  </div>
                </div>
                <input type="submit" name="commit" value="등록하기" class="btn btn-sm btn-submit review_save"
                       data-disable-with="등록하기">
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TheReviewForm',
  layout: 'tutor'
}
</script>

<style lang=scss>

</style>
