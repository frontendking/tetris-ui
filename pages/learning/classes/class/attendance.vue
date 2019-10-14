<template>
  <div id="attend-tab" class="teaching-class-attendance tab-pane m-t-xl active">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="sort-result">총 12 회</h4>
      </div>
    </div>
    <caption id="attend-tab-caption">
      <span class="attendance">출석</span>
      <span class="late">지각</span>
      <span class="absence">결석</span>
    </caption>
    <table class="table table-striped table-bordered text-center">
      <thead>
      <tr class="active">
        <th class="text-center">회차</th>
        <th class="text-center">수업일시</th>
        <th class="text-center">dailydaechi&nbsp;선생님</th>
        <th class="text-center">
          student_10
        </th>
        <th class="text-center">
          student_11
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1회차</td>
        <td>2019-06-18 14:30<br>2019-06-18 20:30</td>
        <td>
          <span class="label label-tardy late">지각</span>
          <p class="check-time">입장. 2019-06-18 14:31:00</p>
        </td>
        <td>
          <span class="label label-attend attendance">출석</span>
          <p class="check-time">입장. 2019-06-18 14:29:21</p>
        </td>
        <td>
          <span class="label label-tardy late">지각</span>
          <p class="check-time">입장. 2019-06-18 14:39:22</p>
        </td>
      </tr>
      <tr>
        <td>2회차</td>
        <td>2018-07-25 00:00<br>2018-07-25 00:00</td>
        <td>
          <span class="label label-absent absence">결석</span>
        </td>
        <td>
          <span class="label label-absent absence">결석</span>
        </td>
        <td>
          <span class="label label-absent absence">결석</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'teaching-class-attendance'
}
</script>

<style lang=scss>
#attend-tab {
  .row {
    float: left;
    margin-right: 0;
  }
  caption#attend-tab-caption {
    display: flex;
    position: relative;
    top: 2.5rem;
    left: 0;
    float: right;
    width: 16rem;
    justify-content: space-between;
  }

  .late, .absence, .attendance {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 4.7rem;
  }
  td {
    vertical-align: middle;
    .late, .absence, .attendance {
      font-size: 0;
      width: auto;
      &:before {
        margin: 0 auto;
      }
    }
  }

  .late {
    display: flex;
    line-height: 1;
    align-items: center;

    &:before {
      content: '';
      display: block;
      background: url('./assets/history.svg') no-repeat center center;
      background-size: contain;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .absence {
    display: flex;
    line-height: 1;
    align-items: center;

    &:before {
      content: '';
      display: block;
      background: url('./assets/cancel.svg') no-repeat center center;
      background-size: contain;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .attendance {
    display: flex;
    line-height: 1;
    align-items: center;

    &:before {
      content: '';
      display: block;
      background: url('./assets/circle.svg') no-repeat center center;
      background-size: contain;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

}
</style>
