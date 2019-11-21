<template>
  <div id="daechi_math_release">
    <aside>
      <h1>banner</h1>
      <a href="/edu/ip/elementary_free_promotion" class="">
        <img src="/elementary/resources/img/introduction/math/ban_top.png" alt="무료체험 신청하기">
      </a>
      <a href="/daechi/ip/9900popup_consulting" class="counsel">
        <img src="/elementary/resources/img/introduction/math/ban_float.png" alt="상담신청">
      </a>
    </aside>
    <article >
      <header><img src="/elementary/resources/img/introduction/math/pages-pc/Layer2.png" alt="this is header contents images">

      </header>
      <section><img
        src="/elementary/resources/img/introduction/math/pages-pc/Layer3.png"
        alt="this is header contents images"
      >
        <iframe
          id="movie"
          src="https://www.youtube.com/embed/TuvNqjYX084"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen">
        </iframe>
      </section>
      <section><img src="/elementary/resources/img/introduction/math/pages-pc/Layer4.png" alt="this is header contents images">

      </section>
      <section><img src="/elementary/resources/img/introduction/math/pages-pc/Layer5.png" alt="this is header contents images">

      </section>
      <section><img src="/elementary/resources/img/introduction/math/pages-pc/Layer6.png" alt="this is header contents images">

      </section>
      <section><img src="/elementary/resources/img/introduction/math/pages-pc/Layer7.png" alt="this is header contents images">

      </section>
      <section><img src="/elementary/resources/img/introduction/math/pages-pc/Layer7.png" alt="this is header contents images">

      </section>
      <section><img src="/elementary/resources/img/introduction/math/pages-pc/Layer8.png" alt="this is header contents images">

      </section>
      <section><img src="/elementary/resources/img/introduction/math/pages-pc/Layer9.png" alt="this is header contents images">

      </section>
      <footer>
        <a href=""></a><img src="/elementary/resources/img/introduction/math/pages-pc/Layer10.png" alt="this is header contents images">

      </footer>


    </article>

  </div>
</template>

<script>
export default {
  name: 'daechi_math_release'
}
</script>

<style lang=scss>
@import '@/assets/style/global.scss';

#daechi_math_release {
  img {
    width: 100%;
  }

  section {
    position: relative;
  }

  iframe {
    position: absolute;
    left: 10.5rem;
    width: 43rem;
    height: 27rem;
    top: 63.5rem;
    border-radius: 1rem;
    border: 6px solid #2595fe;
    background-image: url('/elementary/resources/img/introduction/math/movie-thumbnail.png');
    background-size: cover;
  }

  aside {
    h1 {
      display: none;
    }

    a.counsel {
      position: fixed;
      top: 10rem;
      right: 2rem;
      box-shadow: 0.4rem 0.3rem 1.3rem -0.4rem #444;
      border-radius: 50%;
      z-index: 1;
      width: 10rem;
      height: 10rem;
    }
  }

  footer {
    position: relative;

    a {
      width: 33.6rem;
      display: block;
      position: absolute;
      bottom: 0;
      left: 3.2rem;
      height: 6.7rem;
      border-radius: 1rem;
    }
  }
}

@media (min-width: 960px) {
  #daechi_math_release {
    background-color: #00278b;

    aside {
      width: 50%;
      margin: 0 auto;
      padding: 2% 0;

      a.counsel {
        position: fixed;
        box-shadow: 0.8rem 0.6rem 2.6rem -0.8rem #444;
        border-radius: 50%;
        z-index: 1;
        top: 17rem;
        right: 5rem;
        width: 10rem;
        height: 10rem;
      }
    }

    iframe {
      position: absolute;
      left: 15.5%;
      width: 69%;
      height: 28%;
      top: 68%;
      border-radius: 3rem;
      border: 6px solid #2595fe;
      background-image: url('/elementary/resources/img/introduction/math/movie-thumbnail.png');
      background-size: cover;
    }

    footer {
      a {
        width: 84.1%;
        display: block;
        position: absolute;
        bottom: 0;
        left: 8%;
        height: 13.5%;
        border-radius: 3rem;
      }
    }
  }
}
</style>
