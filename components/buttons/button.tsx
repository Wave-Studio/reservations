import { ComponentChildren } from "preact";
import CTA from "@/components/buttons/cta.tsx";

const Button = ({
  label,
  icon,
  href,
  onClick,
  small = false,
}: {
  label: string;
  icon: ComponentChildren;
  href?: string;
  onClick?: () => void;
  small?: boolean;
}) => {
  const Wrapper = (props: {
    children: ComponentChildren;
    href?: string;
    onClick?: () => void;
    class: string;
  }) => {
    const { children, href, onClick } = props;

    return href != undefined ? (
      <a {...props} href={href}>
        {children}
      </a>
    ) : (
      <button {...props} onClick={onClick}>
        {children}
      </button>
    );
  };

  return (
    <>
      <div className="relative flex flex-col items-end md:items-center">
        <Wrapper href={href} onClick={onClick} class="peer">
          <CTA
            btnType="secondary"
            btnSize="sm"
            className={`${
              small ? "!w-8 !h-8" : "!w-10"
            } grid place-items-center `}
            label={label}
          >
            {icon}
          </CTA>
        </Wrapper>
        <div className="absolute w-32 bg-white border border-gray-300 rounded-md text-center shadow-xl top-12 select-none scale-95 opacity-0 peer-hover:scale-100 peer-hover:opacity-100 transition z-50">
          {label}
        </div>
      </div>
    </>
  );
};

export default Button;
