type Props = {
  title: string;
};

function HeaderTitle({ title }: Props) {
  return (
    <div className="max-w-7xl mx-auto mb-8">
      <div className="w-full h-full flex items-end">
        <div className="h-full pb-6 lg:px-0">
          <h3 className="top-0 font-sans text-4xl lg:text-6xl uppercase  font-black tracking-tight">
            {title}
            <span className="opacity-10 text-black pl-4">&#47;&#47;</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HeaderTitle;
