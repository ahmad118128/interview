interface partialType {
  className: string;
  isBoolean: boolean;
}

export function Partial({ className }: Partial<partialType>) {
  return <div className={`${className}`}>hi</div>;
}
