<template>
  <article id="apply">
    <h1>
      수업신청
    </h1>
    <FormSearchTutor class="FormSearchTutor" />
    <FormSearchClass class="FormSearchClass" />
  </article>
</template>

<script>

import FormSearchTutor from '@/pages/apply/FormSearchTutor'
import FormSearchClass from '@/pages/apply/FormSearchClass'

export default {
  components: { FormSearchClass, FormSearchTutor }
}
</script>

<style lang=scss>
@media (min-width: 960px) {
  #apply {
    font-size: 2rem;
    h1 {

    }
    .FormSearchTutor {
      max-width: 50rem;
    }
    .FormSearchClass {

    }
  }

/*
  article.class-info {
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 5.9rem;
    grid-gap: 0;

    #page-heading {
      display: none;
    }

    > article {
      position: static;
    }

    #class-nav {
      ul {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        font-size: 2.2rem;
        border-bottom: 1px solid #e0e0e0;

        li {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          font-weight: bolder;

          &:active {
            border-bottom: 4px solid #34b4f9;
          }

          &:hover {
            border-bottom: 4px solid #34b4f9;
          }

          a {
            display: block;
            padding: 2.4rem 0;
            width: 100%;
            text-align: center;
            color: #696969;
            font-weight: normal;
          }
        }

        li.active {
          border-bottom: 4px solid #34b4f9;

          a {
            color: #000000;
            font-weight: bold;
          }
        }
      }
    }

    > nav {
      margin-bottom: 5rem;
    }

    #tab_contents {
      margin-bottom: 5rem;
    }
  }
  article.class-info {
    #class-nav {
      ul {
        li.active {
          a {
            color: #ffffff;
            font-weight: bold;
            color: #fff;
            font-weight: bold;
          }

          background-color: #6e737d;
          border-bottom: none;
        }

        background-color: #f7f7f7;
        color: #777;
        font-size: 1.6rem;
        font-weight: 500;
        border: none;

        li {
          display: flex;
          border: 1px solid #e0e0e0;
          border-right: none;

          &:last-child {
            border-right: 1px solid #e0e0e0;
          }

          &:active {
            background-color: #6e737d;
            border-bottom: none;

            a {
              color: #fff;
              font-weight: bold;
            }
          }

          &:hover {
            background-color: #6e737d;
            border-bottom: none;

            a {
              color: #fff;
              font-weight: bold;
            }
          }
        }
      }
    }

    #page-heading {
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      padding: 5.9rem 0 8.1rem;
      font-size: 4.2rem;
      line-height: .96;
      font-weight: 300;
      background-color: #f5f5f5;
    }

    #the-class-footer.sticky {
      position: sticky;
      bottom: 0;
      border-bottom: #e0e0e0 1px solid;
    }

    #the-class-footer {
      bottom: 0;
      border: #e0e0e0 1px solid;
      border-bottom: none;
      background: rgba(73, 150, 216, 1);
    }

    grid-gap: 5.8rem;

    > nav {
      margin-bottom: 0;
    }

    #tab_contents {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
*/

}

</style>
