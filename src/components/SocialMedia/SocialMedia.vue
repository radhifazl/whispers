<template>
  <div class="social-media-wrapper">
      <div class="sm mb-3" v-for="media in medias" :key="media.name">
          <a :href="media.link" :class="'sm-link ' +media.name+'-link'">
              <i :class="media.icon"></i>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SocialMediaWrapper',
    data() {
        return {
            medias: [
                {
                    name: 'Instagram',
                    link: 'https://www.instagram.com/difazl/',
                    icon: 'bx-fw bx bxl-instagram-alt'
                },
                {
                    name: 'GitHub',
                    link: 'https://github.com/radhifazl',
                    icon: 'bx-fw bx bxl-github'
                },
                {
                    name: 'Twitter',
                    link: 'https://twitter.com/radhiffazli',
                    icon: 'bx-fw bx bxl-twitter'
                },
            ]
        }
    }
}
</script>

<style>
.social-media-wrapper {
    position: fixed;
    right: 5%;
}
.sm {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgb(212,212,212);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.sm:hover {
    background: #FFF;
}

.sm:first-child:hover .sm-link i {
    color: var(--instagram-color);
}

.sm:nth-child(2):hover .sm-link i {
    color: var(--github-color);
}

.sm:nth-child(3):hover .sm-link i {
    color: var(--twitter-color);
}

.sm .sm-link i {
    font-size: 2rem;
    color: var(--primary-color);
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 868px) {
    .social-media-wrapper {
        width: 100%;
        bottom: 5%;
        right: 0;
        left: 5%;
        display: flex;
        align-items: center;
    }

    .sm, .sm:hover {
        background: transparent;
    }

    .sm:first-child .sm-link i {
        color: var(--instagram-color);
    }

    .sm:nth-child(2) .sm-link i {
        color: var(--github-color);
    }

    .sm:nth-child(3) .sm-link i {
        color: var(--twitter-color);
    }
}
</style>