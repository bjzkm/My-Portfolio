import classes from "./style/index.module.scss";

export default function MoreAboutMe() {
  return (
    <section className={classes.moreAboutMe}>
      <h3 className={classes.title}>If you&apos;re not already bored to tears...</h3>
      <p className={classes.descriptions}>
        Here are some things we might be able to bond over in an interview. Or at least you could know more personality:
      </p>

      <ul className={classes.detailList}>
        <li>I love to go on a place like park, beach on my holiday. I love to listen music and sometime i sing with my stupid voice.</li>
        <li>I started coding on 2018 with a lot of help from my brother, he teach me everything and bought me everything to learn coding. And you know what&apos;s the funniest thing - that he paid me money to do work for him :-) actually it is just to teach me.</li>
        <li>Even if i look like cool guys, actually i&apos;m not, i&apos;m a funny guy.</li>
        <li>One last thing is that i&apos;m more handsome than my brother :-).</li>
      </ul>
    </section>
  );
}
