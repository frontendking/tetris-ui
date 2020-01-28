<template>
  <div class="st_personal-service">
    <a href="//www.conects.com" class="bi">Conects</a>
    <dl class="this-service">
      <dt class="depth-01">
        <a href="/elementary" class="link-service active" id="current-interest" data-interest="167">유·초등</a>
      </dt>
      <dd class="depth-02">
        <a href="/elementary" class="selected">일간대치동</a>
        <ul class="list">
          <li>
            <a href="/elementary">일간대치동</a>
          </li>
          <li>
            <a href="https://www.kidsschole.com/" target="_blank">키즈스콜레</a>
          </li>
          <li>
            <a href="/edu" target="_blank">튜터닷컴 초등</a>
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
  </div>
</template>

<script>
export default {
  name: 'TheLayoutHeaderGNBNavList',
  data () {
    return {
      data:[
        {
          label: '일간대치동',
          url: '/elementary'
        },
        {
          label: '키즈스콜레',
          url: 'https://www.kidsschole.com/'
        },
        {
          label: '튜터닷컴 초등',
          url: '/edu'
        }
      ]
    }
  }
}
</script>

<style lang=scss>
.TheLayoutHeaderGNBNavList {
}
</style>
