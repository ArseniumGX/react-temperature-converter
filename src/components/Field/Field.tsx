import { FieldType } from "../../types/FieldType";

export default function Field({ value, onchange, temperature }: FieldType) {
  return (
    <div className='styles.field'>
      <label htmlFor={temperature}>{temperature}</label>
      <input
        type='number'
        name={temperature}
        id={temperature}
        value={value}
        onChange={(e) => onchange(e.target.value)}
      />
    </div>
  );
}
