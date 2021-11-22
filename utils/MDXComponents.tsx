const MDXComponents = {
  a: (props) => (
    <a
      {...props}
      className="text-blue-500 hover:underline focus-visible:outline-black"
    />
  ),
  ol: (props) => <ol {...props} className="mt-3" />,
};

export default MDXComponents;