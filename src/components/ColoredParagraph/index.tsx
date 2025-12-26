type Props = {
  paragraphText: string;
  textColor?: string;
};

export const ColoredParagraph = ({ paragraphText, textColor }: Props) => {
  return <p style={{ color: textColor }}>{paragraphText.toUpperCase()}</p>;
};
