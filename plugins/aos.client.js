import AOS from "aos";

export default ({ app }) => {
  app.AOS = new AOS.init({ once: true }); // eslint-disable-line new-cap
};
