function NewsCard(props) {
  return (
    <div className="relative p-4 overflow-hidden duration-300 w-100 hover:-translate-y-3 ">
      <a
        className="text-white transition-colors hover:text-orange-500 dark:hover:text-purple-500 x-8"
        href={props.link}
        title={props.title}
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <img
            className="object-cover w-full h-32 rounded-2xl sm:h-64 md:h-96"
            src={props.image}
            alt=""
            width={600}
            height={400}
          />
          <div className="mx-3">
            <p className="absolute p-2 leading-none bg-neutral-900 bg-opacity-60 bottom-6">
              {props.date}
            </p>
            <h3 className="absolute p-2 leading-tight uppercase bg-contain bottom-14 lg:text-xl bg-opacity-60 bg-neutral-900 md:text-lg sm:text-sm sm:leading-normal">
              {props.title}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
