const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscrive now</p>
      <p className="text-gray-400 mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
        assumenda rem in nihil voluptatem at. Quam quis magnam veniam quod
        ratione repudiandae nisi, ipsam accusantium, dicta nam recusandae
        molestiae et?
      </p>
      <form
        onSubmit={onSubmitHandler}
        action=""
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
          required
          name=""
          id=""
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
