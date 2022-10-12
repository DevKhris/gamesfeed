function NewsCard(props) {
  return (
    <div className="p-3 hover:-translate-y-3 duration-300 ">
      <a
        className="dark:text-white hover:text-purple-500 transition-colors x-8"
        href={props.link}
        title={props.title}
        rel="noreferrer"
        target="_blank"
      >
        <article className="">
          <img
            className="rounded-2xl object-cover"
            src={props.image}
            alt=""
            width={600}
            height={400}
          />
          <p className="">{props.date}</p>
          <h2 className="uppercase ">{props.title}</h2>
          <br />
        </article>
      </a>
    </div>
  );
}

export default NewsCard;
