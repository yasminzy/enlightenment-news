<template>
  <section class="container mh-100 wrapper">
    <div v-if="home.topRated[0]" class="div wrapper">
      <h2>Top Rated</h2>

      <ul class="ul">
        <li v-for="item in home.topRated" :key="item.id" class="li">
          <p>
            <nuxt-link :to="{ name: 'id', params: { id: item.id } }" class="a">
              {{ item.webTitle }}
            </nuxt-link>
          </p>
        </li>
      </ul>
    </div>

    <div v-else class="div wrapper" data-aos="fade-left">Loading...</div>

    <div
      v-show="home.exchangeRates.rates"
      class="wrapper"
      data-aos="fade-right"
    >
      <table class="table">
        <caption class="caption">
          Base currency:
          {{
            home.exchangeRates.base
          }}
        </caption>

        <tr class="tr">
          <th>Currency</th>
          <th>Rate</th>
        </tr>

        <tr
          v-for="(item, index) in home.exchangeRates.rates"
          :key="index"
          class="tr"
        >
          <td class="td">{{ item[0] }}</td>
          <td class="td">{{ item[1] }}</td>
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
    // Get foreign exchange rates for the generated options. This will dispatch the action to get the top rated content as well. See store/actions.
    const options = this.getOptions();
    await this.$store.dispatch("getLatestExchangeRate", options);
  },
  methods: {
    getOptions() {
      const base = "USD";
      const symbols = ["AUD", "CAD", "CNY", "EUR", "GBP", "IDR", "JPY", "KRW"];

      let options = `base=${base}&symbols=`;

      for (let i = 0, j = symbols.length; i < j; i++) {
        if (i !== j - 1) {
          options += symbols[i] + ",";
        } else {
          options += symbols[i];
        }
      }
      return options;
    }
  }
};
</script>

<style lang="postcss" scoped>
.container {
  align-items: flex-start;
  display: grid;
  gap: calc(var(--space) / 2);
  padding: calc(var(--space)) 0;

  @media (--md) {
    grid-template-columns: 2fr 1fr;
  }

  @media (--xl) {
    gap: calc(var(--space) * 2);
  }
}

.container > .div {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
}

.ul {
  list-style-type: none;
  padding-left: 0;
}

.li {
  & .a {
    color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(var(--space) / 2) 0;
  }

  &:not(:first-child) {
    border-top: 1px solid var(--dark);
  }
}

.table {
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 1rem;
  max-width: 100%;
  overflow-x: auto;
  padding: 1rem;
  text-align: center;
  width: 100%;
}

.caption {
  margin-bottom: 1rem;
  text-align-last: left;
}

.tr {
  border-bottom: 1px solid var(--light);

  &:nth-child(odd) {
    background-color: var(--accent);
  }

  &:last-of-type {
    border-bottom: 0;
  }
}

.td {
  padding: 0.75rem;
  vertical-align: top;

  &:nth-child(2),
  &:nth-child(3) {
    font-size: 0.75rem;
    opacity: 0.75;
  }
}
</style>
