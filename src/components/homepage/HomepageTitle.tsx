const HomepageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="md:text-title text-mobileTitle font-honerThose mt-8">
      {title}
    </h1>
  );
};

export default HomepageTitle;
