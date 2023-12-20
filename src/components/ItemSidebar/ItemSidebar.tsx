import "./item-sidebar.css";

interface ItemHeaderProps {
  name: string;
}

const ItemSidebar = (props: ItemHeaderProps) => {
  const { name } = props;
  return (
    <>
      <div className="itemSidebar">{name}</div>
    </>
  );
};

export default ItemSidebar;
