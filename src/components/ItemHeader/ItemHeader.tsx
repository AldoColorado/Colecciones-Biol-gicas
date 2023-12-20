import "./item-header.css";

interface ItemHeaderProps {
  name: string;
}

const ItemHeader = (props: ItemHeaderProps) => {
  const { name } = props;
  return (
    <>
      <div className="itemHeader">{name}</div>
    </>
  );
};

export default ItemHeader;
