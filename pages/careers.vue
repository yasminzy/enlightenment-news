<template>
<article data-aos="fade">
  <h1>We're hiring!</h1>

  <p>Build a career without boundaries. Do work that matters, with the flexibility to pursue your passion wherever it leads. Bring your ambition to make a difference. We’ll bring a world of opportunities.</p>

  <ul>
    <li v-for="(item, index) in vacancies" v-bind:key="index">
      <h2>{{ item.title }}</h2>

      <p>{{ item.scope }}</p>

      <h3>Qualifications</h3>

      <ul>
        <li v-for="(subitem, index) in vacancies[index].qualifications" v-bind:key="index">
          {{ subitem }}
        </li>
      </ul>

      <h3>Responsibilities</h3>

      <ul>
        <li v-for="(subitem, index) in vacancies[index].responsibilities" v-bind:key="index">
          {{ subitem }}
        </li>
      </ul>
    </li>
  </ul>
</article>
</template>

<script>
import { urlize } from "~/assets/functions.js";

export default {
  data() {
    return {
      vacancies: [
        {
          title: "ERP Programmer",
          scope:
            "Erp programmers are responsible for converting a software program design into a set of instructions that computers can follow. This requires proficiency in a variety of common programming languages. The position requires a technology-savvy professional who is able to work in a small-group team setting and also communicate and collaborate cross-function with the other divisions in the organization.",
          qualifications: [
            "Must possess at least a Bachelor's Degree in computer science, must have a basic technical knowledge of Web Programming and have strong OOP experience with PHP.",
            "Must be familiar website technology update and have knowledge in programming languages and environments including CSS, HTML, XML, and Json (understanding CI, Java Script, AJAX, JQuery).",
            "Having technical knowledge of Source Code Management Revision Control such as Subversion, Git.",
            "Preferably having 1 - 3 years of working experience in similar position",
            "Experienced in application & software development in ERP (HRIS / Accounting System)",
            "Excellent knowledge of MySQL & SQL Server databases",
            "Please describe your skill & knowledge on CV with .pdf format & send to jobs[at]enlightenment[dot]com",
            "Please state position code in the e-mail subject: ERP Programmer"
          ],
          responsibilities: [
            "Responsible for keeping websites and computer programs operating properly",
            "Must direct a team of developers on software development, helping to launch new programs in order to fulfill the needs of the business.",
            "Web Programmers may define the software framework from existing software technologies as well as from scratch."
          ]
        },
        {
          title: "Journalist",
          scope:
            "This role will drive the production of high-standard feature and news content for enlightenment.com, working extensively with senior journalists. A strong candidate should be able to demonstrate an aptitude for feature writing, making news stories more universally appealing, and a good wider knowledge of global news and politics.",
          qualifications: [
            "Candidate must possess at least a Bachelor's Degree in any background, fresh Graduates/Entry Level applicants are encouraged to apply.",
            "Requires an able writer of accessible, engaging, accurate copy who can produce quality content to deadline. Experience in Campus Press/Student Media is strongly desired.",
            "Must have a strong curiosity for news, politics & law, understanding of current events and knowledge of world geography.",
            "Excellent command of spoken and written English and Bahasa Indonesia, other native language experience will be an advantage",
            "Social Media and online media savvy.",
            "Must show initiative, self-motivation and work well under pressure and/or in a fast paced environment.",
            "Please describe your skill & knowledge on CV with .pdf format & send to recruitment[at]enlightenment[dot]com",
            "Please state position code in the e-mail subject: Journalist"
          ],
          responsibilities: [
            "The journalist will do the reportage, conduct the interview and craft it into a strong written story. Journalists will also perform research-based writing as assigned.",
            "Applicants must be proficient in writing articles that cover broad areas (politics, law & general news) and propose ways to pull together or link stories thematically and geographically to add depth to coverage of issues."
          ]
        },
        {
          title: "Web Programmer",
          scope:
            "Web programmers are responsible for converting a software program design into a set of instructions that computers can follow. This requires proficiency in a variety of common programming languages. The position requires a technology-savvy professional who is able to work in a small-group team setting and also communicate and collaborate cross-function with the other divisions in the organization.",
          qualifications: [
            "Must possess at least a Bachelor's Degree in computer science, must have a basic technical knowledge of Web Programming and have strong object-oriented programming experience with PHP & Java Script.",
            "Must be familiar with Linux Operation, W3C Standard, website technology update and have knowledge in programming languages and environments including CSS, HTML, XML, and Json (understanding Java Script, AJAX, Action Script and Ruby will be an advantage).",
            "Having technical knowledge of Source Code Management Revision Control such as Subversion, Git, etc.",
            "Preferably having 2 - 3 years of working experience in similar position.",
            "Experienced in application & software development.",
            "Excellent knowledge of MySQL or PostgreSQL databases.",
            "Please describe your skill & knowledge on CV with .pdf format & send to it[at]enlightenment[dot]com.",
            "Please state position code in the e-mail subject: Web Programmer."
          ],
          responsibilities: [
            "Design and implement large scale and high performance Web 2.0 applications.",
            "Responsible for keeping websites and computer programs operating properly.",
            "Must direct a team of developers on software development, helping to launch new programs in order to fulfill the needs of the business.",
            "Web Programmers may define the software framework from existing software technologies as well as from scratch."
          ]
        }
      ]
    };
  },
  methods: {
    urlize
  }
};
</script>

<style lang="postcss" scoped>
</style>
