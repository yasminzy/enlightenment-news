<template>
  <article class="wrapper">
    <h1>Submit a Request</h1>

    <form action="https://formspree.io/yzyusrina@ymail.com" method="POST">
      <input
        class="input"
        name="_replyto"
        placeholder="Email"
        required
        type="email"
      />
      <input
        class="input"
        name="subject"
        placeholder="Subject"
        required
        type="text"
      />
      <textarea
        class="textarea"
        name="description"
        placeholder="Description"
        required
      />
      <input
        class="input"
        name="_subject"
        type="hidden"
        value="Enlightenment - Corrections"
      />
      <input
        class="input"
        name="_next"
        type="hidden"
        value="https://enlightenment.netlify.app/submitted"
      />
      <button class="btn btn-primary button" type="submit">SUBMIT</button>
    </form>
  </article>
</template>

<style lang="postcss" scoped>
.button,
.input,
.textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

.textarea {
  min-height: 10rem;
}

.input,
.textarea {
  background-color: var(--light);
  border: 1px solid var(--accent-2);
  height: var(--space);
  line-height: inherit;
  margin-bottom: calc(var(--space) / 2);
  padding: calc(var(--space) / 2);
  width: 100%;

  &:focus {
    border-style: dashed;
    outline: 0;
  }
}

.button {
  background-color: var(--dark);
  border: 0;
  color: #fff;
  cursor: pointer;
  margin: 0;
  padding: calc(var(--space) / 3) calc(var(--space));
  text-align: center;

  &:hover {
    background-color: var(--accent-2);
  }
}
</style>
