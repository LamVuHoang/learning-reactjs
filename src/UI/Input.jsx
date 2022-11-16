export function Input(props, ref) {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  return (
    <>
      <input
        {...props}
        
        className="border text-center border-black m-3"
        type="text"
      />
    </>
  );
}
