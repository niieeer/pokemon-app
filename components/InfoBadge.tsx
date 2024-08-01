interface InfoBadgeProps {
  label: string;
  value: string | number;
}

const InfoBadge: React.FC<InfoBadgeProps> = ({ label, value }) => (
  <p className="text-lg">
    {label}:
    <span className="ml-1 relative rounded bg-muted px-[0.4rem] py-[0.4rem] font-mono text-lg font-semibold capitalize cursor-pointer">
      {value}
    </span>
  </p>
);

export default InfoBadge;
