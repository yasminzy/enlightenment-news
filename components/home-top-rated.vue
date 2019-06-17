<template>
  <section class="container wrapper">
    <div class="wrapper">
      <h2 data-aos="fade">Top Rated</h2>

      <ul>
        <li v-for="item in home.topRated" :key="item.id" data-aos="fade-left">
          <p>
            <nuxt-link :to="{ name: 'id-id', params: { id: item.id } }">{{
              item.webTitle
            }}</nuxt-link>
          </p>
        </li>
      </ul>
    </div>

    <div class="wrapper">
      <table>
        <caption>
          Base currency:
          {{
            home.fixerRates.base
          }}
        </caption>

        <tr>
          <th>Currency</th>
          <th>Rate</th>
        </tr>

        <tr
          v-for="(item, index) in home.fixerRates.rates"
          :key="index"
          data-aos="fade-right"
        >
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
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
    // Get Fixer exchange rate for the generated symbols. This will dispatch the action to get the top rated content as well. See store/actions.
    const symbols = this.getSymbols();
    await this.$store.dispatch("getLatestExchangeRate", symbols);
  },
  methods: {
    getSymbols() {
      const symbolsList = [
        "USD",
        "AUD",
        "CAD",
        "CNY",
        "GBP",
        "IDR",
        "JPY",
        "KRW",
        "SAR"
      ];
      let symbols = `symbols=`;
      for (let i = 0, j = symbolsList.length; i < j; i++) {
        if (i !== j - 1) {
          symbols += symbolsList[i] + ",";
        } else {
          symbols += symbolsList[i];
        }
      }
      return symbols;
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  gap: var(--space);
  padding: 0;
  padding: calc(var(--space) * 2) 0;

  @media (--md) {
    grid-template-columns: 2fr 1fr;
  }

  @media (--xl) {
    gap: calc(var(--space) * 2);
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
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 1rem;
  max-width: 100%;
  text-align: center;
  overflow-x: auto;
  width: 100%;
  padding: 1rem;
}

caption {
  text-align-last: left;
  margin-bottom: 1rem;
}

tr {
  border-bottom: 1px solid var(--grey);

  &:nth-child(odd) {
    background-color: var(--grey-100);
  }

  &:last-of-type {
    border-bottom: 0;
  }
}

td {
  padding: 0.75rem;
  vertical-align: top;

  &:nth-child(2),
  &:nth-child(3) {
    font-size: 0.75rem;
    opacity: 0.75;
  }
}
</style>
