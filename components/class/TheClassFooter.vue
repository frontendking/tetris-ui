<template>
  <footer class="TheClassFooter">
    <div id="class-permit-summary">
      <div class="title">마감까지</div>
      <div id="class-permit-summary-goods">
        <div class="badge-round"><span id="rest-date">{{data.restDate}}</span> <span>일 남음</span></div>
        <span class="vertical-line">|</span>
        <div class="badge-round"><span id="reset-seat">{{data.restSeat}}</span> <span>자리 남음</span></div>
      </div>
      <div>
        <div id="class-account">총 {{data.classAccount}}회</div>
        <div><span id="class-price">55,000</span><strong>원</strong></div>
      </div>
    </div>
    <a v-for="v in data.buttons" :url="v.url" :class="{disabled: !v.active}">{{v.label}}<span>></span></a>
  </footer>
</template>

<script>
export default {
  name: 'TheClassFooter',
  props: ['data']
}
</script>

<style lang=scss>
@import '~@/assets/style/global.scss';

.TheClassFooter {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(5, auto);
  grid-gap: 1rem;
  padding: 2.6rem;

  #class-permit-summary {
    background-color: $gray-light;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1.5fr 1fr;

    padding: 3.2rem 4rem;
    justify-content: stretch;
    font-size: 2.2rem;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
      &:last-child {
        border-top: #e0e0e0 solid 1px;
        padding-top: 4rem;
      }
    }
    > div#class-permit-summary-goods {
      padding-bottom: 1rem;
      .vertical-line {
        font-size: 3.5rem;
        color: #e3e3e3;
      }
    }

    .title {
      display: flex;
      justify-content: center;
      align-self: flex-start;
      font-size: 2.2rem;
    }

    .badge-round {
      background-color: #ededed;
      border: #e0e0e0 solid 1px;
      font-weight: bold;
      justify-self: center;
      padding: 2rem 4rem;
      border-radius: 21% / 50%;
      line-height: 1;
      span {
        display: inline-block;
        &:first-child {
          color: #00b9fd;
          font-size: 4.2rem;
          font-weight: bold;
        }
      }
    }

    #class-account {
      background-color: #00b9fd;
      color: #ffffff;
      justify-self: center;
      align-self: center;
      padding: 0.9rem 1.6rem;
      border-radius: 25% /50%;
    }

    #class-price {
      font-size: 5.2rem;
      font-weight: bold;
    }

  }
  a {
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #00b9fd;
    padding: 3.7rem 3.3rem;
    color: #ffffff;
    font-size: 2.6rem;
    font-weight: bold;
    border-radius: 1%/5%;
    &.disabled {
      background-color: #9ea2a4;
    }
    span {
      position: absolute;
      right: 5%;
      font-weight: normal;
    }
  }
}
</style>
