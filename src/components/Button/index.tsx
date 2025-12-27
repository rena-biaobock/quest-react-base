type Props = {
  label: string;
};

const showLabel = (label: string) => {
  alert(`A label desse botão é ${label}`);
};

export const Button = ({ label }: Props) => {
  return <button onClick={() => showLabel(label)}>{label}</button>;
};
