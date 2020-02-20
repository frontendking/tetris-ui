<template>
  <nav id="the-header-conects-gnb" class="st_personal-service">
    <a href="//www.conects.com" class="bi">Conects</a>
    <dl class="this-service">
      <dt class="depth-01">
        <a href="" target="_self" class="link-service active" id="current-interest" data-interest="167">초등교육</a>
      </dt>
      <dd class="depth-02">
        <a href="/daechi/ip/9900pass" class="selected">일간대치동</a>
        <ul class="list acive">
          <li>
            <a href="" target="_self">일간대치동</a>
          </li>
          <li>
            <a href="https://www.conects.com/common/template/feed?category_id=167" target="_blank">커뮤니티</a>
          </li>
        </ul>
      </dd>

    </dl>
    <div class="interesting-service">
      <div class="interestings">
        <div>
          <ul id="gnb-interests-list">
            <li style="display: inline-block;" data-interest-code="38">
              <a href="https://skyedu.conects.com/go3/main" class="link-service">대입·수능</a>
            </li>
            <li style="display: inline-block;" data-interest-code="55">
              <a href="https://eng.conects.com/" class="link-service">어학·회화</a>
            </li>
            <li style="display: inline-block;" data-interest-code="160">
              <a href="https://gongin.conects.com/" class="link-service">공인중개사</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheConectsGnb',
}
</script>

<style lang=scss>
/*@import "../../assets-conects";*/
@import '~@/assets/style/global.scss';

#the-header-conects-gnb {
  .link-service:hover, .link-service.active {
    background-color: #29b6f6;
    color: #fff;

  }
  .link-service {
    display: inline-block;
    height: 32px;
    padding: 0 13px;
    background-color: #fff;
    border-radius: 16px;
    -webkit-box-shadow: 0 3px 8px rgba(171,171,171,0.4);
    box-shadow: 0 3px 8px rgba(171,171,171,0.4);
    color: #7f7f7f;
    font-size: 15px;
    line-height: 32px;
    font-weight: bold;
  }
  .this-service {
    position: relative;
    z-index: 2;
    float: left;
    margin-left: 10px;
  }
  .this-service .depth-02 {
    position: relative;
    float: left;
    margin-left: -10px;
  }
.this-service .selected {
    display: block;
    position: relative;
    height: 32px;
    padding: 0 25px 0 20px;
    border-radius: 0 16px 16px 0;
    background-color: #fff;
    -webkit-box-shadow: 0 3px 8px rgba(171,171,171,0.4);
    box-shadow: 0 3px 8px rgba(171,171,171,0.4);
    color: #333;
    font-size: 15px;
    line-height: 32px;
    font-weight: bold;
  }
  .this-service .list {
    &:active {
      display: block;
    }
    position: absolute;
    left: 0;
    top: 32px;
    padding: 16px 34px 16px 23px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
  }
}
</style>
