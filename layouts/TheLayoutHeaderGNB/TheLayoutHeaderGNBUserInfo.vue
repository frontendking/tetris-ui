<template>
  <div class="st_conects-util">
    <ul>
      <li>
        <a href="javascript:login()">커넥츠 로그인</a>
      </li>
      <li>
        <a href="https://member.conects.com/member/join?redirect_url=https://daechi.conects.com/elementary/ip/9900pass">회원가입</a>
      </li>

      <li>
        <a href="https://my.conects.com/cart/cart">장바구니</a>
      </li>

      <li>
        <a href="/elementary/main/frame?url=/help/cs" class="link-cs">고객섬김센터</a>
      </li>

      <li><a href="https://my.conects.com">내보관함</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheLayoutHeaderGNBUserInfo'
}
</script>

<style lang=scss>

.st_conects-util {
  position: absolute;
  right: 30px;
  top: 27px;

  ul {
    float: left;
  }

  li {
    float: left;
    margin-left: 14px;

    a {
      display: block;
      color: #333;
      font-size: 13px;
      font-weight: bold;
    }
  }

  .myarea {
    display: block;
    position: relative;
    float: left;
    margin-right: 4px;
    white-space: nowrap;

    .my {
      display: block;
      padding-right: 12px;
      color: #333;
      font-size: 13px;
      font-weight: bold;

      &:after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 11px;
        width: 9px;
        height: 5px;
        background: url("//static.conects.com/common/img/st-comm-v3/blt-arr-06.png?v=4dd0638") no-repeat left bottom;
      }

      .name {
        font-weight: bold;
      }
    }

    .mymenu {
      display: none;
      position: absolute;
      left: 50%;
      top: 25px;
      width: 500px;
      height: 0px;
      margin-left: -255px;
      text-align: center;

      > span {
        display: inline-block;
        position: relative;
        min-width: 60px;
        padding: 12px 16px;
        border: 1px solid #999;
        background-color: #fff;
        text-align: left;

        &:after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: -6px;
          width: 100%;
          height: 6px;
          background: url("//static.conects.com/common/img/st-comm-v3/blt-balloon-03.png?v=4dd0638") no-repeat center top;
        }
      }
    }

    .wrap-name {
      display: block;
      margin-bottom: 15px;
      font-size: 14px;
      color: #666;
    }

    .name {
      color: #000;
      font-weight: bold;
    }

    .btn-logout {
      display: inline-block;
      height: 14px;
      padding: 0 2px;
      border: 1px solid #999;
      border-radius: 3px;
      color: #999;
      font-size: 8px;
      line-height: 12px;
      vertical-align: middle;
    }

    .info {
      display: block;
      margin-top: 4px;
      color: #666;
      font-size: 14px;

      &:hover {
        a {
          border-bottom: 1px solid #666;
          font-weight: bold;
        }
      }
    }

    .activity {
      display: block;
      margin-top: 4px;
      color: #666;
      font-size: 14px;
      margin-top: 7px;

      &:hover {
        a {
          border-bottom: 1px solid #666;
          font-weight: bold;
        }
      }
    }

    .attend {
      display: block;
      margin-top: 4px;
      color: #666;
      font-size: 14px;

      &:hover {
        a {
          border-bottom: 1px solid #666;
          font-weight: bold;
        }
      }
    }

    .logout {
      display: block;
      margin-top: 4px;
      color: #666;
      font-size: 14px;
      margin-top: 7px;

      &:hover {
        a {
          border-bottom: 1px solid #666;
          font-weight: bold;
        }
      }
    }
  }

  .myarea.active {
    .my {
      &:after {
        background-position: left top;
      }
    }

    .mymenu {
      display: block;
    }
  }

  .notification {
    position: relative;
    float: left;
    margin-left: 12px;

    .notification-1depth {
      display: inline-block;
      color: #333;
      font-size: 13px;
      font-weight: bold;
      vertical-align: top;

      &:hover {
        color: #000;
      }
    }

    .ico-new-notification {
      display: none;
      width: 15px;
      height: 15px;
      margin-top: 5px;
      background: url("//static.conects.com/common/img/st-comm-v3/ico-new-notification.png?v=4dd0638") no-repeat left top;
      overflow: hidden;
      color: #fff;
      *font-size: 0;
      *line-height: 0;
      text-indent: -999px;
      *text-indent: 0;
      vertical-align: top;
    }

    .ico-new-notification.on {
      display: inline-block;
    }

    .notification-list {
      display: none;
      position: absolute;
      left: 50%;
      top: 25px;
      width: 500px;
      text-align: center;
      margin-left: -245px;

      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: -5px;
        width: 100%;
        height: 6px;
        background: url("//static.conects.com/common/img/st-comm-v3/blt-balloon-03.png?v=4dd0638") no-repeat center top;
      }

      > table {
        width: 282px;
        margin: 0 auto;
        border: 1px solid #999;
        background-color: #fff;
        text-align: left;

        thead {
          th {
            padding: 13px 0;

            > div {
              position: relative;
              padding: 0 18px;
            }
          }

          .tit {
            color: #666;
            font-weight: bold;
            font-size: 14px;
          }

          a.all-delete {
            position: absolute;
            right: 18px;
            top: 0;
            height: 18px;
            padding: 0 7px;
            border: 1px solid #999;
            border-radius: 3px;
            color: #666;
            font-weight: normal;
            font-size: 12px;
          }
        }

        tbody {
          .no-list {
            td {
              height: 209px;
              text-align: center;
              color: #666;
              font-size: 14px;
              line-height: 25px;
            }
          }

          .comment-list {
            td {
              > div {
                position: relative;
                margin: 0 16px;
                padding: 6px 0;
                border-top: 1px solid #999;
              }
            }

            &:first-child {
              td {
                > div {
                  border-top: 0;
                }
              }
            }
          }

          .comment-list.off {
            .comment-icon {
              background-color: #999;
            }

            .comment {
              a {
                color: #999;
              }
            }
          }

          .comment {
            font-size: 12px;
            line-height: 18px;

            > div {
              position: relative;
            }
          }

          .comment-icon {
            display: inline-block;
            width: 5px;
            height: 5px;
            margin-top: 5px;
            border-radius: 50%;
            background-color: #29b6f6;
            vertical-align: top;
          }

          .comment-conts {
            display: inline-block;
            max-width: 180px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            &:hover {
              text-decoration: underline;
            }

            .comment-title {
              font-weight: bold;
            }
          }

          .comment-path {
            display: block;
            padding-left: 10px;
            color: #999;
          }

          .close {
            display: block;
            position: absolute;
            right: 0;
            top: 50%;
            height: 18px;
            margin-top: -9px;
            color: #999;
            line-height: 18px;
          }
        }

        tfoot {
          border-top: 1px solid #999;

          td {
            padding: 10px 0;

            > div {
              padding: 0 16px;
            }

            a.list-view {
              color: #666;
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .notification.active {
    .notification-list {
      display: block;
    }
  }
}

.st-conects-util {
  position: absolute;
  right: 20px;
  top: 9px;
}

</style>
