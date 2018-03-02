<template>
<section class="container wrapper">
  <div class="wrapper">
    <h2 data-aos="fade">Top Rated</h2>

    <ul>
      <li v-for="item in home.topRated" v-bind:key="item.id" data-aos="fade-left">
        <p><nuxt-link v-bind:to="{ name: 'id-id', params: { id: item.id } }">{{ item.webTitle }}</nuxt-link></p>
      </li>
    </ul>
 </div>

 <div class="wrapper">
   <table>
     <tr v-for="(item, index) in home.forexQuotes" v-bind:key="index" data-aos="fade-right">
       <td>{{ item.symbol }}</td>
       <td>{{ item.bid }}</td>
       <td>{{ item.ask }}</td>
       <td>{{ item.price.toFixed(5) }}</td>
     </tr>
   </table>
 </div>
</section>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.getters.home;
    }
  },
  async created() {
    let list = this.getPairList();
    this.$store.dispatch("getForexQuotes", list);
  },
  methods: {
    getPairList() {
      const ids = [
        "eur",
        "jpy",
        "chf",
        "aud",
        "cad",
        "nzd",
        "gbp",
        "sek",
        "nok",
        "mxn",
        "try",
        "zar",
        "cnh"
        // "xau",
        // "xag"
      ];
      let base = "usd",
        pair = "";
      for (let i = 0, j = ids.length; i < j; i++) {
        if (i != j - 1) {
          pair += ids[i] + base + ",";
        } else {
          pair += ids[i] + base;
        }
      }
      return pair.toUpperCase();
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../assets/variables.css";

.container {
  display: grid;
  grid-gap: var(--space);
  padding: 0;
  padding: calc(var(--space) * 2) 0;

  @media (--lg) {
    grid-template-columns: 1fr 1fr;
  }

  @media (--xl) {
    grid-gap: calc(var(--space) * 2);
  }
}

.container > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  & a {
    color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(var(--space) / 2) 0;
  }

  &:not(:first-child) {
    border-top: 1px solid var(--grey);
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

td,
th {
  padding: 0.3em 2.4em 0.3em 0.6em;
}

tr {
  border-bottom: 1px solid var(--grey);

  &:last-of-type {
    border-bottom: 0;
  }
}

td {
  &:nth-child(2),
  &:nth-child(3) {
    font-size: 0.75rem;
    opacity: 0.75;
  }

  &:last-child {
    text-align: right;
  }
}
</style>
