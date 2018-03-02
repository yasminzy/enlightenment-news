<template>
<article data-aos="fade">
  <h1>Submit a Request</h1>

  <form action="https://formspree.io/yzyusrina@ymail.com" method="POST">
    <input type="email" name="_replyto" placeholder="Email" required>
    <input type="text" name="subject" placeholder="Subject" required>
    <textarea name="description" placeholder="Description" required></textarea>

    <input type="hidden" name="_next" value="https://soedja-challenge.netlify.com" />

    <button class="btn btn-primary" type="submit">SUBMIT</button>
  </form>
</article>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import "../assets/variables.css";

button,
input,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

input,
textarea {
  background-color: var(--white);
  border: 1px solid var(--grey);
  height: var(--space);
  line-height: inherit;
  margin-bottom: calc(var(--space) / 2);
  padding: calc(var(--space) / 2);
  width: 100%;

  &:focus {
    border: 1px solid var(--primary);
    outline: 0;
  }
}

textarea {
  min-height: 10rem;
}

button {
  cursor: pointer;
  text-align: center;
  margin: 0;
  padding: calc(var(--space) / 3) calc(var(--space));
  background-color: var(--primary);
  color: #fff;
  border: 0;
}
</style>
