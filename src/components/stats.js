export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Start adding some Items</p>;
  const total = items.length;
  const packed_items = items.filter((item) => item.packed).length;
  const percent = (packed_items / total) * 100;
  return (
    <footer className="stats">
      {percent === 100
        ? "you are ready to go"
        : `you have ${total} items on your list, and you are ${parseInt(
            percent
          )}% done`}
    </footer>
  );
}
