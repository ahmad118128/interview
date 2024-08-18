export default function SimpleComponent() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>plus</button>
      <br />
      <span>{number}</span>
    </>
  );
}
