import Button from '@/components/Button';

export default function ButtonExample() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="flex gap-10 justify-between">
      <Button
        label="Primary Button"
        onClick={handleClick}
        variant="primary"
      />
      <Button
        label="Secondary Button"
        onClick={handleClick}
        variant="secondary"
      />
      <Button
        label="Disabled Button"
        onClick={handleClick}
        variant="primary"
        disabled
      />
      <Button
        label="Destructive Button"
        onClick={handleClick}
        variant="destructive"
      />
    </div>
  );
}